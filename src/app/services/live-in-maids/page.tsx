import ServiceLayout from "@/components/ServiceLayout"

export default function LiveInMaidPage() {
    const benefits = [
        "Carefully screened and vetted candidates for your peace of mind",
        "Flexible arrangements for temporary or permanent placements",
        "Comprehensive background checks and reference verification",
        "Ongoing support and replacement guarantee if needed",
    ]

    const features = [
        "Temporary and permanent placement options",
        "Thorough candidate screening process",
        "Customized matching based on your requirements",
        "Flexible scheduling arrangements",
        "Professional training provided",
        "Insurance and bonding available",
        "24/7 customer support",
        "Replacement guarantee",
    ]

    return (
        <ServiceLayout
            title="Live-In Maid Placement Services"
            description="If you're looking for a temporary or permanent live-in maid, we have the right candidate for you. Once you provide us with the requirements of the person you're looking for, we present you with options to select from. The charge is based on the schedule you have opted for."
            heroImage="/images/kleenmaids-maid-1.png"
            benefits={benefits}
            features={features}
        >
            <div className="mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">What our clients say</h3>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center p-6 bg-blue-50 rounded-lg">
                        <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-white font-bold">1</span>
                        </div>
                        <h4 className="font-semibold mb-2">Requirements Assessment</h4>
                        <p className="text-gray-600 text-sm">We discuss your specific needs and preferences</p>
                    </div>
                    <div className="text-center p-6 bg-blue-50 rounded-lg">
                        <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-white font-bold">2</span>
                        </div>
                        <h4 className="font-semibold mb-2">Candidate Selection</h4>
                        <p className="text-gray-600 text-sm">We present you with pre-screened candidates</p>
                    </div>
                    <div className="text-center p-6 bg-blue-50 rounded-lg">
                        <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-white font-bold">3</span>
                        </div>
                        <h4 className="font-semibold mb-2">Placement & Support</h4>
                        <p className="text-gray-600 text-sm">We facilitate the placement and provide ongoing support</p>
                    </div>
                </div>
            </div>
        </ServiceLayout>
    )
}
