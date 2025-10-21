import type React from "react"
import Navbar from "./navbar"
import cloudinaryLoader from "@/lib/cloudinaryLoader"

interface ServiceLayoutProps {
    title: string
    description: string
    heroImage: string
    heroImageDesktop?: string
    benefits: string[]
    features: string[]
    children?: React.ReactNode
}

export default function ServiceLayout({
    title,
    description,
    heroImage,
    heroImageDesktop,
    children,
}: ServiceLayoutProps) {

    return (
        <div className="min-h-screen bg-bluish">

            <Navbar className="px-4 py-4 md:py-0" />

            {/* Hero Section */}
            <section className="py-12 sm:py-16 lg:py-20 relative mx-auto px-4 sm:px-6 lg:px-8 bg-deep-blue">
                <div className="container mx-auto">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 uppercase tracking-wide text-white">{title}</h1>
                    <p className="text-sm sm:text-base lg:text-lg text-white">{description}</p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-8 sm:py-12 lg:py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-12">
                    <div className="w-full lg:basis-1/3 lg:order-2 lg:sticky lg:top-20">
                        {/* Mobile Image */}
                        <img
                            src={cloudinaryLoader({ src: heroImage, width: 500, quality: 80 })}
                            alt={title}
                            width={500}
                            className="rounded-lg w-full h-[250px] sm:h-[300px] lg:h-[400px] xl:h-[600px] object-cover block lg:hidden"
                        />
                        {/* Desktop Image */}
                        <img
                            src={cloudinaryLoader({ src: heroImageDesktop || heroImage || "/placeholder.svg", width: 600, quality: 80 })}
                            alt={title}
                            width={600}
                            className="rounded-lg w-full h-[250px] sm:h-[300px] lg:h-[400px] xl:h-[600px] object-cover hidden lg:block"
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
