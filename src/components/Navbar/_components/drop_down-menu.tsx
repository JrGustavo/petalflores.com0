import { Button } from "@/components/ui/button"
import Link from "next/link";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from '@/components/ui/accordion'

import {

    Building2,
    BookOpenText,
    CreditCard,
    LayoutDashboard,
    PencilRuler,
    Rocket,
    QrCode,
    LifeBuoy,
    Newspaper,
    TicketPercent,
    BriefcaseBusiness,
    ShoppingBasket,
    ScanEye,
    Pyramid, SquareDashedMousePointer, Github,

} from "lucide-react";
import React from "react";

interface DropDownMenuProps {
    onClose: () => void;
}

const DropdownMenu : React.FC<DropDownMenuProps> = ({onClose}) => {

    const handleLinkClick = () => {
        onClose();
    }

    return (
        <div className="w-screen h-screen bg-[#00211E] pt-20 px-4 items-center justify-center absolute top-20 right-0 xl:hidden ">
            <Accordion
                className="
            pl-2
            "
                type="single"
                collapsible
            >
                <AccordionItem
                    className="my-6 border-[#F4F4F4]"

                    value="item-1">
                    <AccordionTrigger className='text-[#F4F4F4]'>Flores</AccordionTrigger>
                    <AccordionContent>
                        <Link
                            href="/Plataforma"
                            className='flex pt-10'
                            onClick={handleLinkClick}
                        >
                            <div>
                                <LayoutDashboard className='h-6 w-6 mr-4 text-[#F4F4F4]' />
                            </div>
                            <div className="text-[#F4F4F4]">
                                Plataforma Fleet
                            </div>
                        </Link>
                        <Link
                            href="/Prevencion"

                            className='flex pt-10'
                            onClick={handleLinkClick}
                        >
                            <div>
                                <SquareDashedMousePointer className='h-6 w-6 mr-4 text-[#F4F4F4]' />
                            </div>

                            <div className="text-[#F4F4F4]">
                                Prevención del fraude
                            </div>

                        </Link>
                        <Link
                            href="/Verificacion"
                            className='flex pt-10'
                            onClick={handleLinkClick}

                        >
                            <div>
                                <ScanEye className='h-6 w-6 mr-4 text-[#F4F4F4]' />
                            </div>

                            <div className="text-[#F4F4F4]">
                                Verificación KYB
                            </div>

                        </Link>
                        <Link
                            href="/FleetScore"
                            className='flex pt-10'
                            onClick={handleLinkClick}

                        >
                            <div>
                                <Pyramid  className='h-6 w-6 mr-4 text-[#F4F4F4]' />
                            </div>

                            <div className="text-[#F4F4F4]">
                                Fleet Score
                            </div>

                        </Link>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem
                    className="my-6 border-[#F4F4F4]"

                    value="item-2">
                    <AccordionTrigger className="text-[#F4F4F4]">Soluciones</AccordionTrigger>
                    <AccordionContent>
                        <Link
                            href="/Bancos"
                            className='flex pt-10'
                            onClick={handleLinkClick}
                        >
                            <div>
                                <Building2 className='h-6 w-6 mr-4 text-[#F4F4F4]' />
                            </div>
                            <div className="text-[#F4F4F4]">
                                Bancos
                            </div>
                        </Link>
                        <Link
                            href="/Fintechs"

                            className='flex pt-10'
                            onClick={handleLinkClick}

                        >
                            <div>
                                <CreditCard className='h-6 w-6 mr-4 text-[#F4F4F4]' />
                            </div>

                            <div className="text-[#F4F4F4]">
                                Fintechs
                            </div>

                        </Link>
                        <Link
                            href="/Startups"

                            className='flex pt-10'
                            onClick={handleLinkClick}
                        >
                            <div>
                                <Rocket className='h-6 w-6 mr-4 text-[#F4F4F4]' />
                            </div>

                            <div className="text-[#F4F4F4]">
                                Startups
                            </div>

                        </Link>
                        <Link
                            href="/Plataformas"

                            className='flex pt-10'
                            onClick={handleLinkClick}
                        >
                            <div>
                                <ShoppingBasket className='h-6 w-6 mr-4 text-[#F4F4F4]' />
                            </div>

                            <div className="text-[#F4F4F4]">
                                Plataformas
                            </div>

                        </Link>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem
                    className="my-6 border-[#F4F4F4]"


                    value="item-3">
                    <AccordionTrigger className="text-[#F4F4F4]">Developers</AccordionTrigger>
                    <AccordionContent>
                        <Link
                            href="/Documentacion"
                            className='flex pt-10 '
                            onClick={handleLinkClick}
                        >
                            <div>
                                <QrCode className='h-6 w-6 mr-4 text-[#F4F4F4]' />
                            </div>
                            <div className="text-[#F4F4F4]">
                                Documentación
                            </div>
                        </Link>
                        <Link
                            href="/Bibliotecas"
                            className='flex pt-10'
                            onClick={handleLinkClick}

                        >
                            <div>
                                <BookOpenText className='h-6 w-6 mr-4 text-[#F4F4F4]' />
                            </div>

                            <div className="text-[#F4F4F4]">
                                Bibliotecas & API
                            </div>

                        </Link>
                        <Link
                            href="/Integraciones"

                            className='flex pt-10'
                            onClick={handleLinkClick}

                        >
                            <div>
                                <PencilRuler className='h-6 w-6 mr-4 text-[#F4F4F4]' />
                            </div>

                            <div className="text-[#F4F4F4]">
                                Integraciones
                            </div>

                        </Link>

                        <Link
                            href="/FleetTemplates"
                            className='flex pt-10'
                            onClick={handleLinkClick}

                        >
                            <div>
                                <Github  className='h-6 w-6 mr-4 text-[#F4F4F4]' />
                            </div>
                            <div className="text-[#F4F4F4]">
                                Fleet Templates
                            </div>

                        </Link>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem
                    className="my-6 border-[#F4F4F4]"

                    value="item-4">
                    <AccordionTrigger className="text-[#F4F4F4]">Recursos</AccordionTrigger>
                    <AccordionContent>
                        <Link
                            href="/Centro"
                            className='flex pt-10'
                            onClick={handleLinkClick}

                        >
                            <div>
                                <LifeBuoy className='h-6 w-6 mr-4 text-[#F4F4F4]' />
                            </div>
                            <div className="text-[#F4F4F4]">
                                Centro de soporte
                            </div>
                        </Link>
                        <Link
                            href="/Contacto"
                            className='flex pt-10'

                            onClick={handleLinkClick}
                        >
                            <div>
                                <TicketPercent className='h-6 w-6 mr-4 text-[#F4F4F4]' />
                            </div>

                            <div className="text-[#F4F4F4]">
                                Contactar con ventas
                            </div>

                        </Link>
                        <Link
                            href="/Noticias"
                            className='flex pt-10'
                            onClick={handleLinkClick}
                        >
                            <div>
                                <Newspaper className='h-6 w-6 mr-4 text-[#F4F4F4]' />
                            </div>

                            <div className="text-[#F4F4F4]">
                                Noticias Fleet
                            </div>
                        </Link>
                        <Link
                            href="/Carreras"
                            className='flex pt-10'
                            onClick={handleLinkClick}
                        >
                            <div>
                                <BriefcaseBusiness className='h-6 w-6 mr-4 text-[#F4F4F4]' />
                            </div>

                            <div className="text-[#F4F4F4]">
                                Carreras
                            </div>
                        </Link>
                        <div className='flex pt-10'>
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            <div className="md:pt-32">
                <div className="flex items-center justify-center space-x-4">
                    <Link href={"/"}>
                        <Button
                            className="
                        text-[#F4F4F4]
                        text-sm
                        font-bold
                        bg-[#000000]
                        p-6
                        rounded-[40px]
                        hover:scale-110
                        transition-all
                        duration-300
                        shadow-md
                        hover:shadow-[#00FFC2]
                        ">
                            Ingresar
                        </Button>
                    </Link>
                    <Link href={"/"}>
                        <Button
                            className="
                        text-primary-600
                        text-sm
                        font-bold
                        bg-[#F4F4F4]
                        p-6
                        rounded-[40px]
                        hover:scale-110
                        transition-all
                        duration-300
                        shadow-md
                        hover:shadow-[#00FFC2]
                        ">
                            Contactar con ventas
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default DropdownMenu;