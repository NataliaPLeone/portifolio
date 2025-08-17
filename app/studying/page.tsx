import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function StudyingPage() {
  return (
    <div className="min-h-screen bg-background pt-14">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">O que eu estou estudando no momento</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            
          </p>
        </div>

        {/* Learning Goals */}
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 mb-12">
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <h3 className="text-xl font-semibold">Matérias tradicionais</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm">Computação Gráfica</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span className="text-sm">Redes de Computadores</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <span className="text-sm">Arquitetura de Computadores</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-sm">Compiladores</span>
              </li>

            </ul>
          </Card>

        </div>

        {/* Current Courses */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-center mb-8">Cursos ativos e certificações</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="text-xs">
                    Estudando
                  </Badge>
                  <div className="text-xs text-muted-foreground">Est. Completion: Jan 2025</div>
                </div>
                <CardTitle className="text-lg">OCI Foundations</CardTitle>
                <CardDescription>Learn the basics of OCI, its architecture, and distributed cloud model; understand compartments, authentication, and authorization within OCI, and set up a tenancy.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Progress</span>
                    <span>15%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: "15%" }}></div>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    <Badge variant="outline" className="text-xs">
                      Oracle
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Networking
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Computer Services
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>


          </div>
        </div>

      </div>
    </div>
  )
}
