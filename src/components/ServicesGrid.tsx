import React from "react";
import {
    IconArrowWaveRightUp,
    IconClipboardCopy,
    IconFileBroken,
    IconSignature,
    IconTableColumn,
} from "@tabler/icons-react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import Image from "next/image";

export function ServicesGrid() {
    return (
        <BentoGrid className="max-w-7xl mx-auto">
            {items.map((item, i) => (
                <BentoGridItem
                    key={i}
                    title={item.title}
                    description={item.description}
                    header={item.header}
                    icon={item.icon}
                    href={item.href}
                    className={i === 3 || i === 6 ? "md:col-span-2" : ""}
                />
            ))}
        </BentoGrid>
    );
}

const HeaderImage = ({ src }: { src: string }) => (
    <div className="relative w-full h-full">
        <Image src={src} alt="maid" fill className="object-cover rounded-xl" />
    </div>
)

const items = [
    {
        title: "Live-in maids placement",
        description: "If you’re looking for a temporary or permanent, we have the right candidate for you.",
        header: <HeaderImage src="/images/kleenmaids-maid-1.png" />,
        icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
        href: "/services/live-in-maids",
    },
    {
        title: "Scheduled House Cleaning",
        description: "Where you receive the service at a time and frequency of your convenience.",
        header: <HeaderImage src="/images/kleenmaids-maid-1.png" />,
        icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
        href: "/services/scheduled-cleaning",
    },
    {
        title: "Emergency maids Services",
        description: "Never get stranded, for all your last-minute maid Emergency need we have you covered with our Quick fix.",
        header: <HeaderImage src="/images/kleenmaids-maid-1.png" />,
        icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
        href: "/services/emergency-maids",
    },
    {
        title: "Cleaning Services",
        description:
            "We provide cleaning services to offices and commercial spaces , Special Events, Furniture, and Specialized cleaning needs.",
        header: <HeaderImage src="/images/kleenmaids-maid-1.png" />,
        icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
        href: "/services/cleaning-services",
    },
    {
        title: "Staffing Services",
        description: "We provide support staff for specific for those looking for informal workers, these range from cleaners, Cooks, Housekeepers to mention but a few.",
        header: <HeaderImage src="/images/kleenmaids-maid-1.png" />,
        icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
        href: "/services/staffing-services",
    }
];
