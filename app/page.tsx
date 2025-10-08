import Image from "next/image";

export default function Home() {
    return (
        <div className="font-sans flex flex-col min-h-screen p-8 pb-20 gap-16 sm:p-20">
            <header className="flex">
                <Image
                    className="border-md rounded-lg"
                    src="/leaf.svg"
                    width={35}
                    height={35}
                    alt="Black Leaf"
                />
                <h1 className="font-bold text-3xl">Green Computing</h1>
            </header>
            <main className="flex flex-col gap-10">
                <div className="flex justify-start">
                    <div className="flex flex-row items-center gap-6 border w-xl p-2 h-auto rounded-md">
                        <Image
                            className="border-md rounded-lg"
                            src="/iStock-640185420-scaled.jpg"
                            width={250}
                            height={250}
                            alt="Image for green computing"
                        />
                        <div>
                            <h2 className="font-semibold text-lg">
                                Definition of Green Computing
                            </h2>
                            <p>
                                Green computing (or sustainable IT) is the
                                practice of using computing resources in an
                                energy-efficient and eco-friendly way. It
                                includes the design, manufacturing, use and
                                disposal of hardware and software to minimize
                                environmental harm, such as reducing carbon
                                emissions and energy consumption{" "}
                                <b>
                                    <a href="https://www.ibm.com/think/topics/green-computing#:~:text=Green%20computing%20,the%20use%20of%20renewable%20resources" target="_blank" rel="noopener noreferrer">[1]</a>
                                </b>
                                .
                                Ultimately, green computing aims to maximize
                                performance per watt, delivering more computing
                                power with less energy{" "}
                                <b>
                                    <a href="https://blogs.nvidia.com/blog/what-is-green-computing/#:~:text=Green%20computing%2C%20also%20called%20sustainable,software%20are%20designed%20and%20used" target="_blank" rel="noopener noreferrer">[2]</a>
                                </b>
                                .
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-end">
                    <div className="flex flex-row items-center gap-6 border w-xl p-2 h-auto rounded-md">
                        <Image
                            className="border-md rounded-lg"
                            src="/iStock-640185420-scaled.jpg"
                            width={250}
                            height={250}
                            alt="Image for green computing"
                        />
                        <div>
                            <h2 className="font-semibold text-lg">
                                Importance and Benefits
                            </h2>
                            <p>
                                The information and communication technology
                                (ICT) sector contributes significantly to global
                                emissions and energy use. For instance, ICT
                                produces about 1.8–3.9% of global greenhouse
                                gases and data centers consume ~3% of world
                                energy{" "}
                                <b>
                                    <a href="https://www.ibm.com/think/topics/green-computing#:~:text=The%20potential%20for%20green%20computing,in%20the%20last%20decade" target="_blank" rel="noopener noreferrer">[3]</a>
                                </b>
                                . Green computing practices help
                                cut this by lowering power use and CO₂ output{" "}
                                <b>
                                    <a href="https://www.techtarget.com/searchdatacenter/definition/green-computing#:~:text=The%20key%20mission%20of%20green,competitors%20with%20both%20customers%20and" target="_blank" rel="noopener noreferrer">[4]</a>
                                </b>
                                . The result is cost savings and
                                progress toward sustainability goals like
                                net-zero emissions{" "}
                                <b>
                                    <a href="https://cacm.acm.org/blogcacm/pioneering-sustainable-it-with-green-computing/#:~:text=In%20this%20post%2C%20we%20will,help%20meet%20%E2%80%98Net%20Zero%E2%80%99%20targets" target="_blank" rel="noopener noreferrer">[5]</a>
                                </b>
                                .
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-start">
                    <div className="flex flex-row items-center gap-6 border w-xl h-auto p-2 rounded-md">
                        <Image
                            className="border-md rounded-lg"
                            src="/iStock-640185420-scaled.jpg"
                            width={250}
                            height={250}
                            alt="Image for green computing"
                        />
                        <div>
                            <h2 className="font-semibold text-lg">
                                Sustainable IT Practices
                            </h2>
                            <p>
                                Key practices include using energy-efficient
                                hardware and smart power management. Companies
                                deploy low-power CPUs, LED monitors and Energy
                                Star equipment, and they turn off or hibernate
                                devices when idle{" "}
                                <b>
                                    <a href="https://www.techtarget.com/searchdatacenter/definition/green-computing#:~:text=Green%20computing%2C%20also%20known%20as,properly%20disposing%20of%20electronic%20waste" target="_blank" rel="noopener noreferrer">[6]</a>
                                </b>
                                <b>
                                    <a href="https://www.gartner.com/en/articles/green-computing#:~:text=Embrace%20green%20computing%20using%20four,tactics%20to%20achieve%20energy%20efficiency" target="_blank" rel="noopener noreferrer">[7]</a>
                                </b>
                                .
                                Virtualization and cloud services are also used
                                to consolidate servers and workloads. AI-based
                                monitoring and automation further optimize
                                energy use. These actions collectively cut
                                electricity consumption and IT’s carbon
                                footprint.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-end">
                    <div className="flex flex-row items-center gap-6 border w-xl p-2 h-auto rounded-md">
                        <Image
                            className="border-md rounded-lg"
                            src="/iStock-640185420-scaled.jpg"
                            width={250}
                            height={250}
                            alt="Image for green computing"
                        />
                        <div>
                            <h2 className="font-semibold text-lg">
                                Green Data Centers & Cloud
                            </h2>
                            <p>
                                Data centers consume large amounts of power, so
                                green computing focuses on efficient data center
                                design. For example, facilities use hot/cold
                                aisle layouts and efficient cooling (including
                                liquid cooling and outside-air cooling) to
                                reduce energy use{" "}
                                <b>
                                    <a href="https://www.techtarget.com/searchdatacenter/definition/green-computing#:~:text=IT%20managers%20typically%20focus%20energy,HVAC%29%20systems" target="_blank" rel="noopener noreferrer">[8]</a>
                                </b>
                                <b>
                                    <a href="https://blogs.nvidia.com/blog/what-is-green-computing/#:~:text=For%20example%2C%20some%20large%20data,sustainability%20level%20of%20data%20centers" target="_blank" rel="noopener noreferrer">[9]</a>
                                </b>
                                . Many cloud providers now run
                                on renewable energy, making cloud computing a
                                greener option. These measures lower overall
                                emissions from IT infrastructure.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-start">
                    <div className="flex flex-row items-center gap-6 border w-xl p-2 h-auto rounded-md">
                        <Image
                            className="border-md rounded-lg"
                            src="/iStock-640185420-scaled.jpg"
                            width={250}
                            height={250}
                            alt="Image for green computing"
                        />
                        <div>
                            <h2 className="font-semibold text-lg">
                                E-Waste and Lifecycle
                            </h2>
                            <p>
                                Green computing addresses the full product
                                lifecycle to minimize environmental damage. It
                                emphasizes using non-toxic, recyclable materials
                                and extending device lifespans to reduce
                                e-waste. Proper recycling and refurbishment of
                                electronics prevents hazardous waste; programs
                                like Energy Star and EPEAT encourage these
                                practices. By reusing and recycling IT
                                equipment, organizations recover valuable
                                materials and cut pollution{" "}
                                <b>
                                    <a href="https://www.ibm.com/think/topics/green-computing#:~:text=Material%20selection%20is%20crucial%20as,how%20the%20factory%20itself%20operates" target="_blank" rel="noopener noreferrer">[10]</a>
                                </b>
                                <b>
                                    <a href="https://www.nutanix.com/info/green-computing" target="_blank" rel="noopener noreferrer">[11]</a>
                                </b>
                                .
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-end">
                    <div className="flex flex-row items-center gap-6 border w-xl p-2 h-auto rounded-md">
                        <Image
                            className="border-md rounded-lg"
                            src="/iStock-640185420-scaled.jpg"
                            width={250}
                            height={250}
                            alt="Image for green computing"
                        />
                        <div>
                            <h2 className="font-semibold text-lg">
                                Standards and Initiatives
                            </h2>
                            <p>
                                Several standards and programs support green IT.
                                For example, the U.S. EPA’s Energy Star program
                                (started 1992) certifies energy-efficient
                                electronics{" "}
                                <b>
                                    <a href="https://www.lancaster.ac.uk/data-science-of-the-natural-environment/blogs/green-computing-a-contribution-to-save-the-environment#:~:text=It%20started%20back%20in%201992%2C,sleep%20mode%20among%20electronics%27%20consumers" target="_blank" rel="noopener noreferrer">[12]</a>
                                </b>
                                <b>
                                    <a href="https://blogs.nvidia.com/blog/what-is-green-computing/#:~:text=A%202017%20report%20found%20nearly,sustainable%20information%20and%20communication%20technologies" target="_blank" rel="noopener noreferrer">[13]</a>
                                </b>
                                . Organizations also
                                follow international initiatives: an OECD report
                                identifies 100+ green ICT programs worldwide,
                                and the Green Electronics Council’s EPEAT
                                registry certifies products that meet
                                environmental criteria{" "}
                                <b>
                                    <a href="https://www.gartner.com/en/articles/green-computing#:~:text=Computations%20that%20consume%20the%20highest,next%20five%20to%2010%20years" target="_blank" rel="noopener noreferrer">[14]</a>
                                </b>
                                . These
                                policies help businesses and consumers choose
                                greener technology.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-start">
                    <div className="flex flex-row items-center gap-6 border w-xl p-2 h-auto rounded-md">
                        <Image
                            className="border-md rounded-lg"
                            src="/iStock-640185420-scaled.jpg"
                            width={250}
                            height={250}
                            alt="Image for green computing"
                        />
                        <div>
                            <h2 className="font-semibold text-lg">
                                Emerging Trends
                            </h2>
                            <p>
                                Innovations like AI-based energy management and
                                new computing architectures (e.g., neuromorphic,
                                optical, quantum computing) promise further
                                efficiency gains{" "}
                                <b>
                                    <a href="https://www.techtarget.com/searchdatacenter/definition/green-computing#:~:text=In%20many%20organizations%2C%20green%20computing,responsible%20corporate%20management%20and%20strategies" target="_blank" rel="noopener noreferrer">[15]</a>
                                </b>
                                . Green computing
                                is increasingly part of corporate sustainability
                                and ESG strategies techtarget.com . As a result,
                                IT teams are being tasked with reducing energy
                                use and emissions, not just improving
                                performance, making green computing a core IT
                                goal.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
                <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
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
