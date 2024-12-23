const skills = [
    { name: 'Python', level: 90 },
    { name: 'Py-Cord', level: 85},
    { name: 'Django', level: 80 },
    { name: 'Flask', level: 70 },
    { name: 'Java', level: 75 },
    { name: 'TS/JS', level: 70 },
    { name: 'React', level: 70},
    { name: 'SQL', level: 60 },
    { name: 'NoSQL', level: 70 },
    { name: 'PHP/Laravel', level: 50 },
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
                <a href={"#projects"} className="btn btn-primary">Continue</a>
            </div>
        </section>
    )
}