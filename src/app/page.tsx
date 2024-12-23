import { Hero } from '@/app/components/Hero'
import { About } from '@/app/components/About'
import { Skills } from '@/app/components/Skills'
import { Projects } from '@/app/components/Projects'
import { Contact } from '@/app/components/Contact'
import { Footer } from '@/app/components/Footer'

export default function Home() {
  return (
      <div className="min-h-screen flex flex-col bg-base-900 text-white">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
      </div>
  )
}
