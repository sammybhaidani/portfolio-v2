import About from "../components/About";
import MainTitle from "../components/atoms/MainTitle";
import Contact from "../components/Contact";
import Projects from "../components/Projects";

export default function HomePage() {
    return (
        <>
        <div className="flex flex-col gap-3">
        <MainTitle text={'Sammy Bhaidani'}/>
        <p className="font-bold">Software Engineer</p>
        <p>I like to create engaging experiences on the web.</p>
        </div>

        <About/>
        <Projects/>
        <Contact/>
        </>
    )
}