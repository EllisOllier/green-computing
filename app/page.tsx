import InfoCard from "@/components/InfoCard";
import Image from "next/image";

export default function Home() {
    return (
        <div className="font-sans flex flex-col min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-gradient-to-b from-green-50 via-green-100 to-green-200">
            <header className="flex items-center gap-4 mb-8">
                <Image
                    className="border-md rounded-lg bg-green-200 p-1 shadow-md"
                    src="/leaf.svg"
                    width={35}
                    height={35}
                    alt="Black Leaf"
                />
                <h1 className="font-extrabold text-4xl text-green-800 drop-shadow-sm tracking-tight">
                    Green Computing
                </h1>
                <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-green-800 font-semibold"
                    href="./sources"
                    target=""
                    rel="noopener noreferrer"
                >
                    <Image
                        aria-hidden
                        src="/file.svg"
                        alt="File icon"
                        width={16}
                        height={16}
                    />
                    Sources
                </a>
            </header>
            <main className="flex flex-col gap-16 relative">
                <div className="flex justify-start relative">
                    <InfoCard 
                        image_path="/leaf-circuit-board.jpg"
                        alt="Leaf on a circuit board"
                        title="Definition of Green Computing"
                        description="Green computing (or sustainable IT) is the
                                practice of using computing resources in an
                                energy-efficient and eco-friendly way. It
                                includes the design, manufacturing, use and
                                disposal of hardware and software to minimize
                                environmental harm, such as reducing carbon
                                emissions and energy consumption [1]. Ultimately, green computing aims to maximize
                                performance per watt, delivering more computing
                                power with less energy [2]."
                        sources={[
                            {href: "https://www.ibm.com/think/topics/green-computing#:~:text=Green%20computing%20,the%20use%20of%20renewable%20resources"},
                            {href: "https://blogs.nvidia.com/blog/what-is-green-computing/#:~:text=Green%20computing%2C%20also%20called%20sustainable,software%20are%20designed%20and%20used"},
                        ]}
                        startingIndex={1}
                    />
                </div>
                <div className="flex justify-end relative">
                    <InfoCard 
                        image_path="/data-center.jpg"
                        alt="Data Center"
                        title="Importance and Benefits"
                        description="The information and communication technology
                                (ICT) sector contributes significantly to global
                                emissions and energy use. For instance, ICT
                                produces about 1.8-3.9% of global greenhouse
                                gases and data centers consume ~3% of world
                                energy [3]. Green computing practices help cut this by
                                lowering power use and CO₂ output [4]. The result is cost savings and progress toward
                                sustainability goals like net-zero emissions [5]."
                        sources={[
                            {href: "https://www.ibm.com/think/topics/green-computing#:~:text=The%20potential%20for%20green%20computing,in%20the%20last%20decade"},
                            {href: "https://www.techtarget.com/searchdatacenter/definition/green-computing#:~:text=The%20key%20mission%20of%20green,competitors%20with%20both%20customers%20and"},
                            {href: "https://cacm.acm.org/blogcacm/pioneering-sustainable-it-with-green-computing/#:~:text=In%20this%20post%2C%20we%20will,help%20meet%20%E2%80%98Net%20Zero%E2%80%99%20targets"},
                        ]}
                        startingIndex={3}
                    />
                </div>
                <div className="flex justify-start relative">
                    <InfoCard 
                        image_path="/server-virtulisation.png"
                        alt="Server virtulisation diagram"
                        title="Sustainable IT Practices"
                        description="Key practices include using energy-efficient
                                hardware and smart power management. Companies
                                deploy low-power CPUs, LED monitors and Energy
                                Star equipment, and they turn off or hibernate
                                devices when idle [6][7]. Virtualization and cloud services are also
                                used to consolidate servers and workloads.
                                AI-based monitoring and automation further
                                optimize energy use. These actions collectively
                                cut electricity consumption and IT's carbon
                                footprint."
                        sources={[
                            {href: "https://www.techtarget.com/searchdatacenter/definition/green-computing#:~:text=Green%20computing%2C%20also%20known%20as,properly%20disposing%20of%20electronic%20waste"},
                            {href: "https://www.gartner.com/en/articles/green-computing#:~:text=Embrace%20green%20computing%20using%20four,tactics%20to%20achieve%20energy%20efficiency"},
                        ]}
                        startingIndex={6}
                    />                        
                </div>
                <div className="flex justify-end relative">
                    <InfoCard 
                        image_path="/green-cloud-computing.jpg"
                        alt="Green cloud computing diagram"
                        title="Green Data Centers & Cloud"
                        description="Data centers consume large amounts of power, so
                                green computing focuses on efficient data center
                                design. For example, facilities use hot/cold
                                aisle layouts and efficient cooling (including
                                liquid cooling and outside-air cooling) to
                                reduce energy use [8][9]. Many cloud providers now run on renewable
                                energy, making cloud computing a greener option.
                                These measures lower overall emissions from IT
                                infrastructure."
                        sources={[
                            {href: "https://www.techtarget.com/searchdatacenter/definition/green-computing#:~:text=IT%20managers%20typically%20focus%20energy,HVAC%29%20systems"},
                            {href: "https://blogs.nvidia.com/blog/what-is-green-computing/#:~:text=For%20example%2C%20some%20large%20data,sustainability%20level%20of%20data%20centers"},
                        ]}
                        startingIndex={8}
                    />
                </div>
                <div className="flex justify-start relative">
                    <InfoCard 
                        image_path="/e-waste.webp"
                        alt="E-Waste image"
                        title="E-Waste and Lifecycle"
                        description="Green computing addresses the full product
                                lifecycle to minimize environmental damage. It
                                emphasizes using non-toxic, recyclable materials
                                and extending device lifespans to reduce
                                e-waste. Proper recycling and refurbishment of
                                electronics prevents hazardous waste; programs
                                like Energy Star and EPEAT encourage these
                                practices. By reusing and recycling IT
                                equipment, organizations recover valuable
                                materials and cut pollution [10][11]."
                        sources={[
                            {href: "https://www.ibm.com/think/topics/green-computing#:~:text=Material%20selection%20is%20crucial%20as,how%20the%20factory%20itself%20operates"},
                            {href: "https://www.nutanix.com/info/green-computing"},
                        ]}
                        startingIndex={10}
                    />
                </div>
                <div className="flex justify-end relative">
                    <InfoCard 
                        image_path="/green-technology.jpg"
                        alt="Green technology"
                        title="Standards and Initiatives"
                        description="Several standards and programs support green IT.
                                For example, the U.S. EPA's Energy Star program
                                (started 1992) certifies energy-efficient
                                electronics [12][13]. Organizations also follow international
                                initiatives: an OECD report identifies 100+
                                green ICT programs worldwide, and the Green
                                Electronics Council's EPEAT registry certifies
                                products that meet environmental criteria [14]. These policies help businesses and consumers
                                choose greener technology."
                        sources={[
                            {href: "https://www.lancaster.ac.uk/data-science-of-the-natural-environment/blogs/green-computing-a-contribution-to-save-the-environment#:~:text=It%20started%20back%20in%201992%2C,sleep%20mode%20among%20electronics%27%20consumers"},
                            {href: "https://blogs.nvidia.com/blog/what-is-green-computing/#:~:text=A%202017%20report%20found%20nearly,sustainable%20information%20and%20communication%20technologies"},
                        ]}
                        startingIndex={12}
                    />
                </div>
                <div className="flex justify-start relative">
                    <InfoCard 
                        image_path="/green-computing-leaf.jpg"
                        alt="Green computing leaf"
                        title="Emerging Trends"
                        description="Innovations like AI-based energy management and
                                new computing architectures (e.g., neuromorphic,
                                optical, quantum computing) promise further
                                efficiency gains [15]. Green computing is increasingly part of
                                corporate sustainability and ESG strategies
                                . As a result, IT teams are being
                                tasked with reducing energy use and emissions,
                                not just improving performance, making green
                                computing a core IT goal."
                        sources={[
                            {href: "https://www.techtarget.com/searchdatacenter/definition/green-computing#:~:text=In%20many%20organizations%2C%20green%20computing,responsible%20corporate%20management%20and%20strategies"},
                        ]}
                        startingIndex={15}
                    />
                </div>
            </main>
            <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center mt-12">
                <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-green-800 font-semibold"
                    href="./sources"
                    target=""
                    rel="noopener noreferrer"
                >
                    <Image
                        aria-hidden
                        src="/file.svg"
                        alt="File icon"
                        width={16}
                        height={16}
                    />
                    Sources
                </a>
            </footer>
        </div>
    );
}
