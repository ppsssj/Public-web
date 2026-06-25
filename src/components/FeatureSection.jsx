import { useEffect, useRef, useState } from "react";
import ButtonLink from "./ButtonLink.jsx";

export default function FeatureSection({ feature }) {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.28 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const image = (
    <picture className="feature-media">
      <source media="(max-width: 767px)" srcSet={feature.mobileImage} />
      <img src={feature.image} alt="" />
    </picture>
  );

  const copy = (
    <div className="feature-copy">
      <h2>{feature.title}</h2>
      <p>{feature.text}</p>
      <ButtonLink href={feature.href}>자세히 보기</ButtonLink>
    </div>
  );

  return (
    <section
      ref={sectionRef}
      className={`feature-section feature-${feature.align} ${isVisible ? "is-visible" : ""}`}
    >
      <div className="feature-grid">{feature.align === "right" ? <>{image}{copy}</> : <>{copy}{image}</>}</div>
    </section>
  );
}
