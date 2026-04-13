// app/page.tsx
import { Hero, Tours, About, Testimonials, Contact, Footer } from "@/components/sections";
import { Preloader } from "@/components/sections/Preloader";
import { AboutAMAIA } from "@/components/sections/AboutAmaiaTours";
export default function Home() {
  return (
    <>
      <Preloader />
      
      <main className="min-h-screen">
        <Hero />
        <AboutAMAIA/>
        <Tours />
        <About />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </>
  );
}