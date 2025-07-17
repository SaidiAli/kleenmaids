import { Mail, MapPin, Phone, Sparkles } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const Footer = () => {
    return (
        <footer className="bg-yellowish text-white py-16">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center gap-8">
                    <div className="w-1/3">
                        <Link href="/" className="flex items-center space-x-2 relative">
                            <Image src="/images/logo.png" alt="Logo" width={300} height={100} className="object-contain" />
                        </Link>
                        <p className="text-deep-blue mb-6">
                            Professional cleaning services in Kampala, Uganda. Making your spaces spotless since 2018.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-deep-blue">Quick links</h3>
                        <div className="flex flex-col gap-2">
                            <Link href="/services" className="text-deep-blue hover:text-white transition-colors">Services</Link>
                            <Link href="/blog" className="text-deep-blue hover:text-white transition-colors">Blog</Link>
                            <Link href="/contact" className="text-deep-blue hover:text-white transition-colors">Contact</Link>
                        </div>
                    </div>

                    <div className="">
                        <h3 className="text-lg font-semibold mb-6 text-deep-blue">Get in touch</h3>
                        <div className="space-y-2">
                            <div className="flex items-center space-x-3">
                                <Phone className="w-4 h-4 text-deep-blue" />
                                <span className="text-deep-blue transition-colors">+256 700 123 456</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Mail className="w-4 h-4 text-deep-blue" />
                                <span className="text-deep-blue transition-colors">info@kleenmaidsug.com</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <MapPin className="w-4 h-4 text-deep-blue" />
                                <span className="text-deep-blue transition-colors">Kampala, Uganda</span>
                            </div>  
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-8 text-center text-deep-blue">
                    <p>&copy; {new Date().getFullYear()} KleenmaidsUg. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}