import { Calendar, CalendarArrowDown, FileText, Package, Phone, Sparkles } from "lucide-react";

const process = [
    {
        icon: Phone,
        title: "Call Us",
        description: "Reach out to us about the specific service you need. We're here to listen and understand your requirements."
    },
    {
        icon: FileText,
        title: "Service Packages",
        description: "We'll share our comprehensive service packages tailored to your needs, with transparent pricing and options."
    },
    {
        icon: Calendar,
        title: "Schedule Appointment",
        description: "Choose a convenient time slot that works for you. Our flexible scheduling ensures we fit your busy lifestyle."
    },
    {
        icon: Sparkles,
        title: "Service Delivered",
        description: "Our professional helpers arrive on time to deliver exceptional service that exceeds your expectations."
    }
]

export default function ProcessSection() {
    return (
        <section className="py-32 bg-bluish">
            <div className="mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-4">Our process</h2>
                    <p className="text-gray-600 text-sm">We've made it simple and transparent. Here's exactly how we work with you to deliver the perfect service experience.</p>
                </div>

                <div className="flex justify-center items-center" id="how-it-works">
                    {process.map((item, index) => (
                        <div className="text-center flex flex-col items-center justify-center" key={index}>
                            <div className={`relative w-20 h-20 mb-8 rounded-full bg-greenish shadow-xl/30 shadow-greenish flex items-center justify-center transition-all duration-700 transform hover:scale-110 scale-100 opacity-100 animate-pulse-glow group-hover:animate-float`}>
                                <item.icon className="w-10 h-10 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                            <p className="text-gray-600 text-lg">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}