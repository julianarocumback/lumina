import { useEffect, useRef } from 'react';
import { motion} from 'framer-motion'
import HeroContent from "./heroContent/HeroCotent";
import Cuidado from './o_cuidado_do_corpo.jpg';
import Heroc from './hero.jpeg'

export default function Hero() {
  // Configurações físicas e visuais fixas do componente
  const color1 = '#3a86ff';
  const color2 = '#8338ec';
  const color3 = '#06d6a0';
  const color4 = '#ffd166';
  const color5 = '#f77f00';
  const color6 = '#ef476f';
  
  const magnetStrength = 15;
  const speed = 1.5;
  const bookDepth = 20;
  const coverOverhang = 10;
  const spineRadius = 0;

  // Ângulos padrão em repouso para o livro iniciar inclinado exibindo o volume 3D
  const defaultRotX = -12;
  const defaultRotY = -28;

  const tiltBookRef = useRef(null);
  const bookShadowRef = useRef(null);
  const requestRef = useRef();

  const coords = useRef({ mouseX: 50, mouseY: 50, targetX: 50, targetY: 50 });
  const rotation = useRef({ 
    rotateX: defaultRotX, 
    rotateY: defaultRotY, 
    targetRotateX: defaultRotX, 
    targetRotateY: defaultRotY, 
    scale: 1, 
    targetScale: 1 
  });

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--c-blue', color1);
    root.style.setProperty('--c-purple', color2);
    root.style.setProperty('--c-green', color3);
    root.style.setProperty('--c-yellow', color4);
    root.style.setProperty('--c-orange', color5);
    root.style.setProperty('--c-red', color6);
    root.style.setProperty('--speed-ratio', speed);
    root.style.setProperty('--book-depth', `${bookDepth}px`);
    root.style.setProperty('--cover-overhang', `${coverOverhang}px`);
    root.style.setProperty('--spine-radius', `${spineRadius}px`);
    root.style.setProperty('--anim-state', 'running');

    const animate = () => {
      // Efeito magnético de fundo
      coords.current.mouseX += (coords.current.targetX - coords.current.mouseX) * 0.05;
      coords.current.mouseY += (coords.current.targetY - coords.current.mouseY) * 0.05;
      const offsetPercentX = ((coords.current.mouseX - 50) * (magnetStrength / 100)).toFixed(2);
      const offsetPercentY = ((coords.current.mouseY - 50) * (magnetStrength / 100)).toFixed(2);
      root.style.setProperty('--mouse-offset-x', `${offsetPercentX}%`);
      root.style.setProperty('--mouse-offset-y', `${offsetPercentY}%`);

      // Giro dinâmico amortecido do Livro
      rotation.current.rotateX += (rotation.current.targetRotateX - rotation.current.rotateX) * 0.08;
      rotation.current.rotateY += (rotation.current.targetRotateY - rotation.current.rotateY) * 0.08;
      rotation.current.scale += (rotation.current.targetScale - rotation.current.scale) * 0.08;

      if (tiltBookRef.current) {
        tiltBookRef.current.style.transform = `rotateX(${rotation.current.rotateX}deg) rotateY(${rotation.current.rotateY}deg) scale3d(${rotation.current.scale}, ${rotation.current.scale}, ${rotation.current.scale})`;
      }

      if (bookShadowRef.current) {
        const shadowOffsetX = (rotation.current.rotateY * -1.8).toFixed(1);
        const shadowOffsetY = (rotation.current.rotateX * 1.8).toFixed(1);
        const shadowBlur = (28 + (rotation.current.scale - 1) * 60).toFixed(1);
        const shadowOpacity = (0.28 - (rotation.current.scale - 1) * 0.5).toFixed(2);

        bookShadowRef.current.style.transform = `translateZ(calc(var(--book-depth) * -2)) translateX(${shadowOffsetX}px) translateY(${shadowOffsetY}px)`;
        bookShadowRef.current.style.filter = `blur(${shadowBlur}px)`;
        bookShadowRef.current.style.opacity = shadowOpacity;
      }

      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  useEffect(() => {
    const handleMouseMoveGlobal = (e) => {
      coords.current.targetX = (e.clientX / window.innerWidth) * 100;
      coords.current.targetY = (e.clientY / window.innerHeight) * 100;
    };
    window.addEventListener('mousemove', handleMouseMoveGlobal);
    return () => window.removeEventListener('mousemove', handleMouseMoveGlobal);
  }, []);

  const handleBookMove = (clientX, clientY) => {
    if (!tiltBookRef.current) return;
    const rect = tiltBookRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    const xc = rect.width / 2;
    const yc = rect.height / 2;

    rotation.current.targetRotateX = ((yc - Math.max(0, Math.min(y, rect.height))) / yc) * 35;
    rotation.current.targetRotateY = ((Math.max(0, Math.min(x, rect.width)) - xc) / xc) * 35;
    rotation.current.targetScale = 1.05;
  };

  const handleMouseLeave = () => {
    rotation.current.targetRotateX = defaultRotX;
    rotation.current.targetRotateY = defaultRotY;
    rotation.current.targetScale = 1;
  };

  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.7}} className="w-full h-screen relative overflow-hidden flex flex-col bg-[#f0f2f5] font-sans antialiased text-slate-900">
      
      {/* Background Activo */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="prisma-light-mesh absolute inset-0" />
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
      </div>

      {/* Conteúdo da Hero */}
      <main className="flex-1 h-full flex flex-col justify-between px-10 md:p-12 z-10 relative lg:mx-auto lg:mt-40  lg:overflow-y-visible select-none">
  
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-10 lg:pt-0 items-center w-full max-w-7xl">
          
          {/* CONTEÚDO (TEXTO) */}
          <div className="lg:col-start-1 lg:col-span-7 col-span-1 pointer-events-auto">
            <HeroContent />
          </div>

          {/* LIVRO 3D INTERATIVO */}
          <div className="lg:col-span-5 flex justify-center items-center py-6 book-3d-wrapper col-span-1 pointer-events-auto">
            <div 
              ref={tiltBookRef}
              className="w-full max-w-[200px] lg:max-w-[350px] aspect-[1/1.48] relative cursor-grab active:cursor-grabbing book-3d-entity"
              style={{ transform: `rotateX(${defaultRotX}deg) rotateY(${defaultRotY}deg) scale3d(1, 1, 1)` }}
              onMouseMove={(e) => handleBookMove(e.clientX, e.clientY)}
              onMouseLeave={handleMouseLeave}
              onTouchStart={(e) => {
                rotation.current.targetScale = 1.05;
                if (e.touches.length > 0) handleBookMove(e.touches[0].clientX, e.touches[0].clientY);
              }}
              onTouchMove={(e) => {
                if (e.touches.length > 0) handleBookMove(e.touches[0].clientX, e.touches[0].clientY);
              }}
              onTouchEnd={handleMouseLeave}
              onTouchCancel={handleMouseLeave}
            >
              {/* Plano de Sombra Projetada Traseira */}
              <div ref={bookShadowRef} className="book-shadow-plane" />
              
              {/* Capa Traseira */}
              <div className="book-back-cover" />
              
              {/* LOMBADA DO LIVRO (COSTAS) SÓLIDA */}
              <div className="book-spine-left absolute overflow-hidden">
                <div className="absolute inset-y-0 left-1/4 w-1/3 bg-black pointer-events-none"></div>
                <span className="text-[7.5px] font-bold tracking-[0.25em] text-white uppercase whitespace-nowrap absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90" style={{ filter: 'drop-shadow(0 0.5px 1px rgba(0,0,0,0.1))' }}>
                  Bíblia Sagrada
                </span>
              </div>

              {/* LATERAIS DE PÁGINAS ARREDONDADAS E FÍSICAS */}
              <div className="book-pages-right" />
              <div className="book-pages-top" />
              <div className="book-pages-bottom" />

              {/* Capa Frontal (Efeito Vidro / Prisma Refratário) */}
              <div className="book-front-cover p-8 flex flex-col justify-between overflow-hidden">
                
                {/* Folha de Guarda Interna */}
                <div className="absolute inset-0 bg-[#faf8f5]  z-0 overflow-hidden pointer-events-none">
                  <img className="absolute inset-0 w-full h-full object-cover opacity-90 mix-blend-multiply" src={Heroc} alt="" />
                </div>

                {/* Vinco da Lombada do Livro (Canaleta) */}
                <div className="book-spine-groove"></div>

              </div>

            </div>
          </div>
        </div>

      </main>
    </motion.div>
  );
}