import Hero from "../sections/Hero";
import Features from "../sections/Features";
import Tools from "../sections/Tools";
import ProjectsPreview from "../sections/ProjectsPreview";
import NotesPreview from "../sections/NotesPreview";
import Community from "../sections/Community";
import CTA from "../sections/CTA";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/footer";

export default function Page() {
  return (
    <main>

      <Navbar />

      <Hero />

      <Features />

      <Tools />

      <ProjectsPreview />

      <NotesPreview />

      <Community />

      <CTA />

      <Footer />

    </main>
  );
}