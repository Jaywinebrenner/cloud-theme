import Image from "next/image";
import Hero from "./components/hero";
import Navigation from "./components/navigation";
import Content from "./components/content";
import InfoCards from "./components/info-cards";
import SideAccordion from "./components/side-accordion";
import Cta from "./components/Cta";
import ThreeCard from "./components/threeCard";
import TwoColumn from "./components/two-column";
import Footer from "./components/footer";
// import "./styles/app.scss";

export default function Home() {
  const heroData = [
    {
      title: "hero1",
      h1: "Cloud Template",
      h3: "This is a template style",
      background: "/hero/hero.webp",
    },
    {
      title: "hero2",
      h1: "Get a Free Consultation Today",
      h3: "Et maiores alias consequatur aut perferendis doloribus asperiores repellat.",
      button: true,
      background: "/hero/bg3.webp",
    },
  ];

  return (
    <main className="home">
      <Navigation />
      {heroData.map((hero, index) => (
        hero.title === "hero1" &&
        <Hero key={index} h1={hero.h1} h3={hero.h3} background={hero.background} />
      ))}
      <Content />
      <InfoCards />
      <SideAccordion />
      <Cta />
      <ThreeCard />
      <TwoColumn />
      {heroData.map((hero, index, button) => (
            hero.title === "hero2" &&
        <Hero key={index} h1={hero.h1} h3={hero.h3} background={hero.background} button={hero.button}/>
      ))}
      <Footer/>
    </main>
  );
}
