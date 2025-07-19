"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"

interface Review {
    id: number
    name: string
    location: string
    rating: number
    review: string
    images: string[]
}

const reviews: Review[] = [
    {
        id: 1,
        name: "Janna",
        location: "Verified Buyer - Santa Monica, CA",
        rating: 5,
        review:
            "The flowers were absolutely beautiful and my best friend loved the exact same thing. Would highly recommend UrbanStems.",
        images: ["/placeholder.svg?height=300&width=200", "/placeholder.svg?height=300&width=200"],
    },
    {
        id: 2,
        name: "Lew",
        location: "Verified Buyer - New York, New York",
        rating: 5,
        review:
            "I ordered a hot pink arrangement for a big anniversary (aren't they all?) and it exceeded my expectations in every way. The arrangement was beautiful and the delivery was sensational.",
        images: ["/placeholder.svg?height=300&width=200", "/placeholder.svg?height=300&width=200"],
    },
    {
        id: 3,
        name: "Jennifer",
        location: "Verified Buyer - Tampa, FL",
        rating: 5,
        review:
            "Finally an online florist with product that you aren't going to see the exact same thing at a dozen other online florists. UrbanStems by far offered the best selection, most reasonable pricing and their customer service is impeccable!!",
        images: ["/placeholder.svg?height=300&width=200", "/placeholder.svg?height=300&width=200"],
    },
    {
        id: 4,
        name: "Kara",
        location: "Verified Buyer - Arlington, VA",
        rating: 5,
        review:
            "I've been using them for about a year now and I still get excited when the UrbanStems box arrives. The flowers are different every season and I now have an amazing vase collection. And their customer service is amazing!",
        images: ["/placeholder.svg?height=300&width=200", "/placeholder.svg?height=300&width=200"],
    },
]

export default function Reseñas() {
    return (
        <section className="py-16 px-4 max-w-7xl mx-auto">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-4">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900">
                    More Than 20,000 Five-Star Reviews
                </h2>
                <Button
                    variant="outline"
                    className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-colors duration-300 bg-transparent"
                >
                    SEE ALL REVIEWS
                </Button>
            </div>

            {/* Reviews Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {reviews.map((review) => (
                    <Card
                        key={review.id}
                        className="group cursor-pointer border-0 shadow-none hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
                    >
                        <CardContent className="p-0">
                            {/* Images Stack */}
                            <div className="relative mb-6 h-64 overflow-hidden">
                                {review.images.map((image, index) => (
                                    <div
                                        key={index}
                                        className={`absolute transition-all duration-700 group-hover:scale-105 ${
                                            index === 0 ? "top-0 left-4 z-20 group-hover:rotate-3" : "top-4 left-0 z-10 group-hover:-rotate-2"
                                        }`}
                                        style={{
                                            transform: `rotate(${index === 0 ? "2deg" : "-2deg"})`,
                                        }}
                                    >
                                        <img
                                            src={image || "/placeholder.svg"}
                                            alt={`${review.name}'s flower arrangement ${index + 1}`}
                                            className="w-48 h-56 object-cover rounded-lg shadow-lg border-4 border-white"
                                        />
                                    </div>
                                ))}
                            </div>

                            {/* Review Content */}
                            <div className="px-2 space-y-4">
                                {/* Name */}
                                <h3 className="text-xl font-medium text-gray-900 group-hover:text-gray-700 transition-colors duration-300">
                                    {review.name}
                                </h3>

                                {/* Location */}
                                <p className="text-sm text-gray-600 group-hover:text-gray-500 transition-colors duration-300">
                                    {review.location}
                                </p>

                                {/* Stars */}
                                <div className="flex space-x-1">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className="w-4 h-4 fill-yellow-400 text-yellow-400 group-hover:scale-110 transition-transform duration-300"
                                            style={{ transitionDelay: `${i * 50}ms` }}
                                        />
                                    ))}
                                </div>

                                {/* Review Text */}
                                <blockquote className="text-gray-700 text-sm leading-relaxed italic group-hover:text-gray-600 transition-colors duration-300">
                                    "{review.review}"
                                </blockquote>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    )
}
