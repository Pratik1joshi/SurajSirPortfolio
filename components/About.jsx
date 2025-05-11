import Image from "next/image"
import { Award, Briefcase, Download, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import SectionHeader from "@/components/SectionHeader"

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container">
        <SectionHeader title="Professional Summary" subtitle="About Me" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
            <Image
              src="/suraj.jpeg"
              alt="Suraj Gautam Professional"
              width={800}
              height={600}
              className="object-cover"
            />
          </div>
          <div className="space-y-6">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <User className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Who I Am</h3>
                    <p className="text-muted-foreground">
                      A dedicated civil engineer and disaster risk management expert with a focus on landslide
                      assessment, early warning systems, and GIS mapping.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">My Experience</h3>
                    <p className="text-muted-foreground">
                      Over 9 years of experience in disaster risk reduction, GIS mapping, and implementing early warning
                      systems across Nepal.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">My Approach</h3>
                    <p className="text-muted-foreground">
                      I combine technical expertise with community engagement to develop sustainable solutions for
                      disaster risk reduction and climate resilience.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <p className="text-muted-foreground">
              Currently serving as the Executive Director at the Institute of Himalayan Risk Reduction, I lead
              initiatives in landslide assessment, early warning systems, and capacity building for disaster resilience
              across Nepal and the Himalayan region.
            </p>
            <div className="flex gap-4">
              <Button>My Projects</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
