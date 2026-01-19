"use client";

import React from 'react';
import AnoAI from "@/components/ui/animated-shader-background";
import GradientMenu from "@/components/ui/gradient-menu";
import { ShinyButton } from "@/components/ui/shiny-button";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden text-white font-sans selection:bg-purple-500/30">
      {/* Background Shader */}
      <div className="fixed inset-0 z-0">
        <AnoAI />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 right-0 w-full z-50 px-6 py-4 flex justify-end items-center pointer-events-none">
        <div className="pointer-events-auto">
          <GradientMenu />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-4">
        {/* Floating Logo */}
        <div className="mb-8 animate-[float_6s_ease-in-out_infinite]">
          <img
            src="https://hytale.com/static/images/logo.png"
            alt="Hytale Logo"
            className="w-64 md:w-80 lg:w-96 drop-shadow-[0_0_15px_rgba(0,0,0,0.5)]"
          />
        </div>

        {/* Main Text */}
        <h1 className="text-3xl md:text-5xl font-serif font-bold tracking-wide mb-8 drop-shadow-lg uppercase text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400">
          HYTALE CRACKED IS AVAILABLE NOW!
        </h1>

        {/* CTA Button */}
        <div className="relative z-20">
          <ShinyButton href="/downloads" className="text-white text-lg font-bold tracking-wide">
            DOWNLOAD
          </ShinyButton>
        </div>
      </section>

      {/* What is Hytale Section */}
      <section className="relative z-10 py-20 px-6 bg-black/40 backdrop-blur-sm border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center">

          {/* Text Content */}
          <div className="flex-1 space-y-6 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-500">
              WHAT IS HYTALE?
            </h2>
            <div className="w-16 h-1 bg-yellow-500/50 mx-auto md:mx-0 rounded-full" />
            <p className="text-gray-300 text-lg leading-relaxed">
              Embark on a journey of adventure and creativity. Hytale combines the scope of a sandbox with the depth of a roleplaying game, immersing players in a procedurally generated world where teetering towers and deep dungeons promise rich rewards.
            </p>
          </div>

          {/* Trailer Area */}
          <div className="flex-1 w-full max-w-xl">
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl border border-white/10 group cursor-pointer bg-black">
              {/* Embed YouTube Trailer */}
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/o77MzDQT1cg?si=Is_zDbfQz3S"
                title="Hytale Trailer"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              ></iframe>
            </div>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-8 text-center text-white/40 text-sm bg-black/80">
        <p>© 2026 Hytale Cracked Project. Not affiliated with Hypixel Studios.</p>
      </footer>
    </main>
  );
}
