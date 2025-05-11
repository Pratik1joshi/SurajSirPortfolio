import { Card, CardContent } from "@/components/ui/card"
import SectionHeader from "@/components/SectionHeader"

export default function Education() {
  const educations = [
    {
      id: 1,
      degree: "MSc in Civil Engineering in Disaster Risk Management",
      institution: "Institute of Engineering, Pulchowk Campus, Tribhuvan University",
      period: "2015 - 2017",
      achievement: "Gold Medalist (81.73%)",
    },
    {
      id: 2,
      degree: "Master's Degree in Public Administration",
      institution: "Tribhuvan University",
      period: "Completed in 2020",
    },
    {
      id: 3,
      degree: "MA in Economics",
      institution: "Tribhuvan University",
      period: "Completed in 2019",
    },
    {
      id: 4,
      degree: "Bachelors (B.E.) in Civil Engineering",
      institution: "Institute of Engineering, Tribhuvan University",
      period: "2011 - 2015",
    },
  ]

  return (
    <section id="education" className="py-20 bg-white">
      <div className="container">
        <SectionHeader title="Education" subtitle="My Learning" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educations.map((edu) => (
            <Card key={edu.id}>
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center">
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
                      className="text-primary h-8 w-8"
                    >
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                      <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{edu.degree}</h3>
                    <p className="text-muted-foreground">{edu.institution}</p>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">{edu.period}</span>
                  {edu.achievement && (
                    <span className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">{edu.achievement}</span>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
