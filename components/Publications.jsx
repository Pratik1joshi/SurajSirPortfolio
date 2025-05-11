import { ExternalLink, FileText } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import SectionHeader from "@/components/SectionHeader"

export default function Publications() {
  const journalArticles = [
    {
      id: 1,
      citation:
        "Shrestha, A., McCrone, A., Láng-Ritter, J., Gautam, S., Taka, M., & Varis, O. (2025). Bridging gaps, saving lives: Integrating communities' voices and impact mapping into flood early warning systems in rural Nepal. International Journal of Disaster Risk Reduction, 118, 105238.",
      url: "https://doi.org/10.1016/j.ijdrr.2025.105238",
    },
    {
      id: 2,
      citation:
        "Paudel, P. K., Parajuli, S., Sinha, R., Bohara, M., Abedin, Md. A., Adhikari, B. R., Gautam, S., Bastola, R., Pal, I., & Huntington, H. P. (2024): Integrating traditional and local knowledge into disaster risk reduction policies: Insights from Nepal, India and Bangladesh. Environmental Science & Policy, 159, 103825.",
      url: "https://doi.org/10.1016/j.envsci.2024.103825",
    },
    {
      id: 3,
      citation:
        "Adhikari, B. R., & Gautam, S. (2022). A review of policies and institutions for landslide risk management in Nepal. Nepal Public Policy Review, 2, 93–112.",
      url: "https://doi.org/10.3126/nppr.v2i1.48397",
    },
  ]

  const bookChapters = [
    {
      id: 1,
      citation:
        "Gautam, S., Adhikari, B.R., Pudasaini, U., Lamsal, P. (2025). Application of Unmanned Aerial Vehicle (UAVs) for Disaster Risk Reduction and Management in Nepal. In: Talukdar, S., Chatterjee, R., Bera, S., Prashar, A., Shaw, R. (eds) Communication, Science, Technology, and Innovation in Disaster Risk Management. GIScience and Geo-environmental Modelling. Springer, Cham.",
      url: "https://doi.org/10.1007/978-3-031-77189-7_12",
    },
    {
      id: 2,
      citation:
        "Adhikari, B.R., Gautam, S., Sharma, T.P.P., Devkota, S. (2024). Land Cover, Land Use Change and Its Implication to Disasters in the Hindu Kush Himalayan Region. In: Mazumder, R., Shaw, R. (eds) Surface Environments and Human Interactions. Springer, Singapore.",
      url: "https://doi.org/10.1007/978-981-97-0112-4_2",
    },
  ]

  return (
    <section id="publications" className="py-20 bg-slate-50">
      <div className="container">
        <SectionHeader title="Publications" subtitle="My Research" />
        <div className="grid grid-cols-1 gap-8">
          <Card>
            <CardContent className="p-8">
              <h3 className="text-xl font-bold mb-4">Journal Articles</h3>
              <ul className="space-y-4">
                {journalArticles.map((article) => (
                  <li className="flex items-start gap-3" key={article.id}>
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                      <FileText className="h-3 w-3 text-primary" />
                    </div>
                    <div>
                      <p
                        className="text-muted-foreground"
                        dangerouslySetInnerHTML={{
                          __html: article.citation.replace(
                            "Gautam, S.",
                            '<span class="font-semibold">Gautam, S.</span>',
                          ),
                        }}
                      />
                      <a
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary text-sm flex items-center gap-1 mt-1"
                      >
                        <ExternalLink className="h-3 w-3" /> View publication
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <h3 className="text-xl font-bold mb-4">Book Chapters</h3>
              <ul className="space-y-4">
                {bookChapters.map((chapter) => (
                  <li className="flex items-start gap-3" key={chapter.id}>
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                      <FileText className="h-3 w-3 text-primary" />
                    </div>
                    <div>
                      <p
                        className="text-muted-foreground"
                        dangerouslySetInnerHTML={{
                          __html: chapter.citation.replace(
                            "Gautam, S.",
                            '<span class="font-semibold">Gautam, S.</span>',
                          ),
                        }}
                      />
                      <a
                        href={chapter.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary text-sm flex items-center gap-1 mt-1"
                      >
                        <ExternalLink className="h-3 w-3" /> View publication
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
