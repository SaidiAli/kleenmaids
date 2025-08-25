import { Phone, User } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { motion } from "motion/react";

export default function BookingSection() {
    return (
        <section className="relative">
            <div className="bg-fixed bg-cover bg-center bg-no-repeat bg-[url('/images/young-male-cleaner.jpg')]">
                <motion.div 
                    className="container mx-auto max-w-4xl flex justify-between gap-4 absolute left-1/2 transform -translate-x-1/2 -top-15 elevation-2 shadow-xl/30"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={{
                        hidden: { opacity: 0, y: -100 },
                        visible: { 
                            opacity: 1, 
                            y: 0,
                            transition: {
                                duration: 1.0,
                                staggerChildren: 0.2
                            }
                        }
                    }}
                >
                    <motion.div 
                        className="bg-deep-blue p-8 rounded-lg shadow max-w-[500px] w-[500px] flex flex-col items-center"
                        variants={{
                            hidden: { opacity: 0, scale: 0.5, rotateY: -90 },
                            visible: { opacity: 1, scale: 1, rotateY: 0, transition: { duration: 0.8, ease: "easeOut" } }
                        }}
                        whileHover={{ scale: 1.05, rotateY: 5 }}
                    >
                        <p className="text-4xl font-bold text-white">50+</p>
                        <p className="text-white">Served contracts</p>
                    </motion.div>
                    <motion.div 
                        className="bg-deep-blue p-8 rounded-lg shadow max-w-[500px] w-[500px] flex flex-col items-center"
                        variants={{
                            hidden: { opacity: 0, scale: 0.5, rotateY: -90 },
                            visible: { opacity: 1, scale: 1, rotateY: 0, transition: { duration: 0.8, ease: "easeOut" } }
                        }}
                        whileHover={{ scale: 1.05, rotateY: -5 }}
                    >
                        <p className="text-4xl font-bold text-white">3000+</p>
                        <p className="text-white">Live-in helpers Placed</p>
                    </motion.div>
                    <motion.div 
                        className="bg-deep-blue p-8 rounded-lg shadow max-w-[500px] w-[500px] flex flex-col items-center"
                        variants={{
                            hidden: { opacity: 0, scale: 0.5, rotateY: -90 },
                            visible: { opacity: 1, scale: 1, rotateY: 0, transition: { duration: 0.8, ease: "easeOut" } }
                        }}
                        whileHover={{ scale: 1.05, rotateY: 5 }}
                    >
                        <p className="text-4xl font-bold text-white">500+</p>
                        <p className="text-white">Scheduled House Cleaning</p>
                    </motion.div>
                </motion.div>
                <div className="bg-black/50 py-20 h-[100vh]">
                    <motion.div 
                        className="container mx-auto px-4 flex flex-col items-center justify-center h-full"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
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
                            className="text-center"
                            variants={{
                                hidden: { opacity: 0, y: 60 },
                                visible: { opacity: 1, y: 0, transition: { duration: 1.0, ease: "easeOut" } }
                            }}
                        >
                            <h2 className="text-2xl lg:text-4xl font-bold text-white mb-6">
                                Are you looking for a proffesional cleaning company?
                            </h2>
                            <p className="text-gray-600 mb-8 text-lg text-white">
                                Choose KleenmaidsUg, an innovative and committed professional cleaning company
                            </p>
                            <p className="text-gray-600 mb-8 text-lg text-white">Fill out this form and we will contact you within 72 hours!</p>
                        </motion.div>

                        <motion.div 
                            className="max-w-4xl mx-auto bg-deep-blue p-16 rounded-lg"
                            variants={{
                                hidden: { opacity: 0, scale: 0.8, y: 100 },
                                visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 1.2, ease: "easeOut" } }
                            }}
                        >
                            <motion.div 
                                className="grid md:grid-cols-4 gap-4"
                                variants={{
                                    hidden: { opacity: 0 },
                                    visible: { 
                                        opacity: 1,
                                        transition: {
                                            staggerChildren: 0.1
                                        }
                                    }
                                }}
                            >
                                <motion.div 
                                    className="relative"
                                    variants={{
                                        hidden: { opacity: 0, x: -50 },
                                        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
                                    }}
                                >
                                    <Input placeholder="Your Name" className="bg-white h-16 px-4 py-2 rounded-sm" />
                                    <User className="absolute top-1/2 -translate-y-1/2 right-2 text-deep-blue/50" />
                                </motion.div>
                                <motion.div 
                                    className="relative"
                                    variants={{
                                        hidden: { opacity: 0, x: -50 },
                                        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
                                    }}
                                >
                                    <Input placeholder="Phone Number" className="bg-white h-16 px-4 py-2 rounded-sm" />
                                    <Phone className="absolute top-1/2 -translate-y-1/2 right-2 text-deep-blue/50" />
                                </motion.div>
                                <motion.select 
                                    className="bg-white h-16 px-4 py-2 rounded-sm"
                                    variants={{
                                        hidden: { opacity: 0, x: -50 },
                                        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
                                    }}
                                >
                                    <option value="">Select Service</option>
                                    <option value="maid">Maid</option>
                                    <option value="cleaning">Cleaning</option>
                                </motion.select>
                                <motion.div
                                    variants={{
                                        hidden: { opacity: 0, x: -50 },
                                        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
                                    }}
                                >
                                    <Button className="bg-yellow-500 hover:bg-yellow-600 text-deep-blue font-semibold h-16 px-4 py-2 hover:scale-105 transition-transform">Book Now</Button>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}