import { HeroSection } from "@/components/HeroSection";
import BookingSection from "@/components/homepage/bookingsection";
import ProcessSection from "@/components/homepage/process";
import Testimonials from "@/components/homepage/testimonial";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
            <div className="p-8 w-[400px] border border-black rounded-lg space-y-4">
              <p className="text-2xl font-bold">For Organisations</p>
              <p>Organizations in need of Professional cleaning and support staff placements for small, medium, and large enterprises</p>
            </div>
            <div className="p-8 w-[400px] border border-black rounded-lg space-y-4">
              <p className="text-2xl font-bold">For Individuals</p>
              <p>Individuals in need of Customized domestic help Support for their households and families</p>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-20 pb-50 bg-gradient-to-b from-deep-blue/20 to-white">
        <div className="container mx-auto">
          <div className="flex flex-col gap-8">
            <h2 className="text-7xl font-bold">Services</h2>
            <div className="flex flex-row">
              <div className="p-8 space-y-4 group">
                <h3 className="text-2xl font-bold group-hover:text-greenish transition-colors">Live-In Maid Placement Services</h3>
                <p>Temporary or permanent live-in maid placement with carefully screened candidates.</p>
                <Link href="/services/live-in-maids" className="hover:text-greenish transition-colors">Read more</Link>
              </div>
              <div className="border-x-2 border-greenish p-8 space-y-4 group">
                <h3 className="text-2xl font-bold group-hover:text-greenish transition-colors">Scheduled House Cleaning</h3>
                <p>Regular cleaning services at your convenience with flexible scheduling options.</p>
                <Link href="/services/house-cleaning" className="hover:text-greenish transition-colors">Read more</Link>
              </div>
              <div className="border-r-2 border-greenish p-8 space-y-4 group">
                <h3 className="text-2xl font-bold group-hover:text-greenish transition-colors">Emergency Maids Solution</h3>
                <p>Quick response cleaning for urgent situations and last-minute needs.</p>
                <Link href="/services/emergency-maids" className="hover:text-greenish transition-colors">Read more</Link>
              </div>
              <div className="p-8 space-y-4 group">
                <h3 className="text-2xl font-bold group-hover:text-greenish transition-colors">Staffing Services</h3>
                <p>Support staff including cleaners, cooks, housekeepers for various needs.</p>
                <Link href="/services/staffing" className="hover:text-greenish transition-colors">Read more</Link>
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
