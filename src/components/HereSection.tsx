import { Badge } from "lucide-react"
import { Button } from "./ui/button"
import Image from "next/image"

export const HeroSection = () => {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-greenish to-greenish/20 h-[80vh]">
            <div className="absolute inset-0">
                <Image src="/images/transparent-bg.png" alt="Hero Background" fill className="object-cover bg-cover bg-center" />
            </div>
            <div className="container mx-auto px-4 py-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="text-deep-blue">
                        <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                            We Are Best <span className="text-yellow-400">Cleaning</span>
                            <br />
                            Services & Solution
                        </h1>
                        <p className="text-xl mb-8 text-deep-blue">
                            Professional cleaning services in Kampala, Uganda. We provide reliable, affordable, and eco-friendly
                            cleaning solutions for homes and offices.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button className="bg-yellow-500 hover:bg-deep-blue font-semibold px-12 py-4 rounded-none text-white">
                                Book Service
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}