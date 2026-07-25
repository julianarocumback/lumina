import { useEffect, useRef } from 'react';
import Heroc from './teste.jpeg';

export default function Book() {
  const defaultRotX = -12;
  const defaultRotY = -28;
  const tiltBookRef = useRef(null);
  const bookShadowRef = useRef(null);
  const requestRef = useRef();
  const rotation = useRef({ rotateX: defaultRotX, rotateY: defaultRotY, targetRotateX: defaultRotX, targetRotateY: defaultRotY, scale: 1, targetScale: 1 });

  useEffect(() => {
    const animate = () => {
      rotation.current.rotateX += (rotation.current.targetRotateX - rotation.current.rotateX) * 0.08;
      rotation.current.rotateY += (rotation.current.targetRotateY - rotation.current.rotateY) * 0.08;
      rotation.current.scale += (rotation.current.targetScale - rotation.current.scale) * 0.08;

      if (tiltBookRef.current) {
        tiltBookRef.current.style.transform = `rotateX(${rotation.current.rotateX}deg) rotateY(${rotation.current.rotateY}deg) scale3d(${rotation.current.scale}, ${rotation.current.scale}, ${rotation.current.scale})`;
      }

      if (bookShadowRef.current) {
        const shadowOffsetX = (rotation.current.rotateY * -1.8).toFixed(1);
        const shadowOffsetY = (rotation.current.rotateX * 1.8).toFixed(1);
        bookShadowRef.current.style.transform = `translateZ(calc(var(--book-depth) * -2)) translateX(${shadowOffsetX}px) translateY(${shadowOffsetY}px)`;
        bookShadowRef.current.style.opacity = (0.28 - (rotation.current.scale - 1) * 0.5).toFixed(2);
      }
      requestRef.current = requestAnimationFrame(animate);
    };
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  const handleBookMove = (clientX, clientY) => {
    if (!tiltBookRef.current) return;
    const rect = tiltBookRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    rotation.current.targetRotateX = ((rect.height / 2 - Math.max(0, Math.min(y, rect.height))) / (rect.height / 2)) * 35;
    rotation.current.targetRotateY = ((Math.max(0, Math.min(x, rect.width)) - rect.width / 2) / (rect.width / 2)) * 35;
    rotation.current.targetScale = 1.05;
  };

  const handleMouseLeave = () => {
    rotation.current.targetRotateX = defaultRotX;
    rotation.current.targetRotateY = defaultRotY;
    rotation.current.targetScale = 1;
  };

  return (
    <div className="lg:col-span-5 flex justify-center items-center py-6 book-3d-wrapper col-span-1 pointer-events-auto">
      <div 
        ref={tiltBookRef}
        className="w-[200px] lg:w-[350px] aspect-[1/1.48] relative cursor-grab active:cursor-grabbing book-3d-entity"
        style={{ transform: `rotateX(${defaultRotX}deg) rotateY(${defaultRotY}deg)` }}
        onMouseMove={(e) => handleBookMove(e.clientX, e.clientY)}
        onMouseLeave={handleMouseLeave}
      >
        <div ref={bookShadowRef} className="book-shadow-plane" />
        <div className="book-back-cover" />
        <div className="book-spine-left flex items-center justify-center overflow-hidden">
  <span className="text-yellow-600 font-bold text-xs lg:text-sm rotate-180 whitespace-nowrap" style={{ writingMode: 'vertical-rl' }}>
    BÍBLIA SAGRADA
  </span>
</div>
        <div className="book-pages-right" />
        <div className="book-pages-top" />
        <div className="book-pages-bottom" />
        <div className="book-front-cover">
          <img src={Heroc} alt="Capa" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
}