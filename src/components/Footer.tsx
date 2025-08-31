import Link from "next/link"
import Image from "next/image"
import { Icon } from "@iconify/react/dist/iconify.js"

export const Footer = () => {
    return (
        <footer className="bg-bluish border-t border-deep-blue">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 min-h-[200px] sm:min-h-[300px]">
                    <div className="lg:col-span-6 flex flex-col gap-6 sm:gap-8 lg:border-r border-deep-blue py-6 sm:py-8">
                        <Link href="/" className="flex items-center space-x-2 relative">
                            <Image src="/images/logo.png" alt="Logo" width={200} height={80} className="object-contain sm:w-[250px] sm:h-[90px] lg:w-[300px] lg:h-[100px]" />
                        </Link>
                        <div>
                            <p className="text-base sm:text-lg font-bold mb-3 sm:mb-4">Follow Us</p>
                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                                <Link href="https://www.linkedin.com/" target="_blank">
                                    <p className="flex items-center space-x-2 font-medium hover:underline text-sm sm:text-base"><Icon icon="mdi:linkedin" width={20} height={20} className="sm:w-6 sm:h-6" />LinkedIn</p>
                                </Link>
                                <Link href="https://www.instagram.com/" target="_blank">
                                    <p className="flex items-center space-x-2 font-medium hover:underline text-sm sm:text-base"><Icon icon="mdi:instagram" width={20} height={20} className="sm:w-6 sm:h-6" />Instagram</p>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-6 flex flex-col justify-between space-y-6 lg:space-y-0 py-6 sm:py-8">
                        <div className="space-y-4 sm:space-y-6">
                            <div className="space-y-2 sm:space-y-3">
                                <p className="text-base sm:text-lg font-bold mb-2">Contact Info</p>
                                <Link
                                    href="tel:+256700123456"
                                    className="block text-gray-700 hover:text-green-700 transition-colors text-sm sm:text-base lg:text-lg"
                                >
                                    +256 700 123 456
                                </Link>
                                <Link
                                    href="mailto:info@kleenmaidsug.com"
                                    className="block text-gray-700 hover:text-green-700 transition-colors text-sm sm:text-base lg:text-lg"
                                >
                                    info@kleenmaidsug.com
                                </Link>
                            </div>

                            <div className="space-y-1">
                                <p className="text-base sm:text-lg font-bold mb-2">Location</p>
                                <div className="text-gray-700 text-sm sm:text-base lg:text-lg">Ntinda</div>
                                <div className="text-gray-700 text-sm sm:text-base lg:text-lg">Kampala, Uganda</div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row lg:flex-col gap-2 sm:gap-4 lg:gap-2 mt-4 sm:mt-6 lg:mt-0 pt-4 sm:pt-0 border-t lg:border-t-0 border-deep-blue">
                            <Link
                                href="/privacy-policy"
                                className="text-gray-700 hover:text-green-700 transition-colors text-sm sm:text-base lg:text-lg py-1 lg:py-0"
                            >
                                Privacy Policy
                            </Link>
                            <Link
                                href="/terms-and-conditions"
                                className="text-gray-700 hover:text-green-700 transition-colors text-sm sm:text-base lg:text-lg py-1 lg:py-0"
                            >
                                Terms and Conditions
                            </Link>
                        </div>
                    </div>
                </div>


            </div>

            <div className="border-b border-deep-blue"></div>

            <div className="text-center text-xs sm:text-sm text-gray-600 px-2 py-8">
                {`© ${new Date().getFullYear()} Kleenmaids. All rights reserved.`}
            </div>
        </footer>
    )
}