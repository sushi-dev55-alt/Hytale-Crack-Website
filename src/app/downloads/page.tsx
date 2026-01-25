"use client";

import React, { useState } from "react";
import EnergyBeam from "@/components/ui/energy-beam";
import { DownloadButton } from "@/components/ui/download-button";
import { AnimatedCircularProgressBar } from "@/components/ui/animated-circular-progress-bar";
import {
    ArrowLeft, Sparkles, Users, Code2, Zap, ArrowRight, Shield,
    ChevronDown, X as CloseIcon, Fingerprint, Download
} from "lucide-react";

export default function DownloadsPage() {
    const [modalOpen, setModalOpen] = useState(false);
    const [downloadProgressOpen, setDownloadProgressOpen] = useState(false);
    const [downloadProgress, setDownloadProgress] = useState(0);

    const execData: any = {
        hytale: {
            name: "Hytale Cracked",
            ver: "1.0.0",
            file: "Hytale_Cracked_v1.0.0.zip",
            img: "https://hytale.com/static/images/logo.png",
            downloadUrl: "https://mega.nz/file/SpAR0AaK#cMZat9VcR8YSUlF7TWO42U_1cqHdPJcMPZHK8g17zGE"
        }
    };

    const handleDownloadClick = () => {
        // Open the Download Progress Modal logic directly as requested,
        // or open the Install Steps modal first?
        // The prompt says: "When the user clicks the button on the Downloads Page, do not open the link immediately. Show the Animated Circular Progress Bar in a modal or overlay."
        // I'll replace the old "Install Steps" flow or integrate it. 
        // Let's make "Download Now" button trigger the progress bar directly for simplicity and adherence to prompt.
        setDownloadProgressOpen(true);
        startMegaDownload();
    };

    const startMegaDownload = () => {
        setDownloadProgress(0);
        let progress = 0;
        const interval = setInterval(() => {
            progress += Math.random() * 15; // Random increment
            if (progress > 100) progress = 100;
            setDownloadProgress(progress);
            if (progress >= 100) {
                clearInterval(interval);
                setTimeout(() => {
                    window.open("https://mega.nz/file/n9R0hZ7R#rXX3wcq7FxN1XxFATP-6KbolmLwxV8tqQI4NCSIsQAs", "_blank");
                }, 1000);
            }
        }, 300);
    };

    return (
        <div className="relative min-h-screen bg-neutral-950 text-white selection:bg-white/20 font-sans">
            {/* Background Wrapper */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <EnergyBeam className="w-full h-full opacity-60" />
            </div>

            <style jsx global>{`
        .bg-tile { background-image: linear-gradient(180deg, rgba(255,255,255,0.05), rgba(0,0,0,0.08)); }
        .bg-panel { background-image: linear-gradient(180deg, rgba(255,255,255,0.04), rgba(0,0,0,0.2)); }
        .shadow-innerglass { box-shadow: inset 0 1px 0 rgba(255,255,255,0.06); }
      `}</style>

            <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/50 backdrop-blur">
                <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
                    <a href="/" className="group relative inline-flex items-center gap-2 font-semibold text-white transition-transform hover:-translate-y-0.5">
                        <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-0.5" />
                        <span className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">Back to Home</span>
                        <span className="pointer-events-none absolute -bottom-1 left-0 h-px w-0 bg-white/70 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                    <div className="group relative flex items-center gap-2 font-semibold text-white">
                        <Sparkles className="h-5 w-5 transition-transform group-hover:rotate-6" />
                        <span className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">Hytale Hub</span>
                    </div>
                </div>
            </header>

            <main className="relative z-10">
                <section className="mx-auto max-w-6xl px-4 pt-12">
                    <h1 className="mb-2 text-center text-4xl font-bold tracking-tight">Download</h1>
                    <p className="mx-auto mb-8 max-w-xl text-center text-zinc-400">Get the latest cracked version below</p>

                    <div className="rounded-3xl border border-white/10 bg-panel p-3 shadow-[0_0_60px_rgba(255,255,255,0.04)]">
                        <div className="rounded-2xl border border-white/10 p-6 md:p-8">
                            <div className="grid gap-6 md:grid-cols-[1fr,420px]">
                                <div>
                                    <div className="mb-6 flex items-center gap-4">
                                        <img src="https://hytale.com/static/images/logo.png"
                                            alt="Hytale icon" className="h-16 w-auto object-contain" />
                                        <div>
                                            <h3 className="text-2xl font-semibold">Hytale <span className="text-zinc-400">1.0.0</span></h3>
                                            <div className="mt-1 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-zinc-300 shadow-innerglass">
                                                <Sparkles className="h-3.5 w-3.5" /> Latest Release
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                        <div className="rounded-2xl border border-white/10 bg-tile p-5 transition hover:-translate-y-0.5 hover:border-white/20">
                                            <div className="mb-2 flex items-center gap-2 text-white">
                                                <Users className="h-4 w-4" /> <span className="font-medium">Multiplayer</span>
                                            </div>
                                            <p className="text-sm text-zinc-400">Play with friends</p>
                                        </div>
                                        <div className="rounded-2xl border border-white/10 bg-tile p-5 transition hover:-translate-y-0.5 hover:border-white/20">
                                            <div className="mb-2 flex items-center gap-2 text-white">
                                                <Code2 className="h-4 w-4" /> <span className="font-medium">Modding</span>
                                            </div>
                                            <p className="text-sm text-zinc-400">Full mod support</p>
                                        </div>
                                        <div className="rounded-2xl border border-white/10 bg-tile p-5 transition hover:-translate-y-0.5 hover:border-white/20">
                                            <div className="mb-2 flex items-center gap-2 text-white">
                                                <Zap className="h-4 w-4" /> <span className="font-medium">Performance</span>
                                            </div>
                                            <p className="text-sm text-zinc-400">Optimized client</p>
                                        </div>
                                    </div>

                                    {/* Replaced Button */}
                                    <div className="flex justify-start">
                                        <DownloadButton onClick={handleDownloadClick} />
                                    </div>
                                </div>

                                <aside className="rounded-2xl border border-white/10 bg-white/[0.05] p-4 md:p-5">
                                    <div className="mb-3 flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <Sparkles className="h-4 w-4" />
                                            <span className="font-semibold">Latest Updates</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Shield className="h-4 w-4 text-zinc-400" />
                                            <ChevronDown className="h-4 w-4 text-zinc-400" />
                                        </div>
                                    </div>
                                    <div className="h-64 space-y-3 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-white/10">
                                        <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-sm text-zinc-300">Initial Release v1.0.0</div>
                                        <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-sm text-zinc-300">Server browser fixed</div>
                                        <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-sm text-zinc-300">Skin editor enabled</div>
                                        <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-sm text-zinc-300">Performance tuning</div>
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </div>

                    <p className="mt-8 text-center text-zinc-400">More updates coming soon</p>
                </section>
            </main>

            <footer className="relative z-10 border-t border-white/10 mt-12 bg-black/80">
                <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 md:flex-row">
                    <p className="text-sm text-zinc-500">© 2026 Hytale Hub. All rights reserved.</p>
                    <div className="flex gap-4 text-sm">
                        <a href="/" className="text-zinc-400 transition hover:text-white">Home</a>
                        <a href="#" className="text-zinc-400 transition hover:text-white">Privacy</a>
                        <a href="#" className="text-zinc-400 transition hover:text-white">Terms</a>
                    </div>
                </div>
            </footer>

            {/* Download Progress Modal */}
            {downloadProgressOpen && (
                <div className="fixed inset-0 z-[100] grid place-items-center px-4">
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />
                    <div className="relative z-10 flex flex-col items-center justify-center space-y-6 p-8 rounded-3xl bg-neutral-900 border border-white/10 shadow-[0_0_50px_rgba(79,70,229,0.2)]">
                        <h2 className="text-2xl font-bold text-white tracking-wide">Preparing Download...</h2>

                        <AnimatedCircularProgressBar
                            max={100}
                            min={0}
                            value={downloadProgress}
                            gaugePrimaryColor="rgb(79 70 229)"
                            gaugeSecondaryColor="rgba(255, 255, 255, 0.1)"
                        />

                        <div className="text-center space-y-1">
                            <p className="text-zinc-400 text-sm">Decryption in progress...</p>
                            <p className="text-zinc-500 text-xs">Connecting to secure servers</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
