import Image from "next/image"

export default function WhoWeServeCard({
    headline,
    subheader,
    image
}: {
    headline: string;
    subheader: string;
    image: string;
}) {
    return (
        <div className="group relative flex aspect-9/16 w-72 shrink-0 snap-start scroll-ml-(--scroll-padding) flex-col justify-end overflow-hidden rounded-3xl sm:aspect-3/4 sm:w-96">
            <Image alt="" src={image} className="absolute inset-x-0 top-0 aspect-square w-full object-cover" width={500} height={500} />
            <div aria-hidden="true"
                className="absolute inset-0 rounded-3xl bg-linear-to-t from-tahiti from-15%  ring-1 ring-gray-950/10 ring-inset sm:from-25%">
            </div>
            <div className="relative p-10">
                <p className="relative text-2xl text-white">{headline}</p>
                <p className="text-sm/6 font-medium text-white">{subheader}</p>

            </div>
        </div>
    )
}