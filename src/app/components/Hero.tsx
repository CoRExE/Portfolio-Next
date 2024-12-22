import { PixelArt } from './PixelArt'

export function Hero() {
    return (
        <div className="flex justify-center items-center w-full">
        <section className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <PixelArt
                        src="/placeholder.svg?height=200&width=200"
                        alt="8-bit developer character"
                        width={200}
                        height={200}
                    />
                    <h1 className="text-5xl font-bold mt-4">Jules Langagne</h1>
                    <p className="text-2xl mt-2">Software Developer</p>
                    <p className="py-6">
                        Welcome to my retro gaming-inspired portfolio! I&apos;m a third-year Computer Science student
                        specializing in application development.
                    </p>
                    <a href="#about" className="btn btn-primary">Start Adventure</a>
                </div>
            </div>
        </section>
        </div>
    )
}
