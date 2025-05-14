export default function ProjectCard({title, description, image, alt, link, demo, technologies}) {
    return (
        <div className="border p-3 rounded flex flex-col gap-3 justify-between">
            <h3 className="font-bold text-xl">{title}</h3>
            <img src={image} alt={alt} />
            <div className="flex gap-3">
                <a href={link} className="bg-amber-400 rounded p-1">Code</a>
                {demo && <a href={demo} className="bg-gray-800 text-gray-100 rounded p-1">Demo</a>}
            </div>
            <p>{description}</p>
            <ul className="flex gap-3">
                {technologies.map((tech, idx) => (
                    <li key={idx} className="border rounded-xl p-1 text-sm">
                        {tech}
                    </li>
                ))}
            </ul>
        </div>
    )
}