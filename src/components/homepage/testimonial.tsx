export default function Testimonials() {
    return (
        <section id="testimonies" className="py-16">
            <div className="">

                <div className="flex flex-row justify-center gap-8">
                    <TestimonialCard name="" position="" testimonial="You haven&apos;t disappointed me in the passed so I will keep refering you." />
                    <TestimonialCard name="Abdeel K" position="" testimonial="Thank you very much Jauharah, you understood our specifications and the lady that you gave us is doing a great job" />
                    <TestimonialCard name="Enock. E" position="" testimonial="Thank you Jauharah, it was nice coming back home to a clean and organized place after being away for a week." />
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
