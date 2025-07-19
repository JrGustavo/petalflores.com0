"use client"

import { Button } from "@/components/ui/button"

export default function Impacto() {
    return (
        <div className="min-h-screen bg-[#00211E] flex items-center justify-center p-4">
            <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                {/* Left Content */}
                <div className="space-y-6 lg:space-y-8">
                    <div className="space-y-4">
                        <p className="text-sm font-medium text-white tracking-wide uppercase">FINANCIAL SERVICES</p>
                        <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                            Unlocking new efficiencies across the financial sector
                        </h1>
                    </div>

                    <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                        Cohere connects the dots in your data to deliver real-time intelligence that drives growth, mitigates risk,
                        and lets your team focus on what matters most.
                    </p>

                    <Button
                        size="lg"
                        className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-full text-base font-medium"
                    >
                        Request a demo
                    </Button>
                </div>

                {/* Right Image Space */}
                <div className="relative">
                    <div className="aspect-square lg:aspect-[4/3] bg-gray-100 rounded-3xl flex items-center justify-center border-2 border-dashed border-gray-300">
                        <div className="text-center space-y-2">
                            <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto flex items-center justify-center">
                                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                    />
                                </svg>
                            </div>
                            <p className="text-gray-500 text-sm">Espacio disponible para imagen</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}