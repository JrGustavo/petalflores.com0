"use client";

import { useEffect, useState } from "react";
import Logo from "./_components/logo";
import {NavigationMenuBar} from "@/components/Navbar/_components/menu";
import ActionButtons from "@/components/Navbar/_components/action-buttons";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            setIsScrolled(offset > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`sticky top-0 z-50 h-24 px-4 lg:px-20 flex items-center justify-between transition-colors duration-300 ${
                isScrolled ? "bg-[#00211E]" : "bg-[#F9ECD7] shadow-md"
            }`}
        >
            <div className="flex items-center space-x-4">
                <Logo />
            </div>

            <div className="flex items-center space-x-4">
                <NavigationMenuBar />
                <ActionButtons />
            </div>
        </header>
    );
}