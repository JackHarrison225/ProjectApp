"use client";
import React, { useState } from 'react';

const DeleteProject = (props) => {
    const [id, setid] = useState("");

    const deleteProject = async () => {
        try {
            await props.client.deleteProject(id);
            console.log("Deleted!");
        } catch (error) {
            console.error("Error deleting project:", error);
        }
    };

    const handleDeleteProject = async (e) => {
        e.preventDefault();
        try {
            console.log("Deleting project...");
            await deleteProject();
        } catch (error) {
            console.error(error);
            alert("Failed to delete project!");
        }
    };

    const handleInputChange = (e) => {
        setid(e.target.value);
    };

    return (
        <div>
            <form onSubmit={handleDeleteProject}>
                <input 
                    className='border' 
                    type="text" 
                    name='projectId' 
                    value={id} 
                    onChange={handleInputChange} 
                    placeholder="Enter Project ID" 
                />
                <button className='bg-red-500 hover:bg-red-700 text-white font-thin py-2 px-4 rounded' type="submit">Delete project</button>
            </form>
        </div>
    );
};

export default DeleteProject;