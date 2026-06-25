import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import InsightSection from "./components/InsightSection.jsx";
import AboutSection from "./components/AboutSection.jsx";
import FeatureSection from "./components/FeatureSection.jsx";
import KeyResearchAreasSection from "./components/KeyResearchAreasSection.jsx";
import ForestSection from "./components/ForestSection.jsx";
import HaruSection from "./components/HaruSection.jsx";
import CtaSection from "./components/CtaSection.jsx";
import Footer from "./components/Footer.jsx";
import { features } from "./data/siteContent.js";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <InsightSection />
        <AboutSection />
        {features.map((feature) => (
          <FeatureSection key={feature.title} feature={feature} />
        ))}
        <KeyResearchAreasSection />
        <ForestSection />
        <HaruSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
