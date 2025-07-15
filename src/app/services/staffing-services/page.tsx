import ServiceLayout from "@/components/ServiceLayout"

export default function StaffingServicesPage() {
    const benefits = [
        "Reliable support staff for various informal work positions",
        "Wide range of staff including cleaners, cooks, and housekeepers",
        "Customized staffing solutions based on job descriptions",
        "Flexible staffing numbers to meet your specific needs",
    ]

    const features = [
        "Professional cleaners",
        "Experienced cooks",
        "Skilled housekeepers",
        "General support staff",
        "Customized job matching",
        "Flexible staffing numbers",
        "Background-checked personnel",
        "Ongoing support and management",
    ]

    return (
        <ServiceLayout
            title="Staffing Services"
            description="We provide support staff specifically for those looking for informal workers. These range from cleaners, cooks, housekeepers, and more. With our support staff service, the client shares the job description and number of employees they're looking for, and we provide suitable candidates."
            heroImage="/images/young-male-cleaner.jpg"
            benefits={benefits}
            features={features}
        >
            <div className="mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Available Staff Categories</h3>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center p-6 bg-blue-50 rounded-lg">
                        <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-white text-2xl">🧹</span>
                        </div>
                        <h4 className="font-semibold mb-2">Cleaners</h4>
                        <p className="text-gray-600 text-sm">Professional cleaning staff for various environments</p>
                    </div>
                    <div className="text-center p-6 bg-green-50 rounded-lg">
                        <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-white text-2xl">👨‍🍳</span>
                        </div>
                        <h4 className="font-semibold mb-2">Cooks</h4>
                        <p className="text-gray-600 text-sm">Skilled cooks for homes and commercial kitchens</p>
                    </div>
                    <div className="text-center p-6 bg-purple-50 rounded-lg">
                        <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-white text-2xl">🏠</span>
                        </div>
                        <h4 className="font-semibold mb-2">Housekeepers</h4>
                        <p className="text-gray-600 text-sm">Comprehensive household management staff</p>
                    </div>
                </div>
            </div>

            <div className="mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">How It Works</h3>
                <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-white font-bold text-sm">1</span>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-2">Share Job Description</h4>
                            <p className="text-gray-600">Provide us with detailed job requirements and responsibilities</p>
                        </div>
                    </div>
                    <div className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-white font-bold text-sm">2</span>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-2">Specify Number of Staff</h4>
                            <p className="text-gray-600">Tell us how many employees you need for your project</p>
                        </div>
                    </div>
                    <div className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-white font-bold text-sm">3</span>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-2">Candidate Matching</h4>
                            <p className="text-gray-600">We match suitable candidates to your requirements</p>
                        </div>
                    </div>
                    <div className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-white font-bold text-sm">4</span>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-2">Staff Deployment</h4>
                            <p className="text-gray-600">We deploy the selected staff and provide ongoing support</p>
                        </div>
                    </div>
                </div>
            </div>
        </ServiceLayout>
    )
}
