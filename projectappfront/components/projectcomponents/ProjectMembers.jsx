import Image from 'next/image'

const ProjectMembers = ({name, picture, description }) => {

    
    return (
        <div>

            <div className="ml-3 mb-3 p-3 flex items-center border rounded-lg border-l-4 ">
                <Image
                className="rounded-full h-10 w-10"
                src={picture}
                width={100}
                height={100}
                object-fit="cover"/>
                <h4 className="ml-3 text-md font-normal ">
                {name}
                </h4>
                
                <p>
                {description}
                </p>
            </div>

        </div>

    )
}


export default ProjectMembers