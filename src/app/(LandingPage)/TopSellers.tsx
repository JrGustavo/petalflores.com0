"use client"

import { useState, useRef } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

interface Product {
    id: number
    name: string
    category: string
    image: string
    rating: number
    reviews: number
    price: number
    currency: string
    badge?: {
        text: string
        color: "purple" | "yellow"
    }
}

const products: Product[] = [
    {
        id: 1,
        name: "The Pardeep",
        category: "Hand-tied Flowers",
        image: "/placeholder.svg?height=400&width=400",
        rating: 5,
        reviews: 280,
        price: 36,
        currency: "£",
    },
    {
        id: 2,
        name: "The July Special",
        category: "Hand-tied flowers",
        image: "/placeholder.svg?height=400&width=400",
        rating: 5,
        reviews: 24,
        price: 42,
        currency: "£",
    },
    {
        id: 3,
        name: "The Rue",
        category: "Hand-tied Flowers",
        image: "/placeholder.svg?height=400&width=400",
        rating: 4,
        reviews: 391,
        price: 34,
        currency: "£",
        badge: {
            text: "Double points",
            color: "purple",
        },
    },
    {
        id: 4,
        name: "The Imoge",
        category: "Hand-tied Flowers",
        image: "/placeholder.svg?height=400&width=400",
        rating: 5,
        reviews: 156,
        price: 60,
        currency: "£",
        badge: {
            text: "Bestseller",
            color: "yellow",
        },
    },
    {
        id: 5,
        name: "The Aurora",
        category: "Hand-tied Flowers",
        image: "/placeholder.svg?height=400&width=400",
        rating: 5,
        reviews: 89,
        price: 45,
        currency: "£",
    },
    {
        id: 6,
        name: "The Serenity",
        category: "Hand-tied Flowers",
        image: "/placeholder.svg?height=400&width=400",
        rating: 4,
        reviews: 203,
        price: 38,
        currency: "£",
    },
]

export default function TopSellers() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const carouselRef = useRef<HTMLDivElement>(null)

    const itemsPerView = 3
    const maxIndex = Math.max(0, products.length - itemsPerView)

    const scrollToIndex = (index: number) => {
        if (carouselRef.current) {
            const itemWidth = carouselRef.current.scrollWidth / products.length
            carouselRef.current.scrollTo({
                left: index * itemWidth,
                behavior: "smooth",
            })
        }
    }

    const handlePrevious = () => {
        const newIndex = Math.max(0, currentIndex - 1)
        setCurrentIndex(newIndex)
        scrollToIndex(newIndex)
    }

    const handleNext = () => {
        const newIndex = Math.min(maxIndex, currentIndex + 1)
        setCurrentIndex(newIndex)
        scrollToIndex(newIndex)
    }

    const renderStars = (rating: number) => {
        return Array.from({ length: 5 }).map((_, index) => (
            <Star
                key={index}
                className={`w-4 h-4 ${index < rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`}
            />
        ))
    }

    const progressPercentage = ((currentIndex + itemsPerView) / products.length) * 100

    return (
        <div className="w-full max-w-7xl mx-auto px-6 py-12 bg-white">
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
                <div>
                    <h1 className="text-4xl font-bold text-gray-900 mb-3">Trending now</h1>
                    <p className="text-gray-600 text-lg">The gifts that capture everything we love best about the season.</p>
                </div>
                <button className="text-gray-900 font-medium underline hover:no-underline transition-all">Shop now</button>
            </div>

            {/* Carousel Container */}
            <div className="relative mt-12">
                <div
                    ref={carouselRef}
                    className="flex gap-8 overflow-x-hidden scroll-smooth"
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                    {products.map((product) => (
                        <div key={product.id} className="flex-none w-80 group">
                            <div className="relative mb-6">
                                {/* Badge */}
                                {product.badge && (
                                    <Badge
                                        className={`absolute top-4 right-4 z-10 text-white font-medium px-3 py-1 ${
                                            product.badge.color === "purple"
                                                ? "bg-purple-600 hover:bg-purple-700"
                                                : "bg-yellow-500 hover:bg-yellow-600 text-black"
                                        }`}
                                    >
                                        🏆 {product.badge.text}
                                    </Badge>
                                )}

                                {/* Product Image */}
                                <div className="relative overflow-hidden rounded-lg bg-gray-50">
                                    <Image
                                        src={product.image || "/placeholder.svg"}
                                        alt={product.name}
                                        width={400}
                                        height={400}
                                        className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>

                            {/* Product Info */}
                            <div className="space-y-3">
                                <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
                                <p className="text-gray-600">{product.category}</p>

                                {/* Rating */}
                                <div className="flex items-center gap-2">
                                    <div className="flex">{renderStars(product.rating)}</div>
                                    <span className="text-gray-600 text-sm">({product.reviews})</span>
                                </div>

                                {/* Price and Button */}
                                <div className="flex items-center justify-between pt-2">
                  <span className="text-2xl font-bold text-gray-900">
                    {product.currency}
                      {product.price}
                  </span>
                                    <Button className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-2 font-medium">View</Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Navigation Arrows */}
                <div className="flex gap-2 justify-end mt-8">
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={handlePrevious}
                        disabled={currentIndex === 0}
                        className="h-12 w-12 border-2 border-gray-300 hover:bg-gray-50 disabled:opacity-30 bg-transparent"
                    >
                        <ChevronLeft className="h-5 w-5" />
                    </Button>
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={handleNext}
                        disabled={currentIndex >= maxIndex}
                        className="h-12 w-12 border-2 border-gray-300 hover:bg-gray-50 disabled:opacity-30"
                    >
                        <ChevronRight className="h-5 w-5" />
                    </Button>
                </div>
            </div>

            {/* Progress Bar */}
            <div className="mt-8">
                <div className="w-full bg-gray-200 h-1 rounded-full overflow-hidden">
                    <div
                        className="bg-gray-800 h-full transition-all duration-300 ease-out"
                        style={{ width: `${Math.min(progressPercentage, 100)}%` }}
                    />
                </div>
            </div>
        </div>
    )
}