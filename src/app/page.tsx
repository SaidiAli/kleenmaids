import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { Badge, Building, Car, CheckCircle, Link, Mail, MapPin, Phone, Sofa, Sparkles, Star, Users, Home as HomeIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-tahiti via-tahiti to-tahiti relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600/20"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <Badge className="bg-yellow-500 text-black mb-4">WELCOME TO KLEENMAIDS</Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                We Are Best <span className="text-yellow-400">Cleaning</span>
                <br />
                Services & Solution
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Professional cleaning services in Kampala, Uganda. We provide reliable, affordable, and eco-friendly
                cleaning solutions for homes and offices.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
                  Book Service
                </Button>
                <Button className="border-white text-white hover:bg-white hover:text-blue-600">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center">
                <img
                  src="/placeholder.svg?height=400&width=400"
                  alt="Professional cleaner with supplies"
                  width={400}
                  height={400}
                  className="rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">How 'KleenmaidsUg' Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Simple steps to get your space sparkling clean with our professional cleaning services
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Phone className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Book Your Service</h3>
                <p className="text-gray-600">
                  Call us or book online to schedule your cleaning service at your convenience
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Choose Package</h3>
                <p className="text-gray-600">
                  Select from our range of cleaning packages tailored to your specific needs
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Book Appointment</h3>
                <p className="text-gray-600">Confirm your appointment and enjoy professional cleaning services</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center">
                <img
                  src="/placeholder.svg?height=400&width=400"
                  alt="Experienced cleaner"
                  width={400}
                  height={400}
                  className="rounded-full"
                />
              </div>
            </div>

            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                We Have Been Doing Projects Since 2018
              </h2>
              <p className="text-gray-600 mb-8">
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

              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Cost Effective</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Trained and Bonded</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>100% Satisfaction</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Quality Service</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Get a Free Appointment Booking!</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-4">
              <Input placeholder="Your Name" className="bg-white" />
              <Input placeholder="Phone Number" className="bg-white" />
              <Input placeholder="Email Address" className="bg-white" />
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">Book Now</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Best Services</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg mb-4 flex items-center justify-center">
                  <HomeIcon className="w-16 h-16 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Emergency Cleaning</h3>
                <p className="text-gray-600">Quick response cleaning for urgent situations</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-full h-48 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-lg mb-4 flex items-center justify-center">
                  <Building className="w-16 h-16 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Regular Cleaning</h3>
                <p className="text-gray-600">Scheduled cleaning services for homes and offices</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-full h-48 bg-gradient-to-br from-green-100 to-green-200 rounded-lg mb-4 flex items-center justify-center">
                  <Sofa className="w-16 h-16 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Deep Cleaning</h3>
                <p className="text-gray-600">Comprehensive deep cleaning for thorough results</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-full h-48 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg mb-4 flex items-center justify-center">
                  <Car className="w-16 h-16 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Car Cleaning</h3>
                <p className="text-gray-600">Professional car washing and detailing services</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button>View All Services</Button>
          </div>
        </div>
      </section>

      {/* Happiness Priority */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Your Happiness Is Our First Priority
              </h2>
              <p className="text-gray-600 mb-8">
                At KleenmaidsUg, we believe that a clean environment leads to happiness and productivity. Our dedicated
                team ensures every client receives exceptional service.
              </p>

              <div className="space-y-4">
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
              <div className="w-full h-96 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center">
                <img
                  src="/placeholder.svg?height=400&width=400"
                  alt="Happy cleaning team"
                  width={400}
                  height={400}
                  className="rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Please Call Us to Talk on Extraordinary Service!
          </h2>
          <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
            Contact Now
          </Button>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              We Have An Amazing Pricing For Cleaning Services
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="relative">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-semibold mb-4">Basic Plan</h3>
                <div className="text-4xl font-bold text-blue-600 mb-6">
                  UGX 100k<span className="text-lg text-gray-500">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center justify-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Weekly cleaning</span>
                  </li>
                  <li className="flex items-center justify-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Basic supplies included</span>
                  </li>
                  <li className="flex items-center justify-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>2-3 rooms</span>
                  </li>
                </ul>
                <Button className="w-full">
                  Choose Plan
                </Button>
              </CardContent>
            </Card>

            <Card className="relative border-blue-500 border-2">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-blue-500 text-white">Most Popular</Badge>
              </div>
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-semibold mb-4">Standard Plan</h3>
                <div className="text-4xl font-bold text-blue-600 mb-6">
                  UGX 150k<span className="text-lg text-gray-500">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center justify-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Bi-weekly cleaning</span>
                  </li>
                  <li className="flex items-center justify-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Premium supplies</span>
                  </li>
                  <li className="flex items-center justify-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>4-5 rooms</span>
                  </li>
                  <li className="flex items-center justify-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Deep cleaning monthly</span>
                  </li>
                </ul>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Choose Plan</Button>
              </CardContent>
            </Card>

            <Card className="relative">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-semibold mb-4">Premium Plan</h3>
                <div className="text-4xl font-bold text-blue-600 mb-6">
                  UGX 300k<span className="text-lg text-gray-500">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center justify-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Daily cleaning</span>
                  </li>
                  <li className="flex items-center justify-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Eco-friendly supplies</span>
                  </li>
                  <li className="flex items-center justify-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Unlimited rooms</span>
                  </li>
                  <li className="flex items-center justify-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>24/7 support</span>
                  </li>
                </ul>
                <Button className="w-full">
                  Choose Plan
                </Button>
              </CardContent>
            </Card>
          </div>
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

      {/* Recent News */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Recent News</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200"></div>
              <CardContent className="p-6">
                <Badge className="mb-3">Tips</Badge>
                <h3 className="text-xl font-semibold mb-3">10 Tips for Maintaining a Clean Home</h3>
                <p className="text-gray-600 mb-4">
                  Learn simple daily habits that keep your home spotless between professional cleanings.
                </p>
                <Link to="/news" className="text-blue-600 hover:underline">
                  Read More →
                </Link>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-yellow-100 to-yellow-200"></div>
              <CardContent className="p-6">
                <Badge className="mb-3">News</Badge>
                <h3 className="text-xl font-semibold mb-3">KleenmaidsUg Expands Services to Entebbe</h3>
                <p className="text-gray-600 mb-4">
                  We're excited to announce our expansion to serve clients in Entebbe and surrounding areas.
                </p>
                <Link to="/news" className="text-blue-600 hover:underline">
                  Read More →
                </Link>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-green-100 to-green-200"></div>
              <CardContent className="p-6">
                <Badge className="mb-3">Environment</Badge>
                <h3 className="text-xl font-semibold mb-3">Our Commitment to Eco-Friendly Cleaning</h3>
                <p className="text-gray-600 mb-4">
                  Discover how we're protecting Uganda's environment with our green cleaning practices.
                </p>
                <Link to="/news" className="text-blue-600 hover:underline">
                  Read More →
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold">KleenmaidsUg</span>
              </div>
              <p className="text-gray-400 mb-6">
                Professional cleaning services in Kampala, Uganda. Making your spaces spotless since 2018.
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4" />
                  <span>+256 700 123 456</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4" />
                  <span>info@kleenmaidsug.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4" />
                  <span>Kampala, Uganda</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/about" className="text-gray-400 hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-gray-400 hover:text-white">
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link to="/pricing" className="text-gray-400 hover:text-white">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-400 hover:text-white">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/book" className="text-gray-400 hover:text-white">
                    Book Now
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Latest News</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/news" className="text-gray-400 hover:text-white">
                    Cleaning Tips
                  </Link>
                </li>
                <li>
                  <Link to="/news" className="text-gray-400 hover:text-white">
                    Service Updates
                  </Link>
                </li>
                <li>
                  <Link to="/news" className="text-gray-400 hover:text-white">
                    Special Offers
                  </Link>
                </li>
                <li>
                  <Link to="/news" className="text-gray-400 hover:text-white">
                    Company News
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Newsletter</h3>
              <p className="text-gray-400 mb-4">Subscribe to get updates on our latest offers and cleaning tips.</p>
              <div className="space-y-3">
                <Input placeholder="Your email address" className="bg-gray-800 border-gray-700 text-white" />
                <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black">Subscribe</Button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 KleenmaidsUg. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
