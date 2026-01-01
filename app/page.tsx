import { Hero } from "@/components/hero";
import { Protocols } from "@/components/protocols";
import { About } from "@/components/about";
import { Footer } from "@/components/footer";

export const revalidate = 300;

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Protocols />
      <About />
      <Footer />
    </main>
  );
}
