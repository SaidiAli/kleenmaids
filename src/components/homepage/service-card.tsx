import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import cloudinaryLoader from "@/lib/cloudinaryLoader";

interface ServiceCardProps {
    title: string;
    image: string;
    link: string;
    className?: string;
}

const ServiceCard = ({ title, image, link, className = "" }: ServiceCardProps) => {
    return (
        <Link href={link}>
            <motion.div
                className={`group relative overflow-hidden rounded-lg h-64 sm:h-72 lg:h-80 cursor-pointer ${className}`}
                whileHover={{
                    scale: 1.05,
                    rotateY: 5,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                }}
                transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20
                }}
            >
                {/* Background Image */}
                <div className="absolute inset-0">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                </div>

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/60 transition-colors duration-300" />

                {/* Content */}
                <div className="absolute bottom-6 left-8 right-8">
                    <h3 className="text-white text-2xl sm:text-3xl font-semibold tracking-wide leading-tight group-hover:scale-105 transition-transform duration-300">
                        {title}
                    </h3>
                </div>
            </motion.div>
        </Link>
    );
};

export default ServiceCard;