import { useEffect, useRef, useState } from "react";
import ButtonLink from "./ButtonLink.jsx";
import { assets } from "../data/siteContent.js";

export default function AboutSection() {
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
      { threshold: 0.25 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`about-section ${isVisible ? "is-visible" : ""}`}
      style={{ backgroundImage: `url(${assets.aboutBackground})` }}
    >
      <div className="inside about-grid">
        <div className="about-mark">
          <picture>
            <source media="(max-width: 767px)" srcSet="/Logo/aics-favicon.png" />
            <img src="/Logo/aics-favicon.png" alt="AICS favicon" />
          </picture>
        </div>
        <div className="about-copy">
          <h2>
            ABOUT
            <br />
            AICS Research Interest
          </h2>
          <p>
            AICS는 인공지능 기술을 기반으로 다양한 산업 분야에서 혁신적인 솔루션을 제공하는 연구 기관입니다.
            <br />
            우리의 연구는 인공지능의 최신 기술을 활용하여 산업 전반에 걸친 문제를 해결하고, 새로운 비즈니스 기회를 창출하는 데 중점을 두고 있습니다.
          </p>
          <ButtonLink href="https://www.mujinassociates.com/aboutmujin">자세히 보기</ButtonLink>
        </div>
      </div>
    </section>
  );
}
