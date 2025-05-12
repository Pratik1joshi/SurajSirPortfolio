import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white py-20 md:py-32">
      <div className="container flex flex-col md:flex-row items-center gap-8 md:gap-16">
        <div className="flex flex-col gap-4 md:w-1/2">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Suraj Gautam
            <span className="block text-primary">Disaster Risk Management Expert</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Civil Engineer & GIS Specialist with extensive experience in landslide risk assessment, early warning
            systems, and disaster resilience planning.
          </p>
          <div className="flex gap-4 mt-4">
            <Link
          href="/projects"><Button size="lg">
              View my Works <ArrowRight className="ml-2 h-4 w-4" />
            </Button></Link>
            <Link
          href="#contact"><Button variant="outline" size="lg">
              Work with Me
            </Button></Link>
          </div>
        </div>
        <div className="relative md:w-1/2 aspect-square max-w-md">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-primary/0"></div>
          <Image
            src="/suraj1.jpg"
            alt="Suraj Gautam"
            width={600}
            height={600}
            className="rounded-full object-cover border-4 border-white shadow-xl"
            priority
          />
        </div>
      </div>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex justify-center">
        <Link
          href="#about"
          className="flex items-center justify-center rounded-full bg-white p-2 shadow-md hover:shadow-lg transition-all"
        >
          <ChevronDown className="h-6 w-6 text-primary animate-bounce" />
        </Link>
      </div>
    </section>
  )
}
