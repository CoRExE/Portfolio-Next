import { PixelArt } from './PixelArt';

export function About() {
    return (
        <section id="about" className="py-16 bg-base-800">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center text-white">About Me</h2>
                <div className="flex flex-col md:flex-row items-center justify-center">
                    <div className="md:w-1/2 mb-8 md:mb-0">
                        <PixelArt
                            src="/placeholder.svg?height=300&width=300"
                            alt="Pixel art representation of my interests"
                            width={300}
                            height={300}
                        />
                    </div>
                    <div className="md:w-1/2 md:pl-8 text-white">
                        <p className="mb-4">
                            I&#39;m a passionate software developer with a love for creating engaging and innovative
                            applications.
                            My journey in the world of coding is much like a classic RPG - full of challenges, learning,
                            and leveling up!
                        </p>
                        <p className="mb-4">
                            When i&#39;m not coding, you can find me:
                        </p>
                        <ul className="list-disc list-inside mb-4">
                            <li>Exploring new board games</li>
                            <li>Creating music</li>
                            <li>Diving into narrative-driven video games</li>
                        </ul>
                        <p>
                            I believe in writing clean, efficient code and creating user experiences that are both
                            functional and delightful.
                        </p>
                    </div>
                </div>
                <a href={"#skills"} className="btn btn-primary">Continue</a>
            </div>
        </section>
    )
}