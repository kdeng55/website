import {Link, useMatch, useResolvedPath} from "react-router-dom";
import egg from '../img/egg.svg';

export default function NavBar (){
    return <nav className="nav">
        <Link to="/" className= "site-title">Katherine
        <img src={egg} className="egg" alt="egg" />
        </Link>
        <ul className="nav-font">
            <Link to="/about">About</Link>
          {/*   <CustomLink to="/skills">Skills</CustomLink> */}
            <Link to="/projects">Projects</Link>
          {/*  <CustomLink to="/more">More</CustomLink>*/}
        </ul>
    </nav>
}

