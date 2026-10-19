import React, { useEffect, useRef } from 'react';

export const CursorGlow = () => {
  const glowRef = useRef(null);

  useEffect(() => {
    const el = glowRef.current;
    if (!el || !window.matchMedia('(pointer: fine)').matches) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let currentX = mouseX;
    let currentY = mouseY;
    let animId;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      currentX += (mouseX - currentX) * 0.12;
      currentY += (mouseY - currentY) * 0.12;
      el.style.left = `${currentX}px`;
      el.style.top = `${currentY}px`;
      animId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMouseMove);
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return <div className="cursor-glow" id="cursor-glow" ref={glowRef} />;
};
