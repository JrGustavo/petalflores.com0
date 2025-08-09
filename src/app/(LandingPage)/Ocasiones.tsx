import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const ocasiones = [
    {
        id: 1,
        nombre: "Amor y Amistad",
        imagen: "/Petalflores.png",
        nuevo: true,
    },
    {
        id: 2,
        nombre: "Arreglos florales",
        imagen: "/PetalFloresOrquideas.png",
    },
    {
        id: 3,
        nombre: "Orquídeas",
        imagen: "/PetalFloresOrquideas.png",
    },
    {
        id: 4,
        nombre: "Cumpleaños",
        imagen: "/PetalFloresChocolates.png",
    },
    {
        id: 5,
        nombre: "Suscripciones",
        imagen: "/Suscripciones.png",
    },
    {
        id: 6,
        nombre: "Regalos corporativos",
        imagen: "/PetalFlorescorporativos.png",
    },
]

export default function Ocasiones() {
    return (
        <div className="w-full max-w-7xl mx-auto px-4 py-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
                {ocasiones.map((ocasion) => (
                    <Card
                        key={ocasion.id}
                        className="group cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105 border-gray-200 relative"
                    >
                        {ocasion.nuevo && (
                            <div className="absolute -top-2 -right-2 z-10">
                                <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg">
                                    Nuevo
                                </span>
                            </div>
                        )}
                        <CardContent className="p-3 md:p-4">
                            <div className="aspect-square mb-3 overflow-hidden rounded-lg bg-gray-50 relative">
                                <Image
                                    src={ocasion.imagen || "/placeholder.svg"}
                                    alt={ocasion.nombre}
                                    fill
                                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
                                    className="object-cover group-hover:scale-110 transition-transform duration-300"
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