import Preloader from "@/components/Preloader";
import Cursor from "@/components/Cursor";
import Navbar from "@/components/Navbar";
import ChapterHero from "@/components/ChapterHero";
import About from "@/components/About";
import ChapterNav from "@/components/ChapterNav";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <>
      <Preloader />
      <Cursor />
      <Navbar />
      <main className="relative">
        <ChapterHero chapterKey="about" />
        <About />
        <ChapterNav chapterKey="about" />
      </main>
      <Footer />
    </>
  );
}
