"use client";

import React, { useState } from "react";

import {
    ChevronDown,
    Cake, Baby, ScanHeart, Gem, Candy, Cookie, Flame, Torus, Dog, Sprout, Leaf, Flower, Flower2, Clover, Sun,

} from "lucide-react";
import ContentMenu from "@/components/Navbar/_components/content-menu";
interface NavigationMenuBarProps {
    isScrolled: boolean;
}

interface MenuItem {
    title: string;
    menu: string;
    options: { label: string; emoji: React.ReactElement; href: string }[];
}

const items: MenuItem[] = [
    {
        title: "Flores ",
        menu: "Flores",
        options: [
            {
                label: "Bouquet de flores",
                emoji: <Flower className="text-[#00211E] font-bold" />,
                href: "/Plataforma",
            },
            {
                label: "Flores de temporada",
                emoji: <Flower2 className="text-[#00211E]" />,
                href: "/Prevencion",
            },
            {
                label: "Rosas preservadas",
                emoji: <Clover className="text-[#00211E]" />,
                href: "/RosasPreservadas",
            },
            {
                label: "Todas las flores",
                emoji: <Sun className="text-[#00211E]" />,
                href: "/TodasLasFlores",
            },
        ],
    },

    {
        title: "Plantas",
        menu: "Plantas",
        options: [
            {
                label: "Orquídeas",
                emoji: <Flower className="text-[#00211E]" />,
                href: "/Orquideas",
            },
            {
                label: "Plantas de interior",
                emoji: <Leaf className="text-[#00211E]" />,
                href: "/PlantasInterior",
            },
            {
                label: "Plantas de exterior",
                emoji: <Sprout className="text-[#00211E]" />,
                href: "/PlantasExterior",
            },
            {
                label: "Plantas Pet-friendly",
                emoji: <Dog className="text-[#00211E]" />,
                href: "/PlantasPetFriendly",
            },
        ],
    },
    {
        title: "Regalos",
        menu: "Regalos",
        options: [
            {
                label: "Chocolates artesanales",
                emoji: <Candy className="text-[#00211E]" />,
                href: "/Chocolates",
            },
            {
                label: "Desayunos sorpresa",
                emoji: <Cookie className="text-[#00211E]" />,
                href: "/Desayunos",
            },
            {
                label: "Velas aromáticas",
                emoji: <Flame className="text-[#00211E]" />,
                href: "/Velas",
            },
            {
                label: "Globos",
                emoji: <Torus className="text-[#00211E]" />,
                href: "/Globos",
            },

        ],
    },
    {
        title: "Ocasiones",
        menu: "Ocasiones",
        options: [
            {
                label: "Cumpleaños ",
                emoji: <Cake className="text-[#00211E]" />,
                href: "/Cumpleaños",
            },
            {
                label: "Nacimiento",
                emoji: <Baby className="text-[#00211E]" />,
                href: "/Nacimiento",
            },
            {
                label: "Aniversario",
                emoji: <ScanHeart className="text-[#00211E]" />,
                href: "/Aniversario",
            },
            {
                label: "Todas las ocasiones",
                emoji: <Gem className="text-[#00211E]" />,
                href: "/TodasLasOcasiones",
            },
        ],
    },
];

export function NavigationMenuBar({ isScrolled }: NavigationMenuBarProps) {
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
                    <div className={`w-24 transition-colors duration-300 font-bold ${isScrolled ? '!text-black' : '!text-white'}`}>
                        {title}
                    </div>
                    <div>
                        <ChevronDown className={`relative top-[1px] h-3 w-3 transition-colors duration-300 ${isScrolled ? '!text-black' : '!text-white'}`} />
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