
"use client"

import { MoveUpRight, ChevronDown, Menu, X } from "lucide-react"
import { Button } from "./ui/button"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { motion } from "motion/react"
import { cn } from "@/lib/utils"

export default function Navbar({ className }: { className: string }) {
    const [isServicesHovered, setIsServicesHovered] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const services = [
        {
            title: "Live-In Maid Placement",
            href: "/services/live-in-maids",
        },
        {
            title: "Scheduled House Cleaning",
            href: "/services/scheduled-cleaning",
        },
        {
            title: "Emergency Maids Solution",
            href: "/services/emergency-maids",
        },
        {
            title: "Professional Cleaning Services",
            href: "/services/cleaning-services",
        },
        {
            title: "Staffing Services",
            href: "/services/staffing-services",
        },
    ]

    return (
        <header className={cn("bg-bluish top-0 z-50 sticky", className)}>
            <div className="container mx-auto px-4 py-2 flex items-center justify-between">
                <div className="flex items-center space-x-8">
                    <Link href="/" className="flex items-center space-x-2 relative">
                        <Image src="/images/logo.png" alt="Logo" width={150} height={75} className="object-contain sm:w-[200px] sm:h-[100px]" />
                    </Link>
                </div>
                <div className="flex items-center gap-4 md:gap-16">
                    <nav className="hidden md:flex items-center space-x-8 uppercase font-bold">
                        <Link href="/" className="text-gray-600 hover:text-greenish transition-colors">
                            Home
                        </Link>
                        <div 
                            className="relative"
                            onMouseEnter={() => setIsServicesHovered(true)}
                            onMouseLeave={() => setIsServicesHovered(false)}
                        >
                            <div className="text-gray-600 hover:text-greenish transition-colors flex items-center gap-1">
                                Services
                                <motion.div
                                    animate={{ rotate: isServicesHovered ? 180 : 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                >
                                    <ChevronDown className="h-4 w-4" />
                                </motion.div>
                            </div>
                            <div 
                                className={`absolute top-full left-0 mt-2 w-64 bg-bluish shadow-lg rounded-none transition-all duration-300 ${
                                    isServicesHovered 
                                        ? 'opacity-100 visible translate-y-0' 
                                        : 'opacity-0 invisible -translate-y-2'
                                }`}
                            >
                                <div className="">
                                    {services.map((service, index) => (
                                        <Link
                                            key={index}
                                            href={service.href}
                                            className="block px-4 py-3 text-sm text-gray-700 hover:bg-greenish hover:text-white transition-colors normal-case"
                                        >
                                            {service.title}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <Link href="/about" className="text-gray-600 hover:text-greenish transition-colors">
                            About
                        </Link>
                        <Link href="/contact" className="text-gray-600 hover:text-greenish transition-colors">
                            Contact
                        </Link>
                    </nav>

                    <button
                        className="md:hidden text-gray-600 hover:text-greenish transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle mobile menu"
                    >
                        {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>

                    <Link href="/contact" className="hidden sm:block">
                        <Button className="bg-greenish hover:bg-tahiti rounded-full px-3 sm:px-6 text-xs sm:text-sm hover:scale-105 transition-all uppercase cursor-pointer">
                            <span className="hidden sm:inline">Book Service</span>
                            <span className="sm:hidden">Book</span>
                            <MoveUpRight className="h-4 w-4 sm:h-5 sm:w-5" />
                        </Button>
                    </Link>
                </div>

                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="md:hidden absolute top-full left-0 right-0 bg-bluish shadow-lg border-t border-gray-200"
                    >
                        <nav className="container mx-auto px-4 py-4 space-y-4">
                            <Link 
                                href="/" 
                                className="block text-gray-600 hover:text-greenish transition-colors uppercase font-bold py-2"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Home
                            </Link>
                            <div className="space-y-2">
                                <div className="text-gray-600 uppercase font-bold py-2">Services</div>
                                <div className="pl-4 space-y-2">
                                    {services.map((service, index) => (
                                        <Link
                                            key={index}
                                            href={service.href}
                                            className="block text-sm text-gray-700 hover:text-greenish transition-colors py-1"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            {service.title}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                            <Link 
                                href="/about" 
                                className="block text-gray-600 hover:text-greenish transition-colors uppercase font-bold py-2"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                About
                            </Link>
                            <Link 
                                href="/contact" 
                                className="block text-gray-600 hover:text-greenish transition-colors uppercase font-bold py-2"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Contact
                            </Link>
                            <Link href="/contact" className="block pt-4">
                                <Button 
                                    className="w-full bg-greenish hover:bg-tahiti rounded-full px-6 hover:scale-105 transition-all uppercase cursor-pointer"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Book Service<MoveUpRight className="h-5 w-5" />
                                </Button>
                            </Link>
                        </nav>
                    </motion.div>
                )}
            </div>
        </header>
    )
}