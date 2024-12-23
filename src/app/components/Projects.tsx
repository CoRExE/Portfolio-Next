import { PixelArt } from './PixelArt'

const projects = [
    {
        title: 'Interface de Cryptage',
        description: 'An encryption interface to encrypt and decrypt messages using Tkinter.',
        image: '/projects/binary.svg',
        link: 'https://github.com/CoRExE/Interface-de-Cryptage',
        technologies: ['/tech/python-ico.svg'],
    },
    {
        title: 'VideoSquencer',
        description: 'A video sequencer, making frame-shot from a video and make report of it. (Audit Application)',
        image: '/projects/VideoSquencer.ico',
        link: 'https://github.com/CoRExE/VideoSquencer',
        technologies: [
            '/tech/python-ico.svg',
            '/tech/opencv-ico.ico',
            '/tech/jinja2-ico.ico',
            '/tech/html5-ico.svg',
            ],
    },
    {
        title: 'Majordome',
        description: 'Originally, it was a moderation BOT. Since then, things have gone wrong...',
        image: '/projects/Majordome.ico',
        link: 'https://github.com/CoRExE/Majordome',
        technologies: ['/tech/python-ico.svg', '/tech/py-cord.ico', '/tech/sqlite3.ico'],
    },
]

export function Projects() {
    return (
        <section id="projects" className="py-16 bg-base-300">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="card bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <PixelArt
                                    src={project.image}
                                    alt={`${project.title} preview`}
                                    width={150}
                                    height={150}
                                />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h3 className="card-title">{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="mt-2 flex justify-center space-x-2">
                                    {project.technologies.map((tech, idx) => (
                                        <img key={idx} src={tech} alt={`${tech} icon`} width={24} height={24} />
                                    ))}
                                </div>
                                <div className="card-actions">
                                    <a href={project.link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">View Project</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}