import React, { useContext, useEffect } from "react";
import gsap from 'gsap';

import ProjectCard from "./projectcomponents/ProjectCard";

import { ProjectContext } from "../contexts/ProjectsContexts";
import andrea from "../public/images/andrea.jpg"
import pythonPic from "../public/images/python-darkbg.png"
import devPic from "../public/images/headshot.jpg"
import DevCard from './projectcomponents/DevCard';

const unAuthHomePage = (props) => {
  const { projects, devs } = useContext(ProjectContext);

  const midPoint = Math.ceil(projects.length / 2);
  const firstHalfProjects = projects.slice(0, midPoint);
  const secondHalfProjects = projects.slice(midPoint)



  return (
    <div className="bg-gray-100">
      <section className="relative isolate h-screen  bg-cover">
        <div className="relative h-full flex flex-col tracking-wider bg-cover bg-center bg-fixed md:flex-row">

          <div className="relative z-10 p-4 flex flex-1 w-full items-center justify-center bg-gunmetal ">
            <p className="absolute  top-10 left-10  md:top-10  text-white">For Developers,</p>
            <h1 className="absolute   uppercase text-white text-3xl md:text-4xl lg:text-5xl ">
              Reimagining
            </h1>
          </div>

          <div className="relative p-4 flex flex-1 items-center justify-center  bg-pumpkin">
          <h1 className="absolute  uppercase z-10 text-3xl md:text-4xl lg:text-5xl text-black">
              Collaborations
            </h1>
            <p className="absolute flex flex-end bottom-10 right-10 text-black md-bottom">
                By Developers.
            </p>
          </div>

        </div>
      </section>

    <div className="content-section overflow-hidden flex">
    <div className="w-full flex flex-1 min-w-full gap-36 px-8 py-20">
        <section className="hidden section-easy-nav md:p-8 xl:block sticky top-0 self-start items-start ">
            Active
        </section>

        <div className="relative content-area w-full max-w-screen ">
        <section className="relative min-h-40  md:p-8">
        <div className="flex flex-col ">
        <div className="">
          <h3 className="mb-3 font-bold text-xl md:text-3xl">Trending Projects</h3>
        </div>
        <div className=" flex overflow-x-auto gap-4 cursor-pointer">
          <p className="text-center whitespace-nowrap mb-2  before:content-['#'] before:mr-1 before:font-bold before:text-xs border p-2 rounded-lg">
            React
          </p>
          <p className="text-center whitespace-nowrap mb-2  before:content-['#'] before:mr-1 before:font-bold before:text-xs border p-2 rounded-lg">
            Next.js
          </p>
          <p className="text-center whitespace-nowrap mb-2  before:content-['#'] before:mr-1 before:font-bold before:text-xs border p-2 rounded-lg">
            Express
          </p>
          <p className="text-center whitespace-nowrap mb-2  before:content-['#'] before:mr-1 before:font-bold before:text-xs border p-2 rounded-lg">
            Express
          </p>
          <p className="text-center whitespace-nowrap mb-2  before:content-['#'] before:mr-1 before:font-bold before:text-xs border p-2 rounded-lg">
            Express
          </p>          <p className="text-center whitespace-nowrap mb-2  before:content-['#'] before:mr-1 before:font-bold before:text-xs border p-2 rounded-lg">
            Express
          </p>
          <p className="text-center whitespace-nowrap mb-2  before:content-['#'] before:mr-1 before:font-bold before:text-xs border p-2 rounded-lg">
            Express
          </p>
          <p className="text-center whitespace-nowrap mb-2  before:content-['#'] before:mr-1 before:font-bold before:text-xs border p-2 rounded-lg">
            Express
          </p>
          <p className="text-center whitespace-nowrap mb-2  before:content-['#'] before:mr-1 before:font-bold before:text-xs border p-2 rounded-lg">
            Express
          </p>
          <p className="text-center whitespace-nowrap mb-2  before:content-['#'] before:mr-1 before:font-bold before:text-xs border p-2 rounded-lg">
            Express
          </p>          <p className="text-center whitespace-nowrap mb-2  before:content-['#'] before:mr-1 before:font-bold before:text-xs border p-2 rounded-lg">
            Express
          </p>
        </div>
        </div>

      </section>

      <section className="relative  md:p-8">

        
      <h3 className="mb-3  font-normal text-xl md:text-3xl">Active Projects</h3>
      
        <div className="mx-auto scrollbar">
        <div className="gap-4 flex flex-row  overflow-x-auto">
            {projects.map((project) => (
              <div key={project._id} className="project-card  shrink-0 min-w-[150px] md:min-w-[200px] lg:min-w-[250px] xl:min-w-[300px] max-w-xs">
                <ProjectCard
                title={project.title}
                projPicture={pythonPic}
                devPicture={devPic}
                tags={project.tags.join(", ")}
                description={project.description}
              />
              </div>

            ))}
          </div>

        </div>


      



      </section>

      <section>
        <div>
          {devs.map((dev) => (
            <div key={dev._id}>
            <DevCard
            username={dev.username}
            picture={dev.img}/>
            </div>
          ))}
        </div>
      </section>
        </div>

      </div>


    </div>
    


    </div>
  );
};

export default unAuthHomePage;
