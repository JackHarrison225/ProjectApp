'use client'

import React, {useState, useContext, useEffect} from 'react'
import HomeDevCard from '../components/authcomponents/HomeDevCard'
import ActivityCard from '../components/authcomponents/ActivityCard'
import devPic from "../public/images/headshot.jpg"
import { useProjectsContext } from "../contexts/ProjectsContexts";
import ProjectCardNoImg from "./projectcomponents/ProjectCardNoImage";


const AuthHomePage = () => {
    const {userName, userCreatedProjects, userSavedProjects, userFavouriteProjects, userOngoingProjects } = useProjectsContext()
    
    const firstThree = userCreatedProjects.slice(0, 3);

    const firstThreeTags = firstThree.map(project => project.Tags)

    console.log("This should be user created projects:", userCreatedProjects)
    console.log("This should be user saved projects:", userSavedProjects)
    console.log(`This should be user favourite projects:`, userFavouriteProjects)
    console.log(`This should be user on going projects:`, userOngoingProjects)
    console.log("This should be the first three projects data:", firstThree)
    console.log("This should be the first three project tags: ", firstThreeTags)

    const [sideBarClick, setSideBarClick] = useState(false);

    const [selectedCategory, setSelectedCategory] = useState("Your Projects")

    const projectCategories = [
        {
            title: 'Your Activities',
            items: [
                {name: "Your Projects", projects: userCreatedProjects},
                {name: "Saved projects", projects: userSavedProjects},
                {name: "Favourite Projects", projects: userFavouriteProjects},
                {name: "Ongoing Projects", projects: userOngoingProjects}
            ]
        }
    ]

    const handleSideBarClick = () => {
        setSideBarClick(!sideBarClick)
    }

    const handleCategoryChange = (categoryName) => {
        setSelectedCategory(categoryName)
    }



    const activeCategoryProjects = projectCategories.find(category => category.items.name === selectedCategory)?.items.projects || []
    return (
        <div>
            <section className="p-4 h-screen">
                
                <div className="flex flex-col md:flex-row h-full gap-20">
                <div className="flex flex-col flex-[20%]">
                    <div className="">
                 <HomeDevCard
                    className="rounded-full"
                    username={userName}
                    picture={devPic}/>
                    </div>
                    <div className="dev-activity">
                        {projectCategories.map((category, index) => (
                            <ActivityCard key={index}
                            
                            title={category.title}
                            categories={category.items}
                                                />
                        ))}

                    </div>
                </div>
                
                <div className="flex-grow h-screen flex-[80%]">
                    <div>
                        <h3>
                           {selectedCategory}
                        </h3>
                        <div>
                            {firstThree.map((project) => (
                            
                                <div key={project._id}>
                                    <ProjectCardNoImg
                                    title={project.Title}
                                    devPicture={devPic}
                                    description={project.Description}
                                    tags={project.Tags} />
                                </div>
                            ))}
                        </div>
                    </div>
                 <div>

                 </div>
                </div>
                </div>

            </section>
        </div>
 )
}

export default AuthHomePage;