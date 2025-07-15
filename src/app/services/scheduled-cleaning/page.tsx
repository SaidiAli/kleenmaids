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
            description="Receive professional cleaning services at a time and frequency of your convenience. Our scheduled solutions consist of general house cleaning and maintenance, laundry service (wash and iron), decluttering and home organizing. The schedules range from weekly, bi-weekly, to thrice-four times a week."
            heroImage="/images/young-male-cleaner.jpg"
            benefits={benefits}
            features={features}
        >
            <div className="mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Available Schedules</h3>
                <div className="grid md:grid-cols-3 gap-6">
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
                </div>
            </div>
        </ServiceLayout>
    )
}
