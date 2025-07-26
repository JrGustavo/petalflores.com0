"use client";

import React, { useState } from "react";

import { Button } from "@/components/ui/button";

import { X, AlignJustify } from "lucide-react";
import Link from "next/link";
import DropdownMenu from "@/components/Navbar/_components/drop_down-menu";

interface ActionButtonsProps {
    isScrolled: boolean;
}

const ActionButtons = ({ isScrolled }: ActionButtonsProps) => {

    const [isDropdownVisible, setDropdownVisible] = useState<boolean>(false);

    const toggleDropdown = () => {
        setDropdownVisible(!isDropdownVisible);
    }

    const closeDropdown = () => {
        setDropdownVisible(false);
    }

    return (
        <div
            className="
    flex
    items-center
    md:justify-end
    md:space-x-6
    sm:px-10
    "
        >
            <div className="flex xl:space-x-6">
                <Link
                    href="/Tarifas"
                    className="
            xl:flex
            items-center
            hidden
            "
                >
                    <div className={`font-bold flex transition-colors duration-300 ${isScrolled ? '!text-black' : '!text-white'}`}>
                        Suscripciones
                    </div>
                </Link>
            </div>

            <div className="flex lg:space-x-4 items-center">
                <Link href={"/Contacto"}>
                    <Button
                        className="
        hidden
        text-[#000000]
        text-md
        font-bold
        bg-[#FDF888]
        p-6
        rounded-[40px]
        hover:scale-110
        transition-all
        duration-300
        shadow-md
        md:hidden
        lg:flex
        hover:shadow-[#F9ECD7]
        hover:bg-[#FDF888]
        hover:text-[#000000]
">
Comprar ahora
                    </Button>
                </Link>
            </div>

            {isDropdownVisible && (
                <div
                    onClick={toggleDropdown}
                    className="
           bg-[#00211E]
             p-3
             rounded-full
             xl:hidden
             ">
                    <X className="h-6 w-6 text-[#F4F4F4] items-center justify-center rounded-full" />
                </div>
            )}

            {!isDropdownVisible && (
                <div
                    onClick={toggleDropdown}
                    className={`p-3 rounded-full xl:hidden transition-colors duration-300 ${isScrolled ? 'bg-[#F4F4F4]' : 'bg-[#F4F4F4]'}`}>
                    <AlignJustify className={`h-6 w-6 items-center justify-center rounded-full transition-colors duration-300 ${isScrolled ? 'text-white' : 'text-primary-600'}`} />
                </div>
            )}

            {isDropdownVisible && <DropdownMenu onClose={closeDropdown} />}
        </div>
    );
};

export default ActionButtons;