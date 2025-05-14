import MainTitle from "../components/atoms/MainTitle";

export default function Hero() {
    return (
        <section className=" min-h-screen flex flex-col gap-3 items-center justify-center">
                <MainTitle text={'Sammy Bhaidani'}/>
                <p className="font-bold">Software Developer & UI/UX Design enthusiast</p>
                <p>I like to create engaging experiences on the web.</p>
        </section>
    )
}