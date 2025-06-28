
import { MoveUpRight, PhoneCall } from "lucide-react"
import { Button } from "./ui/button"
import Image from "next/image"

export default function Navbar() {
    return (
        <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
            <div className="flex items-center justify-between bg-midnight text-white px-32 py-2 text-center">
                <p>We are here to help you achieve your goals</p>
                <div className="flex items-center space-x-2 ml-2">
                    <div className="bg-white rounded-full p-2"><PhoneCall className="h-4 w-4 text-tahiti" /></div>
                    <span className="font-bold">Call: +256 700 000 000</span>
                </div>
            </div>
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                <div className="flex items-center space-x-2 relative">
                    <Image src="/images/logo.png" alt="Logo" width={300} height={100} className="object-contain" />
                </div>
                <nav className="hidden md:flex items-center space-x-8 uppercase font-bold">
                    <a href="#services" className="text-gray-600 hover:text-blue-600 transition-colors">
                        Services
                    </a>
                    <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">
                        About
                    </a>
                    <a href="#testimonials" className="text-gray-600 hover:text-blue-600 transition-colors">
                        Success Stories
                    </a>
                    <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">
                        Contact
                    </a>
                </nav>
                <Button className="bg-midnight hover:bg-tahiti rounded-full px-6 hover:scale-105 transition-all uppercase">Book Session<MoveUpRight className="h-5 w-5" /></Button>
            </div>
        </header>
    )
}