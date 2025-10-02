// Custom Cursor Component
import React, { useState, useEffect } from "react";
import { motion } from 'framer-motion';
const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const moveMouse = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };
        
        const handleMouseDown = () => setIsHovering(true);
        const handleMouseUp = () => setIsHovering(false);

        window.addEventListener('mousemove', moveMouse);
        document.body.addEventListener('mousedown', handleMouseDown);
        document.body.addEventListener('mouseup', handleMouseUp);
        
        const interactiveElements = document.querySelectorAll('a, button, input, textarea');
        
        const enterHover = () => setIsHovering(true);
        const leaveHover = () => setIsHovering(false);

        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', enterHover);
            el.addEventListener('mouseleave', leaveHover);
        });

        return () => {
            window.removeEventListener('mousemove', moveMouse);
            document.body.removeEventListener('mousedown', handleMouseDown);
            document.body.removeEventListener('mouseup', handleMouseUp);
            interactiveElements.forEach(el => {
                el.removeEventListener('mouseenter', enterHover);
                el.removeEventListener('mouseleave', leaveHover);
            });
        };
    }, []);

    const cursorVariants = {
        default: {
            width: 25,
            height: 25,
            border: '2px solid #c4b5fd',
            backgroundColor: 'transparent',
            transition: { type: 'spring', stiffness: 500, damping: 30 }
        },
        hover: {
            width: 45,
            height: 45,
            backgroundColor: '#c4b5fd',
            opacity: 0.5,
            transition: { type: 'spring', stiffness: 300, damping: 20 }
        }
    };

    return (
        <motion.div
            className="custom-cursor"
            style={{ x: position.x - 16, y: position.y - 16 }}
            variants={cursorVariants}
            animate={isHovering ? "hover" : "default"}
        />
    );
};
export default CustomCursor;