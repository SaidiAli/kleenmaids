import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HereSection";
import ProcessSection from "@/components/homepage/process";
import Navbar from "@/components/navbar";
import { ServicesGrid } from "@/components/ServicesGrid";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import WhoWeServeCard from "@/components/WhoweserveCard";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { Badge, Building, Car, CheckCircle, Link, Mail, MapPin, Phone, Sofa, Sparkles, Star, Users, Home as HomeIcon, User } from "lucide-react";
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
        <div className="container mx-auto px-4 py-20">
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
      <div className="w-full flex justify-center border-5 border-bermuda rounded-lg container mx-auto">
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
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">More Services</h2>
          </div>

          <ServicesGrid />
        </div>
      </section>

      {/* Booking Form */}
      {/* <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">Get a Free Appointment Booking!</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-4">
              <div className="relative">
                <Input placeholder="Your Name" className="bg-white h-16 px-4 py-2 rounded-sm" />
                <User className="absolute top-1/2 -translate-y-1/2 right-2" />
              </div>
              <div className="relative">
                <Input placeholder="Phone Number" className="bg-white h-16 px-4 py-2 rounded-sm" />
                <Phone className="absolute top-1/2 -translate-y-1/2 right-2" />
              </div>
              <select className="bg-white h-16 px-4 py-2 rounded-sm">
                <option value="">Select Service</option>
                <option value="maid">Maid</option>
                <option value="cleaning">Cleaning</option>
              </select>
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold h-16 px-4 py-2">Book Now</Button>
            </div>
          </div>
        </div>
      </section> */}

      <section>
        <div className="bg-fixed bg-cover bg-center bg-no-repeat bg-[url('/images/young-male-cleaner.jpg')]">
        <div className="bg-black/50 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2 className="text-2xl lg:text-4xl font-bold text-white mb-6">
                Are you looking for a proffesional cleaning company?
              </h2>
              <p className="text-gray-600 mb-8 text-lg text-white">
                Choose KleenmaidsUg, an innovative and committed professional cleaning company
              </p>
              <p className="text-gray-600 mb-8 text-lg text-white">Fill out this form and we will contact you within 72 hours!</p>
            </div>

            <div className="max-w-4xl mx-auto bg-midnight p-16 rounded-lg">
            <div className="grid md:grid-cols-4 gap-4">
              <div className="relative">
                <Input placeholder="Your Name" className="bg-white h-16 px-4 py-2 rounded-sm" />
                <User className="absolute top-1/2 -translate-y-1/2 right-2" />
              </div>
              <div className="relative">
                <Input placeholder="Phone Number" className="bg-white h-16 px-4 py-2 rounded-sm" />
                <Phone className="absolute top-1/2 -translate-y-1/2 right-2" />
              </div>
              <select className="bg-white h-16 px-4 py-2 rounded-sm">
                <option value="">Select Service</option>
                <option value="maid">Maid</option>
                <option value="cleaning">Cleaning</option>
              </select>
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold h-16 px-4 py-2">Book Now</Button>
            </div>
          </div>
          </div>
          </div>
        </div>
      </section>

      <ProcessSection />

      {/* Experience Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="w-full flex items-center justify-center">
                <img
                  src="/h6-about1.png"
                  alt="Experienced cleaner"
                  width={600}
                  height={600}
                  className="rounded-full"
                />
              </div>
            </div>

            <div>
              <h2 className="text-5xl lg:text-6xl font-bold text-blue-600 mb-6">
                We Have Been Doing Projects Since 2018
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                With over 5 years of experience serving Kampala and surrounding areas, KleenmaidsUg has built a
                reputation for excellence in cleaning services.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                  <div className="text-gray-600">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">1000+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                  <div className="text-gray-600">Expert Cleaners</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                  <div className="text-gray-600">Quality Service</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-lg font-semibold">Cost Effective</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-lg font-semibold">Trained and Bonded</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-lg font-semibold">100% Satisfaction</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-lg font-semibold">Quality Service</span>
                </div>
              </div>
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
                Book Service
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Happiness Priority */}
      <section className="py-20 bg-gray-50">
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
