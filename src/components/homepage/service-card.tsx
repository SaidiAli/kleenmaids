import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

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
                <motion.div
                    className="absolute inset-0"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                >
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover"
                    />
                </motion.div>

                {/* Dark Overlay */}
                <motion.div 
                    className="absolute inset-0 bg-black/20"
                    whileHover={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
                    transition={{ duration: 0.3 }}
                />

                {/* Content */}
                <motion.div 
                    className="absolute inset-0 flex items-end p-4 sm:p-6 lg:p-8"
                    initial={{ y: 20, opacity: 0.8 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                >
                    <motion.h3 
                        className="text-white text-lg sm:text-xl lg:text-2xl font-semibold tracking-wide leading-tight"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400 }}
                    >
                        {title}
                    </motion.h3>
                </motion.div>
            </motion.div>
        </Link>
    );
};

export default ServiceCard;