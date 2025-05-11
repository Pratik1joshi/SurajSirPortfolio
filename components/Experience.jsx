import { ArrowRight, Briefcase } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import SectionHeader from "@/components/SectionHeader"

export default function Experience() {
  const experiences = [
    {
      id: 1,
      title: "Executive Director",
      company: "Institute of Himalayan Risk Reduction",
      period: "Jan 2023 - Present",
      description:
        "Leading the organization in disaster risk reduction initiatives, developing proposals, and managing projects related to landslide assessment and early warning systems.",
      achievements: [
        "Lead development of landslide early warning systems in multiple municipalities across Nepal",
        "Conduct GIS mapping and remote sensing for geological hazard and risk assessment",
        "Develop and implement community-based disaster risk reduction strategies",
      ],
    },
    {
      id: 2,
      title: "Chief Operation Manager",
      company: "Forum for Energy and Environment Development (FEED) P. Ltd.",
      period: "May 2022 - Dec 2022",
      description:
        "Led company operations, developed operational plans, and managed geological hazard assessments and slope protection designs.",
      achievements: [
        "Managed geological and geo-technical assessments for landslide risk mitigation",
        "Designed slope protection measures using conventional engineering, Eco-DRR, and Nature-based Solutions",
        "Led field assessments and quality control for disaster risk reduction projects",
      ],
    },
    {
      id: 3,
      title: "Civil Engineer & GIS Expert",
      company: "Naxa (P) Ltd.",
      period: "Jan 2016 - Present",
      description:
        "Involved in research, GIS and remote sensing assignments, developing Risk Sensitive Land Use Planning (RSLUP) projects, and disaster risk reduction platforms.",
      achievements: [
        "Developed digital tools for vulnerability capacity assessment and risk mapping",
        "Conducted drone surveys for high-resolution mapping of disaster-prone areas",
        "Created digital profiles and risk maps for municipalities across Nepal",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="container">
        <SectionHeader title="Professional Experience" subtitle="My Journey" />
        <div className="relative">
          {/* Center timeline */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/20"></div>
          
          {/* Experience cards */}
          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6" key={exp.id}>
                  {/* Timeline marker */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 h-8 w-8 rounded-full border-4 border-white bg-primary flex items-center justify-center z-10">
                    <span className="text-white font-bold text-sm">{exp.id}</span>
                  </div>
                  
                  {/* Left side (for even indices) or empty space (for odd indices) */}
                  <div className={`${isEven ? 'md:block' : 'md:hidden'} md:pr-8`}>
                    {isEven && (
                      <Card className="h-full">
                        <CardContent className="p-6">
                          <div className="flex flex-col items-start justify-between gap-2 mb-4">
                            <h3 className="text-xl font-bold">{exp.title}</h3>
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <Briefcase className="h-4 w-4" />
                              <span>{exp.company}</span>
                              <span>|</span>
                              <span>{exp.period}</span>
                            </div>
                          </div>
                          <p className="text-muted-foreground mb-4">{exp.description}</p>
                          <ul className="space-y-2">
                            {exp.achievements.map((achievement, i) => (
                              <li className="flex items-start gap-2" key={i}>
                                <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                                  <ArrowRight className="h-3 w-3 text-primary" />
                                </div>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    )}
                  </div>
                  
                  {/* Right side (for odd indices) or empty space (for even indices) */}
                  <div className={`${!isEven ? 'md:block' : 'md:hidden'} md:pl-8 md:col-start-2`}>
                    {!isEven && (
                      <Card className="h-full">
                        <CardContent className="p-6">
                          <div className="flex flex-col items-start justify-between gap-2 mb-4">
                            <h3 className="text-xl font-bold">{exp.title}</h3>
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <Briefcase className="h-4 w-4" />
                              <span>{exp.company}</span>
                              <span>|</span>
                              <span>{exp.period}</span>
                            </div>
                          </div>
                          <p className="text-muted-foreground mb-4">{exp.description}</p>
                          <ul className="space-y-2">
                            {exp.achievements.map((achievement, i) => (
                              <li className="flex items-start gap-2" key={i}>
                                <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                                  <ArrowRight className="h-3 w-3 text-primary" />
                                </div>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    )}
                  </div>
                  
                  {/* Mobile view - always show cards in a single column */}
                  <div className="md:hidden col-span-1">
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex flex-col items-start justify-between gap-2 mb-4">
                          <h3 className="text-xl font-bold">{exp.title}</h3>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Briefcase className="h-4 w-4" />
                            <span>{exp.company}</span>
                            <span>|</span>
                            <span>{exp.period}</span>
                          </div>
                        </div>
                        <p className="text-muted-foreground mb-4">{exp.description}</p>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <li className="flex items-start gap-2" key={i}>
                              <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                                <ArrowRight className="h-3 w-3 text-primary" />
                              </div>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  )
}