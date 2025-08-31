import Image from "next/image"
import Link from "next/link"
import { motion } from "motion/react"

export default function WhoWeAreSection() {
    return (
        <section className="container mx-auto py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
            <motion.div 
                className="flex flex-col gap-6 sm:gap-8 justify-center items-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={{
                    hidden: { opacity: 0 },
                    visible: { 
                        opacity: 1,
                        transition: {
                            staggerChildren: 0.4
                        }
                    }
                }}
            >
                <motion.div
                    variants={{
                        hidden: { opacity: 0, scale: 0.5, rotate: -180 },
                        visible: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 1.2, ease: "easeOut" } }
                    }}
                >
                    <Image src="/kleen.svg" alt="maid" width={40} height={40} className="sm:w-[50px] sm:h-[50px]" />
                </motion.div>
                <motion.div 
                    className="max-w-4xl space-y-6 sm:space-y-8 mb-6 sm:mb-8"
                    variants={{
                        hidden: { opacity: 0, y: 60 },
                        visible: { opacity: 1, y: 0, transition: { duration: 1.0, ease: "easeOut" } }
                    }}
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center">Who we are</h2>
                    <p className="text-base sm:text-lg lg:text-xl text-center leading-relaxed">
                        Kleenmaids is a professional domestic help placement agency and cleaning service provider with a 17-year history of serving homeowners and corporate entities in the Kampala area. We maintain a keen focus on providing thoroughly vetted staff, quality placements, and exceptional, eco-friendly cleaning solutions.
                    </p>
                </motion.div>

                <motion.div 
                    className="flex flex-col lg:flex-row gap-6 sm:gap-8 w-full max-w-6xl"
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
                        className="flex flex-col justify-between w-full lg:w-[400px] border border-black rounded-2xl space-y-4 group group-hover:border-greenish transition-colors"
                        variants={{
                            hidden: { opacity: 0, x: -100, rotateY: -45 },
                            visible: { opacity: 1, x: 0, rotateY: 0, transition: { duration: 1.0, ease: "easeOut" } }
                        }}
                        whileHover={{ scale: 1.05, rotateY: 5 }}
                        transition={{ type: "spring", stiffness: 200 }}
                    >
                        <div className="p-6 sm:p-8">
                            <p className="text-xl sm:text-2xl font-bold mb-3">For Organisations</p>
                            <p className="text-sm sm:text-base leading-relaxed">Organizations in need of Professional cleaning and support staff placements for small, medium, and large enterprises</p>
                        </div>
                        <div className="p-6 sm:p-8 group-hover:bg-greenish group-hover:text-deep-blue rounded-b-2xl transition-colors">
                            <Link href="/services/live-in-maids" className="font-medium text-sm sm:text-base">Book Now</Link>
                        </div>
                    </motion.div>
                    <motion.div 
                        className="flex flex-col justify-between w-full lg:w-[400px] border border-black rounded-2xl space-y-4 group group-hover:border-greenish group-hover:text-greenish transition-colors"
                        variants={{
                            hidden: { opacity: 0, x: 100, rotateY: 45 },
                            visible: { opacity: 1, x: 0, rotateY: 0, transition: { duration: 1.0, ease: "easeOut" } }
                        }}
                        whileHover={{ scale: 1.05, rotateY: -5 }}
                        transition={{ type: "spring", stiffness: 200 }}
                    >
                        <div className="p-6 sm:p-8">
                            <p className="text-xl sm:text-2xl font-bold mb-3">For Individuals</p>
                            <p className="text-sm sm:text-base leading-relaxed">Individuals in need of Customized domestic help Support for their households and families</p>
                        </div>
                        <div className="p-6 sm:p-8 group-hover:bg-greenish group-hover:text-deep-blue rounded-b-2xl transition-colors">
                            <Link href="/services/live-in-maids" className="font-medium text-sm sm:text-base">Book Now</Link>
                        </div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    )
}