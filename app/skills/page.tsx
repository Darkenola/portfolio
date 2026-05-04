import Preloader from "@/components/Preloader";
import Cursor from "@/components/Cursor";
import Navbar from "@/components/Navbar";
import ChapterHero from "@/components/ChapterHero";
import Skills from "@/components/Skills";
import ChapterNav from "@/components/ChapterNav";
import Footer from "@/components/Footer";

export default function SkillsPage() {
  return (
    <>
      <Preloader />
      <Cursor />
      <Navbar />
      <main className="relative">
        <ChapterHero chapterKey="skills" />
        <Skills />
        <ChapterNav chapterKey="skills" />
      </main>
      <Footer />
    </>
  );
}
