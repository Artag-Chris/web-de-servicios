"use client";

import type React from "react";
import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Calendar, Rocket } from "lucide-react";
import { timelineEvents } from "./timelineData/timelineEvents";

gsap.registerPlugin(ScrollTrigger);

export default function DeveloperJourneyTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Animate timeline events coming in from alternating sides
      gsap.utils.toArray(".timeline-event").forEach((event, index) => {
        const isEven = index % 2 === 0;

        gsap.from(event as Element, {
          xPercent: isEven ? -100 : 100,
          opacity: 0,
          duration: 1,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: event as Element,
            start: "top center",
            end:'70% center',
            onUpdate:(self)=>{
              gsap.to('.timeline-event',{
                // scaleX:1- self.progress
              })
            }
          },
        });
      });

      // Animate year markers
      gsap.utils.toArray(".year-marker").forEach((marker) => {
        gsap.from(marker as Element, {
          scale: 0,
          opacity: 0,
          duration: 0.8,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: marker as Element,
            start: "top 85%",
          },
        });
      });

      // Animate timeline line progress
      gsap.set(".timeline-line", {
        scaleY: 0,
        transformOrigin: "top top",
      });

      gsap.to(".timeline-line", {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: ".timeline-container",
          start: "top center",
          end: "bottom center",
          scrub: 1, // This makes it respond to scroll in both directions
          onUpdate: (self) => {
            // Additional control for smooth line growth
            gsap.to(".timeline-line", {
              scaleY: self.progress,
              duration: 0.1,
              ease: "none",
            });
          },
        },
      });

      // Optional: Add a glow effect that follows the line progress
      gsap.to(".timeline-glow", {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: ".timeline-container",
          start: "top center",
          end: "bottom center",
          scrub: 1,
          onUpdate: (self) => {
            gsap.to(".timeline-glow", {
              scaleY: self.progress,
              duration: 0.1,
              ease: "none",
            });
          },
        },
      });

      // Animate images with parallax effect
      gsap.utils.toArray(".timeline-image").forEach((image) => {
        gsap.to(image as Element, {
          yPercent: -20,
          ease: "none",
          scrollTrigger: {
            trigger: image as Element,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      });

      // Animate text content
      gsap.utils.toArray(".timeline-content").forEach((content) => {
        gsap.from(content as Element, {
          y: 50,
          opacity: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: content as Element,
            start: "top 75%",
          },
        });
      });

      // Animate category badges
      gsap.utils.toArray(".category-badge").forEach((badge) => {
        gsap.from(badge as Element, {
          scale: 0,
          rotation: 180,
          opacity: 0,
          duration: 0.6,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: badge as Element,
            start: "top 70%",
          },
        });
      });

      // Progress bar animation
      gsap.to(".progress-bar", {
        scaleX: 1,
        transformOrigin: "left left",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="relative py-16 bg-zinc-900 min-h-screen">
      {/* Progress indicator */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-zinc-800 z-50">
        <div className="progress-bar h-full bg-emerald-500 scale-x-0"></div>
      </div>

      {/* Timeline intro */}
      <div className="text-center mb-24 px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
          My Development Journey
        </h2>
        <p className="text-zinc-300 max-w-2xl mx-auto">
          Follow the path of my evolution as a developer, from my first lines of
          code to becoming a professional software engineer. Each milestone
          represents growth, challenges overcome, and skills acquired along the
          way.
        </p>
      </div>

      {/* Timeline container */}
      <div className="timeline-container max-w-6xl mx-auto px-4 relative">
        {/* Main timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-zinc-700/30">
          <div className="timeline-line absolute inset-0 bg-gradient-to-b from-emerald-500 to-emerald-400 scale-y-0"></div>
          <div className="timeline-glow absolute inset-0 bg-gradient-to-b from-emerald-400/50 to-emerald-300/50 scale-y-0 blur-sm"></div>
        </div>

        {/* Timeline events */}
        {timelineEvents.map((event, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={event.id}
              className="timeline-event mb-24 last:mb-0 relative"
            >
              {/* Year marker */}
              <div className="year-marker absolute left-1/2 transform -translate-x-1/2 -translate-y-6 z-20 flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-zinc-800 border-2 border-emerald-500 flex items-center justify-center shadow-lg">
                  <Calendar className="h-5 w-5 text-emerald-500" />
                </div>
                <span className="mt-2 text-emerald-500 font-bold bg-zinc-900 px-2 py-1 rounded text-sm">
                  {event.year}
                </span>
              </div>

              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                  isEven ? "" : "lg:grid-flow-col-dense"
                }`}
              >
                {/* Content side */}
                <div
                  className={`timeline-content ${
                    isEven ? "lg:pr-16" : "lg:pl-16 lg:col-start-2"
                  }`}
                >
                  <div className="bg-zinc-800/50 backdrop-blur-sm p-6 rounded-xl border border-zinc-700 shadow-xl">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                        {event.icon}
                      </div>
                      <h3 className="text-xl font-bold text-white">
                        {event.title}
                      </h3>
                    </div>
                    <p className="text-zinc-300 mb-4">{event.description}</p>
                    <div
                      className={`category-badge inline-block px-3 py-1 rounded-full text-xs font-medium ${
                        event.category === "education"
                          ? "bg-blue-500/20 text-blue-300"
                          : event.category === "work"
                          ? "bg-purple-500/20 text-purple-300"
                          : event.category === "project"
                          ? "bg-amber-500/20 text-amber-300"
                          : "bg-emerald-500/20 text-emerald-300"
                      }`}
                    >
                      {event.category.charAt(0).toUpperCase() +
                        event.category.slice(1)}
                    </div>
                  </div>
                </div>

                {/* Image side */}
                <div
                  className={`${
                    isEven ? "lg:pl-16" : "lg:pr-16 lg:col-start-1"
                  }`}
                >
                  <div className="timeline-image relative h-64 lg:h-80 overflow-hidden rounded-xl shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-transparent z-10 rounded-xl"></div>
                    <Image
                      src={event.imageUrl || "/placeholder.svg"}
                      alt={event.imageAlt}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-110"
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Timeline conclusion */}
      <div className="text-center mt-24 max-w-2xl mx-auto px-4">
        <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-6">
          <Rocket className="h-8 w-8 text-emerald-500" />
        </div>
        <h3 className="text-2xl font-bold mb-4 text-white">
          The Journey Continues...
        </h3>
        <p className="text-zinc-300">
          This timeline represents my journey so far, but the story is still
          being written. I'm constantly learning, growing, and seeking new
          challenges to expand my skills and make a positive impact.
        </p>
      </div>
    </div>
  );
}
