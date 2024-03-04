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


    
    const saveProject = async (id) => {
        try {
            const savedProject = await client.addToSavedProjects(id)
            setUserSavedProjects(prevProjects => [...prevProjects, savedProject.data])
        } catch(error) {
            console.error("There was a problem saving this project", error)
        }
    }

    const favouriteProject = async (id) => {
        try {
            const favouriteProject = await client.addToFavourites(id)
            setUserFavouriteProjects(prevProjects => [...prevProjects, favouriteProject.data])
        } catch(error) {
     
            console.error("There was a problem adding project to favourites", error)
        }
    }

    const removeProject = async (id, categoryName) => {
        try {
            console.log("Id for project being removed", id)
            console.log("Category name for project being removed", categoryName)
             await client.removeFromCategory(id, categoryName)
            
            // this switch case statement returns the projects that have not removed. It updates state on project removal from the matching categories. 
            switch(categoryName) {
                case 'SavedProjects':
                    console.log("removing from saved projects...")
                    setUserSavedProjects(prevProjects => prevProjects.filter(project => project._id !== id))
                    console.log("Project removed from saved projects.")
                    break;
                case 'FavouriteProjects':
                    console.log("removing from favourite projects...")
                    setUserFavouriteProjects(prevProjects => prevProjects.filter(project => project._id !== id))
                    console.log("Project removed from favourite projects.")
                    break;
                case 'OngoingProjects':
                    console.log("removing from on going projects...")
                    setUserOngoingProjects(prevProjects => prevProjects.filter(project => project._id !== id))
                    console.log("Project removed from on going projects.")
                    break;
                default: 
                    console.error("Unknown category", categoryName)
            }
           
            console.log("Project", id, "has been succesfully removed from", categoryName,".")
        } catch(error) {
            console.log("There was a problem removing this project from: ", categoryName)
            console.error("This is the error from the project removal: ", error)
        }
    }





    return (
        <ProjectContext.Provider value={{ userCreatedProjects, userSavedProjects, userFavouriteProjects, userOngoingProjects, saveProject, favouriteProject, removeProject}}>
            {children}
        </ProjectContext.Provider>
    )
}

