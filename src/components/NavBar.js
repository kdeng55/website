export default function NavBar (){
    return <nav className="nav">
        <a href="/" className= "site-title">Site Name</a>
        <ul>
            <CustomLink href="/skills">Skills</CustomLink>
            <CustomLink href="/projects">Projects</CustomLink>
            <CustomLink href="/more">More</CustomLink>
        </ul>
    </nav>
}

function CustomLink ({href, children, ...props}) {
    const path = window.location.pathname
    return (
        <li className = {path === href ? "active" : ""}>
            <a href={href}>{children}</a>
        </li>
        /*This helps light up the current nav object that is clicked on */
    )

}