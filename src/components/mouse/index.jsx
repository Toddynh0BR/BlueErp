// MouseFollower.js
import React, { useEffect, useRef, useState } from 'react';
import { Mouser } from './style';

const MouseFollower = () => {
    const followerRef = useRef(null);
    const [isPointer, setIsPointer] = useState(false);
    const [isMouseDevice, setIsMouseDevice] = useState(true);

    useEffect(() => {
        // Verifica se o dispositivo tem um ponteiro fino (como um mouse)
        const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
        setIsMouseDevice(hasFinePointer);

        // Se não for um dispositivo com mouse, não configura os ouvintes de evento
        if (!hasFinePointer) return;

        const handleMouseMove = (event) => {
            if (followerRef.current) {
                const x = event.pageX - followerRef.current.offsetWidth / 2;
                const y = event.pageY - followerRef.current.offsetHeight / 2;
                followerRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
            }
        };

        const handleMouseEnter = () => {
            setIsPointer(true);
        };

        const handleMouseLeave = () => {
            setIsPointer(false);
        };

        // Adiciona o ouvinte de eventos
        window.addEventListener('mousemove', handleMouseMove);

        // Seleciona os elementos e adiciona ouvintes
        const clickableElements = document.querySelectorAll('a, button, .pointer-area');
        clickableElements.forEach((el) => {
            el.addEventListener('mouseenter', handleMouseEnter);
            el.addEventListener('mouseleave', handleMouseLeave);
        });

        // Limpa o ouvinte de eventos ao desmontar o componente
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            clickableElements.forEach((el) => {
                el.removeEventListener('mouseenter', handleMouseEnter);
                el.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    }, []);

    // Retorna null se o dispositivo não tiver um ponteiro fino (como em dispositivos móveis)
    if (!isMouseDevice) return null;

    return <Mouser ref={followerRef} data-cursor={isPointer} />;
};

export default MouseFollower;
