import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Quote } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

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
        { name: "Live-In Maid Placement", href: "/services/live-in-maids", active: false },
        { name: "Scheduled House Cleaning", href: "/services/scheduled-cleaning", active: false },
        { name: "Emergency Maids Solution", href: "/services/emergency-maids", active: false },
        { name: "Cleaning Services", href: "/services/cleaning-services", active: false },
        { name: "Staffing Services", href: "/services/staffing-services", active: false },
    ]

    const isActiveService = (service: any): boolean => service.name.toLowerCase().includes(title.toLowerCase().split(" ")[0])

    return (
        <div className="min-h-screen bg-bluish">

            {/* Hero Section */}
            <section className="py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-5xl font-bold mb-4 uppercase tracking-wide">{title}</h1>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="">
                        <div className="mb-12">
                            <div className="mb-6">
                                <Image
                                    src={heroImage || "/placeholder.svg"}
                                    alt={title}
                                    width={600}
                                    height={300}
                                    className="rounded-lg w-full h-64 object-cover"
                                />
                            </div>
                            <div>
                                <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
                                <blockquote className="bg-blue-50 p-12 mb-6 flex items-start gap-4 rounded-sm">
                                    <Quote className="w-12 h-12 text-blue-600" />
                                    <div className="flex flex-col">
                                        <p className="text-gray-700 italic">
                                            Professional service delivery with attention to detail and customer satisfaction guaranteed.
                                        </p>
                                        <cite className="text-sm text-gray-500">— KleenmaidsUg Team</cite>
                                    </div>
                                </blockquote>
                            </div>
                        </div>
                        {children}
                    </div>
                </div>
            </section>
        </div>
    )
}
