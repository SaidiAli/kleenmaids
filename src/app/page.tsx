import { HeroSection } from "@/components/HeroSection";
import BookingSection from "@/components/homepage/bookingsection";
import ProcessSection from "@/components/homepage/process";
import Testimonials from "@/components/homepage/testimonial";
import Navbar from "@/components/navbar";
import { ServicesGrid } from "@/components/ServicesGrid";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import WhoWeServeCard from "@/components/WhoweserveCard";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { CheckCircle, Phone, Star, User } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-bluish">


      <HeroSection />

      <section className="container mx-auto py-32">
        <div className="flex flex-col gap-8 justify-center items-center">
          <div>
            <Image src="/kleen.svg" alt="maid" width={50} height={50} />
          </div>
          <div className="w-4xl space-y-8 mb-8">
            <h2 className="text-6xl font-bold text-center">Who we are</h2>
            <p className="text-xl text-center">
              Kleenmaids is a professional cleaning service committed to providing exceptional cleaning experiences for homes, offices and commercial spaces. Our team of professionals ensures thorough cleaning, leaving your space spotless.
            </p>
          </div>

          <div className="flex flex-row gap-8">
            <div className="bg-greenish p-8 w-[400px]">
              <p>Value 1</p>
              <p>We provide professional cleaning services for homes, offices and commercial spaces.</p>
            </div>
            <div className="bg-greenish p-8 w-[400px]">
              <p>Value 2</p>
              <p>We provide professional cleaning services for homes, offices and commercial spaces.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-20 pb-50 bg-bluish">
        <div className="container mx-auto">
          <div className="flex flex-col gap-8">
            <h2 className="text-7xl font-bold">Services</h2>
            <div className="flex flex-row">
              <div className="p-8">
                <h3>Deep Cleaning</h3>
                <p>Deep cleaning is a thorough cleaning process that removes dirt, grime, and bacteria from surfaces and objects in a home or office.</p>
              </div>
              <div className="border-x-2 border-greenish p-8">
                <h3>Deep Cleaning</h3>
                <p>Deep cleaning is a thorough cleaning process that removes dirt, grime, and bacteria from surfaces and objects in a home or office.</p>
              </div>
              <div className="border-r-2 border-greenish p-8">
                <h3>Deep Cleaning</h3>
                <p>Deep cleaning is a thorough cleaning process that removes dirt, grime, and bacteria from surfaces and objects in a home or office.</p>
              </div>
              <div className="p-8">
                <h3>Deep Cleaning</h3>
                <p>Deep cleaning is a thorough cleaning process that removes dirt, grime, and bacteria from surfaces and objects in a home or office.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BookingSection />
      <ProcessSection />

      {/* Happiness Priority */}
      <section className="py-20 bg-bluish">
        <div className="container mx-auto px-4">
          <div className="flex justify-between gap-12">
            <div className="w-1/2">
              <div className="flex flex-col gap-4">
                <div className="flex flex-row gap-4 elevation-2 shadow-lg rounded-lg p-8">
                  <CheckCircle className="w-10 h-10 text-green-500" />
                  <div className="flex flex-col">
                    <span className="text-lg font-bold">Highly Trained Cleaners</span>
                    <span className="text-gray-600">Nous vous proposons des interventions sur mesure.</span>
                  </div>
                </div>
                <div className="flex flex-row gap-4 elevation-2 shadow-lg rounded-lg p-8">
                  <CheckCircle className="w-10 h-10 text-green-500" />
                  <div className="flex flex-col">
                    <span className="text-lg font-bold">Highly Trained Cleaners</span>
                    <span className="text-gray-600">Nous vous proposons des interventions sur mesure.</span>
                  </div>
                </div>
                <div className="flex flex-row gap-4 elevation-2 shadow-lg rounded-lg p-8">
                  <CheckCircle className="w-10 h-10 text-green-500" />
                  <div className="flex flex-col">
                    <span className="text-lg font-bold">Highly Trained Cleaners</span>
                    <span className="text-gray-600">Nous vous proposons des interventions sur mesure.</span>
                  </div>
                </div>
                <div className="flex flex-row gap-4 elevation-2 shadow-lg rounded-lg p-8">
                  <CheckCircle className="w-10 h-10 text-green-500" />
                  <div className="flex flex-col">
                    <span className="text-lg font-bold">Highly Trained Cleaners</span>
                    <span className="text-gray-600">Nous vous proposons des interventions sur mesure.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative w-1/2 h-[600px] rounded-lg">
              <Image
                src="/images/kleen.jpeg"
                alt="Happy cleaning team"
                fill
                className="object-cover rounded-lg"
              />
              <Image
                src="/images/cook.jpg"
                alt="Happy cleaning team"
                width={300}
                height={300}
                className="object-cover rounded-lg absolute -bottom-20 -left-20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-4">What They Are Talking</h2>
            <p className="text-gray-600 text-base">Feedback from our happy clients across Kampala and beyond</p>
          </div>
          <Testimonials />
        </div>
      </section>

    </div>
  );
}
