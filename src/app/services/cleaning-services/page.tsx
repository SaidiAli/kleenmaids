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
      heroImage="/v1755705248/kleenmaids/ryufnyrt1ly7zfogaoch.jpg"
      heroImageDesktop="/v1755705246/kleenmaids/b3ooxnpb4h5iye7dry77.jpg"
      benefits={benefits}
      features={features}
    >
      <div className="max-w-full lg:max-w-2xl space-y-8 sm:space-y-10">

        <div className="space-y-4 sm:space-y-6">
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">Our professional cleaning services provide you with solutions that are tailor-made to your most urgent needs, catering to both homes and commercial spaces. Whether you're preparing for a special event, moving, or simply in need of a thorough deep clean, our team delivers exceptional results that meet your desired satisfaction.</p>
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">We handle the nitty-gritty of your cleaning demands with professionally executed and eco-friendly solutions.</p>
        </div>

        <div className="space-y-4 sm:space-y-6">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900 border-b border-gray-200 pb-2">Our Cleaning Solutions</h2>
          <p className="text-gray-700 text-sm sm:text-base">We offer a wide range of specialized cleaning services to handle any task, big or small. Our solutions include:</p>
          <ul className="list-disc pl-4 sm:pl-6 space-y-2 text-gray-700 text-sm sm:text-base">
            <li>Deep Cleaning Services</li>
            <li>Specialized Cleaning Services</li>
            <li>Move-in and Move-Out Cleaning Services</li>
            <li>Before and After Event Cleaning Services</li>
            <li>Itemized Cleaning for your furniture, Carpets and Upholstered items</li>
          </ul>
        </div>

        <div className="space-y-4 sm:space-y-6">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900 border-b border-gray-200 pb-2">Our Professional Standard</h2>
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">To ensure consistent quality and true customer satisfaction, our one-off cleaning services are handled by a dedicated team. Each team includes a supervisor who is present to oversee the particular job at hand and ensure our work exceeds your expectations.</p>
        </div>

        <div className="space-y-4 sm:space-y-6">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900 border-b border-gray-200 pb-2">Our Process</h2>
          <ol className="list-decimal pl-4 sm:pl-6 space-y-2 text-gray-700 text-sm sm:text-base">
            <li><strong>Request Service</strong>: Contact us about the cleaning service you need.</li>
            <li><strong>Site Visit</strong>: Upon requesting for our cleaning services, we do a site visit.</li>
            <li><strong>Receive a Quotation</strong>: Following the site visit, we provide you with a quotation for the work to be done.</li>
          </ol>
        </div>

        <div className="cta mt-8 sm:mt-10 bg-deep-blue text-white rounded-xl p-4 sm:p-6 shadow">
          <p className="font-semibold text-sm sm:text-base">Ready for a spotless space? <a href="https://wa.me/256752623801" className="underline decoration-yellowish underline-offset-4">Contact us today</a> to schedule a site visit and receive a custom quotation for your cleaning needs!</p>
        </div>
      </div>
    </ServiceLayout>
  )
}
