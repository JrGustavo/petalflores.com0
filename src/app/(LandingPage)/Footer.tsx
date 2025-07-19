"use client"

import { ChevronRight, Instagram, Linkedin, Twitter } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import Link from "next/link";

const footerLinks = [
    {
        title: "Petal flores",
        links: [
            { name: "Nuestra historia", href: "#" },
            { name: "Sostenibilidad", href: "#" },
            { name: "Noticias Petal", href: "#" },
            { name: "Carreras", href: "#" },
            { name: "Ocasiones Petal", href: "#" }
        ]
    },
    {
        title: "Flores & Plantas",
        links: [
            { name: "Cuidado de plantas", href: "#" },
            { name: "Floristería a domicilio", href: "#" },
            { name: "Suscripción de flores", href: "#" },
            { name: "Regalos Corporativos", href: "#" },
            { name: "Ocasiones especiales", href: "#" }
        ]
    },
    {
        title: "Experiencia al cliente",
        links: [
            { name: "Rastrear mi pedido", href: "#" },
            { name: "Ayuda", href: "#" },
            { name: "Recomiende a un amigo", href: "#" },
            { name: "Escuela de floristas", href: "#" },
            { name: "Portal de proveedores", href: "#" },
        ]
    }
]

const footerLinksEn = [
    {
        title: "Petal",
        links: [
            { name: "About Us", href: "#" },
            { name: "Support Center", href: "#" },
            { name: "Careers", href: "#" },
            { name: "Petal News", href: "#" }
        ]
    },
    {
        title: "Products",
        links: [
            { name: "Petal Platform", href: "#" },
            { name: "Fraud Prevention", href: "#" },
            { name: "KYB Verification", href: "#" },
            { name: "Petal Score", href: "#" }
        ]
    },
    {
        title: "Developers",
        links: [
            { name: "Documentation", href: "#" },
            { name: "Libraries & API", href: "#" },
            { name: "Integrations", href: "#" },
            { name: "Petal Templates", href: "#" }
        ]
    }
]

type Language = 'es' | 'en'

export default function Footer() {
    const [language, setLanguage] = useState<Language>('es')
    const toggleLanguage = () => setLanguage(prev => (prev === 'es' ? 'en' : 'es'))
    const currentLinks = language === 'es' ? footerLinks : footerLinksEn

    return (
        <footer className="bg-[#F9ECD7] text-black py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="space-y-6">
                    <button
                        onClick={toggleLanguage}
                        className="flex items-center space-x-2 bg-black rounded-full py-2 px-4 w-fit hover:bg-[#00211E] text-white transition-colors"
                        aria-label={`Change language to ${language === 'es' ? 'English' : 'Spanish'}`}
                    >
                        <Image
                            src={language === 'es' ? "/Banderas/Español.png" : "/Banderas/Ingles.png"}
                            alt={language === 'es' ? "Spanish Flag" : "US Flag"}
                            width={30}
                            height={20}
                        />
                        <span>{language === 'es' ? 'Español' : 'English'}</span>
                        <ChevronRight size={16} />
                    </button>

                    <h1 className="text-2xl font-bold">
                        {language === 'es' ? 'Síguenos:' : 'Follow us:'}
                    </h1>

                    <div className="flex space-x-4 ml-[12px]">
                        <Link href="https://www.linkedin.com/company/fleet-ai" aria-label="LinkedIn">
                            <Linkedin size={24} className="hover:text-[#00211E]" />
                        </Link>
                        <Link href="https://x.com/" aria-label="Twitter">
                            <Twitter size={24} className="hover:text-[#00211E]" />
                        </Link>
                        <Link href="https://www.instagram.com/" aria-label="Instagram">
                            <Instagram size={24} className="hover:text-[#00211E]" />
                        </Link>
                    </div>
                </div>

                {currentLinks.map((section, index) => (
                    <div key={index} className="space-y-4">
                        <h3 className="text-lg font-semibold">{section.title}</h3>
                        <ul className="space-y-2">
                            {section.links.map((link, linkIndex) => (
                                <li key={linkIndex}>
                                    <Link href={link.href} className="text-black hover:underline hover:text-[#00211E]">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* RoseAI Logo */}
            <div className="mt-12 md:mt-16 relative px-4">


            </div>

            {/* Legal Section */}
            <div className="text-lg md:text-sm text-[#000000] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
                <p className="text-center">
                    Copyright © 2025 Petal S.A.S. Todos los derechos reservados.
                </p>
                <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-4">
                    <Link href="#" className="hover:text-[#00211E] underline underline-offset-2">Términos y condiciones </Link>
                    <Link href="#" className="hover:text-[#00211E] underline underline-offset-2">Política de privacidad </Link>
                    <Link href="https://petalflores.com" className="hover:text-[#00211E] underline underline-offset-2" target="_blank" rel="noopener noreferrer">
                        petalflores.com
                    </Link>
                </div>
            </div>
        </footer>
    )
}