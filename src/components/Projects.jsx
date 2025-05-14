import { useEffect, useState } from "react";
import SectionHeading from "./atoms/SectionHeading";
import ProjectCard from "./ProjectCard";

export default function Projects() {

    const [projects, setProjects] = useState([]);

     function getData() {
        fetch('/projects.json')
        .then(response => response.json())
        .then((data => {
            setProjects(data.projects);
            console.log(data.projects);
        }))
    }

    useEffect(getData, []);

    return (
        <section className="min-h-screen py-10 mx-auto max-w-6xl">
        <SectionHeading text={'Projects'}/>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {projects.map(function (project) {
            return (
                <ProjectCard 
                key = {project.id}
                title = {project.title}
                description = {project.description}
                image = {project.image} 
                alt={project.alt}
                link = {project.link}
                demo = {project.demo}
                technologies = {project.technologies}/>
            )
        })}
        </div>
        </section>
    )
}