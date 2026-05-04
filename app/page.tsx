import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ChapterGrid from "@/components/ChapterGrid";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";

export default function Page() {
  return (
    <>
      <Preloader />
      <Cursor />
      <Navbar />
      <main className="relative">
        <Hero />
        <ChapterGrid />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
