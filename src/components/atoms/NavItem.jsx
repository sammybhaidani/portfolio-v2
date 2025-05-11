export default function NavItem({text, address}) {
    return (
        <a href={address}>
        {text}
        </a>
    )
}