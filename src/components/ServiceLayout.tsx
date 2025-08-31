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
            <section className="py-20 relative container mx-auto">
                <h1 className="text-4xl font-bold mb-4 uppercase tracking-wide">{title}</h1>
                <p>{description}</p>
            </section>

            {/* Main Content */}
            <section className="py-16">
                <div className="container mx-auto flex flex-row justify-between items-start">
                    <div className="basis-2/3">
                        {children}
                    </div>
                    <div className="sticky top-20 basis-1/3">
                        <Image
                            src={heroImage || "/placeholder.svg"}
                            alt={title}
                            width={500}
                            height={600}
                            className="rounded-lg w-[1000px] h-[600px] mx-auto object-cover"
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}
