export default function Testimonials() {
    return (
        <section id="testimonies" className="py-16">
            <div className="">

                <div className="flex flex-row justify-center gap-8">
                    <TestimonialCard name="John Doe" position="CEO, Company" testimonial="This is my application so i'll only say good things about it. It's the piece of crap. Although it took me so much time and energy to build. I'm proud of it." />
                    <TestimonialCard name="John Doe" position="CEO, Company" testimonial="This is my application so i'll only say good things about it. It's the piece of crap. Although it took me so much time and energy to build. I'm proud of it." />
                    <TestimonialCard name="John Doe" position="CEO, Company" testimonial="This is my application so i'll only say good things about it. It's the piece of crap. Although it took me so much time and energy to build. I'm proud of it." />
                </div>

            </div>
        </section>
    )
}

const TestimonialCard = ({ name, position, testimonial }: { name: string, position: string, testimonial: string }) => {
    return (
        <div className="shadow-lg px-8 py-12 rounded-xl border flex-1 mb-8">
            <p className="text-xl md:text-2xl font-normal text-zinc-700 leading-relaxed">{testimonial}</p>
            <div className="flex flex-row space-x-2 mt-8">
                <div className="flex flex-col">
                    <p className="text-sm text-gray-800">{name}</p>
                    <p className="text-xs text-gray-500">{position}</p>
                </div>
            </div>
        </div>
    )
}
