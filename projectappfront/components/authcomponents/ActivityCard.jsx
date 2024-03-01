'use client'


import React from 'react'


const ActivityCard = ({title, itemOne, itemTwo, itemThree, itemFour}) => {
    const items = [title, itemOne, itemTwo, itemThree, itemFour]
    
    return (
        <div className="w-full mb-3 p-3 flex flex-col border rounded-lg shadow-md border-l-4">
            <div className="">
                <div>
                    <h3 className="font-semibold mb-4"><p></p>{title}</h3>
                </div>
            <ul>
            </ul>
            
            </div>
        </div>
    )
}

export default ActivityCard