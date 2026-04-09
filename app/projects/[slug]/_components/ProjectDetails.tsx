"use client";
import parse from "html-react-parser";
import Image from "next/image";
import ArrowAnimation from "@/components/ArrowAnimation";
import TransitionLink from "@/components/TransitionLink";
import { IProject } from "@/types";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { useRef } from "react";

interface Props {
  project: IProject;
}

gsap.registerPlugin(useGSAP, ScrollTrigger);

const ProjectDetails = ({ project }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      gsap.set(".fade-in-later", {
        autoAlpha: 0,
        y: 30,
      });
      const tl = gsap.timeline({
        delay: 0.5,
      });

      tl.to(".fade-in-later", {
        autoAlpha: 1,
        y: 0,
        stagger: 0.1,
      });
    },
    { scope: containerRef },
  );

  useGSAP(
    () => {
      if (window.innerWidth < 992) return;

      gsap.to("#info", {
        filter: "blur(3px)",
        autoAlpha: 0,
        scale: 0.9,
        scrollTrigger: {
          trigger: "#info",
          start: "bottom bottom",
          end: "bottom top",
          pin: true,
          pinSpacing: false,
          scrub: 0.5,
        },
      });
    },
    { scope: containerRef },
  );

  useGSAP(
    () => {
      gsap.utils
        .toArray<HTMLDivElement>("#images > div")
        .forEach((imageDiv, i) => {
          gsap.to(imageDiv, {
            backgroundPosition: "center 0%",
            ease: "none",
            scrollTrigger: {
              trigger: imageDiv,
              start: () => (i ? "top bottom" : "top 50%"),
              end: "bottom top",
              scrub: true,
            },
          });
        });
    },
    { scope: containerRef },
  );

  return (
    <section className="pt-5 pb-14">
      <div className="container" ref={containerRef}>
        <TransitionLink
          back
          href="/"
          className="mb-16 inline-flex gap-2 items-center group h-12"
        >
          <ArrowLeft className="group-hover:-translate-x-1 group-hover:text-primary transition-all duration-300" />
          Back
        </TransitionLink>

        <div className="top-0 min-h-[calc(100svh-100px)] flex" id="info">
          <div className="relative w-full">
            <div className="flex items-start gap-6 mx-auto mb-10 max-w-[635px]">
              <h1 className="fade-in-later opacity-0 text-4xl md:text-[60px] leading-none font-anton overflow-hidden">
                <span className="inline-block">{project.title}</span>
              </h1>

              <div className="fade-in-later opacity-0 flex gap-2">
                {project.sourceCode && (
                  <a
                    href={project.sourceCode}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="hover:text-primary"
                  >
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="hover:text-primary"
                  >
                    <ExternalLink size={30} />
                  </a>
                )}
              </div>
            </div>

            <div className="max-w-[635px] space-y-7 pb-20 mx-auto">
              <div className="fade-in-later">
                <p className="text-muted-foreground font-anton mb-3">Year</p>
                <div className="text-lg">{project.year}</div>
              </div>
              <div className="fade-in-later">
                <p className="text-muted-foreground font-anton mb-3">
                  Tech Stack
                </p>
                <div className="text-lg">{project.techStack.join(", ")}</div>
              </div>
              {project.description && (
                <div className="fade-in-later">
                  <p className="text-muted-foreground font-anton mb-3">
                    Overview
                  </p>
                  <div className="text-lg markdown-text">
                    {parse(project.description)}
                  </div>
                </div>
              )}
              {project.role && (
                <div className="fade-in-later">
                  <p className="text-muted-foreground font-anton mb-3">
                    My Role
                  </p>
                  <div className="text-lg markdown-text">
                    {parse(project.role)}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {project.images.length > 0 && (
          <div className="space-y-8 mt-10" id="images">
            {project.images.map((image, i) => (
              <div
                key={i}
                className="w-full aspect-video relative overflow-hidden rounded-lg"
              >
                <Image
                  src={image}
                  alt={`${project.title} - Screenshot ${i + 1}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
                  className="object-cover object-center"
                  quality={85}
                  loading={i === 0 ? "eager" : "lazy"}
                  priority={i === 0}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectDetails;
