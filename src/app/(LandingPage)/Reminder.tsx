import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function Reminder() {
    return (
        <Card className="w-full max-w-4xl mx-auto bg-amber-50 border-amber-100">
            <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                    <div className="flex-1">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">🌸 Comparte la belleza, gana recompensas 🌸
                        </h2>
                        <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-2xl">
                            Tu referido: Descuento en su primera compra
                            Tú: Créditos para tus próximos arreglos.
                            Es así de fácil: comparte la magia de Petal Flores y obtén recompensas por cada referido exitoso..
                        </p>
                    </div>
                    <div className="flex-shrink-0">
                        <Button
                            size="lg"
                            className="w-full md:w-auto bg-[#000000] hover:bg-[#F5F0E9] hover:text-black text-white px-6 py-3 text-base font-medium transition-colors duration-300"
                        >
                            Compartir cupón
                        </Button>
                    </div>
                </div>
            </div>
        </Card>
    )
}