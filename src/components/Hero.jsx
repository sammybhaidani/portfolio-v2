import MainTitle from "../components/atoms/MainTitle";
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";

export default function Hero() {
    useGSAP(() => {
        gsap.fromTo('.hero-text h1, p',
            {
                y: 50,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                stagger: 0.2,
                duration: 1,
                ease: 'power2.inOut'
            },
        )
    })
    return (
        <section id="hero" className="hero-text min-h-screen flex flex-col gap-3 items-center justify-center">
                <MainTitle text={'Sammy Bhaidani'}/>
                <p className="font-bold">Software Developer & UI/UX Design enthusiast</p>
                <p>I like to create engaging experiences on the web.</p>
        </section>
    )
}