import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import {
    Sparkles,
    CheckCircle,
    Users,
    ThumbsUp,
    Leaf,
    DollarSign,
    Phone,
    Mail,
    Star,
    Award,
    Shield,
    Target,
    Badge,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white">

            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl lg:text-6xl font-bold text-blue-900 mb-4 uppercase tracking-wide">ABOUT</h1>
                </div>
            </section>

            {/* Main About Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <Badge className="bg-blue-100 text-blue-600 mb-4">ABOUT US</Badge>
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">We are cleaning company since 2018</h2>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                KleenmaidsUg has been serving the Kampala community and beyond with exceptional cleaning services since
                                2018. What started as a small local business has grown into Uganda's most trusted cleaning service
                                provider, known for our reliability, professionalism, and commitment to excellence.
                            </p>

                            <div className="space-y-3 mb-8">
                                <div className="flex items-center space-x-3">
                                    <CheckCircle className="w-5 h-5 text-green-500" />
                                    <span className="text-gray-700">Trusted staff with full training</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <CheckCircle className="w-5 h-5 text-green-500" />
                                    <span className="text-gray-700">Eco-friendly cleaning products</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <CheckCircle className="w-5 h-5 text-green-500" />
                                    <span className="text-gray-700">Regular cleaning</span>
                                </div>
                            </div>

                            <p className="text-gray-600 italic">
                                "Our mission is to provide exceptional cleaning services that exceed expectations, delivered by a team
                                guided by integrity, professionalism, and a commitment to excellence."
                            </p>
                            <p className="text-sm text-gray-500 mt-2">— Sarah Nakato, Managing Director</p>
                        </div>

                        <div className="relative">
                            <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg p-8">
                                <Image
                                    src="/placeholder.svg?height=400&width=500"
                                    alt="KleenmaidsUg team members"
                                    width={500}
                                    height={400}
                                    className="rounded-lg w-full"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-gradient-to-br from-blue-50 to-blue-100">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <Card className="text-center p-8 bg-white hover:shadow-lg transition-shadow">
                            <CardContent className="pt-6">
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Users className="w-8 h-8 text-blue-600" />
                                </div>
                                <h3 className="text-xl font-semibold mb-4">Expert Team</h3>
                                <p className="text-gray-600 text-sm">
                                    Our professional cleaning staff are trained, experienced, and trusted to deliver exceptional results
                                    every time.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="text-center p-8 bg-white hover:shadow-lg transition-shadow">
                            <CardContent className="pt-6">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <ThumbsUp className="w-8 h-8 text-green-600" />
                                </div>
                                <h3 className="text-xl font-semibold mb-4">100% Satisfaction</h3>
                                <p className="text-gray-600 text-sm">
                                    We guarantee complete satisfaction with our services. If you're not happy, we'll make it right at no
                                    extra cost.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="text-center p-8 bg-white hover:shadow-lg transition-shadow">
                            <CardContent className="pt-6">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Leaf className="w-8 h-8 text-green-600" />
                                </div>
                                <h3 className="text-xl font-semibold mb-4">Eco-Friendly</h3>
                                <p className="text-gray-600 text-sm">
                                    We use environmentally safe cleaning products that are effective yet gentle on your family and the
                                    environment.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="text-center p-8 bg-white hover:shadow-lg transition-shadow">
                            <CardContent className="pt-6">
                                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <DollarSign className="w-8 h-8 text-yellow-600" />
                                </div>
                                <h3 className="text-xl font-semibold mb-4">Competitive Prices</h3>
                                <p className="text-gray-600 text-sm">
                                    Quality cleaning services at affordable rates. We offer transparent pricing with no hidden fees or
                                    surprises.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <Badge className="bg-blue-100 text-blue-600 mb-4">WORK PROCESS</Badge>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <Card className="text-center p-8 hover:shadow-lg transition-shadow">
                            <CardContent className="pt-6">
                                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <span className="text-3xl font-bold text-blue-600">1</span>
                                </div>
                                <h3 className="text-xl font-semibold mb-4">Easy Online Booking</h3>
                                <p className="text-gray-600">
                                    Schedule your cleaning service online or call us. Choose your preferred date, time, and service type
                                    in just a few clicks.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="text-center p-8 hover:shadow-lg transition-shadow">
                            <CardContent className="pt-6">
                                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <span className="text-3xl font-bold text-blue-600">2</span>
                                </div>
                                <h3 className="text-xl font-semibold mb-4">Get a cleaner</h3>
                                <p className="text-gray-600">
                                    Our professional cleaning team arrives on time with all necessary equipment and eco-friendly supplies
                                    ready to work.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="text-center p-8 hover:shadow-lg transition-shadow">
                            <CardContent className="pt-6">
                                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <span className="text-3xl font-bold text-blue-600">3</span>
                                </div>
                                <h3 className="text-xl font-semibold mb-4">Enjoy Cleanliness</h3>
                                <p className="text-gray-600">
                                    Relax and enjoy your spotless space. We guarantee quality results that exceed your expectations every
                                    time.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <Badge className="bg-blue-100 text-blue-600 mb-4">TEAM</Badge>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Meet with our Brilliant Team Members</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <Card className="text-center overflow-hidden hover:shadow-lg transition-shadow">
                            <div className="h-64 bg-gradient-to-br from-yellow-100 to-yellow-200 flex items-center justify-center">
                                <Avatar className="w-32 h-32">
                                    <AvatarImage src="/placeholder.svg?height=128&width=128" />
                                    <AvatarFallback>AA</AvatarFallback>
                                </Avatar>
                            </div>
                            <CardContent className="p-6">
                                <h3 className="text-lg font-semibold mb-1">Aisha Adil</h3>
                                <p className="text-gray-600 text-sm">General Manager</p>
                            </CardContent>
                        </Card>

                        <Card className="text-center overflow-hidden hover:shadow-lg transition-shadow">
                            <div className="h-64 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                                <Avatar className="w-32 h-32">
                                    <AvatarImage src="/placeholder.svg?height=128&width=128" />
                                    <AvatarFallback>MW</AvatarFallback>
                                </Avatar>
                            </div>
                            <CardContent className="p-6">
                                <h3 className="text-lg font-semibold mb-1">Michael Wilson</h3>
                                <p className="text-gray-600 text-sm">Site Manager</p>
                            </CardContent>
                        </Card>

                        <Card className="text-center overflow-hidden hover:shadow-lg transition-shadow">
                            <div className="h-64 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                                <Avatar className="w-32 h-32">
                                    <AvatarImage src="/placeholder.svg?height=128&width=128" />
                                    <AvatarFallback>SB</AvatarFallback>
                                </Avatar>
                            </div>
                            <CardContent className="p-6">
                                <h3 className="text-lg font-semibold mb-1">Sharon Bella</h3>
                                <p className="text-gray-600 text-sm">Team Leader</p>
                            </CardContent>
                        </Card>

                        <Card className="text-center overflow-hidden hover:shadow-lg transition-shadow">
                            <div className="h-64 bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
                                <Avatar className="w-32 h-32">
                                    <AvatarImage src="/placeholder.svg?height=128&width=128" />
                                    <AvatarFallback>JM</AvatarFallback>
                                </Avatar>
                            </div>
                            <CardContent className="p-6">
                                <h3 className="text-lg font-semibold mb-1">Joan Mukisa</h3>
                                <p className="text-gray-600 text-sm">Chief Cleaner</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <Badge className="bg-blue-100 text-blue-600 mb-4">TESTIMONIALS</Badge>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">What Client Says About us</h2>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <Card className="p-8">
                            <CardContent className="pt-6">
                                <p className="text-gray-600 text-lg leading-relaxed mb-8 text-center">
                                    "A collection of textile samples lay spread out on the table Samsa was a salesman and above it there
                                    hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded
                                    frame. It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur
                                    muff that covered the whole of her lower arm towards the viewer."
                                </p>

                                <div className="flex items-center justify-center space-x-4">
                                    <Avatar className="w-16 h-16">
                                        <AvatarImage src="/placeholder.svg?height=64&width=64" />
                                        <AvatarFallback>JP</AvatarFallback>
                                    </Avatar>
                                    <div className="text-center">
                                        <h4 className="font-semibold text-lg">Jane Doe Plus</h4>
                                        <p className="text-gray-600">Client</p>
                                        <div className="flex items-center justify-center mt-2">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
        </div>
    )
}
