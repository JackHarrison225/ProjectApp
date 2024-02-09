import Image from 'next/image'

const ProjectCard = ({title, tags, description, devPicture, projPicture }) => {
    const tagArray = tags.split(",")
    
    return (
   
            <div className="shadow border  mb-4 rounded-r-none ">

                <div className="relative flex flex-1">
                <Image
                src={projPicture}
                width={500}
                height={300}
                alt={`Image for ${projPicture}`}
                className="w-full h-full bg-cover rounded"
               />
                </div>

                <div className="flex flex-1 pl-2 p-2 flex-col">
                <div className="flex items-end justify-end">
                <Image
                src={devPicture}
                width={256}
                height={25}
                alt={`Image for ${devPicture}`}
                className="rounded-full bg-cover  w-10 h-10 md:w-20 md:h-20"
             />
                </div>
                
                <div className="flex flex-col flex-1">
                <h3 className="text-lg font-bold ">
                {title}
                </h3>
                
                <p className="text-sm text-gray-600">
                {tagArray.map((tag, index) => (
                    <span key={tag} className="mr-2">
                        #{tag.trim()}
                    </span>
                ))}
                </p>

                
                <p className="text-sm">
                {description}
                </p>
                </div>


                </div>



  


            </div>
    )}
    
export default ProjectCard