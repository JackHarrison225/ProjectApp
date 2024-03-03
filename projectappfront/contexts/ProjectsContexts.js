import React, { createContext, useContext, useEffect, useState} from 'react';
import {Becca, Morrillo} from './imports';
import {useApiClient} from './ApiClientContext';


export const ProjectContext = createContext();

export const useProjectsContext = () => useContext(ProjectContext)




export const ProjectProvider = ({ children }) => {
    const [userCreatedProjects, setUserCreatedProjects] = useState([])

    const [userSavedProjects, setUserSavedProjects] = useState([])
    const [userFavouriteProjects, setUserFavouriteProjects] = useState([])
    const [userOngoingProjects, setUserOngoingProjects] = useState([])

    const [userName, setUserName] = useState(null)


    const [currentProject, setCurrentProject] = useState(undefined)
    const [recommendedProjects, setRecommendedProjects] = useState([])
    // const [userProjects, setUserProjects] = useState([])

    const [members, setMembers] = useState([])
    const [devs, setDevs] = useState([])

    const {client, isAuthenticated} = useApiClient()






    useEffect(() => {
        const fetchUserData = async () => {
            try {
                if (isAuthenticated) {
                    const _id = localStorage.getItem("userid")
                    const username = localStorage.getItem("username")
                    console.log("This should be the username:", username)

                    setUserName(username)
                    console.log("current userID:", _id)
                  
                        if (_id) {
                            const createdProjects = await client.getCreatedProjects(_id)
                            const savedProjects = await client.getSavedProjects(_id)
                            const favouriteProjects = await client.getFavouriteProjects(_id)
                            const ongoingProjects = await client.getOngoingProjects(_id)

                            
                            setUserCreatedProjects(createdProjects.data)
                            setUserSavedProjects(savedProjects.data)
                            setUserFavouriteProjects(favouriteProjects.data)
                            setUserOngoingProjects(ongoingProjects.data)
                           
                            console.log("These are the projects the user created:", userCreatedProjects)
                            console.log("These are the projects the user saved:", userSavedProjects)
                            console.log("These are the projects the user favorited:", userFavouriteProjects)
                            console.log("These are the projects the user has ongoing:", userOngoingProjects)
                        }
                }


            } catch (error) {
                console.log("Error fetching user data", error)
               
            }
        }



        fetchUserData()
    }, [isAuthenticated, client])


    // useEffect(() => {
    //     const initialProjects = [
    //         { _id: 1, title: "Project 1", tags: ["django", "html", "css"], description: "The Dynamic Event Scheduler is a Python project designed to streamline event management through a user-friendly web interface. Built with Flask, SQLAlchemy, and React, it allows users to effortlessly create, edit, and organize events. Features include secure user authentication, customizable event categorization, and automated notifications via email or SMS using Celery and Twilio. Ideal for individuals and organizations seeking an efficient way to manage their schedules, this scalable solution supports multi-user collaboration and integrates easily with other systems through RESTful APIs.", members: [1, 2], owner: "Bob"},
    //         { _id: 2, title: "Project 2", tags: ["next", "react", "node"], description: "The Dynamic Event Scheduler is a Python project designed to streamline event management through a user-friendly web interface. Built with Flask, SQLAlchemy, and React, it allows users to effortlessly create, edit, and organize events. Features include secure user authentication, customizable event categorization, and automated notifications via email or SMS using Celery and Twilio. Ideal for individuals and organizations seeking an efficient way to manage their schedules, this scalable solution supports multi-user collaboration and integrates easily with other systems through RESTful APIs.", members: [2,3], owner: "Alice" },
    //         { _id: 3, title: "Project 3", tags: ["vue", "javascript", "css"], description: "The Dynamic Event Scheduler is a Python project designed to streamline event management through a user-friendly web interface. Built with Flask, SQLAlchemy, and React, it allows users to effortlessly create, edit, and organize events. Features include secure user authentication, customizable event categorization, and automated notifications via email or SMS using Celery and Twilio. Ideal for individuals and organizations seeking an efficient way to manage their schedules, this scalable solution supports multi-user collaboration and integrates easily with other systems through RESTful APIs.", members: [1, 3], owner: "Doran"},
    //         { _id: 4, title: "Project 3", tags: ["vue", "javascript", "css"], description: "The Dynamic Event Scheduler is a Python project designed to streamline event management through a user-friendly web interface. Built with Flask, SQLAlchemy, and React, it allows users to effortlessly create, edit, and organize events. Features include secure user authentication, customizable event categorization, and automated notifications via email or SMS using Celery and Twilio. Ideal for individuals and organizations seeking an efficient way to manage their schedules, this scalable solution supports multi-user collaboration and integrates easily with other systems through RESTful APIs.", members: [1, 3], owner: "Doran"},
    //         { _id: 5, title: "Project 3", tags: ["vue", "javascript", "css"], description: "The Dynamic Event Scheduler is a Python project designed to streamline event management through a user-friendly web interface. Built with Flask, SQLAlchemy, and React, it allows users to effortlessly create, edit, and organize events. Features include secure user authentication, customizable event categorization, and automated notifications via email or SMS using Celery and Twilio. Ideal for individuals and organizations seeking an efficient way to manage their schedules, this scalable solution supports multi-user collaboration and integrates easily with other systems through RESTful APIs.", members: [1, 3], owner: "Doran"},
    //         { _id: 6, title: "Project 3", tags: ["vue", "javascript", "css"], description: "The Dynamic Event Scheduler is a Python project designed to streamline event management through a user-friendly web interface. Built with Flask, SQLAlchemy, and React, it allows users to effortlessly create, edit, and organize events. Features include secure user authentication, customizable event categorization, and automated notifications via email or SMS using Celery and Twilio. Ideal for individuals and organizations seeking an efficient way to manage their schedules, this scalable solution supports multi-user collaboration and integrates easily with other systems through RESTful APIs.", members: [1, 3], owner: "Doran"},
    //         { _id: 7, title: "Project 3", tags: ["vue", "javascript", "css"], description: "The Dynamic Event Scheduler is a Python project designed to streamline event management through a user-friendly web interface. Built with Flask, SQLAlchemy, and React, it allows users to effortlessly create, edit, and organize events. Features include secure user authentication, customizable event categorization, and automated notifications via email or SMS using Celery and Twilio. Ideal for individuals and organizations seeking an efficient way to manage their schedules, this scalable solution supports multi-user collaboration and integrates easily with other systems through RESTful APIs.", members: [1, 3], owner: "Doran"},
    //       ];
    //       setProjects(initialProjects);
    //       setRecommendedProjects(initialProjects)
    //       setUserProjects(initialProjects)
    // }, [])

    // useEffect(() => {
    //     const savedprojects = [
    //         { _id: 1, title: "Project 1", tags: ["django", "html", "css"], description: "The Dynamic Event Scheduler is a Python project designed to streamline event management through a user-friendly web interface. Built with Flask, SQLAlchemy, and React, it allows users to effortlessly create, edit, and organize events. Features include secure user authentication, customizable event categorization, and automated notifications via email or SMS using Celery and Twilio. Ideal for individuals and organizations seeking an efficient way to manage their schedules, this scalable solution supports multi-user collaboration and integrates easily with other systems through RESTful APIs.", members: [1, 2], owner: "Bob"},
  
    //         { _id: 4, title: "Project 3", tags: ["vue", "javascript", "css"], description: "The Dynamic Event Scheduler is a Python project designed to streamline event management through a user-friendly web interface. Built with Flask, SQLAlchemy, and React, it allows users to effortlessly create, edit, and organize events. Features include secure user authentication, customizable event categorization, and automated notifications via email or SMS using Celery and Twilio. Ideal for individuals and organizations seeking an efficient way to manage their schedules, this scalable solution supports multi-user collaboration and integrates easily with other systems through RESTful APIs.", members: [1, 3], owner: "Doran"},
          
    //         { _id: 7, title: "Project 3", tags: ["vue", "javascript", "css"], description: "The Dynamic Event Scheduler is a Python project designed to streamline event management through a user-friendly web interface. Built with Flask, SQLAlchemy, and React, it allows users to effortlessly create, edit, and organize events. Features include secure user authentication, customizable event categorization, and automated notifications via email or SMS using Celery and Twilio. Ideal for individuals and organizations seeking an efficient way to manage their schedules, this scalable solution supports multi-user collaboration and integrates easily with other systems through RESTful APIs.", members: [1, 3], owner: "Doran"},
    //       ];
    //       setSavedProjects(savedprojects)

    // }, [])


    // useEffect(() => {

        
    //     const projectMembers = [
    //         {id: 1, username: "gendry"},
    //         {id: 2, username: "davos"},
    //         {id: 3, username: "darkstar"}
    //     ]
    //     setMembers(projectMembers)
    // }, [])

    // useEffect(() => {
    //     const devProfile = [
    //         {_id: 1, username: "darkstar", img:{Becca}},
    //         {_id: 2, username: "rhaeghar", img:{Morrillo}}
    //     ]
    //     setDevs(devProfile)
    // }, [])



    return (
        <ProjectContext.Provider value={{ userName, userCreatedProjects, userSavedProjects, userFavouriteProjects, userOngoingProjects}}>
            {children}
        </ProjectContext.Provider>
    )
}

