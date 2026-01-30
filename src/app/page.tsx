import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Expertise from "@/components/Services";
import Projects from "@/components/Projects";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <div className="flex flex-col gap-5">
      <Expertise />
      <Projects />
      <Process />
      <Contact />
      </div>
      
      <Footer />
    </main>
  );
}
