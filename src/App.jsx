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
import LabPage from "./components/LabPage.jsx";
import CustomScrollbar from "./components/CustomScrollbar.jsx";
import SectionNav from "./components/SectionNav.jsx";
import { featureHighlights } from "./data/siteContent.js";
import { pages } from "./data/pages.js";

const homeSectionNav = [
  { label: "Home", href: "#home" },
  { label: "Insight", href: "#insight" },
  { label: "About", href: "#about" },
  { label: "Areas", href: "#areas" },
  { label: "Research", href: "#research" },
  { label: "Location", href: "#location" },
];

function HomePage() {
  return (
    <main className="home-page">
      <div id="home">
        <Hero />
      </div>
      <div id="insight">
        <InsightSection />
      </div>
      <div id="about">
        <AboutSection />
      </div>
      <div id="areas">
        {featureHighlights.map((feature) => (
          <FeatureSection key={feature.title} feature={feature} />
        ))}
      </div>
      <div id="research">
        <KeyResearchAreasSection />
      </div>
      <div id="location">
        <ForestSection />
      </div>
      <HaruSection />
      <CtaSection />
      <div className="page-section-nav-wrap">
        <SectionNav title="Home" items={homeSectionNav} />
      </div>
    </main>
  );
}

export default function App() {
  const pageKey = window.location.pathname.replace(/^\/+|\/+$/g, "") || "home";
  const page = pages[pageKey];

  return (
    <>
      <Header />
      {page ? <LabPage page={page} /> : <HomePage />}
      <Footer />
      <CustomScrollbar />
    </>
  );
}
