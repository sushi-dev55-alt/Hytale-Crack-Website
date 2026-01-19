"use client";

import React, { useState } from "react";
import { FloatingPaths } from "@/components/ui/background-paths";
import {
    ArrowLeft, Sparkles, Users, Code2, Zap, ArrowRight, Shield,
    ChevronDown, X as CloseIcon, Fingerprint, Download
} from "lucide-react";

export default function DownloadsPage() {
    const [modalOpen, setModalOpen] = useState(false);
    const [verifyOpen, setVerifyOpen] = useState(false);
    const [selectedExec, setSelectedExec] = useState<string | null>(null);
    const [verifyState, setVerifyState] = useState({ pct: 0, label: "Waiting..." });
    const [isVerifying, setIsVerifying] = useState(false);

    const execData: any = {
        hytale: {
            name: "Hytale Cracked",
            ver: "1.0.0",
            file: "Hytale_Cracked_v1.0.0.zip",
            img: "https://hytale.com/static/images/logo.png",
            downloadUrl: "#" // Replace with actual link if needed
        }
    };

    const handleDownloadClick = (key: string) => {
        setSelectedExec(key);
        setModalOpen(true);
    };

    const startVerification = () => {
        setIsVerifying(true);
        setVerifyState({ pct: 0, label: "Downloading..." });

        let pct = 0;
        const interval = setInterval(() => {
            pct += Math.floor(Math.random() * 5) + 1;
            if (pct > 100) pct = 100;

            setVerifyState({ pct, label: "Downloading..." });

            if (pct >= 100) {
                clearInterval(interval);
                setVerifyState({ pct: 100, label: "Complete" });
                setTimeout(() => {
                    alert("Download started!");
                    setVerifyOpen(false);
                    setIsVerifying(false);
                }, 500);
            }
        }, 150);
    };

    return (
        <div className="relative min-h-screen bg-neutral-950 text-white selection:bg-white/20 font-sans">
            {/* Background Paths */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <FloatingPaths position={1} />
                <FloatingPaths position={-1} />
            </div>

            <style jsx global>{`
        .bg-tile { background-image: linear-gradient(180deg, rgba(255,255,255,0.05), rgba(0,0,0,0.08)); }
        .bg-panel { background-image: linear-gradient(180deg, rgba(255,255,255,0.04), rgba(0,0,0,0.2)); }
        .shadow-innerglass { box-shadow: inset 0 1px 0 rgba(255,255,255,0.06); }
        .fp-ring { position: absolute; inset: -10px; border-radius: 999px; border: 1px solid rgba(255,255,255,.12); animation: fpPulse 1.6s ease-out infinite; }
        @keyframes fpPulse { 0% { transform: scale(1); opacity: .45; } 70% { transform: scale(1.25); opacity: 0; } 100% { transform: scale(1.25); opacity: 0; } }
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

                                    <button
                                        onClick={() => handleDownloadClick('hytale')}
                                        className="group inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white px-5 py-2.5 font-medium text-black shadow-[0_0_30px_rgba(255,255,255,0.05)] transition hover:bg-zinc-100 hover:-translate-y-0.5 active:scale-95"
                                    >
                                        Download Now
                                        <span className="ml-0.5 transition group-hover:translate-x-0.5"><ArrowRight className="h-4 w-4" /></span>
                                    </button>
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

            {/* Install Modal */}
            {modalOpen && (
                <div className="fixed inset-0 z-[80] grid place-items-center px-4">
                    <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setModalOpen(false)} />
                    <div className="relative w-[min(760px,100%)] rounded-2xl border border-white/10 bg-black/90 p-6 md:p-8 shadow-[0_0_60px_rgba(56,189,248,0.15)] animate-in fade-in zoom-in-95 duration-200">
                        <div className="mb-4 flex items-center justify-between">
                            <h3 className="text-xl font-semibold text-white">Install steps</h3>
                            <button onClick={() => setModalOpen(false)} className="rounded-lg border border-white/10 bg-white/5 p-2 text-zinc-300 transition hover:bg-white/10">
                                <CloseIcon className="h-4 w-4" />
                            </button>
                        </div>
                        <ol className="list-decimal space-y-3 pl-5 text-zinc-300">
                            <li>Disable antivirus temporarily to avoid false positives.</li>
                            <li>Ensure you have Java installed.</li>
                            <li>Run the launcher as administrator.</li>
                            <li>Once open, log in with any username (offline mode supported).</li>
                            <li>Click "Play" to start the game.</li>
                        </ol>
                        <p className="mt-6 text-center text-zinc-300">If you’re unsure about a file, don’t run it.</p>
                        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
                            <button onClick={() => setModalOpen(false)} className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-200 transition hover:bg-white/10">Close</button>
                            <button
                                onClick={() => { setModalOpen(false); setVerifyOpen(true); }}
                                className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white px-4 py-2 text-sm font-medium text-black shadow-[0_0_30px_rgba(255,255,255,0.05)] transition hover:bg-zinc-100"
                            >
                                Continue to Download
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Verify Modal */}
            {verifyOpen && (
                <div className="fixed inset-0 z-[85] grid place-items-center px-4">
                    <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => !isVerifying && setVerifyOpen(false)} />
                    <div className="relative w-[min(520px,100%)] rounded-2xl border border-white/10 bg-black/90 p-6 md:p-8 shadow-[0_0_60px_rgba(255,255,255,0.06)] animate-in fade-in zoom-in-95 duration-200">
                        <div className="flex flex-col items-center">
                            <div className="relative grid h-16 w-16 place-items-center rounded-full border border-white/10 bg-white/5">
                                <div className="fp-ring"></div>
                                <Fingerprint className="h-7 w-7 text-white" />
                            </div>
                            <h3 className="mt-4 text-xl font-semibold text-white">Human Verification</h3>
                            <p className="mt-1 text-sm text-zinc-400 text-center">Verify you’re human to access your download</p>
                            <div className="mt-5 w-full">
                                <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
                                    <div className="h-2 rounded-full bg-white transition-[width] duration-200" style={{ width: `${verifyState.pct}%` }}></div>
                                </div>
                                <div className="mt-2 flex items-center justify-between text-xs text-zinc-400">
                                    <span>{verifyState.label}</span>
                                    <span>{verifyState.pct}%</span>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-4">
                            <div className="flex items-center gap-2 text-white font-medium">
                                <Download className="h-4 w-4" />
                                <span>Choose Version</span>
                            </div>
                            <div className="mt-3 grid grid-cols-1 gap-3">
                                <div className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-left">
                                    <div className="flex items-center justify-between">
                                        <div className="text-sm font-semibold text-white">{execData.hytale.name}</div>
                                        <div className="text-xs text-zinc-400">v{execData.hytale.ver}</div>
                                    </div>
                                    <div className="mt-1 text-xs text-zinc-400">{execData.hytale.file}</div>
                                </div>
                            </div>

                            <div className="mt-4 rounded-xl border border-white/10 bg-black/40 p-3 flex justify-center">
                                <img src={execData.hytale.img} alt="Preview" className="max-h-[100px] object-contain" />
                            </div>

                            <button
                                onClick={startVerification}
                                disabled={isVerifying}
                                className="mt-4 w-full inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white px-5 py-3 font-medium text-black shadow-[0_0_30px_rgba(255,255,255,0.05)] transition hover:bg-zinc-100 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isVerifying ? "Verifying..." : "Verify & Download"}
                                {!isVerifying && <ArrowRight className="h-4 w-4" />}
                            </button>

                            <button
                                onClick={() => setVerifyOpen(false)}
                                disabled={isVerifying}
                                className="mt-3 w-full inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-5 py-2.5 text-sm text-zinc-200 transition hover:bg-white/10 disabled:opacity-50"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
