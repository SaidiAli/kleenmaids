import { CheckCircle } from "lucide-react"
import Testimonials from "@/components/homepage/testimonial"
import Navbar from "@/components/navbar"
import Image from "next/image"
import { StarIcon } from "@/components/ui/star-icon"

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-bluish">
            <Navbar className="" />
            <AboutHero />

            <section className="pb-36 mx-auto">
                <div className="grid grid-cols-3 h-[600px] w-full">
                    <div className="col-span-2 relative">
                        <Image
                            src="https://res.cloudinary.com/zurri-cloud/image/upload/v1755723564/kleenmaids/mcqx8amwvs9sljgb356v.jpg"
                            alt="Professional cleaning team"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="col-span-1 relative">
                        <Image
                            src="https://res.cloudinary.com/zurri-cloud/image/upload/v1756019572/kleenmaids/ecrevztowjfcpbezml1e.png"
                            alt="Professional cleaning team"
                            fill
                            className="object-cover"
                        />
                    </div>

                </div>
            </section>

            <section className="pb-36">
                <div className="container mx-auto">
                    <div className="flex flex-col justify-center items-center gap-8">
                        <div className="w-4xl space-y-8">
                            <h3 className="text-6xl font-bold text-center">Our Mission</h3>
                            <p className="text-xl text-center">
                                To become a customer- focused market leader in the position of dependable, efficient Domestic Help Support and Cleaning Solutions through exceptional service provision, unwavering reliability and lasting peace of mind, that consistently exceeds their expectations in the workplace and their homes.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pb-36">
                <div className="container mx-auto">
                    <div className="flex flex-col justify-center items-center gap-8">
                        <div className="w-4xl space-y-8">
                            <h3 className="text-6xl font-bold text-center">Our Vision</h3>
                            <p className="text-xl text-center">
                                To become the exclusive market leader in the provision of professionally trained domestic help support staff and cleaning solutions for both individuals and organizations within Kampala and beyond.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pb-36">
                <div className="container mx-auto">
                    <h3 className="text-6xl font-bold text-center mb-8">Our Values</h3>
                    <div className="grid grid-cols-3 gap-2 justify-center">
                        <div className="p-8 space-y-4 border border-deep-blue rounded-lg group hover:bg-deep-blue hover:text-white transition-colors">
                            <StarIcon size={24} />
                            <p className="text-2xl font-bold">Professionalism </p>
                            <p>Our commitment to delivering exceptional cleaning and domestic help services that meet or exceed our clients&apos; expectations.</p>
                        </div>
                        <div className="p-8 space-y-4 border border-deep-blue rounded-lg group hover:bg-deep-blue hover:text-white transition-colors">
                            <StarIcon size={24} />
                            <p className="text-2xl font-bold">Integrity</p>
                            <p>Our unwavering commitment to providing dependable and consistent service to our clients.</p>
                        </div>
                        <div className="p-8 space-y-4 border border-deep-blue rounded-lg group hover:bg-deep-blue hover:text-white transition-colors">
                            <StarIcon size={24} />
                            <p className="text-2xl font-bold">Action and Result Oriented.</p>
                            <p>Our commitment to delivering exceptional cleaning and domestic help services that meet or exceed our clients&apos; expectations.</p>
                        </div>
                        <div className="p-8 space-y-4 border border-deep-blue rounded-lg group hover:bg-deep-blue hover:text-white transition-colors">
                            <StarIcon size={24} />
                            <p className="text-2xl font-bold">Customer Satisfaction.</p>
                            <p>Our commitment to delivering exceptional cleaning and domestic help services that meet or exceed our clients&apos; expectations.</p>
                        </div>
                        <div className="p-8 space-y-4 col-span-2 border border-deep-blue rounded-lg group hover:bg-deep-blue hover:text-white transition-colors">
                            <StarIcon size={24} />
                            <p className="text-2xl font-bold">Continuous Capacity development and improvement</p>
                            <p>Our commitment to delivering exceptional cleaning and domestic help services that meet or exceed our clients&apos; expectations.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="pb-36">
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

function AboutHero() {
    return (
        <section className="container mx-auto">
            <div className="flex flex-row justify-between items-start py-20 mt-20">
                <div className="basis-1/2">

                    <h2 className="text-4xl font-bold">About Us</h2>
                </div>

                <div className="basis-1/2 space-y-8">
                    <p className="text-lg">Kleenmaids Management & Placement Agency (U) Ltd is a trusted cleaning and domestic help service provider with for over 15 years of experience. We provide solutions to: </p>
                    <div className="space-y-2">
                        <div className="flex flex-row items-start gap-2">
                            <StarIcon size={24} />
                            <p><span className="font-bold">Organizations</span> in need of Professional cleaning and support staff placements for small, medium, and large enterprises</p></div>
                        <div className="flex flex-row items-start gap-2">
                            <StarIcon size={24} />
                            <p><span className="font-bold">Individuals</span> in need of Customized domestic help Support for their households and families</p></div>
                    </div>
                </div>
            </div>
        </section>
    )
}