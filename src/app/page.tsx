import { HeroSection } from "@/components/HeroSection";
import BookingSection from "@/components/homepage/bookingsection";
import ProcessSection from "@/components/homepage/process";
import Testimonials from "@/components/homepage/testimonial";
import WhoWeAreSection from "@/components/homepage/who-we-are";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ServicesSection from "@/components/homepage/services-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-bluish">
      <HeroSection />
      <WhoWeAreSection />

      <ServicesSection />

      <BookingSection />
      <ProcessSection />

      {/* Why Choose Us */}
      <section className="py-20 bg-bluish">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">Why Choose Kleenmaids?</h2>
            <p className="text-gray-600 text-lg">Your happiness is our priority</p>
          </div>
          <div className="flex flex-col lg:flex-row justify-between gap-12">
            <div className="w-full lg:w-1/2">
              <div className="flex flex-col gap-6">
                <div className="flex flex-row gap-4 bg-white shadow-lg rounded-lg p-6">
                  <div className="w-12 h-12 bg-yellowish rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-lg font-bold text-gray-900">Highly Trained Cleaners</span>
                    <span className="text-gray-600">Professional staff with comprehensive training and background checks.</span>
                  </div>
                </div>
                <div className="flex flex-row gap-4 bg-white shadow-lg rounded-lg p-6">
                  <div className="w-12 h-12 bg-yellowish rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-lg font-bold text-gray-900">Eco-Friendly Products</span>
                    <span className="text-gray-600">Safe, non-toxic cleaning products that protect your family and environment.</span>
                  </div>
                </div>
                <div className="flex flex-row gap-4 bg-white shadow-lg rounded-lg p-6">
                  <div className="w-12 h-12 bg-yellowish rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-lg font-bold text-gray-900">Flexible Scheduling</span>
                    <span className="text-gray-600">Book services at your convenience with emergency solutions available.</span>
                  </div>
                </div>
                <div className="flex flex-row gap-4 bg-white shadow-lg rounded-lg p-6">
                  <div className="w-12 h-12 bg-yellowish rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-lg font-bold text-gray-900">100% Satisfaction Guarantee</span>
                    <span className="text-gray-600">We're not satisfied until you are completely happy with our service.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative w-full lg:w-1/2 h-[500px] lg:h-[600px]">
              <div className="relative h-full rounded-lg overflow-hidden">
                <Image
                  src="/images/kleen.jpeg"
                  alt="Professional cleaning team"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-12 -left-12 w-48 h-48 rounded-lg overflow-hidden shadow-xl border-4 border-white">
                <Image
                  src="/images/cook.jpg"
                  alt="Home cleaning services"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-greenish">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-gray-600 text-base">Feedback from our happy clients across Kampala and beyond</p>
          </div>
          <Testimonials />
        </div>
      </section>

    </div>
  );
}
