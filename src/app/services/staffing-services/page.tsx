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
            description="Reliable staffing for cleaners, cooks, housekeepers, and more."
            heroImage="/images/young-male-cleaner.jpg"
            benefits={benefits}
            features={features}
        >

            <div className="max-w-2xl space-y-10">
                <p className="text-gray-700 leading-relaxed">Away from our Domestic Help Support and cleaning services, we also provide support staff placements for clients looking to hire for specific roles as they see fit. We provide support staff for specific for those looking for informal workers.</p>
                <p className="text-gray-700 leading-relaxed">Whether you need a single placement or ongoing staffing support, we have a solution for you.</p>

                <div className="space-y-4">
                    <h2 className="text-xl font-semibold text-gray-900 border-b border-gray-200 pb-2">Roles We Place</h2>
                    <p className="text-gray-700">We provide support staff for specific roles such as:</p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li>Caretakers</li>
                        <li>Shamba Boys</li>
                        <li>Cooks</li>
                        <li>Cleaners that can be hired directly by the client for specific tasks.</li>
                    </ul>
                </div>

                <div className="space-y-4">
                    <h2 className="text-xl font-semibold text-gray-900 border-b border-gray-200 pb-2">How It Works & Pricing</h2>
                    <p className="text-gray-700">Our process is designed to be simple and flexible for your staffing needs.</p>
                    <ol className="list-decimal pl-6 space-y-2 text-gray-700">
                        <li><strong>Share Job Description</strong>: The client shares with the job description and number of employees they’re looking for.</li>
                        <li><strong>Choose Your Engagement Model</strong>:
                            <h3 className="font-semibold text-gray-900 mt-2">One-Off Placement</h3>
                            <p className="text-gray-700">For support staff placements we charge a one-off placement fee. You can engage the company on a one-off basis for a single hire.</p>
                            <h3 className="font-semibold text-gray-900 mt-2">Retainer Model</h3>
                            <p className="text-gray-700">For ongoing placement needs, you can keep us on a retainer. A retainer fee is paid for the number of workers that will be needed for a specific period of time.</p>
                        </li>
                    </ol>
                </div>

                <div className="cta mt-10 bg-deep-blue text-white rounded-xl p-6 shadow">
                    <p className="font-semibold">Looking to hire support staff for a specific role? <a href="" className="underline decoration-yellowish underline-offset-4">Contact us</a> to discuss your requirements and find the right candidate for the job.</p>
                </div>
            </div>
        </ServiceLayout>
    )
}
