import Link from "next/link"
import Image from "next/image"
import { Icon } from "@iconify/react/dist/iconify.js"
import cloudinaryLoader from "@/lib/cloudinaryLoader"

export const Footer = () => {
    const services = [
        { name: "Live-In Helper Placement", href: "/services/live-in-maids" },
        { name: "Scheduled House Cleaning", href: "/services/scheduled-cleaning" },
        { name: "Emergency Helpers Solution", href: "/services/emergency-maids" },
        { name: "Cleaning Services", href: "/services/cleaning-services" },
        { name: "Staffing Services", href: "/services/staffing-services" },
    ]

    return (
        <footer className="bg-deep-blue text-white">
            <div className="container mx-auto px-4 md:py-12">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 min-h-[200px] sm:min-h-[300px]">
                    <div className="flex flex-col gap-6 sm:gap-8 py-6 sm:py-8">
                        <Link href="/" className="flex items-center space-x-2 relative">
                            <Image src="/v1756821027/kleenmaids/opyke0inbuummdaqtyz0.png" alt="Logo" width={200} height={80} className="object-contain sm:w-[250px] sm:h-[90px] lg:w-[300px] lg:h-[100px]" />
                        </Link>
                        <div>
                            <p className="text-xl font-bold mb-3 sm:mb-4">Follow Us</p>
                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                                <Link href="https://www.linkedin.com/company/kleenmaids" target="_blank">
                                    <p className="flex items-center space-x-2 font-medium hover:underline text-sm sm:text-base"><Icon icon="mdi:linkedin" width={20} height={20} className="sm:w-6 sm:h-6" />LinkedIn</p>
                                </Link>
                                <Link href="https://www.instagram.com/kleenmaids256/" target="_blank">
                                    <p className="flex items-center space-x-2 font-medium hover:underline text-sm sm:text-base"><Icon icon="mdi:instagram" width={20} height={20} className="sm:w-6 sm:h-6" />Instagram</p>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-2 flex flex-col md:flex-row justify-around space-y-6 md:space-y-0 py-6 sm:py-8">
                        <div className="space-y-1">
                            <p className="text-xl font-bold mb-2">Services</p>
                            {services.map((service) => (
                                <Link
                                    key={service.name}
                                    href={service.href}
                                    className="block transition-colors text-base md:text-lg hover:underline"
                                >
                                    {service.name}
                                </Link>
                            ))}
                        </div>
                        <div className="space-y-1">
                            <p className="text-xl font-bold mb-2">Contact Info</p>
                            <Link
                                href="tel:+256700123456"
                                className="block transition-colors text-base md:text-lg"
                            >
                                +256 700 123 456
                            </Link>
                            <Link
                                href="mailto:info@kleenmaidsug.com"
                                className="block transition-colors text-base md:text-lg"
                            >
                                info@kleenmaidsug.com
                            </Link>
                        </div>
                        <div className="space-y-1">
                            <p className="text-xl font-bold mb-2">Location</p>
                            <div className="text-base md:text-lg">Ntinda</div>
                            <div className="text-base md:text-lg">Kampala, Uganda</div>
                        </div>
                    </div>
                </div>


            </div>

            {/* <div className="border-b"></div> */}

            {/* <div className="text-center text-xs sm:text-sm text-white px-2 py-8">
                {`© ${new Date().getFullYear()} Kleenmaids. All rights reserved.`}
            </div> */}
        </footer>
    )
}