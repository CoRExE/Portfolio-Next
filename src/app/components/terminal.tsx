import { useState } from 'react'

interface TerminalProps {
    language: 'fr' | 'en'
}

const translations = {
    fr: {
        terminal: "Terminal",
        placeholder: "Tapez une commande (essayez 'help')",
    },
    en: {
        terminal: "Terminal",
        placeholder: "Type a command (try 'help')",
    },
}

export function Terminal({ language }: TerminalProps) {
    const [terminalInput, setTerminalInput] = useState('')
    const [terminalOutput, setTerminalOutput] = useState('')

    const t = translations[language]

    const handleTerminalSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        let output = ''
        switch (terminalInput.toLowerCase()) {
            case 'help':
                output = 'Available commands: help, about, contact, skills'
                break
            case 'about':
                output = 'I am a back-end developer with a passion for creating efficient and scalable systems.'
                break
            case 'contact':
                output = 'Email: developer@example.com'
                break
            case 'skills':
                output = 'Node.js, Python, MongoDB, Docker, and more.'
                break
            case 'easter egg':
                output = '🥚 You found a hidden easter egg! 🐰'
                break
            default:
                output = `Command not recognized: ${terminalInput}`
        }
        setTerminalOutput(output)
        setTerminalInput('')
    }

    return (
        <section className="mb-16">
            <h2 className="text-2xl font-bold mb-4">{t.terminal}</h2>
            <div className="bg-black p-4 rounded-lg">
                <div className="mb-4 font-mono">
                    <p> `&gt;`{terminalOutput}</p>
                </div>
                <form onSubmit={handleTerminalSubmit} className="flex">
                    <span className="mr-2 font-mono">$</span>
                    <input
                        type="text"
                        value={terminalInput}
                        onChange={(e) => setTerminalInput(e.target.value)}
                        className="flex-grow bg-transparent outline-none font-mono"
                        placeholder={t.placeholder}
                    />
                </form>
            </div>
        </section>
    )
}