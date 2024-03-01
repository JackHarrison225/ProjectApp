import Image from 'next/image'

const HomeDevCard = ({username, picture }) => {

    
    return (
        <div className=''>
            <div className="mb-3 p-3 flex flex-col border  rounded-lg shadow-md border-l-4 ">
                <Image

                className="rounded-full h-32 w-32"
                src={picture}
                width={250}
                height={250}
                style={{objectFit:"cover"}}/>
                <h3 className="text-md ">
                <p>Welcome Back <span className="font-semibold">@{username}</span></p>
                </h3>
            </div>
        </div>
    )
}


export default HomeDevCard;