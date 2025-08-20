import Image from "next/image"
import Link from "next/link"

export default function WhoWeAreSection() {
    return (
        <section className="container mx-auto py-32">
            <div className="flex flex-col gap-8 justify-center items-center">
                <div>
                    <Image src="/kleen.svg" alt="maid" width={50} height={50} />
                </div>
                <div className="w-4xl space-y-8 mb-8">
                    <h2 className="text-6xl font-bold text-center">Who we are</h2>
                    <p className="text-xl text-center">
                        Kleenmaids is a professional domestic help placement agency and cleaning service provider with a 17-year history of serving homeowners and corporate entities in the Kampala area. We maintain a keen focus on providing thoroughly vetted staff, quality placements, and exceptional, eco-friendly cleaning solutions.
                    </p>
                </div>

                <div className="flex flex-row gap-8">
                    <div className="flex flex-col justify-between w-[400px] border border-black rounded-2xl space-y-4 group group-hover:border-greenish transition-colors">
                        <div className="p-8">
                            <p className="text-2xl font-bold">For Organisations</p>
                            <p>Organizations in need of Professional cleaning and support staff placements for small, medium, and large enterprises</p>
                        </div>
                        <div className="p-8 group-hover:bg-greenish group-hover:text-deep-blue rounded-b-2xl transition-colors">
                            <Link href="/services/live-in-maids" className="font-medium">Book Now</Link>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between w-[400px] border border-black rounded-2xl space-y-4 group group-hover:border-greenish group-hover:text-greenish transition-colors">
                        <div className="p-8">
                            <p className="text-2xl font-bold">For Individuals</p>
                            <p>Individuals in need of Customized domestic help Support for their households and families</p>
                        </div>
                        <div className="p-8 group-hover:bg-greenish group-hover:text-deep-blue rounded-b-2xl transition-colors">
                            <Link href="/services/live-in-maids" className="font-medium">Book Now</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}