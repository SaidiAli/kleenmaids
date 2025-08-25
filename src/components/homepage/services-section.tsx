import ServiceCard from './service-card';
import { motion } from "motion/react";

const ServicesSection = () => {
    const services = [
        {
            title: "Live-In Maid Placement Services",
            link: "/services/live-in-maids",
            image: 'https://res.cloudinary.com/zurri-cloud/image/upload/v1755705250/kleenmaids/wu5ymuiyg1ll1knfszhu.jpg',
        },
        {
            title: "Scheduled House Cleaning",
            link: "/services/scheduled-cleaning",
            image: 'https://res.cloudinary.com/zurri-cloud/image/upload/v1755705251/kleenmaids/b0skm2jljeujyxj4vnwe.jpg',
        },
        {
            title: "Emergency Maids Solution",
            link: "/services/emergency-maids",
            image: 'https://res.cloudinary.com/zurri-cloud/image/upload/v1755705246/kleenmaids/or62huxxvk9jlnfwwfzv.jpg',
        },
        {
            title: "Professional Cleaning Services",
            link: "/services/cleaning-services",
            image: 'https://res.cloudinary.com/zurri-cloud/image/upload/v1755705248/kleenmaids/ryufnyrt1ly7zfogaoch.jpg',
        },
        {
            title: "Staffing Services",
            link: "/services/staffing-services",
            image: 'https://res.cloudinary.com/zurri-cloud/image/upload/v1755705248/kleenmaids/gqaqsgzt7xjcd3lh18yz.jpg',
        },
    ];

    return (
        <section className="pt-20 pb-50">
            <motion.div 
                className="max-w-7xl mx-auto"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={{
                    hidden: { opacity: 0 },
                    visible: { 
                        opacity: 1,
                        transition: {
                            staggerChildren: 0.2
                        }
                    }
                }}
            >
                {/* Header */}
                <motion.div 
                    className="text-center mb-16 space-y-8"
                    variants={{
                        hidden: { opacity: 0, y: 80 },
                        visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut" } }
                    }}
                >
                    <h2 className="text-6xl font-bold text-center">
                        Our services
                    </h2>
                    <p className="text-xl text-center">
                        We offer a range of services to meet your needs
                    </p>
                </motion.div>

                {/* Services Grid */}
                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { 
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.15
                            }
                        }
                    }}
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={{
                                hidden: { 
                                    opacity: 0, 
                                    y: 100,
                                    scale: 0.8,
                                    rotateX: -15
                                },
                                visible: { 
                                    opacity: 1, 
                                    y: 0,
                                    scale: 1,
                                    rotateX: 0,
                                    transition: { 
                                        duration: 0.8,
                                        ease: "easeOut",
                                        type: "spring",
                                        stiffness: 100
                                    }
                                }
                            }}
                        >
                            <ServiceCard
                                title={service.title}
                                image={service.image}
                                link={service.link}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
};

export default ServicesSection;