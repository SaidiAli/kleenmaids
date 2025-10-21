import ServiceLayout from "@/components/ServiceLayout"
import { Icon } from "@iconify/react";


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
            title="Live-In Helper Placement Services"
            description="Temporary or permanent live-in maid placements."
            heroImage="/v1761041165/kleenmaids/mytvn1of3mm8x5i6gzru.jpg"
            heroImageDesktop="/v1761040934/kleenmaids/sten2livfxsievz8l3v9.jpg"
            benefits={benefits}
            features={features}
        >
            <div className="max-w-full lg:max-w-2xl space-y-8 sm:space-y-10">

                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">Find the perfect, dependable support for your household with our permanent and temporary Live-In Domestic Help Placements. We specialize in providing thoroughly vetted and carefully screened candidates to simplify the day-to-day demands of your life. Our goal is to connect you with a professional who fits your family's unique needs, giving you more time to do what you love.</p>

                <div className="space-y-4 sm:space-y-6">
                    <h2 className="text-lg sm:text-xl font-semibold text-gray-900 border-b border-gray-200 pb-2">Our Placement Process</h2>
                    <ol className="list-decimal pl-4 sm:pl-6 space-y-3 text-gray-700 text-sm sm:text-base">
                        <li><strong className="text-gray-900">Share Your Requirements</strong>: Contact us and provide the specific requirements for the type of worker you are looking for, including the size of your household.</li>
                        <li><strong className="text-gray-900">Candidate Presentation & Interview</strong>: We present a vetted and screened candidate to you for an interview. This gives you the opportunity to meet them and decide if they are the right fit.</li>
                        <li><strong className="text-gray-900">Service Agreement</strong>: Once you have chosen a candidate, a service agreement is filled out and signed by you. We will also share all pertinent information regarding your chosen candidate.</li>
                        <li><strong className="text-gray-900">Placement & Fee</strong>: After the agreement is signed, the worker is brought to your home and a one-time, non-refundable agency fee is paid through our shared payment channels.</li>
                    </ol>
                </div>

                <div className="testimonial mt-8 sm:mt-10 rounded-xl border border-blue-100 bg-blue-50/60 p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">Client Testimonial</h2>
                    <blockquote className="text-gray-700 italic text-sm sm:text-base">
                        <p>"Thank you very much Jauharah, you understood our specifications and the lady that you gave us is doing a great job".</p>
                        <cite className="block mt-2 text-xs sm:text-sm text-gray-600">- Abdeel.K</cite>
                    </blockquote>
                </div>

                <div className="policies mt-8 sm:mt-10">
                    <h2 className="text-lg sm:text-xl font-semibold text-gray-900 border-b border-gray-200 pb-2 mb-4">Important Policies for Live-In Placements</h2>
                    <ul className="list-disc pl-4 sm:pl-6 space-y-2 text-gray-700 text-sm sm:text-base">
                        <li><strong>Setting Boundaries</strong>: We encourage clients to define clear boundaries under which the employee will operate.</li>
                        <li><strong>Phone Usage</strong>: While we encourage workers not to be on the phone during work hours, clients are required to allow live-in staff access to their phones after their day's work is complete to contact their families.</li>
                        <li><strong>National ID Retention</strong>: As a security measure, we encourage clients to retain the National Identity Card of the live-in staff for the duration of their employment.</li>
                        <li><strong>Termination</strong>: Should you choose to terminate the live-in staff, a 14-day notice is required so we can arrange for a replacement if desired. If the termination is the client's choice, a full month's salary shall be paid to the worker.</li>
                        <li><strong>Zero-Tolerance on Violence</strong>: Under no circumstances should a client exercise violence towards an employee, nor should an employee act violently towards a client or any member of their household.</li>
                    </ul>
                </div>

                <div className="cta mt-8 sm:mt-10 bg-deep-blue text-white rounded-xl p-4 sm:p-6 shadow flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
                    <p className="font-semibold text-sm sm:text-base">Ready to find the ideal support for your home?</p>
                    <a
                        href="https://wa.me/256779511178"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-md bg-yellowish text-deep-blue px-3 sm:px-4 py-2 font-semibold shadow hover:bg-blue-50 transition-colors text-sm sm:text-base whitespace-nowrap"
                    >
                        <Icon icon="logos:whatsapp-icon" width={20} height={20} className="sm:w-6 sm:h-6" />
                        Chat With Us
                    </a>
                </div>

            </div>
        </ServiceLayout>
    )
}
