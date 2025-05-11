import { Card, CardContent } from "@/components/ui/card"
import SectionHeader from "@/components/SectionHeader"

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "VICTORY: Citizen Science for Anticipatory Action",
      description:
        "Developed a citizen scientist platform engaging communities in data collection for early warning systems in Dolakha and Bardiya.",
      period: "Dec 2023 - Feb 2025",
      role: "Team Leader",
      icon: (
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
          className="text-primary h-7 w-7"
        >
          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <path d="M12 18v-6"></path>
          <path d="M8 18v-1"></path>
          <path d="M16 18v-3"></path>
        </svg>
      ),
    },
    {
      id: 2,
      title: "ALERT Bhimeshwor: Landslide Early Warning System",
      description:
        "Established a municipal landslide early warning system in Bhimeshwor Municipality, including drone surveys and susceptibility modeling.",
      period: "Jan 2023 - Apr 2024",
      role: "Coordinator",
      icon: (
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
          className="text-primary h-7 w-7"
        >
          <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
          <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
        </svg>
      ),
    },
    {
      id: 3,
      title: "Landslide Susceptibility Mapping in Baitadi",
      description:
        'Developed landslide inventories, susceptibility assessments, and the "Pahiro Alert" mobile application for early warning.',
      period: "Feb - June 2023",
      role: "DRR Expert",
      icon: (
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
          className="text-primary h-7 w-7"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
        </svg>
      ),
    },
    {
      id: 4,
      title: "Multi-Hazard Risk Assessment Framework for HKH",
      description:
        "Developed a methodological framework for multi-hazard risk assessment in data-scarce regions of the Hindu-Kush-Himalayas.",
      period: "Sep - Dec 2022",
      role: "Consultant",
      icon: (
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
          className="text-primary h-7 w-7"
        >
          <path d="M3 3v18h18"></path>
          <path d="m19 9-5 5-4-4-3 3"></path>
        </svg>
      ),
    },
    {
      id: 5,
      title: "Drone for Disaster Management",
      description:
        "Provided training on drone hardware, flight operations, and applications for flood and landslide risk assessment in Bhutan.",
      period: "May 2023",
      role: "DRR Expert",
      icon: (
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
          className="text-primary h-7 w-7"
        >
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
        </svg>
      ),
    },
    {
      id: 6,
      title: "Melamchi Debris Flow Assessment",
      description:
        "Conducted rapid assessment of the 2021 Melamchi debris flow using drone surveys, GIS analysis, and damage assessment.",
      period: "July 2021",
      role: "GIS Expert",
      icon: (
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
          className="text-primary h-7 w-7"
        >
          <path d="M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1H8.3Z"></path>
          <rect x="3" y="14" width="7" height="7" rx="1"></rect>
          <circle cx="17.5" cy="17.5" r="3.5"></circle>
        </svg>
      ),
    },
  ]

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container">
        <SectionHeader title="Key Projects" subtitle="My Work" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id}>
              <CardContent className="p-6">
                <div className="h-14 w-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  {project.icon}
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
      </div>
    </section>
  )
}
