import ServiceLayout from "@/components/ServiceLayout"

export default function ScheduledCleaningPage() {
    const benefits = [
        "Flexible scheduling at your convenience and frequency",
        "Comprehensive general house cleaning and maintenance",
        "Professional laundry service including wash and iron",
        "Decluttering and home organizing solutions",
    ]

    const features = [
        "Weekly cleaning schedules",
        "Bi-weekly cleaning options",
        "Thrice to four times per week service",
        "General house cleaning and maintenance",
        "Laundry service (wash and iron)",
        "Decluttering services",
        "Home organizing solutions",
        "Customizable cleaning plans",
    ]

    return (
        <ServiceLayout
            title="Scheduled House Cleaning"
            description="Professional cleaning on your schedule."
            heroImage="/images/young-male-cleaner.jpg"
            benefits={benefits}
            features={features}
        >
            <div className="max-w-2xl space-y-10">
                <h1 className="text-2xl font-bold text-gray-900 border-b border-gray-200 pb-2">Scheduled House Cleaning Service</h1>

                <p className="text-gray-700 leading-relaxed">For those looking for a flexible, non-live-in option, our scheduled services provide the ideal solution to support your household. Enjoy the peace of mind that comes with a consistently clean and organized home, managed by a professional you can trust. The same dedicated helper is assigned to your home for every visit to ensure consistent, personalized service.</p>
                <p className="text-gray-700 leading-relaxed">All matters concerning this arrangement are handled directly between you and the company, as the assigned helper is under our management.</p>

                <div className="space-y-4">
                    <h2 className="text-xl font-semibold text-gray-900 border-b border-gray-200 pb-2">What Our Scheduled Service Includes</h2>
                    <p className="text-gray-700">Our comprehensive scheduled solutions consist of general house cleaning and maintenance, and are designed to handle daily chores. The service includes:</p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li>General house cleaning and maintenance</li>
                        <li>Laundry services (Wash and Iron)</li>
                        <li>Washing of utensils</li>
                        <li>Organizing and de-cluttering of your living space</li>
                        <li>Light compound cutters</li>
                    </ul>
                </div>

                <div className="space-y-4">
                    <h2 className="text-xl font-semibold text-gray-900 border-b border-gray-200 pb-2">Flexible Scheduling & Pricing</h2>
                    <p className="text-gray-700">We offer various schedules to fit your lifestyle. The cost of the service is a standard monthly charge determined by the frequency you need.</p>
                    <p className="font-semibold text-gray-900">Available Schedules:</p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li>Weekly</li>
                        <li>Bi-weekly</li>
                        <li>Three to four times a week</li>
                    </ul>
                </div>

                <div className="testimonial mt-10 rounded-xl border border-blue-100 bg-blue-50/60 p-6">
                    <h2 className="text-xl font-semibold text-gray-900 mb-3">Client Testimonial</h2>
                    <blockquote className="text-gray-700 italic">
                        <p>"Thank you Jauharah, it was nice coming back home to a clean and organized place after being away for a week. !"</p>
                        <cite className="block mt-2 text-sm text-gray-600">- Enock.</cite>
                    </blockquote>
                </div>
                {/* <div className="grid md:grid-cols-3 gap-6">
                    <div className="border border-gray-200 rounded-lg p-6">
                        <h4 className="font-semibold text-lg mb-3">Weekly Cleaning</h4>
                        <p className="text-gray-600 mb-4">Perfect for busy households that need regular maintenance</p>
                        <ul className="text-sm text-gray-600 space-y-1">
                            <li>• General cleaning</li>
                            <li>• Bathroom sanitization</li>
                            <li>• Kitchen deep clean</li>
                            <li>• Laundry service</li>
                        </ul>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-6">
                        <h4 className="font-semibold text-lg mb-3">Bi-Weekly Cleaning</h4>
                        <p className="text-gray-600 mb-4">Ideal for maintaining cleanliness with moderate usage</p>
                        <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Thorough cleaning</li>
                            <li>• Organizing services</li>
                            <li>• Deep sanitization</li>
                            <li>• Decluttering</li>
                        </ul>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-6">
                        <h4 className="font-semibold text-lg mb-3">3-4 Times Weekly</h4>
                        <p className="text-gray-600 mb-4">Comprehensive service for high-maintenance spaces</p>
                        <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Daily maintenance</li>
                            <li>• Complete home care</li>
                            <li>• Premium service</li>
                            <li>• Priority support</li>
                        </ul>
                    </div>
                </div> */}
            </div>
        </ServiceLayout>
    )
}
