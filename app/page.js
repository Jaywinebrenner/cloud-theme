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
import LargeCta from "./components/largeCta";
// import "./styles/app.scss";

export default function Home() {


  return (
    <main className="home">
      <Navigation />
      <Hero/>
      <Content />
      <InfoCards />
      <SideAccordion />
      <Cta />
      <ThreeCard />
      <TwoColumn />
      <LargeCta/>
      <Footer/>
    </main>
  );
}