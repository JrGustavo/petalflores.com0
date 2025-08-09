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
    Pyramid, SquareDashedMousePointer, Github, Flower2,
    Flower, Clover, Sun, Leaf, Sprout, Dog, Candy, Torus, Flame, Cookie, Cake, Baby, ScanHeart, Gem,

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
                    <AccordionTrigger className='text-white'>Flores</AccordionTrigger>
                    <AccordionContent>
                        <Link
                            href="/"
                            className='flex pt-10'
                            onClick={handleLinkClick}
                        >
                            <div>
                                <Flower className='h-6 w-6 mr-4 text-[#F4F4F4]' />
                            </div>
                            <div className="text-[#F4F4F4]">
                                Arreglos florales
                            </div>
                        </Link>
                        <Link
                            href="/"

                            className='flex pt-10'
                            onClick={handleLinkClick}
                        >
                            <div>
                                <Flower2 className='h-6 w-6 mr-4 text-[#F4F4F4]' />
                            </div>

                            <div className="text-[#F4F4F4]">
                                Amor y Amistad
                            </div>

                        </Link>
                        <Link
                            href="/"
                            className='flex pt-10'
                            onClick={handleLinkClick}

                        >
                            <div>
                                <Clover className='h-6 w-6 mr-4 text-[#F4F4F4]' />
                            </div>

                            <div className="text-[#F4F4F4]">
                                Rosas preservadas
                            </div>

                        </Link>
                        <Link
                            href="/"
                            className='flex pt-10'
                            onClick={handleLinkClick}

                        >
                            <div>
                                <Sun  className='h-6 w-6 mr-4 text-[#F4F4F4]' />
                            </div>

                            <div className="text-[#F4F4F4]">
                                Todas las flores
                            </div>

                        </Link>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem
                    className="my-6 border-[#F4F4F4]"

                    value="item-2">
                    <AccordionTrigger className="text-[#F4F4F4]">Plantas</AccordionTrigger>
                    <AccordionContent>
                        <Link
                            href="/"
                            className='flex pt-10'
                            onClick={handleLinkClick}
                        >
                            <div>
                                <Flower className='h-6 w-6 mr-4 text-[#F4F4F4]' />
                            </div>
                            <div className="text-[#F4F4F4]">
                                Orquídeas
                            </div>
                        </Link>
                        <Link
                            href="/"

                            className='flex pt-10'
                            onClick={handleLinkClick}

                        >
                            <div>
                                <Leaf className='h-6 w-6 mr-4 text-[#F4F4F4]' />
                            </div>

                            <div className="text-[#F4F4F4]">
                                Plantas de interior
                            </div>

                        </Link>
                        <Link
                            href="/"

                            className='flex pt-10'
                            onClick={handleLinkClick}
                        >
                            <div>
                                <Sprout className='h-6 w-6 mr-4 text-[#F4F4F4]' />
                            </div>

                            <div className="text-[#F4F4F4]">
                                Plantas de exterior
                            </div>

                        </Link>
                        <Link
                            href="/"

                            className='flex pt-10'
                            onClick={handleLinkClick}
                        >
                            <div>
                                <Dog className='h-6 w-6 mr-4 text-[#F4F4F4]' />
                            </div>

                            <div className="text-[#F4F4F4]">
                                Plantas Pet-Friendly
                            </div>

                        </Link>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem
                    className="my-6 border-[#F4F4F4]"


                    value="item-3">
                    <AccordionTrigger className="text-[#F4F4F4]">Regalos</AccordionTrigger>
                    <AccordionContent>
                        <Link
                            href="/"
                            className='flex pt-10 '
                            onClick={handleLinkClick}
                        >
                            <div>
                                <Candy className='h-6 w-6 mr-4 text-[#F4F4F4]' />
                            </div>
                            <div className="text-[#F4F4F4]">
                                Chocolates artesanales
                            </div>
                        </Link>
                        <Link
                            href="/"
                            className='flex pt-10'
                            onClick={handleLinkClick}

                        >
                            <div>
                                <Cookie className='h-6 w-6 mr-4 text-[#F4F4F4]' />
                            </div>

                            <div className="text-[#F4F4F4]">
                                Desayunos sorpresa
                            </div>

                        </Link>
                        <Link
                            href="/"

                            className='flex pt-10'
                            onClick={handleLinkClick}

                        >
                            <div>
                                <Flame className='h-6 w-6 mr-4 text-[#F4F4F4]' />
                            </div>

                            <div className="text-[#F4F4F4]">
                                Velas aromáticas
                            </div>

                        </Link>

                        <Link
                            href="/"
                            className='flex pt-10'
                            onClick={handleLinkClick}

                        >
                            <div>
                                <Torus  className='h-6 w-6 mr-4 text-[#F4F4F4]' />
                            </div>
                            <div className="text-[#F4F4F4]">
                                Globos
                            </div>

                        </Link>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem
                    className="my-6 border-[#F4F4F4]"

                    value="item-4">
                    <AccordionTrigger className="text-[#F4F4F4]">Ocasiones</AccordionTrigger>
                    <AccordionContent>
                        <Link
                            href="/"
                            className='flex pt-10'
                            onClick={handleLinkClick}

                        >
                            <div>
                                <Cake className='h-6 w-6 mr-4 text-[#F4F4F4]' />
                            </div>
                            <div className="text-[#F4F4F4]">
                                Cumpleaños
                            </div>
                        </Link>
                        <Link
                            href="/"
                            className='flex pt-10'

                            onClick={handleLinkClick}
                        >
                            <div>
                                <Baby className='h-6 w-6 mr-4 text-[#F4F4F4]' />
                            </div>

                            <div className="text-[#F4F4F4]">
                                Nacimiento
                            </div>

                        </Link>
                        <Link
                            href="/Noticias"
                            className='flex pt-10'
                            onClick={handleLinkClick}
                        >
                            <div>
                                <ScanHeart className='h-6 w-6 mr-4 text-[#F4F4F4]' />
                            </div>

                            <div className="text-[#F4F4F4]">
                                Aniversario
                            </div>
                        </Link>
                        <Link
                            href="/"
                            className='flex pt-10'
                            onClick={handleLinkClick}
                        >
                            <div>
                                <Gem className='h-6 w-6 mr-4 text-[#F4F4F4]' />
                            </div>

                            <div className="text-[#F4F4F4]">
                                Todas las ocasiones
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
        hover:bg-[#000000]
        p-6
        rounded-[40px]
        hover:scale-110
        transition-all
        duration-300
        shadow-md
        hover:shadow-xl
    ">
                            Suscripciones
                        </Button>
                    </Link>
                    <Link href={"/"}>
                        <Button
                            className="
        text-primary-600
        text-sm
        font-bold
        bg-[#FDF888]
        hover:bg-[#FDF888]
        p-6
        rounded-[40px]
        transition-all
        duration-300
        hover:shadow-lg
        hover:scale-105
        hover:-translate-y-1
        active:scale-95
        active:translate-y-0
    ">
                            Comprar ahora
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default DropdownMenu;