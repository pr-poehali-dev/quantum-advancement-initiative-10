import { Header } from "../components/Header"
import { Hero } from "../components/Hero"
import { Philosophy } from "../components/Philosophy"
import { Catalog } from "../components/Catalog"
import { Expertise } from "../components/Expertise"
import { MarketplaceFeedback } from "../components/MarketplaceFeedback"
import { FAQ } from "../components/FAQ"
import { CallToAction } from "../components/CallToAction"
import { Footer } from "../components/Footer"

export default function Index() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Philosophy />
      <Catalog />
      <Expertise />
      <FAQ />
      <MarketplaceFeedback />
      <CallToAction />
      <Footer />
    </main>
  )
}