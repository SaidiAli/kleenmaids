import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface ServiceCardProps {
    title: string;
    image: string;
    link: string;
    className?: string;
}

const ServiceCard = ({ title, image, link, className = "" }: ServiceCardProps) => {
    return (
        <Link href={link}>
            <div className={`group relative overflow-hidden rounded-lg h-80 transition-transform duration-300 hover:scale-105 cursor-pointer ${className}`}>
                {/* Background Image */}
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/20 transition-opacity duration-300 group-hover:bg-black/50" />

                {/* Content */}
                <div className="absolute inset-0 flex items-end p-8">
                    <h3 className="text-white text-2xl font-semibold tracking-wide">
                        {title}
                    </h3>
                </div>
            </div>
        </Link>
    );
};

export default ServiceCard;