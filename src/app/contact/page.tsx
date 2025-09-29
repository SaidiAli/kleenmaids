"use client";

import Navbar from '@/components/navbar';
import { Button } from '@/components/ui/button';
import { StarIcon } from '@/components/ui/star-icon';
import { services } from '@/data';
import { useForm } from '@formspree/react';
import { Icon } from '@iconify/react/dist/iconify.js';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { motion } from 'motion/react';

const ContactPage = () => {
    const [state, handleSubmit] = useForm("xdkwevjo");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }

    return (
        <div className="bg-bluish min-h-screen">
            <Navbar className="" />
            <motion.div
                className="container mx-auto py-20 px-4"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <motion.div
                    className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.3
                            }
                        }
                    }}
                >
                    {/* Left Column: Contact Info */}
                    <motion.div
                        className="text-gray-800"
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
                        }}
                    >
                        <motion.div
                            className="flex items-center gap-3 mb-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <StarIcon size={24} />
                            <p className="font-semibold text-gray-700">Get in touch</p>
                        </motion.div>
                        <motion.h1
                            className="text-4xl md:text-5xl font-bold text-deep-blue mb-8 leading-tight"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            For any inquiry about our services, please reach out
                        </motion.h1>

                        <motion.div
                            className="space-y-6"
                            initial="hidden"
                            animate="visible"
                            variants={{
                                hidden: { opacity: 0 },
                                visible: {
                                    opacity: 1,
                                    transition: {
                                        staggerChildren: 0.15,
                                        delayChildren: 0.6
                                    }
                                }
                            }}
                        >
                            <motion.div
                                className="bg-white p-6 rounded-lg shadow-sm flex items-start gap-4"
                                variants={{
                                    hidden: { opacity: 0, y: 20, scale: 0.9 },
                                    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } }
                                }}
                                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                            >
                                <MapPin className="text-deep-blue w-8 h-8 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="text-xl font-bold text-deep-blue">Office Address</h3>
                                    <p className="text-gray-600">Kampala, Uganda.</p>
                                </div>
                            </motion.div>

                            <motion.div
                                className="bg-white p-6 rounded-lg shadow-sm flex items-start gap-4"
                                variants={{
                                    hidden: { opacity: 0, y: 20, scale: 0.9 },
                                    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } }
                                }}
                                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                            >
                                <Phone className="text-deep-blue w-8 h-8 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="text-xl font-bold text-deep-blue">Telephone Number</h3>
                                    <p className="text-gray-600">+256 752 623 801</p>
                                </div>
                            </motion.div>

                            <motion.a
                                href="https://wa.me/256752623801"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white p-6 rounded-lg shadow-sm flex items-start gap-4"
                                variants={{
                                    hidden: { opacity: 0, y: 20, scale: 0.9 },
                                    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } }
                                }}
                                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                            >
                                <Icon icon="logos:whatsapp-icon" width={24} height={24} className='w-8 h-8 mt-1 flex-shrink-0' />
                                <div>
                                    <h3 className="text-xl font-bold text-deep-blue">Chat on WhatsApp</h3>
                                    <p className="text-gray-600">+256 752 623 801</p>
                                </div>
                            </motion.a>

                            <motion.div
                                className="bg-white p-6 rounded-lg shadow-sm flex items-start gap-4"
                                variants={{
                                    hidden: { opacity: 0, y: 20, scale: 0.9 },
                                    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } }
                                }}
                                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                            >
                                <Mail className="text-deep-blue w-8 h-8 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="text-xl font-bold text-deep-blue">Mail Address</h3>
                                    <p className="text-gray-600">info@kleenmaidsug.com</p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* Right Column: Contact Form */}
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, x: 50 },
                            visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.3 } }
                        }}
                    >
                        <motion.form
                            className="space-y-6"
                            initial="hidden"
                            animate="visible"
                            onSubmit={handleSubmit}
                            variants={{
                                hidden: { opacity: 0 },
                                visible: {
                                    opacity: 1,
                                    transition: {
                                        staggerChildren: 0.1,
                                        delayChildren: 0.5
                                    }
                                }
                            }}
                        >
                            <motion.div
                                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                                }}
                            >
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name <span className="text-red-500">*</span></label>
                                    <motion.input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Your name*"
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-deep-blue transition-all"
                                        whileFocus={{ scale: 1.02 }}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email address <span className="text-red-500">*</span></label>
                                    <motion.input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Email*"
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-deep-blue transition-all"
                                        whileFocus={{ scale: 1.02 }}
                                    />
                                </div>
                            </motion.div>
                            <motion.div
                                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                                }}
                            >
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone (optional)</label>
                                    <motion.input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        placeholder="Phone"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-deep-blue transition-all"
                                        whileFocus={{ scale: 1.02 }}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="services" className="block text-sm font-medium text-gray-700 mb-1">Services <span className="text-red-500">*</span></label>
                                    <motion.select
                                        id="services"
                                        name="services"
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-deep-blue transition-all"
                                        whileFocus={{ scale: 1.02 }}
                                    >
                                        {services.map((service, index) => (
                                            <option key={index} value={service}>{service}</option>
                                        ))}
                                    </motion.select>
                                </div>
                            </motion.div>
                            <motion.div
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                                }}
                            >
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your message <span className="text-red-500">*</span></label>
                                <motion.textarea
                                    id="message"
                                    name="message"
                                    rows={6}
                                    placeholder="Type message*"
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-deep-blue transition-all resize-none"
                                    whileFocus={{ scale: 1.01 }}
                                />
                            </motion.div>
                            <motion.div
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                                }}
                            >
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <Button
                                        type="submit"
                                        className="w-full flex items-center justify-center gap-2 bg-deep-blue hover:bg-greenish text-white font-bold px-6 py-4 rounded-lg transition-all duration-300"
                                    >
                                        <Send size={18} />
                                        Send message
                                    </Button>
                                </motion.div>
                            </motion.div>
                        </motion.form>
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default ContactPage;