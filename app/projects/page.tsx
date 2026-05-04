import Preloader from "@/components/Preloader";
import Cursor from "@/components/Cursor";
import Navbar from "@/components/Navbar";
import ChapterHero from "@/components/ChapterHero";
import Projects from "@/components/Projects";
import ChapterNav from "@/components/ChapterNav";
import Footer from "@/components/Footer";

export default function ProjectsPage() {
  return (
    <>
      <Preloader />
      <Cursor />
      <Navbar />
      <main className="relative">
        <ChapterHero chapterKey="projects" />
        <Projects />
        <ChapterNav chapterKey="projects" />
      </main>
      <Footer />
    </>
  );
}
