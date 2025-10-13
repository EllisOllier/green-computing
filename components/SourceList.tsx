type SourceListProps = {
    sources: { href: string, title: string }[];
};

export default function SourceList({
    sources
}: SourceListProps) {
    return (
            <ul className="text-green-900 flex flex-col gap-2">
                {sources && sources.map((source, index) => 
                    (
                        <li key={index+1} className="flex gap-2">
                            <p className="text-green-700 font-bold">[{index+1}]</p>
                            <a href={source.href} target="_blank" className="text-green-700 underline">
                                {source.title}
                            </a>
                        </li>
                    )
                )}
            </ul>
    );
}
