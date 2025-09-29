"use client";

import { HeroSection } from "@/components/HeroSection";
import BookingSection from "@/components/homepage/bookingsection";
import ProcessSection from "@/components/homepage/process";
import Testimonials from "@/components/homepage/testimonial";
import WhoWeAreSection from "@/components/homepage/who-we-are";
import { StarIcon } from "@/components/ui/star-icon";
import Image from "next/image";
import ServicesSection from "@/components/homepage/services-section";
import { motion } from "motion/react";

export default function Home() {
  return (
    <motion.div
      className="min-h-screen bg-bluish"
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 100, scale: 0.9 },
          visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 1.2, ease: "easeOut" } }
        }}
      >
        <HeroSection />
      </motion.div>

      <motion.div
        variants={{
          hidden: { opacity: 0, y: 100, scale: 0.9 },
          visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 1.2, ease: "easeOut" } }
        }}
      >
        <WhoWeAreSection />
      </motion.div>

      <motion.div
        variants={{
          hidden: { opacity: 0, y: 100, scale: 0.9 },
          visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 1.2, ease: "easeOut" } }
        }}
        id="services"
      >
        <ServicesSection />
      </motion.div>

      <motion.div
        variants={{
          hidden: { opacity: 0, y: 100, scale: 0.9 },
          visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 1.2, ease: "easeOut" } }
        }}
      >
        <BookingSection />
      </motion.div>

      <motion.div
        variants={{
          hidden: { opacity: 0, y: 100, scale: 0.9 },
          visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 1.2, ease: "easeOut" } }
        }}
      >
        <ProcessSection />
      </motion.div>

      <motion.section
        className="py-12 sm:py-16 lg:py-20 bg-deep-blue"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: { opacity: 0, y: 100, scale: 0.9 },
          visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 1.2, ease: "easeOut" } }
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Why Choose Kleenmaids?</h2>
            <p className="text-white text-base sm:text-lg">Your happiness is our priority</p>
          </motion.div>
          <div className="flex flex-col lg:flex-row justify-between gap-8 sm:gap-12">
            <motion.div
              className="w-full lg:w-1/2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.2,
                    delayChildren: 0.3
                  }
                }
              }}
            >
              <div className="flex flex-col gap-4 sm:gap-6">
                <motion.div
                  className="flex flex-row gap-3 sm:gap-4 bg-white shadow-lg rounded-lg p-4 sm:p-6"
                  variants={{
                    hidden: { opacity: 0, x: -30 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
                  }}
                >
                  <div className="flex-shrink-0">
                    <StarIcon size={40} className="sm:w-12 sm:h-12" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-base sm:text-lg font-bold text-gray-900">Highly Trained Cleaners</span>
                    <span className="text-gray-600 text-sm sm:text-base">Professional staff with comprehensive training and background checks.</span>
                  </div>
                </motion.div>
                <motion.div
                  className="flex flex-row gap-3 sm:gap-4 bg-white shadow-lg rounded-lg p-4 sm:p-6"
                  variants={{
                    hidden: { opacity: 0, x: -30 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
                  }}
                >
                  <div className="flex-shrink-0">
                    <StarIcon size={40} className="sm:w-12 sm:h-12" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-base sm:text-lg font-bold text-gray-900">Eco-Friendly Products</span>
                    <span className="text-gray-600 text-sm sm:text-base">Safe, non-toxic cleaning products that protect your family and environment.</span>
                  </div>
                </motion.div>
                <motion.div
                  className="flex flex-row gap-3 sm:gap-4 bg-white shadow-lg rounded-lg p-4 sm:p-6"
                  variants={{
                    hidden: { opacity: 0, x: -30 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
                  }}
                >
                  <div className="flex-shrink-0">
                    <StarIcon size={40} className="sm:w-12 sm:h-12" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-base sm:text-lg font-bold text-gray-900">Flexible Scheduling</span>
                    <span className="text-gray-600 text-sm sm:text-base">Book services at your convenience with emergency solutions available.</span>
                  </div>
                </motion.div>
                <motion.div
                  className="flex flex-row gap-3 sm:gap-4 bg-white shadow-lg rounded-lg p-4 sm:p-6"
                  variants={{
                    hidden: { opacity: 0, x: -30 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
                  }}
                >
                  <div className="flex-shrink-0">
                    <StarIcon size={40} className="sm:w-12 sm:h-12" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-base sm:text-lg font-bold text-gray-900">100% Satisfaction Guarantee</span>
                    <span className="text-gray-600 text-sm sm:text-base">We're not satisfied until you are completely happy with our service.</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              className="relative w-full lg:w-1/2 h-[300px] sm:h-[400px] lg:h-[600px]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1, transition: { duration: 0.8, delay: 0.5 } }
              }}
            >
              <div className="relative h-full rounded-lg overflow-hidden">
                <Image
                  src="/v1755723564/kleenmaids/mcqx8amwvs9sljgb356v.jpg"
                  alt="Professional cleaning team"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section
        className="py-16 sm:py-24 lg:py-32"
        variants={{
          hidden: { opacity: 0, y: 100, scale: 0.9 },
          visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 1.2, ease: "easeOut" } }
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-6 sm:mb-8"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">Feedback from our happy clients across Kampala and beyond</p>
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } }
            }}
          >
            <Testimonials />
          </motion.div>
        </div>
      </motion.section>

    </motion.div>
  );
}
