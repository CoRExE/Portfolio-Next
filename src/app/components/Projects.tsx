import { PixelArt } from './PixelArt'

const projects = [
    {
        title: 'Project 1',
        description: 'A brief description of project 1',
        image: '/placeholder.svg?height=150&width=150',
        link: '#',
    },
    {
        title: 'Project 2',
        description: 'A brief description of project 2',
        image: '/placeholder.svg?height=150&width=150',
        link: '#',
    },
    {
        title: 'Project 3',
        description: 'A brief description of project 3',
        image: '/placeholder.svg?height=150&width=150',
        link: '#',
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

