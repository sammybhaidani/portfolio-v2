import NavItem from "./atoms/NavItem";

export default function Nav() {
    return (
        <nav>
            <ul className="flex gap-3">
                <li><NavItem text={'Home'} address={'/'}/></li>
                <li><NavItem text={'About'} address={'/portfolio#about'}/></li>
            </ul>
        </nav>
    )
}