"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useMemo } from "react";

gsap.registerPlugin(useGSAP);

// Reduce particle count for better performance
const PARTICLE_COUNT = 50;

const ParticleBackground = () => {
  const particlesRef = useRef<HTMLDivElement[]>([]);

  // Memoize particles array to prevent recreation
  const particles = useMemo(() => Array(PARTICLE_COUNT).fill(null), []);

  useGSAP(() => {
    particlesRef.current.forEach((particle) => {
      if (!particle) return;

      const randomWidth = Math.random() * 3 + 1;
      const randomHeight = Math.random() * 3 + 1;
      const randomLeftPos = Math.random() * 100;
      const randomTopPos = Math.random() * 100;
      const randomDuration = Math.random() * 10 + 15;
      const randomOpacity = Math.random() * 0.5 + 0.2;

      gsap.set(particle, {
        width: randomWidth,
        height: randomHeight,
        opacity: randomOpacity,
        left: `${randomLeftPos}%`,
        top: `${randomTopPos}%`,
        willChange: "transform, opacity",
      });

      gsap.to(particle, {
        y: window.innerHeight,
        opacity: 0,
        duration: randomDuration,
        repeat: -1,
        ease: "none",
      });
    });
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {particles.map((_, i) => (
        <div
          key={i}
          ref={(el) => {
            if (el) particlesRef.current[i] = el;
          }}
          className="absolute rounded-full bg-white"
          aria-hidden="true"
        />
      ))}
    </div>
  );
};

export default ParticleBackground;
