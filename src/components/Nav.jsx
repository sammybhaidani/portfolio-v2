import NavItem from "./atoms/NavItem";

export default function Nav() {
    return (
        <nav>
            <ul>
                <li><NavItem text={'Home'} address={'/'}/></li>
                <li><NavItem text={'About'} address={'/portfolio#about'}/></li>
                <li><NavItem text={'Projects'} address={'/portfolio#projects'}/></li>
                <li><NavItem text={'Contact'} address={'/portfolio#contact'}/></li>
            </ul>
        </nav>
    )
}