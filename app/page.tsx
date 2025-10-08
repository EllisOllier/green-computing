import Image from "next/image";

export default function Home() {
    return (
        <div className="font-sans flex flex-col min-h-screen p-8 pb-20 gap-16 sm:p-20">
            <header className="flex">
                <h1 className="flex justify-self-center ">Green Computing</h1>
            </header>
            <main className="flex flex-col gap-10">
                <div className="flex justify-start">
                    <div className="border w-lg p-2 rounded-md">
                        <h2>First point about green computing</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel enim itaque cupiditate amet illo ad esse hic molestias. Ipsum cumque numquam vitae aspernatur excepturi eum totam commodi aut aliquam libero.</p>
                        <Image 
                          src="/iStock-640185420-scaled.jpg"
                          width={250}
                          height={250}
                          alt="Image for green computing"
                        />
                    </div>
                </div>
                <div className="flex justify-end">
                    <div className="border w-lg p-2 rounded-md">
                        <h2> Second point about green computing</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi error quidem quisquam sapiente dolorem incidunt exercitationem, veritatis impedit! Repellat architecto neque incidunt maiores minima possimus aspernatur nulla, delectus ipsum vitae!</p>
                        <Image 
                          src="/iStock-640185420-scaled.jpg"
                          width={250}
                          height={250}
                          alt="Image for green computing"
                        />
                    </div>
                </div>
                <div className="flex justify-start">
                    <div className="border w-lg p-2 rounded-md">
                        <h2> Third point about green computing</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus quibusdam animi recusandae consequatur laboriosam, fuga cupiditate cumque ullam ratione, id eius vel vitae eveniet molestias culpa minima nemo eos laborum.</p>
                        <Image 
                          src="/iStock-640185420-scaled.jpg"
                          width={250}
                          height={250}
                          alt="Image for green computing"
                        />
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
