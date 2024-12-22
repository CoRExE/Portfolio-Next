const skills = [
    { name: 'JavaScript', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'React', level: 80 },
    { name: 'Node.js', level: 75 },
    { name: 'NextJS', level: 70 },
    { name: 'SQL', level: 65 },
]

export function Skills() {
    return (
        <section id="skills" className="py-16 bg-base-800">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center text-white">Skills</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {skills.map((skill) => (
                        <div key={skill.name} className="bg-base-700 p-4 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold mb-2 text-white">{skill.name}</h3>
                            <div className="w-full bg-gray-600 rounded-full h-2.5 dark:bg-gray-700">
                                <div
                                    className="bg-primary h-2.5 rounded-full"
                                    style={{width: `${skill.level}%`}}
                                    role="progressbar"
                                    aria-valuenow={skill.level}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
                <br/>
                <a href="#projects" className="btn btn-primary">Continue</a>
            </div>
        </section>
    )
}