import { Calendar, CalendarArrowDown, FileText, Package, Phone, Sparkles } from "lucide-react";
import { motion } from "motion/react";

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
            <motion.div 
                className="mx-auto px-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={{
                    hidden: { opacity: 0 },
                    visible: { 
                        opacity: 1,
                        transition: {
                            staggerChildren: 0.3
                        }
                    }
                }}
            >
                <motion.div 
                    className="text-center mb-16"
                    variants={{
                        hidden: { opacity: 0, y: 80 },
                        visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut" } }
                    }}
                >
                    <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-4">Our process</h2>
                    <p className="text-gray-600 text-sm">We've made it simple and transparent. Here's exactly how we work with you to deliver the perfect service experience.</p>
                </motion.div>

                <motion.div 
                    className="relative flex justify-center gap-4 items-center" 
                    id="how-it-works"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { 
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.2
                            }
                        }
                    }}
                >
                    <motion.div 
                        className="absolute top-10 left-0 right-0 h-0.5 bg-greenish w-[80%] mx-auto"
                        variants={{
                            hidden: { scaleX: 0 },
                            visible: { scaleX: 1, transition: { duration: 1.5, ease: "easeInOut" } }
                        }}
                        style={{ transformOrigin: "left" }}
                    />
                    {process.map((item, index) => (
                        <motion.div 
                            className="text-center flex flex-col items-center justify-center" 
                            key={index}
                            variants={{
                                hidden: { 
                                    opacity: 0, 
                                    y: 100,
                                    scale: 0.5
                                },
                                visible: { 
                                    opacity: 1, 
                                    y: 0,
                                    scale: 1,
                                    transition: { 
                                        duration: 1.0,
                                        ease: "easeOut",
                                        type: "spring",
                                        stiffness: 150
                                    }
                                }
                            }}
                        >
                            <motion.div 
                                className="relative w-20 h-20 mb-8 rounded-full bg-greenish shadow-xl/30 shadow-greenish flex items-center justify-center transition-all duration-700 transform hover:scale-110 scale-100 opacity-100"
                                whileHover={{ 
                                    scale: 1.2, 
                                    rotate: 360,
                                    boxShadow: "0 25px 50px -12px rgba(34, 197, 94, 0.5)"
                                }}
                                transition={{ type: "spring", stiffness: 200 }}
                            >
                                <item.icon className="w-10 h-10 text-white" />
                            </motion.div>
                            <motion.h3 
                                className="text-xl font-semibold mb-4"
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } }
                                }}
                            >
                                {item.title}
                            </motion.h3>
                            <motion.p 
                                className="text-gray-600 text-base"
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.4 } }
                                }}
                            >
                                {item.description}
                            </motion.p>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    )
}