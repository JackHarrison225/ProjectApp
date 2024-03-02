import Image from 'next/image'
import React,{useState} from 'react'

const ProjectCardNoImg = ({title, tags, description, postedDate, devPicture, projPicture }) => {
    const tagArray = tags.split(" ") || []

    const [expanded, setExpanded] = useState(false)

    const toggleExpanded = () => {
        setExpanded(!expanded)
    }

  return (
    <div className="shadow border p-2 mb-4 rounded-r-none ">

    <div className="relative flex flex-1 pl-2 p-2 flex-col">
    <div className="relative flex justify-end items-end rounded-full ">
    <Image
    src={devPicture}

    style={{objectFit: 'cover'}}

    alt={`Image for ${devPicture}`}
    className=" w-20 h-20 justify-end rounded-full items-end"
 />
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


    </div>






</div>
)
}

export default ProjectCardNoImg