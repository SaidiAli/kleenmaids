import Image from "next/image"

export default function WhoWeServeCard({
    quote,
    author,
    position,
    image
}: {
    quote: string;
    author: string;
    position: string;
    image: string;
}) {
    return (
        <div className="relative flex aspect-9/16 w-72 shrink-0 snap-start scroll-ml-(--scroll-padding) flex-col justify-end overflow-hidden rounded-3xl sm:aspect-3/4 sm:w-96">
            <Image alt="" src={image} className="absolute inset-x-0 top-0 aspect-square w-full object-cover" width={500} height={500} />
            <div aria-hidden="true"
                className="absolute inset-0 rounded-3xl bg-linear-to-t from-tahiti from-15%  ring-1 ring-gray-950/10 ring-inset sm:from-25%">
            </div>
            <figure className="relative p-10">
                <p className="relative text-xl/7 text-white">{quote}</p>
                <figcaption className="mt-6 border-t border-white/20 pt-6">
                    <p className="text-sm/6 font-medium text-white">{author}</p>
                    <p className="bg-linear-to-r from-[#fff1be] from-28% via-[#ee87cb] via-70% to-[#b060ff] bg-clip-text text-transparent">{position}</p>
                </figcaption>
            </figure>
        </div>
    )
}