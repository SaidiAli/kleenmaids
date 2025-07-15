import ServiceLayout from "@/components/ServiceLayout"

export default function CleaningServicesPage() {
  const benefits = [
    "Professional cleaning for offices and commercial spaces",
    "Specialized event cleaning services for all occasions",
    "Expert furniture cleaning and maintenance",
    "Customized solutions for specialized cleaning needs",
  ]

  const features = [
    "Office and commercial space cleaning",
    "Special event cleaning services",
    "Professional furniture cleaning",
    "Specialized cleaning solutions",
    "Site visit and quotation service",
    "Customized cleaning plans",
    "Commercial-grade equipment",
    "Flexible scheduling options",
  ]

  return (
    <ServiceLayout
      title="Professional Cleaning Services"
      description="We provide comprehensive cleaning services to offices and commercial spaces, special events, furniture, and specialized cleaning needs. Upon requesting our cleaning services, we conduct a site visit and provide you with a detailed quotation for the work to be done."
      heroImage="/images/org_cleaning.jpg"
      benefits={benefits}
      features={features}
    >
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Service Categories</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-gray-200 rounded-lg p-6">
            <h4 className="font-semibold text-lg mb-3">Commercial Cleaning</h4>
            <p className="text-gray-600 mb-4">Professional cleaning for business environments</p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Office buildings</li>
              <li>• Retail spaces</li>
              <li>• Restaurants</li>
              <li>• Medical facilities</li>
            </ul>
          </div>
          <div className="border border-gray-200 rounded-lg p-6">
            <h4 className="font-semibold text-lg mb-3">Special Events</h4>
            <p className="text-gray-600 mb-4">Pre and post-event cleaning services</p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Wedding venues</li>
              <li>• Corporate events</li>
              <li>• Private parties</li>
              <li>• Conference centers</li>
            </ul>
          </div>
          <div className="border border-gray-200 rounded-lg p-6">
            <h4 className="font-semibold text-lg mb-3">Furniture Cleaning</h4>
            <p className="text-gray-600 mb-4">Specialized furniture care and maintenance</p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Upholstery cleaning</li>
              <li>• Carpet cleaning</li>
              <li>• Leather treatment</li>
              <li>• Fabric protection</li>
            </ul>
          </div>
          <div className="border border-gray-200 rounded-lg p-6">
            <h4 className="font-semibold text-lg mb-3">Specialized Cleaning</h4>
            <p className="text-gray-600 mb-4">Custom solutions for unique requirements</p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Post-construction cleanup</li>
              <li>• Move-in/move-out cleaning</li>
              <li>• Deep sanitization</li>
              <li>• Industrial cleaning</li>
            </ul>
          </div>
        </div>
      </div>
    </ServiceLayout>
  )
}
