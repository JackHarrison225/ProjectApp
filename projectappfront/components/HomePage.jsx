import React, {useContext} from 'react';

import ProjectCard from './projectcomponents/ProjectCard';

import {ProjectContext} from "../contexts/ProjectsContexts"


const HomePage = (props) => {

    const { projects } = useContext(ProjectContext)


    return (
        <div>
            <section className="relative isolate h-screen bg-gunmetal">
                <div className="p-8 flex items-center max-w-fit h-full m-auto ">
     
                        <h3 className="text-3xl text-white">
                            Collaborations, at your finger tips.
                        </h3>
  
                </div>
            </section>

            <section className="relative min-h-40 m-auto bg-white p-8">
                <div className=" flex items-start max-w-fit m-auto ">
                    <h3 className="mb-3">
                        Search for a Projects
                        </h3>
                </div>
                <div className=" grid grid-cols-6 gap-4 max-w-fit m-auto cursor-pointer">
                    
                    <p className="flex items-center before:content-['X'] before:mr-2 before:font-bold before:text-xs border p-2 rounded-lg">
                        React
                    </p>
                    <p className="flex items-center before:content-['X'] before:mr-2 before:font-bold before:text-xs border p-2 rounded-lg">
                        Next.js
                    </p>

                </div>
            </section>

            <section className="relative h-screen ">
                <div className="p-8 max-w-5xl  overflow-x-auto m-auto">
                <div className="grid grid-cols-2 gap-3">
                    {projects.map((project) => (
                    <ProjectCard
                    key={project.id}
                    title={project.title}
                    tags={project.tags.join(', ')}
                    description={project.description}
                    />
                    ))}

                </div>
                </div>

            </section>

        </div>
    )
}

export default HomePage