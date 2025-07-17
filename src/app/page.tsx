import { HeroSection } from "@/components/HereSection";
import BookingSection from "@/components/homepage/bookingsection";
import ProcessSection from "@/components/homepage/process";
import Testimonials from "@/components/homepage/testimonial";
import { ServicesGrid } from "@/components/ServicesGrid";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import WhoWeServeCard from "@/components/WhoweserveCard";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { CheckCircle, Phone, Star, User } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}

      {/* Hero Section */}
      <HeroSection />

      {/* who we serve */}
      <section>
        <div className="container mx-auto px-4 mt-20 mb-50">
          <div className="flex justify-center gap-8">
            <div className="">
              <h3 className="text-5xl font-bold mb-4 text-deep-blue">Who We Serve</h3>
              <p className="text-lg text-deep-blue">Our cleaning services are tailored to meet the needs of individuals and businesses alike. Whether you're looking for a one-time deep clean or regular maintenance, we've got you covered.</p>
            </div>
            <WhoWeServeCard image="/images/org_cleaning.jpg" headline="Organisations / Companies" subheader="Let us clean your company premises" />
            <WhoWeServeCard image="/images/kleenmaids_pest-control-man-spraying-pesticide_107420-29671.jpg" headline="Individuals / Commercial" subheader="Let us clean your home or commercial premises" />
          </div>
        </div>
      </section>

      {/* Spotlight service */}
      <div className="w-full flex justify-center border-5 border-greenish rounded-lg container mx-auto mb-20">
        <div className="bg-white flex justify-center gap-8">
          <div>
            <Image src="/images/kleenmaids-maid-1.png" alt="maid" width={800} height={800} />
          </div>
          <div className="p-16">
            <h2 className="text-3xl text-deep-blue font-bold">
              Live in maids placement
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              We offer live-in maids placement services to help you find the perfect live-in maid for your home or office.
            </p>
            <Button className="bg-yellowish hover:bg-deep-blue text-deep-blue hover:text-white font-semibold px-12 py-4 rounded-none">
              Book Service
            </Button>
          </div>
        </div>
      </div>

      {/* Services */}
      <section className="bg-bluish pt-20 pb-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          </div>

          <ServicesGrid />
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

            <div className="relative w-1/2 h-[600px] border-greenish border-5 rounded-lg">
              <Image
                src="/images/kleen.jpeg"
                alt="Happy cleaning team"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-bluish">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">What They Are Talking</h2>
            <p className="text-gray-600">Feedback from our happy clients across Kampala and beyond</p>
          </div>
          <Testimonials />
        </div>
      </section>

    </div>
  );
}
