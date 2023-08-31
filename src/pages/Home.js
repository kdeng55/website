import ytop from '../img/ytop.svg'
import greenblob from '../img/greenblob.svg'
import blueblob from '../img/blueblob.svg'
import redblob from '../img/redblob.svg'
import research from '../img/research.png'
import project1 from '../img/project1.svg'
import orange from '../img/orange.svg'
import footer from '../components/footer.js'
import { Link } from 'react-router-dom';
import covernus from '../img/cover-nus1.svg'
import '../components/BouncingArrow.css'
import NusResearch from './Nusresearch.js'
import cover from '../img/covertravel.png'
import './Home.css'
import code from '../img/macbook-code.png'

export default function Home () {
return <div className="home">
    <div className="home-container">
        <p className="greeting">C'mon in,</p>
        <p className="greeting">I'm Katherine</p>
        <img src={ytop} className="ytop" alt="yblob" />
        <img src={greenblob} className="gblob" alt="gblob" />
        <body className="home-body">
        <p className="font-Inter">Hi!
            I’m a current senior @ Boston University, 
            majoring in Computer Science and minoring in History. 
            Feel free to explore around my website. Check out some of
            my projects below</p>
        </body>
        <img src={redblob} className="rblob" alt="rblob" />
        <img src={orange} className="oblob" alt="oblob"/>
        </div>
        <img src={blueblob} className="bblob" alt="bblob" /> 
        <div className="down-arrow"></div>
        <div className="row-container"> 
        <div className="travel-container">
            <div className="pic-container">
            <Link to="/SoloTravel" className="link-solo">
            <img src={cover} className="proj-travel" alt="proj-travel" />
            </Link>
            </div>
            <div className="travel-text-container-home">
            <Link to="/SoloTravel" className="link-solo">
                <p>2023</p>
                <h1>Carousel: Improving Solo Travel</h1>
                <p class="description1">UX Research and Design</p>
                </Link>
            </div>
        </div>
            <div class="container-rec">
                <p>2023</p>
                <Link to="/NusResearch" className="link-to-proj">
                <h1>Researched and Found @NUS</h1> 
                </Link>
                <p class="description2">UX Research and Design</p>
                <Link to="/NusResearch" className="link-to-proj">
                <div class="rectangle">
                <img src={covernus} className="proj1" alt="proj1" />
                </div>
                </Link>
            </div>
        </div>
        <section className="other-projects-code">
            <div className="coding-rectangle">
            <Link to="/CodingProjects" className="link-to-code">
            <img src={code} className="code-picture" alt="slice" />
            </Link>
            </div>
            <Link to="/CodingProjects" className="link-to-code">
            <div className="coding-text">
                <h1>Coding Projects and Publications</h1>
                <p>Python, Java, HTML, CSS and React</p>
            </div>
            </Link>
            
        </section>
        {footer()}
    </div>
}