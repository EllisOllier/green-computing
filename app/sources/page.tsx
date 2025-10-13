import ImageSourceList from "@/components/ImageSourceList";
import SourceList from "@/components/SourceList";
import Image from "next/image";

export default function Sources() {
    return (
        <div className="font-sans min-h-screen bg-gradient-to-b from-green-50 via-green-100 to-green-200 p-8 sm:p-20">
            <header className="flex items-center gap-3 mb-8">
                <Image
                    src="/leaf.svg"
                    alt="Leaf Icon"
                    width={32}
                    height={32}
                    className="bg-green-200 rounded-lg p-1 shadow-md"
                />
                <h1 className="font-extrabold text-3xl text-green-800 drop-shadow-sm tracking-tight">
                    Sources for Green Computing
                </h1>
            </header>
            <main className="bg-white/80 border border-green-300 shadow-lg rounded-xl p-8 max-w-2xl mx-auto">
                <section className="mb-8">
                    <h2 className="font-bold text-green-800 text-xl mb-4">
                        Images
                    </h2>
                    <ImageSourceList 
                        sources={[
                            {title: "Definition of Green Computing", href: "https://blogs.nvidia.com/blog/what-is-green-computing/#:~:text=Green%20computing%2C%20also%20called%20sustainable,software%20are%20designed%20and%20used" },
                            {title: "Importance and Benefits", href: "https://www.itpro.com/infrastructure/data-centres/global-power-shortages-mean-data-centers-could-struggle-to-shoulder-the-burden-of-energy-intensive-generative-ai-demands-in-2024" },
                            {title: "Sustainable IT Practices", href: "https://www.cloud4u.com/blog/what-is-server-virtualization/" },
                            {title: "Green Data Centers & Cloud", href: "https://bigdataanalyticsnews.com/green-cloud-computing-sustainable-use/" },
                            {title: "E-Waste and Lifecycle", href: "https://circularcomputing.com/news/windows-11-looming-e-waste-avalanche-or-opportunity-for-change/" },
                            {title: "Standards and Initiatives", href: "https://www.digi.com/blog/post/investing-in-green-technology" },
                            {title: "Emerging Trends", href: "https://atmecs.com/green-computing-adopting-eco-friendly-it-practices/" },
                            {title: "Tree Icon & Leaf SVG", href: "https://icon-icons.com/icon/tree-leaf/83777" },
                        ]}
                    />
                </section>
                <section>
                    <h2 className="font-bold text-green-800 text-xl mb-4">
                        Research Sources
                    </h2>
                    <SourceList
                        sources={[
                            {
                                title: "IBM: What is Green Computing?",
                                href: "https://www.ibm.com/think/topics/green-computing#:~:text=Green%20computing%20,the%20use%20of%20renewable%20resources",
                            },
                            {
                                title: "NVIDIA: What is Green Computing?",
                                href: "https://blogs.nvidia.com/blog/what-is-green-computing/#:~:text=Green%20computing%2C%20also%20called%20sustainable,software%20are%20designed%20and%20used",
                            },
                            {
                                title: "IBM: The potential for green computing",
                                href: "https://www.ibm.com/think/topics/green-computing#:~:text=The%20potential%20for%20green%20computing,in%20the%20last%20decade",
                            },
                            {
                                title: "TechTarget: Green Computing Definition",
                                href: "https://www.techtarget.com/searchdatacenter/definition/green-computing#:~:text=The%20key%20mission%20of%20green,competitors%20with%20both%20customers%20and",
                            },
                            {
                                title: "ACM: Pioneering Sustainable IT with Green Computing",
                                href: "https://cacm.acm.org/blogcacm/pioneering-sustainable-it-with-green-computing/#:~:text=In%20this%20post%2C%20we%20will,help%20meet%20%E2%80%98Net%20Zero%E2%80%99%20targets",
                            },
                            {
                                title: "TechTarget: Green Computing, also known as sustainable IT",
                                href: "https://www.techtarget.com/searchdatacenter/definition/green-computing#:~:text=Green%20computing%2C%20also%20known%20as,properly%20disposing%20of%20electronic%20waste",
                            },
                            {
                                title: "Gartner: Green Computing",
                                href: "https://www.gartner.com/en/articles/green-computing#:~:text=Embrace%20green%20computing%20using%20four,tactics%20to%20achieve%20energy%20efficiency",
                            },
                            {
                                title: "TechTarget: IT managers typically focus energy",
                                href: "https://www.techtarget.com/searchdatacenter/definition/green-computing#:~:text=IT%20managers%20typically%20focus%20energy,HVAC%29%20systems",
                            },
                            {
                                title: "NVIDIA: Data center sustainability",
                                href: "https://blogs.nvidia.com/blog/what-is-green-computing/#:~:text=For%20example%2C%20some%20large%20data,sustainability%20level%20of%20data%20centers",
                            },
                            {
                                title: "IBM: Material selection is crucial",
                                href: "https://www.ibm.com/think/topics/green-computing#:~:text=Material%20selection%20is%20crucial%20as,how%20the%20factory%20itself%20operates",
                            },
                            {
                                title: "Nutanix: Green Computing",
                                href: "https://www.nutanix.com/info/green-computing",
                            },
                            {
                                title: "Lancaster University: Green Computing History",
                                href: "https://www.lancaster.ac.uk/data-science-of-the-natural-environment/blogs/green-computing-a-contribution-to-save-the-environment#:~:text=It%20started%20back%20in%201992%2C,sleep%20mode%20among%20electronics%27%20consumers",
                            },
                            {
                                title: "NVIDIA: Sustainable ICT",
                                href: "https://blogs.nvidia.com/blog/what-is-green-computing/#:~:text=A%202017%20report%20found%20nearly,sustainable%20information%20and%20communication%20technologies",
                            },
                            {
                                title: "Gartner: Computations and energy use",
                                href: "https://www.gartner.com/en/articles/green-computing#:~:text=Computations%20that%20consume%20the%20highest,next%20five%20to%2010%20years",
                            },
                            {
                                title: "TechTarget: Green computing in organizations",
                                href: "https://www.techtarget.com/searchdatacenter/definition/green-computing#:~:text=In%20many%20organizations%2C%20green%20computing,responsible%20corporate%20management%20and%20strategies",
                            },
                        ]}
                    />
                </section>
            </main>
        </div>
    );
}
