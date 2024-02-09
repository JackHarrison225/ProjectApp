import React, { createContext, useEffect, useState} from 'react'

export const ProjectContext = createContext()

export const ProjectProvider = ({ children }) => {
    const [projects, setProjects] = useState([])
    const [members, setMembers] = useState([])

    useEffect(() => {
        const initialProjects = [
            { _id: 1, title: "Project 1", tags: ["django", "html", "css"], description: "Project 1 description", members: [1, 2], owner: "Bob"},
            { _id: 2, title: "Project 2", tags: ["next", "react", "node"], description: "Project 2 description", members: [2,3], owner: "Alice" },
            { _id: 3, title: "Project 3", tags: ["vue", "javascript", "css"], description: "Project 3 description", members: [1, 3], owner: "Doran"},
            { _id: 4, title: "Project 3", tags: ["vue", "javascript", "css"], description: "Project 3 description", members: [1, 3], owner: "Doran"},
            { _id: 5, title: "Project 3", tags: ["vue", "javascript", "css"], description: "Project 3 description", members: [1, 3], owner: "Doran"},
            { _id: 6, title: "Project 3", tags: ["vue", "javascript", "css"], description: "Project 3 description", members: [1, 3], owner: "Doran"},
            { _id: 7, title: "Project 3", tags: ["vue", "javascript", "css"], description: "Project 3 description", members: [1, 3], owner: "Doran"},
          ];
          setProjects(initialProjects);
    }, [])

    useEffect(() => {
        const projectMembers = [
            {id: 1, username: "gendry"},
            {id: 2, username: "davos"},
            {id: 3, username: "darkstar"}
        ]
        setMembers(projectMembers)
    }, [])



    return (
        <ProjectContext.Provider value={{ projects, setProjects}}>
            {children}
        </ProjectContext.Provider>
    )
}

