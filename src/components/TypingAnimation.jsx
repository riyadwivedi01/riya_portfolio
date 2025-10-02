// Typing Animation Component
import React, { useState, useEffect } from "react";

const TypingAnimation = ({ roles }) => {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const typeSpeed = 150;
    const deleteSpeed = 100;
    const delay = 1500;

    useEffect(() => {
        const handleTyping = () => {
            const i = loopNum % roles.length;
            const fullText = roles[i];

            if (isDeleting) {
                setText(fullText.substring(0, text.length - 1));
            } else {
                setText(fullText.substring(0, text.length + 1));
            }

            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), delay);
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const timer = setTimeout(handleTyping, isDeleting ? deleteSpeed : typeSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, roles, delay]);

    return (
        <p className="hero-dynamic-text">
            I am a <span className="typed-text">{text}</span>
            <span className="cursor">|</span>
        </p>
    );
};
export default TypingAnimation;