import Header from "@/components/Header"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Experience from "@/components/Experience"
import Education from "@/components/Education"
import Projects from "@/components/Projects"
import Awards from "@/components/Awards"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export default function Portfolio() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Experience />
        <Education />
        <Projects limit={3} showLink={true} />
        <Awards limit={3} showLink={true} />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
