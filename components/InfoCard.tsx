"use client";

import Image from "next/image";

type InfoCardProps = {
    image_path: string;
    alt: string;
    title: string;
    description: string;
    sources: { href: string }[];
    startingIndex: number;
};

export default function InfoCard({
    image_path,
    alt,
    title,
    description,
    sources,
    startingIndex,
}: InfoCardProps) {
    return (
        <div className="flex flex-row items-center gap-6 border border-green-300 bg-white/80 shadow-lg w-xl p-4 h-auto rounded-xl">
            <Image
                className="border-md rounded-lg shadow"
                src={image_path}
                width={250}
                height={250}
                alt={alt}
            />
            <div>
                <h2 className="font-semibold text-xl text-green-700 mb-2">
                    {title}
                </h2>
                <p className="text-green-900">{description}</p>
                <h3 className="mb-1 mt-1 text-green-700 font-bold">Sources: </h3>
                <ul className="flex gap-1">
                    {sources &&
                        sources.map((source, index) => {
                            const sourceIndex = startingIndex + index;
                            return (
                            <li key={sourceIndex} className="text-green-700 underline font-bold">
                                <a href={source.href} target="_blank">[{sourceIndex}]</a>
                            </li>
                        )})}
                </ul>
            </div>
        </div>
    );
}
