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
      description="Never get stranded! For all your last-minute maid emergency needs, we have you covered with our Quick Fix solution. This service is designed for light cleaning work and is often a one-off service perfect for urgent situations."
      heroImage="/images/young-male-cleaner.jpg"
      benefits={benefits}
      features={features}
    >
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Emergency Situations We Handle</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h4 className="font-semibold text-lg mb-3 text-red-800">Urgent Cleaning Needs</h4>
            <ul className="text-red-700 space-y-2">
              <li>• Last-minute guest arrivals</li>
              <li>• Post-party cleanup</li>
              <li>• Spill and stain emergencies</li>
              <li>• Pre-inspection cleaning</li>
            </ul>
          </div>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h4 className="font-semibold text-lg mb-3 text-yellow-800">Quick Fix Solutions</h4>
            <ul className="text-yellow-700 space-y-2">
              <li>• Surface cleaning and tidying</li>
              <li>• Bathroom quick clean</li>
              <li>• Kitchen emergency cleanup</li>
              <li>• Living area organization</li>
            </ul>
          </div>
        </div>
      </div>
    </ServiceLayout>
  )
}
