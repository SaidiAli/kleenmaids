import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Sparkles, Users, Clock, Zap, Building, UserCheck } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
    const services = [
        {
            icon: <UserCheck className="w-8 h-8" />,
            title: "Live-In Maid Placement Services",
            description: "Temporary or permanent live-in maid placement with carefully screened candidates.",
            href: "/services/live-in-maids",
            color: "bg-blue-100 text-blue-600",
        },
        {
            icon: <Clock className="w-8 h-8" />,
            title: "Scheduled House Cleaning",
            description: "Regular cleaning services at your convenience with flexible scheduling options.",
            href: "/services/scheduled-cleaning",
            color: "bg-green-100 text-green-600",
        },
        {
            icon: <Zap className="w-8 h-8" />,
            title: "Emergency Maids Solution",
            description: "Quick response cleaning for urgent situations and last-minute needs.",
            href: "/services/emergency-maids",
            color: "bg-red-100 text-red-600",
        },
        {
            icon: <Building className="w-8 h-8" />,
            title: "Professional Cleaning Services",
            description: "Commercial cleaning, special events, furniture, and specialized cleaning needs.",
            href: "/services/cleaning-services",
            color: "bg-purple-100 text-purple-600",
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: "Staffing Services",
            description: "Support staff including cleaners, cooks, housekeepers for various needs.",
            href: "/services/staffing-services",
            color: "bg-yellow-100 text-yellow-600",
        },
    ]

    return (
        <div className="min-h-screen bg-white">

            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl lg:text-6xl font-bold text-blue-900 mb-4 uppercase tracking-wide">Our Services</h1>
                    <p className="text-xl text-blue-700 max-w-2xl mx-auto">
                        Comprehensive cleaning and staffing solutions for homes and businesses
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                                <CardContent className="p-8">
                                    <div className={`w-16 h-16 ${service.color} rounded-lg flex items-center justify-center mb-6`}>
                                        {service.icon}
                                    </div>
                                    <h3 className="text-xl font-semibold mb-4 group-hover:text-blue-600 transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                                    <Link href={service.href}>
                                        <Button
                                            variant="outline"
                                            className="group-hover:bg-blue-600 group-hover:text-white transition-colors bg-transparent"
                                        >
                                            Learn More
                                        </Button>
                                    </Link>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
