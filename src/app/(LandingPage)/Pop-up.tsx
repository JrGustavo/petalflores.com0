"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Copy, Flower, Flower2, X } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function PopUp() {
    const [isOpen, setIsOpen] = useState(false)
    const { toast } = useToast()
    const referralCode = "FLORES2024XYZ"

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(referralCode)
            toast({
                title: "¡Código copiado!",
                description: "El código de referido ha sido copiado al portapapeles",
            })
        } catch (err) {
            toast({
                title: "Error",
                description: "No se pudo copiar el código",
                variant: "destructive",
            })
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 p-4">
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogTrigger asChild>
                    <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-3 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200">
                        <Flower className="w-5 h-5 mr-2" />
                        Ver Código de Referido
                    </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md w-full mx-4 p-0 overflow-hidden border-0 shadow-2xl">
                    <div className="relative bg-gradient-to-br from-pink-100 via-purple-50 to-pink-50">
                        {/* Decorative flowers */}
                        <div className="absolute top-4 left-4 text-pink-300 opacity-60">
                            <Flower2 className="w-8 h-8 sm:w-12 sm:h-12" />
                        </div>
                        <div className="absolute top-6 right-6 text-purple-300 opacity-60">
                            <Flower className="w-6 h-6 sm:w-10 sm:h-10" />
                        </div>
                        <div className="absolute bottom-4 left-6 text-pink-200 opacity-40">
                            <Flower className="w-10 h-10 sm:w-16 sm:h-16" />
                        </div>
                        <div className="absolute bottom-6 right-4 text-purple-200 opacity-40">
                            <Flower2 className="w-6 h-6 sm:w-12 sm:h-12" />
                        </div>

                        {/* Close button */}
                        <Button
                            variant="ghost"
                            size="icon"
                            className="absolute top-4 right-4 z-10 hover:bg-white/20 rounded-full"
                            onClick={() => setIsOpen(false)}
                        >
                            <X className="w-4 h-4" />
                        </Button>

                        <div className="relative z-10 p-6 sm:p-8">
                            <DialogHeader className="text-center mb-6">
                                <div className="flex justify-center mb-4">
                                    <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-3 rounded-full">
                                        <Flower2 className="w-8 h-8 text-white" />
                                    </div>
                                </div>
                                <DialogTitle className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                                    ¡Tu Código de Referido!
                                </DialogTitle>
                                <p className="text-gray-600 mt-2 text-sm sm:text-base">
                                    Comparte este código con tus amigos y obtén beneficios especiales
                                </p>
                            </DialogHeader>

                            <div className="space-y-4">
                                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-pink-200 shadow-lg">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Código de Referido</label>
                                    <div className="flex flex-col sm:flex-row gap-2">
                                        <Input
                                            value={referralCode}
                                            readOnly
                                            className="flex-1 text-center sm:text-left font-mono text-lg font-bold bg-gradient-to-r from-pink-50 to-purple-50 border-pink-300 focus:border-purple-400"
                                        />
                                        <Button
                                            onClick={copyToClipboard}
                                            className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-4 py-2 rounded-lg shadow-md transform hover:scale-105 transition-all duration-200"
                                        >
                                            <Copy className="w-4 h-4 mr-2" />
                                            Copiar
                                        </Button>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-xl p-4 border border-pink-200">
                                    <h3 className="font-semibold text-gray-800 mb-2 flex items-center">
                                        <Flower className="w-4 h-4 mr-2 text-pink-500" />
                                        ¿Cómo funciona?
                                    </h3>
                                    <ul className="text-sm text-gray-600 space-y-1">
                                        <li>• Comparte tu código con amigos</li>
                                        <li>• Ellos obtienen un descuento especial</li>
                                        <li>• Tú recibes puntos de recompensa</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}
