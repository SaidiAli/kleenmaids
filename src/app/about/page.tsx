import { CheckCircle } from "lucide-react"
import Testimonials from "@/components/homepage/testimonial"

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-bluish">

            <AboutHero />
        </div>
    )
}

function AboutHero() {
    return (
        <div className="min-h-screen bg-bluish">
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
                        <div className="p-8 mt-20 space-y-8 backdrop-blur-2xl bg-white/50 w-[70%] h-[400px]">
                            <h2 className="text-4xl font-bold">Kleenmaids Management & Placement Agency (U) Ltd</h2>
                            <p className="text-xl">We are a trusted cleaning and domestic help service provider with for over 15 years of experience. We provide solutions to: </p>
                            <div className="space-y-2">
                                <div className="flex flex-row items-start gap-2">
                                    <CheckCircle className="w-5 h-5 text-green-500" />
                                    <p><span className="font-bold">Organizations</span> in need of Professional cleaning and support staff placements for small, medium, and large enterprises</p></div>
                                <div className="flex flex-row items-start gap-2">
                                    <CheckCircle className="w-5 h-5 text-green-500" />
                                    <p><span className="font-bold">Individuals</span> in need of Customized domestic help Support for their households and families</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pt-20 pb-36">
                <div className="container mx-auto">
                    <div className="flex flex-col justify-center items-center gap-8">
                        <div className="w-4xl space-y-8">
                            <h2 className="text-6xl font-bold text-center">Our Mission</h2>
                            <p className="text-xl text-center">
                                To become a customer-focused market leader in the provision of dependable, efficient  Cleaning and Domestic Help support through exceptional service provision, unwavering reliability, and lasting peace of mind, that consistently exceeds  their expectations in the work place and their homes.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-gradient-to-b from-bluish via-deep-blue/30 to-bluish">
                <div className="container mx-auto">
                    <h3 className="text-6xl font-bold text-center mb-8">Our Values</h3>
                    <div className="grid grid-cols-4 border justify-center">
                        <div className="p-8 space-y-4">
                            <CheckCircle className="w-10 h-10 text-deep-blue" />
                            <p className="text-2xl font-bold">Professionalism </p>
                            <p>Our commitment to delivering exceptional cleaning and domestic help services that meet or exceed our clients&apos; expectations.</p>
                        </div>
                        <div className="p-8 space-y-4">
                            <CheckCircle className="w-10 h-10 text-deep-blue" />
                            <p className="text-2xl font-bold">Integrity</p>
                            <p>Our unwavering commitment to providing dependable and consistent service to our clients.</p>
                        </div>
                        <div className="p-8 space-y-4">
                            <CheckCircle className="w-10 h-10 text-deep-blue" />
                            <p className="text-2xl font-bold">Action and Result Oriented.</p>
                            <p>Our commitment to delivering exceptional cleaning and domestic help services that meet or exceed our clients&apos; expectations.</p>
                        </div>
                        <div className="p-8 space-y-4">
                            <CheckCircle className="w-10 h-10 text-deep-blue" />
                            <p className="text-2xl font-bold">Customer Satisfaction.</p>
                            <p>Our commitment to delivering exceptional cleaning and domestic help services that meet or exceed our clients&apos; expectations.</p>
                        </div>
                        <div className="p-8 space-y-4 col-span-2">
                            <CheckCircle className="w-10 h-10 text-deep-blue" />
                            <p className="text-2xl font-bold">Continuous Capacity development and improvement</p>
                            <p>Our commitment to delivering exceptional cleaning and domestic help services that meet or exceed our clients&apos; expectations.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-32">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-8">
                        <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-4">Testimonials</h2>
                        <p className="text-gray-600 text-base">Feedback from our happy clients across Kampala and beyond</p>
                    </div>
                    <Testimonials />
                </div>
            </section>
        </div>
    )
}