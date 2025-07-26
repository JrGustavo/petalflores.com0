import { Card, CardContent } from "@/components/ui/card"

const ocasiones = [
    {
        id: 1,
        nombre: "Flores",
        imagen: "/Petalflores.png?height=120&width=120",
    },
    {
        id: 2,
        nombre: "Cumpleaños",
        imagen: "/Petalflorescumpleaños.png?height=120&width=120",
    },
    {
        id: 3,
        nombre: "Orquídeas",
        imagen: "/PetalFloresOrquideas.png?height=120&width=120",
    },
    {
        id: 4,
        nombre: "Chocolates",
        imagen: "/PetalFloresChocolates.png?height=120&width=120",
    },
    {
        id: 5,
        nombre: "Suscripciones",
        imagen: "/Suscripciones.png?height=120&width=120",
    },
    {
        id: 6,
        nombre: "Regalos corporativos",
        imagen: "/PetalFlorescorporativos.png?height=120&width=120",
    },

]

export default function Ocasiones() {
    return (
        <div className="w-full max-w-7xl mx-auto px-4 py-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
                {ocasiones.map((ocasion) => (
                    <Card
                        key={ocasion.id}
                        className="group cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105 border-gray-200"
                    >
                        <CardContent className="p-3 md:p-4">
                            <div className="aspect-square mb-3 overflow-hidden rounded-lg bg-gray-50">
                                <img
                                    src={ocasion.imagen || "/placeholder.svg"}
                                    alt={ocasion.nombre}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                            </div>
                            <h3 className="text-sm md:text-base font-medium text-center text-gray-700 leading-tight">
                                {ocasion.nombre}
                            </h3>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}
