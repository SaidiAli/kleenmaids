"use client";

import { CheckCircle } from "lucide-react"
import Testimonials from "@/components/homepage/testimonial"
import Navbar from "@/components/navbar"
import Image from "next/image"
import { StarIcon } from "@/components/ui/star-icon"
import { motion } from "motion/react"

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-bluish">
            <Navbar className="" />
            <AboutHero />

            <motion.section 
                className="pb-16 sm:pb-24 lg:pb-36 mx-auto px-4 sm:px-6 lg:px-8"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
            >
                <div className="grid grid-cols-1 md:grid-cols-3 h-[300px] sm:h-[400px] md:h-[600px] w-full gap-2 md:gap-0">
                    <motion.div 
                        className="col-span-1 md:col-span-2 relative"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <Image
                            src="https://res.cloudinary.com/zurri-cloud/image/upload/v1755723564/kleenmaids/mcqx8amwvs9sljgb356v.jpg"
                            alt="Professional cleaning team"
                            fill
                            className="object-cover rounded-lg"
                        />
                    </motion.div>
                    <motion.div 
                        className="col-span-1 relative"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <Image
                            src="https://res.cloudinary.com/zurri-cloud/image/upload/v1756019572/kleenmaids/ecrevztowjfcpbezml1e.png"
                            alt="Professional cleaning service"
                            fill
                            className="object-cover rounded-lg"
                        />
                    </motion.div>
                </div>
            </motion.section>

            <motion.section 
                className="pb-16 sm:pb-24 lg:pb-36"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col justify-center items-center gap-6 sm:gap-8">
                        <div className="max-w-4xl space-y-6 sm:space-y-8">
                            <motion.h3 
                                className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-center"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                Our Mission
                            </motion.h3>
                            <motion.p 
                                className="text-sm sm:text-base md:text-lg lg:text-xl text-center leading-relaxed"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                            >
                                To become a customer-focused market leader in the provision of dependable, efficient Domestic Help Support and Cleaning Solutions through exceptional service provision, unwavering reliability and lasting peace of mind, that consistently exceeds their expectations in the workplace and their homes.
                            </motion.p>
                        </div>
                    </div>
                </div>
            </motion.section>

            <motion.section 
                className="pb-16 sm:pb-24 lg:pb-36"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col justify-center items-center gap-6 sm:gap-8">
                        <div className="max-w-4xl space-y-6 sm:space-y-8">
                            <motion.h3 
                                className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-center"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                Our Vision
                            </motion.h3>
                            <motion.p 
                                className="text-sm sm:text-base md:text-lg lg:text-xl text-center leading-relaxed"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                            >
                                To become the exclusive market leader in the provision of professionally trained domestic help support staff and cleaning solutions for both individuals and organizations within Kampala and beyond.
                            </motion.p>
                        </div>
                    </div>
                </div>
            </motion.section>

            <motion.section 
                className="pb-16 sm:pb-24 lg:pb-36"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.h3 
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-center mb-6 sm:mb-8"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Our Values
                    </motion.h3>
                    <motion.div 
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 justify-center"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.15,
                                    delayChildren: 0.3
                                }
                            }
                        }}
                    >
                        <motion.div 
                            className="p-4 sm:p-6 lg:p-8 space-y-3 sm:space-y-4 border border-deep-blue rounded-lg group hover:bg-deep-blue hover:text-white transition-colors"
                            variants={{
                                hidden: { opacity: 0, y: 30, scale: 0.9 },
                                visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6 } }
                            }}
                            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                        >
                            <StarIcon size={20} className="sm:w-6 sm:h-6" />
                            <p className="text-lg sm:text-xl lg:text-2xl font-bold">Professionalism</p>
                            <p className="text-xs sm:text-sm lg:text-base">Our commitment to delivering exceptional cleaning and domestic help services that meet or exceed our clients&apos; expectations.</p>
                        </motion.div>
                        <motion.div 
                            className="p-4 sm:p-6 lg:p-8 space-y-3 sm:space-y-4 border border-deep-blue rounded-lg group hover:bg-deep-blue hover:text-white transition-colors"
                            variants={{
                                hidden: { opacity: 0, y: 30, scale: 0.9 },
                                visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6 } }
                            }}
                            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                        >
                            <StarIcon size={20} className="sm:w-6 sm:h-6" />
                            <p className="text-lg sm:text-xl lg:text-2xl font-bold">Integrity</p>
                            <p className="text-xs sm:text-sm lg:text-base">Our unwavering commitment to providing dependable and consistent service to our clients.</p>
                        </motion.div>
                        <motion.div 
                            className="p-4 sm:p-6 lg:p-8 space-y-3 sm:space-y-4 border border-deep-blue rounded-lg group hover:bg-deep-blue hover:text-white transition-colors"
                            variants={{
                                hidden: { opacity: 0, y: 30, scale: 0.9 },
                                visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6 } }
                            }}
                            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                        >
                            <StarIcon size={20} className="sm:w-6 sm:h-6" />
                            <p className="text-lg sm:text-xl lg:text-2xl font-bold">Action and Result Oriented</p>
                            <p className="text-xs sm:text-sm lg:text-base">We focus on taking decisive action and delivering measurable results that exceed expectations.</p>
                        </motion.div>
                        <motion.div 
                            className="p-4 sm:p-6 lg:p-8 space-y-3 sm:space-y-4 border border-deep-blue rounded-lg group hover:bg-deep-blue hover:text-white transition-colors"
                            variants={{
                                hidden: { opacity: 0, y: 30, scale: 0.9 },
                                visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6 } }
                            }}
                            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                        >
                            <StarIcon size={20} className="sm:w-6 sm:h-6" />
                            <p className="text-lg sm:text-xl lg:text-2xl font-bold">Customer Satisfaction</p>
                            <p className="text-xs sm:text-sm lg:text-base">Your happiness and satisfaction are our top priority in everything we do.</p>
                        </motion.div>
                        <motion.div 
                            className="p-4 sm:p-6 lg:p-8 space-y-3 sm:space-y-4 sm:col-span-2 lg:col-span-1 border border-deep-blue rounded-lg group hover:bg-deep-blue hover:text-white transition-colors"
                            variants={{
                                hidden: { opacity: 0, y: 30, scale: 0.9 },
                                visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6 } }
                            }}
                            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                        >
                            <StarIcon size={20} className="sm:w-6 sm:h-6" />
                            <p className="text-lg sm:text-xl lg:text-2xl font-bold">Continuous Improvement</p>
                            <p className="text-xs sm:text-sm lg:text-base">We constantly develop our capabilities and enhance our services for better results.</p>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.section>

            {/* Testimonials */}
            <motion.section 
                className="pb-16 sm:pb-24 lg:pb-36"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div 
                        className="text-center mb-6 sm:mb-8"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-gray-900 mb-4">Testimonials</h2>
                        <p className="text-gray-600 text-xs sm:text-sm lg:text-base">Feedback from our happy clients across Kampala and beyond</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <Testimonials />
                    </motion.div>
                </div>
            </motion.section>
        </div>
    )
}

