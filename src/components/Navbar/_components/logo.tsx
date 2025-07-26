import Image from "next/image";
import Link from "next/link";



const Logo = ({ isScrolled }: { isScrolled: boolean }) => {
    return (
        <div className="flex items-center">
            <Link href={"/"} className="flex items-center">
                <Image
                    src={isScrolled ? "/Logo/PetalfloresLogoBlack.svg" : "/Logo/PetalFloresLogoWhite.svg"}
                    alt="Petal Flores Logo"
                    width={120}
                    height={40}
                    className="h-10 w-auto object-contain transition-all duration-300 hover:scale-105"
                    priority
                />
            </Link>
        </div>
    );
}

export default Logo;