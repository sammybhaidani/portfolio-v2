import NavItem from "./atoms/NavItem";

export default function Nav() {
    return (
        <nav>
            <ul>
                <li><NavItem text={'Home'} address={'/'}/></li>
                <li><a href="/portfolio#about">About</a></li>
                <li><a href="/portfolio#projects">Projects</a></li>
                <li><a href="/portfolio#contact">Contact</a></li>
            </ul>
        </nav>
    )
}