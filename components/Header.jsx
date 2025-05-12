import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-semibold text-xl">
          <span className="text-primary">Suraj</span> Gautam
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-sm font-medium text-gray-700 hover:text-primary hover:underline underline-offset-4 transition-colors">
            Home
          </Link>
          <Link href="/#about" className="text-sm font-medium text-gray-700 hover:text-primary hover:underline underline-offset-4 transition-colors">
            About
          </Link>
          <Link href="/#experience" className="text-sm font-medium text-gray-700 hover:text-primary hover:underline underline-offset-4 transition-colors">
            Experience
          </Link>
          <Link href="/#education" className="text-sm font-medium text-gray-700 hover:text-primary hover:underline underline-offset-4 transition-colors">
            Education
          </Link>
          <Link href="/publications" className="text-sm font-medium text-gray-700 hover:text-primary hover:underline underline-offset-4 transition-colors">
            Publications
          </Link>
          <Link href="/projects" className="text-sm font-medium text-gray-700 hover:text-primary hover:underline underline-offset-4 transition-colors">
            Projects
          </Link>
          <Link href="/awards" className="text-sm font-medium text-gray-700 hover:text-primary hover:underline underline-offset-4 transition-colors">
            Awards
          </Link>
        </nav>
        <Link href="/#contact"><Button className="hidden md:flex bg-primary hover:bg-primary/80 text-white">
          Contact Me
        </Button></Link>
        <Button variant="outline" size="icon" className="md:hidden border border-gray-300 hover:bg-gray-100 hover:text-primary transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </Button>
      </div>
    </header>
  )
}
