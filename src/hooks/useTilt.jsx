import React, { useRef, useEffect } from 'react';

export const useTilt = (max = 12, scale = 1.03) => {
  const ref = useRef(null);

  useEffect(() => {
    const card = ref.current;
    if (!card) return;

    let glare = card.querySelector('.tilt-glare');
    if (!glare) {
      glare = document.createElement('div');
      glare.className = 'tilt-glare';
      card.appendChild(glare);
    }

    let bounds;

    const onMouseEnter = () => {
      bounds = card.getBoundingClientRect();
    };

    const onMouseMove = (e) => {
      if (!bounds) bounds = card.getBoundingClientRect();
      const x = e.clientX - bounds.left;
      const y = e.clientY - bounds.top;

      const centerX = bounds.width / 2;
      const centerY = bounds.height / 2;

      const deltaX = (x - centerX) / centerX;
      const deltaY = (y - centerY) / centerY;

      const rotateX = (-deltaY * max).toFixed(2);
      const rotateY = (deltaX * max).toFixed(2);

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`;

      glare.style.opacity = '1';
      glare.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255, 255, 255, 0.22), transparent 60%)`;
    };

    const onMouseLeave = () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
      glare.style.opacity = '0';
    };

    card.addEventListener('mouseenter', onMouseEnter);
    card.addEventListener('mousemove', onMouseMove);
    card.addEventListener('mouseleave', onMouseLeave);

    return () => {
      card.removeEventListener('mouseenter', onMouseEnter);
      card.removeEventListener('mousemove', onMouseMove);
      card.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [max, scale]);

  return ref;
};

export const TiltContainer = ({ children, className = '', max = 12, scale = 1.03, as: Component = 'div', ...props }) => {
  const tiltRef = useTilt(max, scale);
  return (
    <Component ref={tiltRef} className={className} {...props}>
      {children}
    </Component>
  );
};
