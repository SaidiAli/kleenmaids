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
                    <img src="/kleen.svg" alt="maid" className="w-[50px] h-[50px]" />
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
            </motion.div>
        </section>
    )
}