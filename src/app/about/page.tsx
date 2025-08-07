import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { CheckCircle, Users, ThumbsUp, Leaf, DollarSign, Star, Badge } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-bluish">

            <AboutHero />
        </div>
    )
}

function AboutHero() {
    return (
        <section className="relative overflow-hidden h-[80vh]">
            <video
                autoPlay
                loop
                muted
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
            >
                <source src="/file2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}
            <div className="container mx-auto relative z-10">
                <div className="flex flex-row justify-between h-[100vh]">
                    <div className="p-8 mt-20 space-y-4 backdrop-blur-2xl bg-white/50 w-[50%] h-[400px]">
                        <h2 className="text-4xl font-bold">Kleenmaids Ug</h2>
                        <p className="text-xl">Professional cleaning services in Kampala, Uganda. We provide reliable, affordable, and eco-friendly cleaning solutions for homes and offices.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}