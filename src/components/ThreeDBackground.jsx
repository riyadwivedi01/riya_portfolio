
// // 3D Background Component
// import React, { useRef, useEffect } from "react"; 
// const ThreeDBackground = () => {
//     const mountRef = useRef(null);

//     useEffect(() => {
//         const initThree = () => {
//             const THREE = window.THREE;
//             const mount = mountRef.current;
            
//             const scene = new THREE.Scene();
//             const camera = new THREE.PerspectiveCamera(75, mount.clientWidth / mount.clientHeight, 0.1, 1000);
//             camera.position.z = 5;
            
//             const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
//             renderer.setSize(mount.clientWidth, mount.clientHeight);
//             renderer.setPixelRatio(window.devicePixelRatio);
//             mount.appendChild(renderer.domElement);

//             const planeGeometry = new THREE.PlaneGeometry(20, 20, 50, 50);
//             const planeMaterial = new THREE.MeshBasicMaterial({
//                 color: 0x3a0ca3,
//                 wireframe: true
//             });
//             const plane = new THREE.Mesh(planeGeometry, planeMaterial);
//             plane.rotation.x = -Math.PI / 3;
//             scene.add(plane);
            
//             const originalPositions = plane.geometry.attributes.position.clone();

//             let mouse = new THREE.Vector2();
//             const onMouseMove = (event) => {
//                 mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
//                 mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
//             };
//             window.addEventListener('mousemove', onMouseMove);

//             const clock = new THREE.Clock();

//             const animate = () => {
//                 requestAnimationFrame(animate);
//                 const elapsedTime = clock.getElapsedTime();
                
//                 const positions = plane.geometry.attributes.position.array;
                
//                 for (let i = 0; i < positions.length; i += 3) {
//                     const x = originalPositions.array[i];
//                     const y = originalPositions.array[i + 1];

//                     // Wave animation
//                     const waveX = Math.sin(x * 0.5 + elapsedTime) * 0.2;
//                     const waveY = Math.sin(y * 0.5 + elapsedTime) * 0.2;

//                     // Mouse interaction
//                     const mouseDistance = Math.sqrt(Math.pow(x - (mouse.x * 10), 2) + Math.pow(y - (mouse.y * 10), 2));
//                     const mouseEffect = Math.max(0, 1 - mouseDistance / 5) * 0.5;

//                     positions[i + 2] = waveX + waveY + mouseEffect;
//                 }
                
//                 plane.geometry.attributes.position.needsUpdate = true;
                
//                 renderer.render(scene, camera);
//             };
//             animate();

//             const onResize = () => {
//                 camera.aspect = mount.clientWidth / mount.clientHeight;
//                 camera.updateProjectionMatrix();
//                 renderer.setSize(mount.clientWidth, mount.clientHeight);
//             };
//             window.addEventListener('resize', onResize);

//             return () => {
//                 window.removeEventListener('resize', onResize);
//                 window.removeEventListener('mousemove', onMouseMove);
//                 if (mount && renderer.domElement) {
//                     mount.removeChild(renderer.domElement);
//                 }
//             };
//         };

//         let cleanupFunc = () => {};
//         if (window.THREE) {
//             cleanupFunc = initThree();
//         } else {
//             const script = document.createElement('script');
//             script.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js";
//             script.async = true;
//             script.onload = () => {
//                 cleanupFunc = initThree();
//             };
//             document.body.appendChild(script);
//         }

//         return () => {
//             if (typeof cleanupFunc === 'function') {
//                 cleanupFunc();
//             }
//         };
//     }, []);

//     return <div ref={mountRef} className="hero-3d-bg" />;
// };
// export default ThreeDBackground;

// 3D Background Component
import React, { useRef, useEffect } from "react";

const ThreeDBackground = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        const initThree = () => {
            const THREE = window.THREE;
            const mount = mountRef.current;
            
            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(75, mount.clientWidth / mount.clientHeight, 0.1, 1000);
            camera.position.z = 10;
            
            const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
            renderer.setSize(mount.clientWidth, mount.clientHeight);
            renderer.setPixelRatio(window.devicePixelRatio);
            mount.appendChild(renderer.domElement);

            const crystals = new THREE.Group();
            const crystalGeometry = [
                new THREE.TetrahedronGeometry(1, 0),
                new THREE.OctahedronGeometry(1, 0),
                new THREE.IcosahedronGeometry(1, 0),
            ];

            for (let i = 0; i < 50; i++) {
                const geometry = crystalGeometry[Math.floor(Math.random() * crystalGeometry.length)];
                const material = new THREE.MeshNormalMaterial({ wireframe: true });
                const crystal = new THREE.Mesh(geometry, material);
                crystal.position.set(
                    (Math.random() - 0.5) * 20,
                    (Math.random() - 0.5) * 20,
                    (Math.random() - 0.5) * 20
                );
                crystal.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
                crystal.scale.setScalar(Math.random() * 0.5 + 0.2);
                crystals.add(crystal);
            }
            scene.add(crystals);
            

            let mouse = new THREE.Vector2();
            const onMouseMove = (event) => {
                mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
                mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
            };
            window.addEventListener('mousemove', onMouseMove);

            const clock = new THREE.Clock();

            const animate = () => {
                requestAnimationFrame(animate);
                const elapsedTime = clock.getElapsedTime();
                
                crystals.rotation.y = elapsedTime * 0.1;
                crystals.rotation.x = elapsedTime * 0.05;

                camera.position.x += (mouse.x * 2 - camera.position.x) * 0.02;
                camera.position.y += (-mouse.y * 2 - camera.position.y) * 0.02;
                camera.lookAt(scene.position);
                
                renderer.render(scene, camera);
            };
            animate();

            const onResize = () => {
                camera.aspect = mount.clientWidth / mount.clientHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(mount.clientWidth, mount.clientHeight);
            };
            window.addEventListener('resize', onResize);

            return () => {
                window.removeEventListener('resize', onResize);
                window.removeEventListener('mousemove', onMouseMove);
                if (mount && renderer.domElement) {
                    mount.removeChild(renderer.domElement);
                }
            };
        };

        let cleanupFunc = () => {};
        if (window.THREE) {
            cleanupFunc = initThree();
        } else {
            const script = document.createElement('script');
            script.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js";
            script.async = true;
            script.onload = () => {
                cleanupFunc = initThree();
            };
            document.body.appendChild(script);
        }

        return () => {
            if (typeof cleanupFunc === 'function') {
                cleanupFunc();
            }
        };
    }, []);

    return <div ref={mountRef} className="hero-3d-bg" />;
};
export default ThreeDBackground;