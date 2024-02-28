"use client";
import React, { useState } from 'react'

const UpdateProject = (props) => {
    const [project, changeProject] = useState({
        title: "",
        tags: [],
        description: "",
        picture: "",
        _id: ""
   });


   const handleUpdate = (event) => {
    changeProject({
         ...project,
         [event.target.name] : event.target.value
    })
}

// const handleUpdateTags = (event) => {
//     changeProject({
//          ...project.tags,
//          [((project.tags).length)-1] : event.target.value
//     })
//     event.target.value = ""
// }



const token = localStorage.getItem("token");

const submitHandlerProject = async (e) => {
    try {
         await props.client.UpdateProject(
              project.title,
              project.tags,
              project.description,
              project.picture,
              project._id,
         );
         console.log("Project updated successfully!") 
    } catch (error) {
         console.error('Error processing form data:', error);
    }
    console.log('Form submitted:', e.target);
};



const handleUpdateProject = async (e) => {
    e.preventDefault();
    try 
    {
         console.log("Updating project")
         await submitHandlerProject(e);
    }
    catch(error)
    {
         console.error(error);
         alert("Failed!")
         console.error("fail");
    }
};

  return (
    <>
    <main className="flex  flex-col items-center justify-between p-24">
               <form className="flex flex-col gap-1" name="updateForm" onSubmit={handleUpdateProject}>
                    <h1>Update project</h1>

                    <label htmlFor="title">Title</label>
                    <input name="title" 
                     value={project.title} onChange={handleUpdate} type="text"></input>

                    <label htmlFor="tags">Tag line</label>
                    <input name="tags" 
                     value={project.tags} onChange={handleUpdate} type="text"></input>
                    
                    {/* <button htmlFor="Tags" className='bg-emerald-500'>+</button> */}
                    <label htmlFor="description">Description</label>
                    <textarea name="description" 
                     value={project.description} onChange={handleUpdate} ></textarea>

                    <label htmlFor="picture">Image</label>
                    <input name="picture" 
                     value={project.picture} onChange={handleUpdate} >
                         {/* <button onClick={handleUpdateTags}> </button> */}
                    </input>

                    <label htmlFor="id">ID</label>
                    <input name="_id"
                     value={project._id} onChange={handleUpdate} type="text"></input>

                    <label htmlFor="publish">Publish</label>
                    <input type="submit" name="publish" className="bg-emerald-500 rounded-md shadow-md hover:cursor-pointer hover:bg-emerald-700"></input>
               </form>
    </main>
    </>
  )
}

export default UpdateProject