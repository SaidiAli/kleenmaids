import Link from "next/link"
import Navbar from "./navbar"
import { Button } from "./ui/button"
import { motion } from "motion/react"

export const HeroSection = () => {
    return (
        <motion.section
            className="relative overflow-hidden h-[60vh] md:h-[100vh] min-h-[600px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
        >
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
            >
                <Navbar className="md:m-8 md:rounded-full px-4 py-4 md:py-0" />
            </motion.div>

            <motion.video
                autoPlay
                loop
                muted
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.2 }}
            >
                <source src="/file.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </motion.video>

            {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-20 relative z-10">
                <div className="flex flex-col items-center justify-center h-full max-w-4xl mx-auto">
                    <motion.div
                        className="text-white text-center"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        <motion.h1
                            className="text-6xl md:text-7xl font-bold mb-4 sm:mb-6 leading-tight text-deep-blue"
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.7, duration: 0.6 }}
                        >
                            Revitalize Your <span className="text-yellow-400">Space</span>
                        </motion.h1>
                        <motion.p
                            className="text-xl font-medium mb-6 sm:mb-8 text-deep-blue max-w-3xl mx-auto px-4"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.9, duration: 0.6 }}
                        >
                            Professional cleaning services in Kampala, Uganda. We provide reliable, affordable, and eco-friendly
                            cleaning solutions for homes and offices.
                        </motion.p>
                        <motion.div
                            className="flex flex-col sm:flex-row gap-4 justify-center"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 1.1, duration: 0.6 }}
                        >
                            <Link href="#services">
                                <Button className="bg-yellow-500 cursor-pointer hover:bg-deep-blue font-semibold w-64 rounded-full text-white text-sm sm:text-base">
                                    Explore Our Services
                                </Button>
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    )
}