import Navbar from '@/components/navbar';
import { Button } from '@/components/ui/button';
import { StarIcon } from '@/components/ui/star-icon';
import { services } from '@/data';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const ContactPage = () => {
    return (
        <div className="bg-bluish min-h-screen">
            <Navbar className="" />
            <div className="container mx-auto py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Left Column: Contact Info */}
                    <div className="text-gray-800">
                        <div className="flex items-center gap-3 mb-4">
                            <StarIcon size={24} />
                            <p className="font-semibold text-gray-700">Get in touch</p>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-deep-blue mb-8 leading-tight">
                            For any inquiry about our services, please reach out
                        </h1>

                        <div className="space-y-6">
                            <div className="bg-white p-6 rounded-none shadow-sm flex items-start gap-4">
                                <MapPin className="text-deep-blue w-8 h-8 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="text-xl font-bold text-deep-blue">Office Address</h3>
                                    <p className="text-gray-600">Kampala, Uganda.</p>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-none shadow-sm flex items-start gap-4">
                                <Phone className="text-deep-blue w-8 h-8 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="text-xl font-bold text-deep-blue">Telephone Number</h3>
                                    <p className="text-gray-600">+256 752 623 801</p>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-none shadow-sm flex items-start gap-4">
                                <Mail className="text-deep-blue w-8 h-8 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="text-xl font-bold text-deep-blue">Mail Address</h3>
                                    <p className="text-gray-600">info@kleenmaidsug.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Contact Form */}
                    <div>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name <span className="text-red-500">*</span></label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Your name*"
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:ring-1 focus:ring-deep-blue"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email address <span className="text-red-500">*</span></label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Email*"
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:ring-1 focus:ring-deep-blue"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone (optional)</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        placeholder="Phone"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:ring-1 focus:ring-deep-blue"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="services" className="block text-sm font-medium text-gray-700 mb-1">Services <span className="text-red-500">*</span></label>
                                    <select
                                        id="services"
                                        name="services"
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:ring-1 focus:ring-deep-blue"
                                    >
                                        {services.map((service, index) => (
                                            <option key={index} value={service}>{service}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your message <span className="text-red-500">*</span></label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={6}
                                    placeholder="Type message*"
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:ring-1 focus:ring-deep-blue"
                                ></textarea>
                            </div>
                            <div>
                                <Button
                                    type="submit"
                                    className="w-full flex items-center justify-center gap-2 bg-deep-blue hover:bg-greenish text-white font-bold px-6 py-3 rounded-none transition-colors"
                                >
                                    <Send size={18} />
                                    Send message
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;