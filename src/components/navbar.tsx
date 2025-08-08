
import { MoveUpRight } from "lucide-react"
import { Button } from "./ui/button"
import Image from "next/image"
import Link from "next/link"

export default function Navbar() {
    return (
        <header className="border-b bg-bluish top-0 z-50 sticky">
            <div className="container mx-auto px-4 py-2 flex items-center justify-between">

                <div className="flex items-center space-x-8">
                    <Link href="/" className="flex items-center space-x-2 relative">
                        <Image src="/images/logo.png" alt="Logo" width={200} height={100} className="object-contain" />
                    </Link>
                    <nav className="hidden md:flex items-center space-x-8 uppercase font-bold">
                        <Link href="/" className="text-gray-600 hover:text-greenish transition-colors">
                            Home
                        </Link>
                        <Link href="/services" className="text-gray-600 hover:text-greenish transition-colors">
                            Services
                        </Link>
                        <Link href="/about" className="text-gray-600 hover:text-greenish transition-colors">
                            About
                        </Link>
                        <Link href="/contact" className="text-gray-600 hover:text-greenish transition-colors">
                            Contact
                        </Link>
                    </nav>
                </div>
                <Link href="/contact" className="">
                    <Button className="bg-greenish hover:bg-tahiti rounded-full px-6 hover:scale-105 transition-all uppercase cursor-pointer">
                        Book Service<MoveUpRight className="h-5 w-5" />
                    </Button>
                </Link>
            </div>
        </header>
    )
}