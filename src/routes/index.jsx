import Hero from "~/components/Hero";
import Industries from "~/components/Industries";
import Services from "~/components/Services";
import Clients from "~/components/Clients";
import Contact from "~/components/Contact";
import Footer from "~/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Industries />
      <Services />
      <Clients />
      <Contact />
      <Footer />
    </main>
  );
}
