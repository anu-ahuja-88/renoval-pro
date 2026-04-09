import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Trust from '@/components/Trust'
import Services from '@/components/Services'
import Gallery from '@/components/Gallery'
import About from '@/components/About'
import Process from '@/components/Process'
import Testimonials from '@/components/Testimonials'
import QuoteForm from '@/components/QuoteForm'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import FloatingCTA from '@/components/FloatingCTA'

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Trust />
      <Services />
      <Gallery />
      <About />
      <Process />
      <Testimonials />
      <QuoteForm />
      <CTA />
      <Footer />
      <FloatingCTA />
    </main>
  )
}
