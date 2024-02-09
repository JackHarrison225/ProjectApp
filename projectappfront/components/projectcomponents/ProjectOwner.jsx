import Image from 'next/image'

const ProjectOwner = ({ username, picture }) => {

    
    return (
        <div>
            <div className="ml-3 mb-3 p-3 flex flex-col items-center border  rounded-lg shadow-md border-l-4 ">
                <Image
                src={picture}
                width={250}
                height={250}
                
                object-fit="cover"/>
                <h3 className="text-md font-semibold">
                @{username}
                </h3>
                


            </div>

        </div>

    )
}


export default ProjectOwner