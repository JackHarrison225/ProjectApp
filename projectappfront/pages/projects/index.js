'use client'
import React, {useState, useEffect, useLayoutEffect} from 'react'
import Image from "next/image";
import gsap from 'gsap';
import andrea from "../../public/images/andrea.jpg"


import ProjectCard from "../../components/projectcomponents/ProjectCard"
import NavBarAuth from "../../components/navcomponents/NavBarAuth"
import ProjectFilter from "../../components/projectcomponents/ProjectFilter"
import ProjectMembers from "../../components/projectcomponents/ProjectMembers"
import ProjectOwner from "../../components/projectcomponents/DevCard"
import { useRouter, Router } from 'next/router';
import { ApiClient } from '@/app/ApiClient';





export default function Projects() {

  const initialProjects = [
    { id: 1, title: "Project 1", tags: ["django", "html", "css"], description: "Project 1 description", members: [1, 2], owner: "Bob"},
    { id: 2, title: "Project 2", tags: ["next", "react", "node"], description: "Project 2 description", members: [2,3], owner: "Alice" },
    { id: 3, title: "Project 3", tags: ["vue", "javascript", "css"], description: "Project 3 description", members: [1, 3], owner: "Doran"},
  ];

  const projectMembers = [
    {id: 1, username: "gendry", },
    {id: 2, username: "davos"},
    {id: 3, username: "darkstar"}
  
  ]



  const [projects, setProjects] = useState(initialProjects)
  const [members, setMembers] = useState(projectMembers)
  const [selectedProject, setSelectedProject] = useState(null);

  const [filter, setFilter] = useState('')

  const tags = Array.from(new Set(initialProjects.flatMap(project => project.tags)))

  const filteredProjects = filter ? projects.filter(projects => projects.tags.includes(filter)) : projects

  const router = useRouter()

  

  
  return (


    <main className="flex flex-col bg-antiflash-white items-center  justify-between">

      <div className="px-18 mt-24 flex-col  md:mx-auto md:container md:flex-row  border rounded-lg p-8 flex ">

        <div className=" w-1/4 block justify-center p-2">
        <ProjectFilter onFilterChange={setFilter} tags={tags}/>
        </div>

      <div className="grid w-2/4 gap-6 project-card-style">
        {filteredProjects.map((project) => (
          <div onClick={() => setSelectedProject(project)} key={project.id}>
        <ProjectCard 
        // key={project.id}
        // className=""
        title={project.title}
        picture={andrea}
        tags={project.tags.join(', ')}
        description={project.description}/>
        </div>
        ))}
      
      </div>
      <div className="relative w-1/4">
  {selectedProject && (
    <>
   
      <ProjectOwner username={selectedProject.owner} />
      <div className="max-h-40 overflow-y-auto">
      <h3 className="ml-3">Collaborators</h3>
        {projectMembers
          .filter(member => selectedProject.members.includes(member.id))
          .map(filteredMember => (
            <ProjectMembers
              key={filteredMember.id}
              picture={andrea}
              name={filteredMember.username}
            />
          ))}
      </div>
    </>
  )}
</div>

      </div>


    </main>
  );
}
