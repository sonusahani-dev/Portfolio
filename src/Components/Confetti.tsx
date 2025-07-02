import { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim"; // Lightweight bundle

const Confetti = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine); // Initialize tsParticles
  }, []);

  return (
    <Particles
      id="confetti"
      init={particlesInit}
      options={{
        fullScreen: {
          enable: true,
          zIndex: 1 // Adjust based on your layout
        },
        particles: {
          color: { value: ["#FF0000", "#00FF00", "#0000FF"] }, // Custom colors
          shape: { type: "circle" },
          size: { value: 10, random: true },
          move: {
            enable: true,
            speed: 15,
            direction: "bottom",
            out_mode: "out"
          },
          opacity: {
            value: 1,
            random: false
          },
          wobble: {
            enable: true,
            distance: 10,
            speed: 10
          }
        },
        emitters: {
          position: { x: 50, y: -30 },
          rate: {
            delay: 0.1,
            quantity: 10
          },
          size: {
            width: 100,
            height: 0
          }
        }
      }}
    />
  );
};

export default Confetti;