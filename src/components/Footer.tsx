import Link from "next/link"
import Image from "next/image"

export const Footer = () => {
    return (
        <footer className="bg-bluish">
            <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
                {/* Top border line */}
                <div className="border-t border-deep-blue mb-8 sm:mb-12"></div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 min-h-[200px] sm:min-h-[300px]">
                    {/* Left section - Logo and tagline */}
                    <div className="lg:col-span-7 flex flex-col justify-between">
                        {/* Logo and company name */}

                        <Link href="/" className="flex items-center space-x-2 relative">
                            <Image src="/images/logo.png" alt="Logo" width={300} height={100} className="object-contain" />
                        </Link>
                    </div>

                    {/* Vertical divider - hidden on mobile */}
                    <div className="hidden lg:block lg:col-span-1">
                        <div className="h-full w-px bg-gray-400 mx-auto"></div>
                    </div>

                    {/* Mobile divider - shown only on mobile */}
                    <div className="block lg:hidden">
                        <div className="w-full h-px bg-gray-400 my-6"></div>
                    </div>

                    {/* Right section - Contact info and legal */}
                    <div className="lg:col-span-4 flex flex-col justify-between space-y-6 lg:space-y-0">
                        {/* Contact information */}
                        <div className="space-y-4 sm:space-y-6">
                            <div className="space-y-2">
                                <Link
                                    href="tel:123-456-7890"
                                    className="block text-gray-700 hover:text-green-700 transition-colors text-base sm:text-lg"
                                >
                                    +256 700 123 456
                                </Link>
                                <Link
                                    href="mailto:info@mysite.com"
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

                        {/* Legal links */}
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

                {/* Bottom border line */}
                <div className="border-b border-gray-400 mt-8 sm:mt-12 mb-4 sm:mb-6"></div>

                {/* Copyright */}
                <div className="text-center text-xs sm:text-sm text-gray-600 px-2">
                    © 2025 Kleenmaids. All rights reserved.
                </div>
            </div>
        </footer>
    )
}