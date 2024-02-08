import Image from 'next/image'

const ProjectCard = ({title, tags, description, picture }) => {
    const tagArray = tags.split(",")
    
    return (
        <div>
            <div className="ml-3 p-3 shadow border  rounded-lg   ">
                <Image
                src={picture}
                width={100}
                height={100}
                object-fit="cover"/>
                <h3 className="text-2xl font-bold ">
                {title}
                </h3>
                
                <p className="text-sm text-gray-600">
                {tagArray.map((tag, index) => (
                    <span key={tag} className="mr-2">
                        #{tag.trim()}
                    </span>
                ))}
                </p>
                <p>
                {description}
                </p>
            </div>

        </div>

    )
}


export default ProjectCard