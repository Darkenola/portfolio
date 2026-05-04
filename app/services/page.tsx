import Preloader from "@/components/Preloader";
import Cursor from "@/components/Cursor";
import Navbar from "@/components/Navbar";
import ChapterHero from "@/components/ChapterHero";
import Services from "@/components/Services";
import ChapterNav from "@/components/ChapterNav";
import Footer from "@/components/Footer";

export default function ServicesPage() {
  return (
    <>
      <Preloader />
      <Cursor />
      <Navbar />
      <main className="relative">
        <ChapterHero chapterKey="services" />
        <Services />
        <ChapterNav chapterKey="services" />
      </main>
      <Footer />
    </>
  );
}
