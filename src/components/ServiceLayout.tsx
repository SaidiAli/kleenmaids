import type React from "react"
import Image from "next/image"
import Navbar from "./navbar"

interface ServiceLayoutProps {
    title: string
    description: string
    heroImage: string
    benefits: string[]
    features: string[]
    children?: React.ReactNode
}

export default function ServiceLayout({
    title,
    description,
    heroImage,
    children,
}: ServiceLayoutProps) {
    const services = [
        { name: "All Services", href: "/services", active: false },
        { name: "Live-In Helper Placement", href: "/services/live-in-maids", active: false },
        { name: "Scheduled House Cleaning", href: "/services/scheduled-cleaning", active: false },
        { name: "Emergency Helpers Solution", href: "/services/emergency-maids", active: false },
        { name: "Cleaning Services", href: "/services/cleaning-services", active: false },
        { name: "Staffing Services", href: "/services/staffing-services", active: false },
    ]

    return (
        <div className="min-h-screen bg-bluish">

            <Navbar className="" />

            {/* Hero Section */}
            <section className="py-12 sm:py-16 lg:py-20 relative container mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 uppercase tracking-wide">{title}</h1>
                <p className="text-sm sm:text-base lg:text-lg text-gray-600">{description}</p>
            </section>

            {/* Main Content */}
            <section className="py-8 sm:py-12 lg:py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-12">
                    <div className="w-full lg:basis-1/3 lg:order-2 lg:sticky lg:top-20">
                        <Image
                            src={heroImage || "/placeholder.svg"}
                            alt={title}
                            width={500}
                            height={400}
                            className="rounded-lg w-full h-[250px] sm:h-[300px] lg:h-[400px] xl:h-[600px] object-cover"
                        />
                    </div>
                    <div className="w-full lg:basis-2/3 lg:order-1">
                        {children}
                    </div>
                </div>
            </section>
        </div>
    )
}
