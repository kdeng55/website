import {Link, useMatch, useResolvedPath} from "react-router-dom"
export default function NavBar (){
    return <nav className="nav">
        <Link to="/" className= "site-title">Site Name</Link>
        <ul>
            <CustomLink to="/skills">Skills</CustomLink>
            <CustomLink to="/projects">Projects</CustomLink>
            <CustomLink to="/more">More</CustomLink>
        </ul>
    </nav>
}

function CustomLink ({to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true})
    return (
        <li className = {isActive ? "active" : ""}>
            <Link to={to}>{children}</Link>
        </li>
        /*This helps light up the current nav object that is clicked on */
    )

}