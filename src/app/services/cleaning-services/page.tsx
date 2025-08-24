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
      description="Comprehensive cleaning for offices, events, furniture, and specialized needs."
      heroImage="/images/org_cleaning.jpg"
      benefits={benefits}
      features={features}
    >
      <div className="max-w-2xl space-y-10">

        <h1 className="text-2xl font-bold text-gray-900 border-b border-gray-200 pb-2">Residential & Commercial Cleaning Services</h1>

        <p className="text-gray-700 leading-relaxed">Our professional cleaning services provide you with solutions that are tailor-made to your most urgent needs, catering to both homes and commercial spaces. Whether you're preparing for a special event, moving, or simply in need of a thorough deep clean, our team delivers exceptional results that meet your desired satisfaction.</p>
        <p className="text-gray-700 leading-relaxed">We handle the nitty-gritty of your cleaning demands with professionally executed and eco-friendly solutions.</p>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900 border-b border-gray-200 pb-2">Our Cleaning Solutions</h2>
          <p className="text-gray-700">We offer a wide range of specialized cleaning services to handle any task, big or small. Our solutions include:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Deep Cleaning Services</li>
            <li>Specialized Cleaning Services</li>
            <li>Move-in and Move-Out Cleaning Services</li>
            <li>Before and After Event Cleaning Services</li>
            <li>Itemized Cleaning for your furniture, Carpets and Upholstered items</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900 border-b border-gray-200 pb-2">Our Professional Standard</h2>
          <p className="text-gray-700 leading-relaxed">To ensure consistent quality and true customer satisfaction, our one-off cleaning services are handled by a dedicated team. Each team includes a supervisor who is present to oversee the particular job at hand and ensure our work exceeds your expectations.</p>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900 border-b border-gray-200 pb-2">Our Process</h2>
          <ol className="list-decimal pl-6 space-y-2 text-gray-700">
            <li><strong>Request Service</strong>: Contact us about the cleaning service you need.</li>
            <li><strong>Site Visit</strong>: Upon requesting for our cleaning services, we do a site visit.</li>
            <li><strong>Receive a Quotation</strong>: Following the site visit, we provide you with a quotation for the work to be done.</li>
          </ol>
        </div>

        <div className="cta mt-10 bg-deep-blue text-white rounded-xl p-6 shadow">
          <p className="font-semibold">Ready for a spotless space? <a href="" className="underline decoration-yellowish underline-offset-4">Contact us today</a> to schedule a site visit and receive a custom quotation for your cleaning needs!</p>
        </div>

        {/* <div className="grid md:grid-cols-2 gap-6">
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
        </div> */}
      </div>
    </ServiceLayout>
  )
}
