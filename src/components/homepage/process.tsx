import { CheckCircle, Phone, Users } from "lucide-react";

export default function ProcessSection() {
    return (
        <section className="pt-20 bg-bluish">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our process</h2>
                </div>

                <div className="flex justify-center items-center gap-8 z-10 bg-[url('/images/connector.png')] bg-cover bg-center bg-no-repeat" id="how-it-works">
                    <div className="text-center p-8 pt-6">
                        <div className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-100">
                            <Phone className="w-8 h-8 text-yellowish" />
                        </div>
                        <h3 className="text-xl font-semibold mb-4">Book Your Service</h3>
                        <p className="text-gray-600 text-lg">
                            Call us or book online to schedule your cleaning service at your convenience
                        </p>
                    </div>

                    <div className="text-center p-8 pt-6">
                        <div className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-100">
                            <Users className="w-8 h-8 text-yellowish" />
                        </div>
                        <h3 className="text-xl font-semibold mb-4">Choose Package</h3>
                        <p className="text-gray-600 text-lg">
                            Select from our range of cleaning packages tailored to your specific needs
                        </p>
                    </div>

                    <div className="text-center p-8 pt-6">
                        <div className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-100">
                            <CheckCircle className="w-8 h-8 text-yellowish" />
                        </div>
                        <h3 className="text-xl font-semibold mb-4">Book Appointment</h3>
                        <p className="text-gray-600 text-lg">Confirm your appointment and enjoy professional cleaning services</p>
                    </div>
                </div>
            </div>
        </section>
    )
}