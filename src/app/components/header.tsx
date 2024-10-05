import Image from "next/image"
import { Button } from "/button"

interface HeaderProps {
    language: 'fr' | 'en'
    setLanguage: (lang: 'fr' | 'en') => void
}

const translations = {
    fr: {
        mindset: "Développeur back-end passionné par la création de solutions robustes et évolutives.",
        experience: "Plus de 5 ans d'expérience dans le développement de systèmes complexes.",
    },
    en: {
        mindset: "Back-end developer passionate about creating robust and scalable solutions.",
        experience: "Over 5 years of experience in developing complex systems.",
    },
}

export function Header({ language, setLanguage }: HeaderProps) {
    const t = translations[language]

    return (
        <header className="container mx-auto py-8 px-4 backdrop-blur-sm bg-purple-950 bg-opacity-10 rounded-lg mt-4">
            <div className="flex justify-between items-center">
                <Image src="/logo.svg" alt="Logo" width={50} height={50} className="filter invert" />
                <Button
                    onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
                    className="bg-purple-700 hover:bg-purple-600 text-purple-100"
                >
                    {language === 'fr' ? 'EN' : 'FR'}
                </Button>
            </div>
            <div className="mt-8 text-center">
                <h1 className="text-4xl font-bold mb-4 text-purple-300">John Doe</h1>
                <p className="text-xl mb-2 text-purple-200">{t.mindset}</p>
                <p className="text-purple-300">{t.experience}</p>
            </div>
        </header>
    )
}