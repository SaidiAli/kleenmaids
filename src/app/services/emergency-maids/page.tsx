import ServiceLayout from "@/components/ServiceLayout"

export default function EmergencyMaidsPage() {
  const benefits = [
    "Quick response for last-minute cleaning emergencies",
    "Available when you need us most - never get stranded",
    "Professional light cleaning work with immediate results",
    "One-off service perfect for urgent situations",
  ]

  const features = [
    "Same-day service availability",
    "Quick response time",
    "Light cleaning specialization",
    "One-off service option",
    "Emergency booking system",
    "Flexible timing",
    "Professional equipment provided",
    "No long-term commitment required",
  ]

  return (
    <ServiceLayout
      title="Emergency Maids Solution"
      description="A one-off service for urgent, last-minute light cleaning needs."
      heroImage="https://res.cloudinary.com/zurri-cloud/image/upload/v1756019568/kleenmaids/rmyfifprz0kj6gaugn9i.jpg"
      benefits={benefits}
      features={features}
    >
      <div className="max-w-2xl space-y-10">

        <p className="text-gray-700 leading-relaxed">Never get stranded in a last-minute bind again. Our Emergency Helper Solution is a quick fix designed to support you when your permanently placed worker is unavailable or when an abrupt emergency needs your immediate attention. For all your last-minute maid emergencies, we have you covered.</p>

        <p className="text-gray-700 leading-relaxed">This service is intended for light cleaning work and is typically a one-off service.</p>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900 border-b border-gray-200 pb-2">How Our Emergency Service Works</h2>
          <p className="text-gray-700">We've made the process simple to provide you with help as quickly as possible.</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li><strong>Standard Fee:</strong> For our Emergency Help Solution, we charge a standard one-off fee.</li>
            <li><strong>Helper Selection:</strong> The Helper sent to you is not pre-selected. We choose who to send depending on the situation at hand to ensure the most timely response.</li>
          </ul>
        </div>

        <div className="testimonial mt-10 rounded-xl border border-blue-100 bg-blue-50/60 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Client Testimonial</h2>
          <blockquote className="text-gray-700 italic">
            <p>“Thank you very much for the great work you did”.</p>
            <cite className="block mt-2 text-sm text-gray-600">- Christine.</cite>
          </blockquote>
        </div>

        <div className="cta mt-10 bg-deep-blue text-white rounded-xl p-6 shadow">
          <p className="font-semibold">In an emergency and need help now? <a href="https://wa.me/256752623801" className="underline decoration-yellowish underline-offset-4">Call us</a> for a quick fix!</p>
        </div>
      </div>
    </ServiceLayout>
  )
}
