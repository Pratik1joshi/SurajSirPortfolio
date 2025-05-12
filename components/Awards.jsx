import { Card, CardContent } from "@/components/ui/card"
import SectionHeader from "@/components/SectionHeader"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Awards({ limit, showLink = false }) {
  const awards = [
    {
      id: 1,
      title: "Young Engineer Professional Award (YEPA)",
      description:
        "Awarded by The Asian Civil Engineering Coordinating Council (ACECC) in 2025 for contributions to disaster risk management.",
      image: "/images/awards/yepa.jpg",
    },
    {
      id: 2,
      title: "Nepal Bidhya Bhusan KHA",
      description:
        "Awarded by the Government of Nepal in 2019 for academic excellence and contributions to the field of disaster risk management.",
      image: "/images/awards/bidhya-bhusan.jpg",
    },
    {
      id: 3,
      title: "Tika Devi Joshi Memorial Award",
      description:
        "Received in 2018 for outstanding research and contributions in the field of disaster risk reduction in Nepal.",
      image: "/images/awards/tika-devi.jpg",
    },
    {
      id: 4,
      title: '"Young Scientist" Recognition',
      description:
        "Recognized by Integrated Research on Disaster Risk (IRDR) in 2017 for innovative research in disaster risk reduction.",
      image: "/images/awards/young-scientist.jpg",
    },
    {
      id: 5,
      title: "Mayor's Research Fellow",
      description:
        "Selected as a research fellow by Kathmandu Metropolitan City in 2020 to study water infrastructure and indigenous knowledge.",
      image: "/images/awards/mayors-fellow.jpg",
    },
    {
      id: 6,
      title: "Research Grant",
      description:
        "Received from Save The Children International for landslide susceptibility mapping and risk assessment in Sindhupalchowk district.",
      image: "/images/awards/research-grant.jpg",
    },
  ]

  const displayedAwards = limit ? awards.slice(0, limit) : awards;

  return (
    <section id="awards" className="py-20 bg-slate-50">
      <div className="container">
        <SectionHeader title="Awards & Recognition" subtitle="My Achievements" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedAwards.map((award) => (
            <Card key={award.id}>
              <CardContent className="p-8">
                <div className="relative h-40 w-full mb-6 rounded-md overflow-hidden">
                  <Image 
                    src={award.image} 
                    alt={award.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{award.title}</h3>
                <p className="text-muted-foreground">{award.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {showLink && (
          <div className="mt-10 flex justify-center">
            <Link href="/awards">
              <Button variant="outline" className="group">
                See All Awards
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
