import { Phone, User } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export default function BookingSection() {
    return (
        <section className="relative">
            <div className="bg-fixed bg-cover bg-center bg-no-repeat bg-[url('/images/young-male-cleaner.jpg')]">
                <div className="container mx-auto max-w-4xl flex justify-between gap-4 absolute left-1/2 transform -translate-x-1/2 -top-15 elevation-2 shadow-xl/30">
                    <div className="bg-deep-blue p-8 rounded-lg shadow max-w-[500px] w-[500px] flex flex-col items-center">
                        <p className="text-4xl font-bold text-white">50+</p>
                        <p className="text-white">Served contracts</p>
                    </div>
                    <div className="bg-deep-blue p-8 rounded-lg shadow max-w-[500px] w-[500px] flex flex-col items-center">
                        <p className="text-4xl font-bold text-white">3000+</p>
                        <p className="text-white">Live-in helpers Placed</p>
                    </div>
                    <div className="bg-deep-blue p-8 rounded-lg shadow max-w-[500px] w-[500px] flex flex-col items-center">
                        <p className="text-4xl font-bold text-white">500+</p>
                        <p className="text-white">Scheduled House Cleaning</p>
                    </div>
                </div>
                <div className="bg-black/50 py-20 h-[100vh]">
                    <div className="container mx-auto px-4 flex flex-col items-center justify-center h-full">

                        <div className="text-center">
                            <h2 className="text-2xl lg:text-4xl font-bold text-white mb-6">
                                Are you looking for a proffesional cleaning company?
                            </h2>
                            <p className="text-gray-600 mb-8 text-lg text-white">
                                Choose KleenmaidsUg, an innovative and committed professional cleaning company
                            </p>
                            <p className="text-gray-600 mb-8 text-lg text-white">Fill out this form and we will contact you within 72 hours!</p>
                        </div>

                        <div className="max-w-4xl mx-auto bg-deep-blue p-16 rounded-lg">
                            <div className="grid md:grid-cols-4 gap-4">
                                <div className="relative">
                                    <Input placeholder="Your Name" className="bg-white h-16 px-4 py-2 rounded-sm" />
                                    <User className="absolute top-1/2 -translate-y-1/2 right-2 text-deep-blue/50" />
                                </div>
                                <div className="relative">
                                    <Input placeholder="Phone Number" className="bg-white h-16 px-4 py-2 rounded-sm" />
                                    <Phone className="absolute top-1/2 -translate-y-1/2 right-2 text-deep-blue/50" />
                                </div>
                                <select className="bg-white h-16 px-4 py-2 rounded-sm">
                                    <option value="">Select Service</option>
                                    <option value="maid">Maid</option>
                                    <option value="cleaning">Cleaning</option>
                                </select>
                                <Button className="bg-yellow-500 hover:bg-yellow-600 text-deep-blue font-semibold h-16 px-4 py-2">Book Now</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}