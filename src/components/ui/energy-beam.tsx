import React, { useEffect, useRef } from 'react';

interface EnergyBeamProps {
    projectId?: string;
    className?: string;
    scale?: number;
    dpi?: number;
    fps?: number;
}

declare global {
    interface Window {
        UnicornStudio?: any;
    }
}

const EnergyBeam: React.FC<EnergyBeamProps> = ({
    projectId = "hRFfUymDGOHwtFe7evR2",
    className = "",
    scale = 0.5,
    dpi = 1.0,
    fps = 60
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const scriptLoadedRef = useRef(false);

    useEffect(() => {
        const loadScript = () => {
            if (scriptLoadedRef.current) return;

            const script = document.createElement('script');
            script.src = 'https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.5.2/dist/unicornStudio.umd.js';
            script.async = true;

            script.onload = () => {
                scriptLoadedRef.current = true;
                if (window.UnicornStudio && containerRef.current) {
                    console.log('Unicorn Studio loaded, initializing project...');
                    // Initialize the Unicorn Studio project
                    window.UnicornStudio.init();
                }
            };

            document.head.appendChild(script);

            return () => {
                if (script.parentNode) {
                    script.parentNode.removeChild(script);
                }
            };
        };

        loadScript();
    }, [projectId]);

    return (
        <div className={`relative w-full h-screen bg-black overflow-hidden ${className}`}>
            <div
                ref={containerRef}
                data-us-project={projectId}
                data-us-scale={scale}
                data-us-dpi={dpi}
                data-us-fps={fps}
                className="w-full h-full"
            />
        </div>
    );
};

export default EnergyBeam;
