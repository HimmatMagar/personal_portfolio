import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      
      <footer className="py-8 px-4 text-center border-t border-border">
        <p className="text-muted-foreground">
          © 2024 ML Portfolio. Built with passion for machine learning.
        </p>
      </footer>
    </div>
  );
};

export default Index;
