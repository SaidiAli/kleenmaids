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
                <div className="bg-black/50 py-20 h-[300px]">
                    <motion.div
                        className="container mx-auto px-4 flex flex-col items-center justify-center"
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
                    />
                </div>
            </div>
        </section>
    )
}