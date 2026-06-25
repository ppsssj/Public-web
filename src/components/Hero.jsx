import { useEffect, useRef } from "react";

export default function Hero() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);

  return (
    <section className="hero">
      <div className="hero-media" aria-hidden="true">
        <video ref={videoRef} autoPlay muted loop playsInline src="/a.mp4" />
      </div>
      <div className="hero-content desktop-only">
        <h1 className="hero-title-desktop">A   I   C   S</h1>
        <i aria-hidden="true" />
        <p>Artificial Intelligence Convergence Software</p>
      </div>
      <div className="hero-content mobile-only">
        <h1>
          A   I  C  S
        </h1>
        <p>Artificial Intelligence Convergence Software</p>
      </div>
    </section>
  );
}
