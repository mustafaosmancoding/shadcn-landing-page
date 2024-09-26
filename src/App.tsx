import { About } from "./components/About";
import { Bishopsgatelaw } from "./components/Bishopsgatelaw";
import { Lawcentral } from "./components/Lawcentral";
import { Ajlo } from "./components/Ajlo";
import { KBM } from "./components/KBM";
import { Barclays } from "./components/Barclays";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Pricing } from "./components/Pricing";
import { ScrollToTop } from "./components/ScrollToTop";
import { Services } from "./components/Services";
import { Sponsors } from "./components/Sponsors";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Sponsors />
      <About />
      <Bishopsgatelaw />
      <Lawcentral />
      <Ajlo />
      <KBM />
      <Barclays />
      <Services />
      <Pricing />
      <FAQ />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
