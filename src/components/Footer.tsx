import { Link, Mail, MapPin, Phone, Sparkles } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"

export const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-16">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-8">
                    <div>
                        <div className="flex items-center space-x-2 mb-6">
                            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                                <Sparkles className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-xl font-bold">KleenmaidsUg</span>
                        </div>
                        <p className="text-gray-400 mb-6">
                            Professional cleaning services in Kampala, Uganda. Making your spaces spotless since 2018.
                        </p>
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

                    <div>
                        <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link to="/about" className="text-gray-400 hover:text-white">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/services" className="text-gray-400 hover:text-white">
                                    Our Services
                                </Link>
                            </li>
                            <li>
                                <Link to="/pricing" className="text-gray-400 hover:text-white">
                                    Pricing
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-gray-400 hover:text-white">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link to="/book" className="text-gray-400 hover:text-white">
                                    Book Now
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-6">Latest News</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link to="/news" className="text-gray-400 hover:text-white">
                                    Cleaning Tips
                                </Link>
                            </li>
                            <li>
                                <Link to="/news" className="text-gray-400 hover:text-white">
                                    Service Updates
                                </Link>
                            </li>
                            <li>
                                <Link to="/news" className="text-gray-400 hover:text-white">
                                    Special Offers
                                </Link>
                            </li>
                            <li>
                                <Link to="/news" className="text-gray-400 hover:text-white">
                                    Company News
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-6">Newsletter</h3>
                        <p className="text-gray-400 mb-4">Subscribe to get updates on our latest offers and cleaning tips.</p>
                        <div className="space-y-3">
                            <Input placeholder="Your email address" className="bg-gray-800 border-gray-700 text-white" />
                            <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black">Subscribe</Button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
                    <p>&copy; 2024 KleenmaidsUg. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}