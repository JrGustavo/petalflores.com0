"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface Category {
    id: string
    title: string
    description: string
    image: string
    labelColor: string
}

const categories: Category[] = [
    {
        id: "1",
        title: "Summer stems",
        description: "In a riot of vivid, energy-giving shades.",
        image: "/placeholder.svg?height=400&width=300",
        labelColor: "bg-yellow-300",
    },
    {
        id: "2",
        title: "Al fresco treats",
        description: "Gifts guaranteed to leave no crumbs.",
        image: "/placeholder.svg?height=400&width=300",
        labelColor: "bg-yellow-300",
    },
    {
        id: "3",
        title: "British flowers",
        description: "100% seasonal. 100% stunning.",
        image: "/placeholder.svg?height=400&width=300",
        labelColor: "bg-yellow-300",
    },
    {
        id: "4",
        title: "Characterful plants",
        description: "Our famous summer edibles are back.",
        image: "/placeholder.svg?height=400&width=300",
        labelColor: "bg-yellow-300",
    },
    {
        id: "5",
        title: "Flower subscriptions",
        description: "Who deserves to feel like royalty?",
        image: "/placeholder.svg?height=400&width=300",
        labelColor: "bg-yellow-300",
    },
    {
        id: "6",
        title: "Garden essentials",
        description: "Everything you need for the perfect garden.",
        image: "/placeholder.svg?height=400&width=300",
        labelColor: "bg-green-300",
    },
]

export default function Categorias() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isHovered, setIsHovered] = useState(false)
    const carouselRef = useRef<HTMLDivElement>(null)
    const [itemsPerView, setItemsPerView] = useState(4)

    useEffect(() => {
        const updateItemsPerView = () => {
            if (window.innerWidth < 640) {
                setItemsPerView(1)
            } else if (window.innerWidth < 768) {
                setItemsPerView(2)
            } else if (window.innerWidth < 1024) {
                setItemsPerView(3)
            } else {
                setItemsPerView(4)
            }
        }

        updateItemsPerView()
        window.addEventListener("resize", updateItemsPerView)
        return () => window.removeEventListener("resize", updateItemsPerView)
    }, [])

    const maxIndex = Math.max(0, categories.length - itemsPerView)

    const nextSlide = () => {
        setCurrentIndex((prev) => Math.min(prev + 1, maxIndex))
    }

    const prevSlide = () => {
        setCurrentIndex((prev) => Math.max(prev - 1, 0))
    }

    const goToSlide = (index: number) => {
        setCurrentIndex(Math.min(index, maxIndex))
    }

    useEffect(() => {
        if (!isHovered) {
            const interval = setInterval(() => {
                setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
            }, 4000)
            return () => clearInterval(interval)
        }
    }, [isHovered, maxIndex])

    return (
        <section className="w-full py-8 px-4 md:py-12 md:px-6 lg:py-16">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex justify-between items-start mb-6">
                    <div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2">Bursting with newness</h2>
                        <p className="text-lg md:text-xl text-gray-600">
                            {"It's giving texture. It's giving nature. It's giving wild."}
                        </p>
                    </div>
                    <Button variant="link" className="text-gray-900 underline hover:no-underline text-lg font-medium">
                        Shop all
                    </Button>
                </div>

                {/* Carousel Container */}
                <div className="relative" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                    {/* Carousel */}
                    <div className="overflow-hidden" ref={carouselRef}>
                        <div
                            className="flex transition-transform duration-500 ease-in-out gap-4 md:gap-6"
                            style={{
                                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
                            }}
                        >
                            {categories.map((category, index) => (
                                <div
                                    key={category.id}
                                    className="flex-shrink-0 group cursor-pointer"
                                    style={{ width: `calc(${100 / itemsPerView}% - ${((itemsPerView - 1) * 1.5) / itemsPerView}rem)` }}
                                    onClick={() => goToSlide(index)}
                                >
                                    <div className="relative overflow-hidden rounded-lg aspect-[3/4] mb-4">
                                        <Image
                                            src={category.image || "/placeholder.svg"}
                                            alt={category.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                        />

                                        {/* Overlay gradient */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                        {/* Category label */}
                                        <div
                                            className={`absolute bottom-4 left-4 px-3 py-1 rounded-md ${category.labelColor} text-black font-medium text-sm md:text-base transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300`}
                                        >
                                            {category.title}
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <p className="text-gray-700 text-sm md:text-base leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                                        {category.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Arrows */}
                    <div className="flex gap-2 mt-6 justify-end">
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={prevSlide}
                            disabled={currentIndex === 0}
                            className="h-12 w-12 rounded-md border-2 hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200 bg-transparent"
                        >
                            <ChevronLeft className="h-5 w-5" />
                        </Button>
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={nextSlide}
                            disabled={currentIndex >= maxIndex}
                            className="h-12 w-12 rounded-md border-2 hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
                        >
                            <ChevronRight className="h-5 w-5" />
                        </Button>
                    </div>

                    {/* Progress Indicators */}
                    <div className="flex justify-center gap-2 mt-4">
                        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`h-2 rounded-full transition-all duration-300 ${
                                    index === currentIndex ? "w-8 bg-gray-900" : "w-2 bg-gray-300 hover:bg-gray-400"
                                }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}