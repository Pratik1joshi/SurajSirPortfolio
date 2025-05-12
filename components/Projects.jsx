import { Card, CardContent } from "@/components/ui/card"
import SectionHeader from "@/components/SectionHeader"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Projects({ limit, showLink = false }) {
  const projects = [
    {
      id: 1,
      title: "VICTORY: Citizen Science for Anticipatory Action",
      description:
        "Developed a citizen scientist platform engaging communities in data collection for early warning systems in Dolakha and Bardiya.",
      period: "Dec 2023 - Feb 2025",
      role: "Team Leader",
      image: "/images/projects/victory.jpg",
    },
    {
      id: 2,
      title: "ALERT Bhimeshwor: Landslide Early Warning System",
      description:
        "Established a municipal landslide early warning system in Bhimeshwor Municipality, including drone surveys and susceptibility modeling.",
      period: "Jan 2023 - Apr 2024",
      role: "Coordinator",
      image: "/images/projects/bhimeshwor.jpg",
    },
    {
      id: 3,
      title: "Landslide Susceptibility Mapping in Baitadi",
      description:
        'Developed landslide inventories, susceptibility assessments, and the "Pahiro Alert" mobile application for early warning.',
      period: "Feb - June 2023",
      role: "DRR Expert",
      image: "/images/projects/baitadi.jpg",
    },
    {
      id: 4,
      title: "Multi-Hazard Risk Assessment Framework for HKH",
      description:
        "Developed a methodological framework for multi-hazard risk assessment in data-scarce regions of the Hindu-Kush-Himalayas.",
      period: "Sep - Dec 2022",
      role: "Consultant",
      image: "/images/projects/hkh.jpg",
    },
    {
      id: 5,
      title: "Drone for Disaster Management",
      description:
        "Provided training on drone hardware, flight operations, and applications for flood and landslide risk assessment in Bhutan.",
      period: "May 2023",
      role: "DRR Expert",
      image: "/images/projects/drone.jpg",
    },
    {
      id: 6,
      title: "Melamchi Debris Flow Assessment",
      description:
        "Conducted rapid assessment of the 2021 Melamchi debris flow using drone surveys, GIS analysis, and damage assessment.",
      period: "July 2021",
      role: "GIS Expert",
      image: "/images/projects/melamchi.jpg",
    },
  ]

  const displayedProjects = limit ? projects.slice(0, limit) : projects;

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container">
        <SectionHeader title="Key Projects" subtitle="My Work" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project) => (
            <Card key={project.id}>
              <CardContent className="p-6">
                <div className="relative h-40 w-full mb-6 rounded-md overflow-hidden">
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>{project.period}</span>
                  <span className="text-primary">{project.role}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {showLink && (
          <div className="mt-10 flex justify-center">
            <Link href="/projects">
              <Button variant="outline" className="group">
                See All Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
