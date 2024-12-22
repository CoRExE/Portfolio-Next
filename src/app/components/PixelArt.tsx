import Image from 'next/image'

interface PixelArtProps {
    src: string
    alt: string
    width: number
    height: number
}

export function PixelArt({ src, alt, width, height }: PixelArtProps) {
    return (
        <div className="pixel-art" style={{ width, height }}>
            <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                className="pixelated"
            />
        </div>
    )
}
