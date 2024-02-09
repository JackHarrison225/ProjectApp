"use client";
import React, { useState } from 'react'


const CreateProject = (props) => {
    const [project, changeProject] = useState({
      title: "",
      tags: [],
      description: "",
      picture: "",
      owners: [],
      team: []
    });

    const handleUpdate = (event) => {
      changeProject({
        ...project,
        [event.target.name] : event.target.value
      })
    }

    const handleCreateProject = async (e) => {
        e.preventDefault();

        try {
                console.log("Creating project")
                await submitHandlerProject(e);

                } catch (error) {
                    console.error(error);
                    alert("Failed!")
                    console.error("fail");
                }
        };
        
        const submitHandlerProject = async (e) => {
          // if (req.method === 'POST') {
            try {
              
              // const { Title, Tags, description, Picture, Owners, Team } = req.body;
        
              // save to mongo
              // const projectData = {
              //   title: Title,
              //   tags: Tags,
              //   description: description,
              //   picture: Picture,
              //   owners: Owners,
              //   team: Team,
              // };
              
              await props.client.CreateProject(
                project.title,
                project.tags,
                project.description,
                project.picture,
                project.owners,
                project.team
              ) 

              // Save projectData to MongoDB or perform any other database operation (somehow)
        
              // Send a success response
            //   res.status(200).json({ message: 'Form data submitted successfully' });
            } catch (error) {
              console.error('Error processing form data:', error);
            //   res.status(500).json({ message: 'Internal server error' });
            }
          // } else {
          //   // Return a 405 Method Not Allowed error if the request method is not POST
          //   res.status(405).json({ message: 'Method not allowed' });
          // }
          console.log('Form submitted:', e.target);
        };

    // projectObject = () => {
        //project.something = something
    // }

  return (
    <main className="flex  flex-col items-center justify-between p-24">
      <form className="flex flex-col gap-1" name="createForm" onSubmit={handleCreateProject}>
        <h1>Create project</h1>

        <label htmlFor="title">Title</label>
        <input name="title" 
        value={project.title} onChange={handleUpdate} type="text"></input>
    <br></br>
        <label htmlFor="tags">Tag line</label>
        <input name="tags" 
        value={project.tags} onChange={handleUpdate} type="text"></input>
        {/* <button htmlFor="Tags" className='bg-emerald-500'>+</button> */}
    <br></br>
        <label htmlFor="description">Description</label>
        <textarea name="description" 
        value={project.description} onChange={handleUpdate} ></textarea>
    <br></br>
        <label htmlFor="picture">Image</label>
        <input name="picture" 
        value={project.picture} onChange={handleUpdate} ></input>
    <br></br>
        <label htmlFor="owners">Owners</label>
        <input name="owners" 
        value={project.owners} onChange={handleUpdate} type="text"></input>
    <br></br>
        <label htmlFor="team">Users</label>
        <input name="team" 
        value={project.team} onChange={handleUpdate} type="text"></input>
    <br></br>
        <label htmlFor="publish">Publish</label>
        <input type="submit" name="publish" className="bg-emerald-500 rounded-md shadow-md hover:cursor-pointer hover:bg-emerald-700"></input>
      </form>
    </main>
  )
}

export default CreateProject
