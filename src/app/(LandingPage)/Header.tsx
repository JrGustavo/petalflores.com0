"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

interface Slide {
    id: number
    title: string
    subtitle: string
    buttonText: string
    image: string
    imageAlt: string
}

const slides: Slide[] = [
    {
        id: 1,
        title: "Descubre los Girasoles",
        subtitle: "La flor más fresca del verano",
        buttonText: "Ver colección",
        image: "/images/sunflowers.png",
        imageAlt: "Hermosos girasoles y flores coloridas",
    },
    {
        id: 2,
        title: "Rosas Elegantes",
        subtitle: "Perfectas para ocasiones especiales",
        buttonText: "Explorar rosas",
        image: "/placeholder.svg?height=600&width=800",
        imageAlt: "Elegante ramo de rosas rojas",
    },
    {
        id: 3,
        title: "Tulipanes Primaverales",
        subtitle: "Colores vibrantes que alegran tu día",
        buttonText: "Ver tulipanes",
        image: "/placeholder.svg?height=600&width=800",
        imageAlt: "Campo de tulipanes coloridos",
    },
    {
        id: 4,
        title: "Orquídeas Exóticas",
        subtitle: "Belleza tropical en tu hogar",
        buttonText: "Descubrir orquídeas",
        image: "/placeholder.svg?height=600&width=800",
        imageAlt: "Orquídeas exóticas moradas",
    },
    {
        id: 5,
        title: "Lavanda Aromática",
        subtitle: "Fragancia relajante y natural",
        buttonText: "Ver lavanda",
        image: "/placeholder.svg?height=600&width=800",
        imageAlt: "Campo de lavanda púrpura",
    },
]

export default function Header() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [isAutoPlaying, setIsAutoPlaying] = useState(true)

    // Auto-play functionality
    useEffect(() => {
        if (!isAutoPlaying) return

        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length)
        }, 4000) // Change slide every 4 seconds

        return () => clearInterval(interval)
    }, [isAutoPlaying])

    const goToSlide = (index: number) => {
        setCurrentSlide(index)
    }

    const goToPrevious = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    }

    const goToNext = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
    }

    const handleMouseEnter = () => {
        setIsAutoPlaying(false)
    }

    const handleMouseLeave = () => {
        setIsAutoPlaying(true)
    }

    return (
        <header
            className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* Slides Container */}
            <div
                className="flex transition-transform duration-700 ease-in-out h-full"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
                {slides.map((slide) => (
                    <div key={slide.id} className="min-w-full h-full relative">
                        {/* Background Image */}
                        <div className="absolute inset-0">
                            <Image
                                src={slide.image || "/placeholder.svg"}
                                alt={slide.imageAlt}
                                fill
                                className="object-cover"
                                priority={slide.id === 1}
                            />
                            {/* Overlay for better text readability */}
                            <div className="absolute inset-0 bg-black/20" />
                        </div>

                        {/* Content */}
                        <div className="relative z-10 h-full flex items-center">
                            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                                    {/* Text Content */}
                                    <div className="text-center lg:text-left space-y-6">
                                        <div className="space-y-4">
                                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                                                {slide.title}
                                            </h1>
                                            <p className="text-lg md:text-xl text-gray-700 max-w-md mx-auto lg:mx-0">{slide.subtitle}</p>
                                        </div>
                                        <Button
                                            size="lg"
                                            className="bg-teal-800 hover:bg-teal-900 text-white px-8 py-3 rounded-full text-lg font-medium transition-colors"
                                        >
                                            {slide.buttonText}
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 transition-colors shadow-lg"
                aria-label="Slide anterior"
            >
                <ChevronLeft className="w-6 h-6" />
            </button>

            <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 transition-colors shadow-lg"
                aria-label="Siguiente slide"
            >
                <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${
                            index === currentSlide ? "bg-white" : "bg-white/50 hover:bg-white/75"
                        }`}
                        aria-label={`Ir al slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Progress Bar */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-white/30 z-20">
                <div
                    className="h-full bg-white transition-all duration-4000 ease-linear"
                    style={{
                        width: isAutoPlaying ? "100%" : "0%",
                        animation: isAutoPlaying ? "progress 4s linear infinite" : "none",
                    }}
                />
            </div>

            <style jsx>{`
        @keyframes progress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
        </header>
    )
}
