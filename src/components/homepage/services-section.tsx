import ServiceCard from './service-card';

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
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16 space-y-8">
                    <h2 className="text-6xl font-bold text-center">
                        Our services
                    </h2>
                    <p className="text-xl text-center">
                        We offer a range of services to meet your needs
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            title={service.title}
                            image={service.image}
                            link={service.link}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;