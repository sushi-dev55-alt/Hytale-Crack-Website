"use client";

import React, { useRef, useEffect, useState } from 'react';

interface ParticleTextProps {
    text?: string;
    className?: string;
}

const ParticleText = ({ text = "HYTALE", className }: ParticleTextProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [size, setSize] = useState({ width: 0, height: 0 });

    // Use a ref for mouse position to avoid re-renders
    const mouse = useRef({ x: 0, y: 0, radius: 100 });

    useEffect(() => {
        const handleResize = () => {
            setSize({
                width: window.innerWidth,
                height: 300 // Constrain height for the banner effect rather than full screen
            });
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas || size.width === 0) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        canvas.width = size.width;
        canvas.height = size.height;

        let particlesArray: Particle[] = [];
        let animationFrameId: number;

        class Particle {
            x: number;
            y: number;
            size: number;
            color: string;
            baseX: number;
            baseY: number;
            density: number;

            constructor(x: number, y: number, color: string) {
                this.x = x;
                this.y = y;
                this.color = color;
                this.size = 2;
                this.baseX = x;
                this.baseY = y;
                this.density = Math.random() * 30 + 1;
            }

            draw() {
                if (!ctx) return;
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.closePath();
                ctx.fill();
            }

            update() {
                let dx = mouse.current.x - this.x;
                // Adjust mouse Y relative to canvas position if needed, 
                // but since we track clientY and canvas might be anywhere, 
                // we need to be careful. Here assuming mouse.current is client coordinates
                // and we need to map to canvas local coords.
                // However, the original code used window innerWidth/Height and full screen.
                // We are using a localized canvas.
                // Let's get bounding rect.
                const rect = canvas!.getBoundingClientRect();
                const mouseX = mouse.current.x - rect.left;
                const mouseY = mouse.current.y - rect.top;

                let dy = mouseY - this.y;
                dx = mouseX - this.x;

                let distance = Math.sqrt(dx * dx + dy * dy);
                let forceDirectionX = dx / distance;
                let forceDirectionY = dy / distance;
                let maxDistance = mouse.current.radius;
                let force = (maxDistance - distance) / maxDistance;

                if (force < 0) force = 0;

                let directionX = forceDirectionX * force * this.density;
                let directionY = forceDirectionY * force * this.density;

                if (distance < maxDistance) {
                    this.x -= directionX;
                    this.y -= directionY;
                } else {
                    if (this.x !== this.baseX) {
                        let dx = this.x - this.baseX;
                        this.x -= dx / 10;
                    }
                    if (this.y !== this.baseY) {
                        let dy = this.y - this.baseY;
                        this.y -= dy / 10;
                    }
                }
            }
        }

        function init() {
            if (!ctx || !canvas) return;
            particlesArray = [];

            const lines = text.split('\\n');
            const longestLine = lines.reduce((a, b) => a.length > b.length ? a : b, "");
            const fontSize = Math.min(80, canvas.width / (longestLine.length * 0.7)); // Adaptive
            const lineHeight = fontSize * 1.2;
            const totalHeight = lines.length * lineHeight;
            const startY = (canvas.height - totalHeight) / 2 + lineHeight / 2;

            ctx.font = `bold ${fontSize}px "Arial Black", Gadget, sans-serif`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';

            const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
            gradient.addColorStop(0.2, "#41d1ff");
            gradient.addColorStop(0.5, "#41a9ff");
            gradient.addColorStop(0.8, "#61dafb");
            ctx.fillStyle = gradient;

            lines.forEach((line, i) => {
                ctx.fillText(line, canvas.width / 2, startY + i * lineHeight);
            });

            const textCoordinates = ctx.getImageData(0, 0, canvas.width, canvas.height);
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (let y = 0; y < textCoordinates.height; y += 4) {
                for (let x = 0; x < textCoordinates.width; x += 4) {
                    const alphaIndex = (y * 4 * textCoordinates.width) + (x * 4) + 3;
                    if (textCoordinates.data[alphaIndex] > 128) {
                        const r = textCoordinates.data[alphaIndex - 3];
                        const g = textCoordinates.data[alphaIndex - 2];
                        const b = textCoordinates.data[alphaIndex - 1];
                        const color = `rgb(${r},${g},${b})`;
                        particlesArray.push(new Particle(x, y, color));
                    }
                }
            }
        }

        function animate() {
            if (!ctx || !canvas) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (let i = 0; i < particlesArray.length; i++) {
                particlesArray[i].draw();
                particlesArray[i].update();
            }
            animationFrameId = requestAnimationFrame(animate);
        }

        init();
        animate();

        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, [size, text]);

    const handleMouseMove = (e: React.MouseEvent) => {
        mouse.current.x = e.clientX;
        mouse.current.y = e.clientY;
    };

    return (
        <div
            className={className}
            style={{ width: '100%', height: '300px', overflow: 'hidden' }}
            onMouseMove={handleMouseMove}
        >
            <canvas ref={canvasRef} className="w-full h-full block"></canvas>
        </div>
    );
};

export default ParticleText;
