"use client";

import type React from "react";
import { ArrowLeft, BookOpen } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  currentStudies,
  StudyIcon,
} from "@/data/currentstudies/currentStudiesData";

gsap.registerPlugin(ScrollTrigger);

export default function CurrentStudiesPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Floating animation for study icons
      gsap.utils.toArray(".study-icon").forEach((icon, index) => {
        // Initial animation - icons appear with scale (removed rotation)
        gsap.from(icon as Element, {
          scale: 0,
          opacity: 0,
          y: 50,
          duration: 1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: icon as Element,
            start: "top 85%",
          },
          delay: index * 0.1,
        });

        // Continuous floating animation (removed rotation)
        gsap.to(icon as Element, {
          y: "random(-8, 8)",
          duration: "random(5, 8)",
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          delay: index * 0.2,
        });

        // Subtle hover scale effect (reduced scale and removed z)
        const iconElement = icon as HTMLElement;
        iconElement.addEventListener("mouseenter", () => {
          gsap.to(icon as Element, {
            scale: 1.02, // Reduced from 1.05 to 1.02
            y: -3, // Slight lift instead of z-axis
            duration: 0.4, // Increased duration for smoother transition
            ease: "power2.out",
          });
        });

        iconElement.addEventListener("mouseleave", () => {
          gsap.to(icon as Element, {
            scale: 1,
            y: 0,
            duration: 0.4,
            ease: "power2.out",
          });
        });
      });

      // Animate progress rings
      gsap.utils.toArray(".progress-ring").forEach((ring) => {
        gsap.from(ring as Element, {
          strokeDashoffset: 2 * Math.PI * 36,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ring as Element,
            start: "top 80%",
          },
        });
      });

      // Title animation
      gsap.from(".page-title", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      });

      // Stats animation
      gsap.from(".study-stat", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        delay: 0.5,
      });

      // Background particles animation (removed rotation)
      gsap.utils.toArray(".particle").forEach((particle) => {
        gsap.to(particle as Element, {
          y: "random(-30, 30)",
          x: "random(-20, 20)",
          opacity: "random(0.3, 0.8)",
          duration: "random(15, 25)",
          ease: "none",
          repeat: -1,
          yoyo: true,
        });
      });
    },
    { scope: containerRef }
  );

  const totalStudies = currentStudies.length;
  const averageProgress = Math.round(
    currentStudies.reduce((acc, study) => acc + study.progress, 0) /
      totalStudies
  );
  const activeStudies = currentStudies.filter(
    (study) => study.status === "active"
  ).length;

  return (
    <main
      ref={containerRef}
      className="bg-zinc-900 min-h-screen relative overflow-hidden"
    >
      {/* Background particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle absolute w-2 h-2 bg-blue-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-10 relative z-10">
        {/* Botón de regresar */}
        <Link
          href="/#about"
          className="inline-flex items-center text-blue-500 hover:text-blue-400 mb-8 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="page-title text-4xl md:text-6xl font-bold mb-6">
            Current{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
              Studies
            </span>
          </h1>
          <p className="text-xl text-zinc-300 max-w-2xl mx-auto mb-8">
            Continuously learning and expanding my skills through focused study
            programs and courses. Here's what I'm currently working on.
          </p>

          {/* Stats */}
          <div className="flex justify-center gap-8 mb-12">
            <div className="study-stat text-center">
              <div className="text-3xl font-bold text-blue-400">
                {totalStudies}
              </div>
              <div className="text-sm text-zinc-400">Active Courses</div>
            </div>
            <div className="study-stat text-center">
              <div className="text-3xl font-bold text-blue-400">
                {averageProgress}%
              </div>
              <div className="text-sm text-zinc-400">Avg Progress</div>
            </div>
            <div className="study-stat text-center">
              <div className="text-3xl font-bold text-blue-400">
                {activeStudies}
              </div>
              <div className="text-sm text-zinc-400">In Progress</div>
            </div>
          </div>
        </div>

        {/* Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {currentStudies.map((study, index) => (
            <StudyIcon key={study.id} study={study} index={index} />
          ))}
        </div>

        {/* Footer */}
        <div className="text-center py-8">
          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-400/20 flex items-center justify-center mx-auto mb-4">
            <BookOpen className="h-8 w-8 text-blue-400" />
          </div>
          <h3 className="text-2xl font-bold mb-4 text-white">
            Learning Never Stops
          </h3>
          <p className="text-zinc-300 max-w-md mx-auto">
            Knowledge is power, and I'm committed to staying at the forefront of
            technology through continuous learning.
          </p>
        </div>
      </div>
    </main>
  );
}
