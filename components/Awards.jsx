import { Card, CardContent } from "@/components/ui/card"
import SectionHeader from "@/components/SectionHeader"

export default function Awards() {
  const awards = [
    {
      id: 1,
      title: "Young Engineer Professional Award (YEPA)",
      description:
        "Awarded by The Asian Civil Engineering Coordinating Council (ACECC) in 2025 for contributions to disaster risk management.",
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
          className="text-primary h-8 w-8"
        >
          <path d="M8.21 13.89 7 23l5-3 5 3-1.21-9.11"></path>
          <circle cx="12" cy="8" r="7"></circle>
        </svg>
      ),
    },
    {
      id: 2,
      title: "Nepal Bidhya Bhusan KHA",
      description:
        "Awarded by the Government of Nepal in 2019 for academic excellence and contributions to the field of disaster risk management.",
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
          className="text-primary h-8 w-8"
        >
          <path d="M12 8a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2v1a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v1Z"></path>
          <path d="M12 16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2v-1a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-2a3 3 0 0 1-3-3v-1Z"></path>
        </svg>
      ),
    },
    {
      id: 3,
      title: "Tika Devi Joshi Memorial Award",
      description:
        "Received in 2018 for outstanding research and contributions in the field of disaster risk reduction in Nepal.",
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
          className="text-primary h-8 w-8"
        >
          <path d="M12 2v20"></path>
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
        </svg>
      ),
    },
    {
      id: 4,
      title: '"Young Scientist" Recognition',
      description:
        "Recognized by Integrated Research on Disaster Risk (IRDR) in 2017 for innovative research in disaster risk reduction.",
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
          className="text-primary h-8 w-8"
        >
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
        </svg>
      ),
    },
    {
      id: 5,
      title: "Mayor's Research Fellow",
      description:
        "Selected as a research fellow by Kathmandu Metropolitan City in 2020 to study water infrastructure and indigenous knowledge.",
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
          className="text-primary h-8 w-8"
        >
          <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
          <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
        </svg>
      ),
    },
    {
      id: 6,
      title: "Research Grant",
      description:
        "Received from Save The Children International for landslide susceptibility mapping and risk assessment in Sindhupalchowk district.",
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
          className="text-primary h-8 w-8"
        >
          <path d="M3 3v18h18"></path>
          <path d="m19 9-5 5-4-4-3 3"></path>
        </svg>
      ),
    },
  ]

  return (
    <section id="awards" className="py-20 bg-slate-50">
      <div className="container">
        <SectionHeader title="Awards & Recognition" subtitle="My Achievements" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {awards.map((award) => (
            <Card key={award.id}>
              <CardContent className="p-8">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  {award.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{award.title}</h3>
                <p className="text-muted-foreground">{award.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
