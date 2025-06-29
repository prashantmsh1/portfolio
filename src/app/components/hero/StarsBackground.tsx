import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Container, Engine } from "tsparticles-engine";

const StarsBackground: React.FC = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        // Initialize the tsparticles engine
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        // You can add custom code here when the particles are loaded
    }, []);

    return (
        // <div className="inset-0 z-0 ">
        <Particles
            id="stars-background"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                fpsLimit: 60,
                particles: {
                    number: {
                        value: 160,
                        density: {
                            enable: true,
                            value_area: 800,
                        },
                    },
                    color: {
                        value: "#ffffff",
                    },
                    shape: {
                        type: "circle",
                    },
                    opacity: {
                        value: 0.6,
                        random: true,
                        anim: {
                            enable: true,
                            speed: 1,
                            opacity_min: 0.1,
                            sync: false,
                        },
                    },
                    size: {
                        value: 1.5,
                        random: true,
                        anim: {
                            enable: true,
                            speed: 1,
                            size_min: 0.1,
                            sync: false,
                        },
                    },
                    move: {
                        enable: true,
                        speed: 0.5,
                        direction: "none",
                        random: true,
                        straight: false,
                        out_mode: "out",
                        bounce: false,
                    },
                },
                interactivity: {
                    detect_on: "canvas",
                    events: {
                        onhover: {
                            enable: true,
                            mode: "grab",
                        },
                        resize: true,
                    },
                    modes: {
                        grab: {
                            distance: 140,
                            line_linked: {
                                opacity: 0.5,
                            },
                        },
                    },
                },
                retina_detect: true,

                background: {
                    color: "#050014",
                },
            }}
        />
        // </div>
    );
};

export default StarsBackground;
