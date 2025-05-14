import { ChevronDoubleRightIcon } from "@heroicons/react/24/outline";
import SectionHeading from "./atoms/SectionHeading";

export default function About() {
    return (
        <section className="min-h-screen py-10 mx-auto max-w-6xl">
            <SectionHeading text={'About'}/>
            <div className="grid grid-cols-2">

            <div>
            <p className="mb-4">
                I'm a developer, passionate about building engaging, interactive experiences for the web.
                I love crafting seamless user experiences that combine thoughtful design with strong performance. Creating fast, accessible and well designed applications is
                one of my favourite aspects of development. I have recently completed my training with <span className="font-bold">iO Academy</span> in their fullstack developer course, where I have 
                been involved in agile workflows, participated in sprint reviews to present team progress and have written unit tests ensuring robustness and reliability in our applications. 
            </p>
            <p className="mb-4">Here are some technologies I've worked with recently:</p>
            <ul>
                {
                    [
                        "Git, Github",
                        "HTML, CSS, Tailwind CSS",
                        "JavaScript (React)",
                        "PHP (Laravel)",
                        "MySQL",
                        "APIs (RESTful)"
                    ].map((tech, idx) => (
                        <li key={idx} className="flex items-center gap-1">
                        <ChevronDoubleRightIcon className="h-4 w-4 text-blue-600"/>
                        <span>{tech}</span>
                    </li>
                ))
            }
            </ul>
            </div>
            <div>
                <p>Animation</p>
            </div>
            </div>
        </section>
    )
}