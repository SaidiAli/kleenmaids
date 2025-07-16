import { Mail, MapPin, Phone, Send } from 'lucide-react';

const ContactPage = () => {
    return (
        <div className="bg-[#f0f4f8] min-h-screen p-8 md:p-16 lg:p-24">
            <div className="container mx-auto max-w-6xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Left Column: Contact Info */}
                    <div className="text-gray-800">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="text-blue-500 font-bold text-2xl">✦</span>
                            <p className="font-semibold text-gray-700">Get in touch</p>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-8 leading-tight">
                            We want to share our location to find us easily.
                        </h1>

                        <div className="space-y-6">
                            <div className="bg-white p-6 rounded-lg shadow-sm flex items-start gap-4">
                                <MapPin className="text-blue-500 w-8 h-8 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="text-xl font-bold text-blue-900">Office address</h3>
                                    <p className="text-gray-600">Kampala, Uganda.</p>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-sm flex items-start gap-4">
                                <Phone className="text-blue-500 w-8 h-8 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="text-xl font-bold text-blue-900">Telephone number</h3>
                                    <p className="text-gray-600">+256 756 222 222</p>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-sm flex items-start gap-4">
                                <Mail className="text-blue-500 w-8 h-8 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="text-xl font-bold text-blue-900">Mail address</h3>
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
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name (required)</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Your name*"
                                        required
                                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email address (required)</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Email*"
                                        required
                                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="services" className="block text-sm font-medium text-gray-700 mb-1">Services (required)</label>
                                    <select
                                        id="services"
                                        name="services"
                                        required
                                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    >
                                        <option>Choose services</option>
                                        <option>Residential Cleaning</option>
                                        <option>Commercial Cleaning</option>
                                        <option>Deep Cleaning</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your message*</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={6}
                                    placeholder="Type message*"
                                    required
                                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                ></textarea>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="w-auto flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-bold px-6 py-3 rounded-lg transition-colors"
                                >
                                    <Send size={18} />
                                    Send message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;