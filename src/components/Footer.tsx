import { Link, Mail, MapPin, Phone, Sparkles } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"

export const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-16">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center gap-8">
                    <div className="w-1/3">
                        <div className="flex items-center space-x-2 mb-6">
                            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                                <Sparkles className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-xl font-bold">KleenmaidsUg</span>
                        </div>
                        <p className="text-gray-400 mb-6">
                            Professional cleaning services in Kampala, Uganda. Making your spaces spotless since 2018.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-6">Quick links</h3>
                        <ul>
                            <li>Services</li>
                            <li>Blog</li>
                            <li>Contact</li>
                        </ul>
                    </div>

                    <div className="">
                        <h3 className="text-lg font-semibold mb-6">Get in touch</h3>
                        <div className="space-y-2">
                            <div className="flex items-center space-x-3">
                                <Phone className="w-4 h-4" />
                                <span>+256 700 123 456</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Mail className="w-4 h-4" />
                                <span>info@kleenmaidsug.com</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <MapPin className="w-4 h-4" />
                                <span>Kampala, Uganda</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} KleenmaidsUg. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}