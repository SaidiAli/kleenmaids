import { Badge } from "lucide-react"
import { Button } from "./ui/button"

export const HeroSection = () => {
    return (
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
                        <div className="flex items-center justify-center">
                            <img
                                src="/images/cleaner.png"
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
    )
}