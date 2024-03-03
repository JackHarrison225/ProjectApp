'use client'


import React from 'react'


const ActivityCard = ({title, categories, onCategorySelect}) => {

    
    return (
        <div className="w-full mb-3 p-3 flex flex-col border rounded-lg shadow-md border-l-4">
            <div className="">
                <div>
                    <h3 className="font-semibold mb-3"><p></p>{title}</h3>
                </div>
                <div>
                {categories.map((category, index) => (
                        <p className="mb-2" key={index}>{category.name}</p>
                    ))}
                </div>



            <ul>
            </ul>
            
            </div>
        </div>
    )
}

export default ActivityCard