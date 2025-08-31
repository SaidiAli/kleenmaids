import { testimonials } from "@/data"
import { motion } from "motion/react"

const StarRating = () => {
    return (
        <motion.div
            className="flex gap-1 mb-4 sm:mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
        >
            {[...Array(5)].map((_, i) => (
                <motion.svg
                    key={i}
                    className="w-4 h-4 sm:w-5 sm:h-5 fill-current text-black"
                    viewBox="0 0 24 24"
                    initial={{ opacity: 0, rotate: -180 }}
                    whileInView={{ opacity: 1, rotate: 0 }}
                    transition={{
                        duration: 0.4,
                        delay: 0.4 + (i * 0.1),
                        type: "spring",
                        stiffness: 300
                    }}
                >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </motion.svg>
            ))}
        </motion.div>
    )
}

export default function Testimonials() {
    return (
        <motion.section
            id="testimonies"
            className="py-12 sm:py-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: 0.8,
                        staggerChildren: 0.2
                    }
                }
            }}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
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

                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard
                            key={index}
                            name={testimonial.name}
                            testimonial={testimonial.testimonial}
                            description={testimonial.description}
                        />
                    ))}
                </motion.div>
            </div>
        </motion.section>
    )
}

const TestimonialCard = ({ name, testimonial, description }: { name: string, testimonial: string, description: string }) => {
    return (
        <motion.div
            className="bg-yellowish px-4 sm:px-6 py-6 sm:py-8 rounded-lg h-full flex flex-col"
            variants={{
                hidden: {
                    opacity: 0,
                    y: 30,
                    scale: 0.9
                },
                visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                        duration: 0.6,
                        ease: "easeOut"
                    }
                }
            }}
            whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 }
            }}
        >
            <StarRating />
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4 leading-tight">
                "{testimonial}"
            </h3>
            <p className="text-xs sm:text-sm text-gray-700 mb-4 sm:mb-6 flex-grow leading-relaxed">
                {description}
            </p>
            <p className="text-xs sm:text-sm font-medium text-gray-900 mt-auto">
                {name}
            </p>
        </motion.div>
    )
}
