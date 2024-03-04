'use client'

import React, {useState} from 'react'

const ProjectFilter = ({onFilterChange, tags}) => {



    return (
        <div className="block border rounded-xl bg-gray-100">
    
                <div className="header pt-4 px-4 mb-8">
                <h2>Search For Projects</h2>
                </div>
                
                <div className="px-4 py-4 mb-4">
                    Filter by tags
                    <select 
                    onChange={(e) => onFilterChange(e.target.value)}
                    className="border w-full rounded-lg" defaultValue="#">
                        <option value="">Any</option>

                    {tags.map(tag => (
                        <option key={tag} value={tag}>{tag}</option>
                    ))}
                    </select>
            </div>
            <div className="px-4 py-4 mb-4">
            <h3>Filter by project type</h3>
            <div>
                <label className="flex ">
                <input type="checkbox" className="rounded-lg" value="#"></input>
                <p className="ml-2">Type 1</p>
                </label>
            </div>
            <div>
                <label className="flex ">
                <input type="checkbox" className="rounded-lg" value="#"></input>
                <p className="ml-2">Type 2</p>
                </label>
            </div>
            <div>
                <label className="flex ">
                <input type="checkbox" className="rounded-lg" value="#"></input>
                <p className="ml-2">Type 3</p>
                </label>
            </div>
            
            
            </div>
             


        </div>
    )
}

export default ProjectFilter