import NavItem from "./atoms/NavItem";

export default function Nav() {
    return (
        <nav>
            <ul>
                <li><NavItem text={'Home'} address={'/'}/></li>
            </ul>
        </nav>
    )
}