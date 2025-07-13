import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HereSection";
import BookingSection from "@/components/homepage/bookingsection";
import ProcessSection from "@/components/homepage/process";
import Navbar from "@/components/navbar";
import { ServicesGrid } from "@/components/ServicesGrid";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import WhoWeServeCard from "@/components/WhoweserveCard";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { CheckCircle, Phone, Star, User } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* who we serve */}
      <section>
        <div className="container mx-auto px-4 mt-20 mb-50">
          <div className="flex justify-center gap-8">
            <div>
              <h3 className="text-5xl font-bold mb-4">Who We Serve</h3>
              <p className="text-gray-600 text-lg">Our cleaning services are tailored to meet the needs of individuals and businesses alike. Whether you're looking for a one-time deep clean or regular maintenance, we've got you covered.</p>
            </div>
            <WhoWeServeCard image="/images/org_cleaning.jpg" quote="Organisations / Companies" author="Let us clean your company premises" position="Kleenmaids" />
            <WhoWeServeCard image="/images/kleenmaids_pest-control-man-spraying-pesticide_107420-29671.jpg" quote="Individuals / Commercial" author="Let us clean your home or commercial premises" position="Kleenmaids" />
          </div>
        </div>
      </section>

      {/* Spotlight service */}
      <div className="w-full flex justify-center border-5 border-bermuda rounded-lg container mx-auto mb-50">
        <div className="bg-white flex justify-center gap-8">
          <div>
            <Image src="/images/kleenmaids-maid-1.png" alt="maid" width={800} height={800} />
          </div>
          <div className="p-16">
            <h2 className="text-3xl text-gray-800 font-bold">
              Live in maids placement
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              We offer live-in maids placement services to help you find the perfect live-in maid for your home or office.
            </p>
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
              Book Service
            </Button>
          </div>
        </div>
      </div>

      {/* Services */}
      <section className="mb-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">More Services</h2>
          </div>

          <ServicesGrid />
        </div>
      </section>

      <BookingSection />

      <ProcessSection />

      {/* Happiness Priority */}
      <section className="mb-50 py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-5xl font-bold text-blue-600 mb-6">
                Your Happiness Is Our First Priority
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                At KleenmaidsUg, we believe that a clean environment leads to happiness and productivity. Our dedicated
                team ensures every client receives exceptional service.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Highly Trained Cleaners</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Insured and Bonded</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Satisfaction Guarantee</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Eco-Friendly Products</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Flexible Scheduling</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Quality Service</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="flex items-center justify-center">
                <img
                  src="/h6-video-intro1.jpg"
                  alt="Happy cleaning team"
                  width={500}
                  height={500}
                  className="rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto rounded-lg py-16 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="flex items-center justify-center gap-12 px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Please Call Us to Talk on Extraordinary Service!
          </h2>
          <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold h-16 px-8 py-2">
            Contact Now
          </Button>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">We Have an Expert Team</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <Avatar className="w-24 h-24 mx-auto mb-4">
                  <AvatarImage src="/placeholder.svg?height=96&width=96" />
                  <AvatarFallback>DR</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-semibold mb-2">Dorothy Russell</h3>
                <p className="text-gray-600">Team Leader</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Avatar className="w-24 h-24 mx-auto mb-4">
                  <AvatarImage src="/placeholder.svg?height=96&width=96" />
                  <AvatarFallback>DC</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-semibold mb-2">David Cooper</h3>
                <p className="text-gray-600">Senior Cleaner</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Avatar className="w-24 h-24 mx-auto mb-4">
                  <AvatarImage src="/placeholder.svg?height=96&width=96" />
                  <AvatarFallback>ST</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-semibold mb-2">Sarah Taylor</h3>
                <p className="text-gray-600">Specialist</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Avatar className="w-24 h-24 mx-auto mb-4">
                  <AvatarImage src="/placeholder.svg?height=96&width=96" />
                  <AvatarFallback>WT</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-semibold mb-2">William Taylor</h3>
                <p className="text-gray-600">Quality Inspector</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">What They Are Talking</h2>
            <p className="text-gray-600">Feedback from our happy clients across Kampala and beyond</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Avatar className="w-12 h-12 mr-4">
                    <AvatarImage src="/placeholder.svg?height=48&width=48" />
                    <AvatarFallback>JM</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold">John Mukasa</h4>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">
                  "Excellent service! KleenmaidsUg transformed our office space. Professional, reliable, and
                  affordable."
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Avatar className="w-12 h-12 mr-4">
                    <AvatarImage src="/placeholder.svg?height=48&width=48" />
                    <AvatarFallback>MN</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold">Mary Namugga</h4>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">
                  "I've been using their services for 6 months. Always punctual and thorough. Highly recommended!"
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Avatar className="w-12 h-12 mr-4">
                    <AvatarImage src="/placeholder.svg?height=48&width=48" />
                    <AvatarFallback>PK</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold">Peter Kato</h4>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">
                  "Great value for money. The team is friendly and does an amazing job. My home has never been cleaner!"
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
