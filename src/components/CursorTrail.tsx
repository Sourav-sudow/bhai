import { useEffect } from 'react';
import './styles/CursorTrail.css';

const CursorTrail = () => {
  useEffect(() => {
    const dots: HTMLDivElement[] = [];
    const maxDots = 15;  // Increased number of dots

    // Create dots
    for (let i = 0; i < maxDots; i++) {
      const dot = document.createElement('div');
      dot.className = 'cursor-trail-dot';
      document.body.appendChild(dot);
      dots.push(dot);
    }

    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;

    // Update mouse position
    const updateMousePosition = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    // Animate dots
    const animateDots = () => {
      // Smooth follow effect with dynamic speed
      const speed = 0.15;  // Increased speed for smoother follow
      currentX += (mouseX - currentX) * speed;
      currentY += (mouseY - currentY) * speed;

      // Update each dot's position with dynamic delay and effects
      dots.forEach((dot, index) => {
        const nextDot = dots[index + 1] || dots[0];
        
        // Calculate position with sine wave effect
        const time = Date.now() * 0.001;
        const waveX = Math.sin(time + index * 0.3) * 2;
        const waveY = Math.cos(time + index * 0.3) * 2;
        
        const targetX = index === 0 ? currentX : parseFloat(nextDot.style.left) + waveX;
        const targetY = index === 0 ? currentY : parseFloat(nextDot.style.top) + waveY;
        
        dot.style.left = `${targetX}px`;
        dot.style.top = `${targetY}px`;
        
        // Dynamic scale and rotation effect
        const scale = 1 - (index * 0.06);
        const rotate = index * 12;  // Add rotation effect
        dot.style.transform = `scale(${scale}) rotate(${rotate}deg)`;
        
        // Dynamic opacity with pulse effect
        const baseOpacity = 1 - (index * 0.07);
        const pulseOpacity = Math.sin(time * 3 + index * 0.5) * 0.1;
        dot.style.opacity = Math.max(0, (baseOpacity + pulseOpacity)).toString();
      });

      requestAnimationFrame(animateDots);
    };

    document.addEventListener('mousemove', updateMousePosition);
    animateDots();

    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
      dots.forEach(dot => dot.remove());
    };
  }, []);

  return null;
};

export default CursorTrail; 