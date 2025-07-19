"use client";



import React, { useState } from "react";

import {

    Building2,
    BookOpenText,
    ChevronDown,
    CreditCard,
    LayoutDashboard,
    PencilRuler,
    Rocket,
    QrCode,
    Github,
    LifeBuoy,
    Newspaper,
    TicketPercent,
    BriefcaseBusiness,
    ShoppingBasket,
    ScanEye,
    Pyramid, SquareDashedMousePointer,

} from "lucide-react";
import ContentMenu from "@/components/Navbar/_components/content-menu";


interface MenuItem {
    title: string;
    menu: string;
    options: { label: string; emoji: React.ReactElement; href: string }[];
}

const items: MenuItem[] = [
    {
        title: "Productos ",
        menu: "productos-petal",
        options: [
            {
                label: "Plataforma Petal",
                emoji: <LayoutDashboard className="text-[#00211E] font-bold" />,
                href: "/Plataforma",
            },
            {
                label: "Prevención del fraude",
                emoji: <SquareDashedMousePointer className="text-[#00211E]" />,
                href: "/Prevencion",
            },
            {
                label: "Verificación KYB",
                emoji: <ScanEye className="text-[#00211E]" />,
                href: "/Verificacion",
            },
            {
                label: "Petal Score",
                emoji: <Pyramid className="text-[#00211E]" />,
                href: "/PetalScore",
            },
        ],
    },

    {
        title: "Soluciones",
        menu: "Soluciones",
        options: [
            {
                label: "Bancos",
                emoji: <Building2 className="text-[#00211E]" />,
                href: "/Bancos",
            },
            {
                label: "Fintechs",
                emoji: <CreditCard className="text-[#00211E]" />,
                href: "/Fintechs",
            },
            {
                label: "Startups",
                emoji: <Rocket className="text-[#00211E]" />,
                href: "/Startups",
            },
            {
                label: "Plataformas",
                emoji: <ShoppingBasket className="text-[#00211E]" />,
                href: "/Plataformas",
            },
        ],
    },
    {
        title: "Developers",
        menu: "Developers",
        options: [
            {
                label: "Documentación",
                emoji: <QrCode className="text-[#00211E]" />,
                href: "/Documentacion",
            },
            {
                label: "Bibliotecas & API",
                emoji: <BookOpenText className="text-[#00211E]" />,
                href: "/Bibliotecas",
            },
            {
                label: "Integraciones",
                emoji: <PencilRuler className="text-[#00211E]" />,
                href: "/Integraciones",
            },
            {
                label: "Petal Templates",
                emoji: <Github className="text-[#00211E]" />,
                href: "/PetalTemplates",
            },

        ],
    },
    {
        title: "Recursos",
        menu: "Recursos",
        options: [
            {
                label: "Centro de soporte ",
                emoji: <LifeBuoy className="text-[#00211E]" />,
                href: "/Centro",
            },
            {
                label: "Contactar Ventas",
                emoji: <TicketPercent className="text-[#00211E]" />,
                href: "/Contacto",
            },
            {
                label: "Noticias Petal",
                emoji: <Newspaper className="text-[#00211E]" />,
                href: "/Noticias",
            },
            {
                label: "Carreras",
                emoji: <BriefcaseBusiness className="text-[#00211E]" />,
                href: "/Carreras",
            },
        ],
    },
];

export function NavigationMenuBar() {
    const [activeMenu, setActiveMenu] = useState<string | null>(null);

    const handleMouseEnter = (menu: string) => {
        setActiveMenu(menu);
    };

    const handleMouseLeave = () => {
        setActiveMenu(null);
    };

    const renderMenu = (item: MenuItem) => {
        const { title, menu, options } = item;

        return (
            <div
                className="
         flex
         items-center
         relative


         "
                onMouseEnter={() => handleMouseEnter(menu)}
                onMouseLeave={handleMouseLeave}
            >
                <div className="flex items-center">
                    <div className="w-24 text-[#F4F4F4]">{title}</div>
                    <div>
                        <ChevronDown className="relative top-[1px] h-3 w-3 text-[#F4F4F4]"  />
                    </div>
                    <div className="mt-20 ">
                        {activeMenu === menu && (
                            <ContentMenu
                                options={options.map((option) => ({
                                    ...option,
                                    href: option.href,
                                }))}
                            />
                        )}
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div
            className="
        hidden
        text-md
        font-bold
        space-x-4
        w-full
        items-center
        xl:flex
        h-24
        "
        >
            {items.map((item, index) => (
                <React.Fragment key={index}>
                    <div className="cursor-pointer hidden xl:block">
                        {renderMenu(item)}
                    </div>
                </React.Fragment>
            ))}
        </div>
    );
}