function AboutHero() {
    return (
        <motion.section 
            className="container mx-auto px-4 sm:px-6 lg:px-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <div className="flex flex-col lg:flex-row justify-between items-start py-8 sm:py-12 md:py-20 mt-4 sm:mt-8 md:mt-20 gap-6 sm:gap-8 lg:gap-12">
                <motion.div 
                    className="w-full lg:basis-1/2"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-bold">About Us</h2>
                </motion.div>

                <motion.div 
                    className="w-full lg:basis-1/2 space-y-4 sm:space-y-6 md:space-y-8"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                        Kleenmaids Management & Placement Agency (U) Ltd is a trusted cleaning and domestic help service provider with over 15 years of experience. We provide solutions to:
                    </p>
                    <div className="space-y-3 sm:space-y-4">
                        <motion.div 
                            className="flex flex-row items-start gap-2 sm:gap-3"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                        >
                            <StarIcon size={20} className="flex-shrink-0 mt-1 sm:w-6 sm:h-6" />
                            <p className="text-xs sm:text-sm md:text-base">
                                <span className="font-bold">Organizations</span> in need of professional cleaning and support staff placements for small, medium, and large enterprises
                            </p>
                        </motion.div>
                        <motion.div 
                            className="flex flex-row items-start gap-2 sm:gap-3"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                        >
                            <StarIcon size={20} className="flex-shrink-0 mt-1 sm:w-6 sm:h-6" />
                            <p className="text-xs sm:text-sm md:text-base">
                                <span className="font-bold">Individuals</span> in need of customized domestic help support for their households and families
                            </p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    )
}