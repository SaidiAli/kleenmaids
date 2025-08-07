import { Button } from "./ui/button"

export const HeroSection = () => {
    return (
        <section className="relative overflow-hidden h-[100vh]">
            <video
                autoPlay
                loop
                muted
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
            >
                <source src="/file.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}
            <div className="container mx-auto px-4 py-20 relative z-10">
                <div className="flex flex-col items-center justify-center h-full w-4xl">
                    <div className="text-white">
                        <h1 className="text-4xl lg:text-7xl font-bold mb-6 leading-tight text-deep-blue">
                            Revitalize Your <span className="text-yellow-400">Space</span>
                        </h1>
                        <p className="text-xl mb-8 text-deep-blue">
                            Professional cleaning services in Kampala, Uganda. We provide reliable, affordable, and eco-friendly
                            cleaning solutions for homes and offices.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button className="bg-yellow-500 cursor-pointer hover:bg-deep-blue font-semibold px-12 py-4 rounded-none text-white">
                                Book Service
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}