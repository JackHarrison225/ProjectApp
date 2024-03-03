import Image from 'next/image'
import React,{useState} from 'react'
import {useProjectsContext} from '../../contexts/ProjectsContexts'

const ProjectCardNoImg = ({title, tags, description, postedDate, devPicture, projPicture, onProjectSave, onProjectFavourite }) => {
    const tagArray = tags.split(" ") || []

    const [expanded, setExpanded] = useState(false)

 

    const toggleExpanded = () => {
        setExpanded(!expanded)
    }

  return (
    <div className="shadow border p-2 mb-4 rounded-r-none ">

    <div className="relative flex flex-1 pl-2 p-2 flex-col">
    <div className="relative flex justify-end items-end rounded-full ">
    <div className="developer-image">
    <Image
    src={devPicture}

    style={{objectFit: 'cover'}}

    alt={`Image for ${devPicture}`}
    className=" w-20 h-20 justify-end rounded-full items-end"
 />
    </div>

    <div className="project-options">

    </div>

    </div>
    
    <div className="flex flex-col flex-1">
    <h3 className="text-lg font-bold ">
    {title}
    </h3>
    <p>{postedDate}</p>
    
    <p className="text-sm text-gray-600">
    {tagArray.map((tag, index) => (
        <span key={tag} className="mr-2">
            #{tag.trim()}
        </span>
    ))}
    </p>
    <p>
    {expanded ? description.substring(0,100) + '...' + '' : (description ? description?.substring(0, 50) + '...' : "")}
    </p>
    
    
    
    <p onClick={toggleExpanded} className="text-xs text-blue-300">
    { !expanded ? 'See More' : 'See Less'}
    </p>
    
    </div>

    <div className="flex items-center gap-4 mt-2 interactive-holder">
        <div>
            <p className="p-2 bg-red-500 rounded ">View Details</p>
        </div>
        <div>
            <p onClick={() => onProjectSave()} >Save</p>
        </div>
        <div>
            <p onClick={() => onProjectFavourite()}>Favourite</p>
        </div>
        <div></div>
    </div>

    </div>






</div>
)
}

export default ProjectCardNoImg