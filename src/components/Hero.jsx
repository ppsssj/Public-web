import { assets } from "../data/siteContent.js";

export default function Hero() {
  return (
    <section className="hero">
      <picture>
        <source media="(max-width: 767px)" srcSet={assets.heroMobile} />
        <img src={assets.heroDesktop} alt="" />
      </picture>
      <div className="hero-content desktop-only">
        <h1>A   I  C  S</h1>
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
