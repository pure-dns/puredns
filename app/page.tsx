import { Hero } from "@/components/hero"
import { Protocols } from "@/components/protocols"
import { About } from "@/components/about"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Protocols />
      <About />
      <Footer />
    </main>
  )
}
