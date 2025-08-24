import Link from "next/link"
import Image from "next/image"
import { Icon } from "@iconify/react/dist/iconify.js"

export const Footer = () => {
    return (
        <footer className="bg-bluish border-t border-deep-blue">
            <div className="container mx-auto">

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 min-h-[200px] sm:min-h-[300px]">
                    <div className="lg:col-span-6 flex flex-col gap-8 border-r border-deep-blue py-8">
                        <Link href="/" className="flex items-center space-x-2 relative">
                            <Image src="/images/logo.png" alt="Logo" width={300} height={100} className="object-contain" />
                        </Link>
                        <div>
                            <p className="text-lg font-bold">Follow Us</p>
                            <div className="flex space-x-2">
                                <Link href="https://www.linkedin.com/" target="_blank">
                                    <p className="flex items-center space-x-2 font-medium hover:underline"><Icon icon="mdi:linkedin" width={24} height={24} />LinkedIn</p>
                                </Link>
                                <Link href="https://www.instagram.com/" target="_blank">
                                    <p className="flex items-center space-x-2 font-medium hover:underline"><Icon icon="mdi:instagram" width={24} height={24} />Instagram</p>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-6 flex flex-col justify-between space-y-6 lg:space-y-0 py-8">
                        <div className="space-y-4 sm:space-y-6">
                            <div className="space-y-2">
                                <Link
                                    href="tel:+256700123456"
                                    className="block text-gray-700 hover:text-green-700 transition-colors text-base sm:text-lg"
                                >
                                    +256 700 123 456
                                </Link>
                                <Link
                                    href="mailto:info@kleenmaidsug.com"
                                    className="block text-gray-700 hover:text-green-700 transition-colors text-base sm:text-lg"
                                >
                                    info@kleenmaidsug.com
                                </Link>
                            </div>

                            <div className="space-y-1">
                                <div className="text-gray-700 text-base sm:text-lg">Ntinda</div>
                                <div className="text-gray-700 text-base sm:text-lg">Kampala, Uganda</div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row lg:flex-col gap-3 sm:gap-6 lg:gap-2 mt-6 lg:mt-0">
                            <Link
                                href="/privacy-policy"
                                className="text-gray-700 hover:text-green-700 transition-colors text-base sm:text-lg py-2 lg:py-0"
                            >
                                Privacy Policy
                            </Link>
                            <Link
                                href="/terms-and-conditions"
                                className="text-gray-700 hover:text-green-700 transition-colors text-base sm:text-lg py-2 lg:py-0"
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