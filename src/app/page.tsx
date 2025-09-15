import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import GenerateSection from "@/components/GenerateSection";
import GallerySection from "@/components/GallerySection";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-background text-foreground">
      <Header />
      <HeroCarousel />
      <GenerateSection />
      <GallerySection />
     
    </main>
  );
}
