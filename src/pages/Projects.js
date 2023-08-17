import project1 from '../img/project1.svg'
import footer from '../components/footer.js'
import { Link } from 'react-router-dom';

export default function Projects () {
return <div className="projects">
    <h1 className="projects-h1">UX Projects</h1>
    <div className="project-ux-container">
        <div className="proj1-box">
        <section className="project-travel"> </section>
            <h4>Solo Travelling, Made Easier.</h4>
            <p>UX Design Project, 2023</p>
        </div>
        <div className="proj2-box">
        <section className="project-research">
        <Link to="/NusResearch" className="research-link">
        <img src={project1} className="proj1-projects" alt="proj1" />
        </Link>
        </section>
        <Link to="/NusResearch" className="research-link">
            <h4>Research, Improved. @NUS</h4>
            <p> UX Design Project, 2023</p>
        </Link>
        </div>
    </div>
    <h2 className="code-research">Code and Research</h2>
    <div className="other-projects">
        <div className="row-projects">
            <section className="box-project">
                <div className="rectangle-other"></div>
                <div className="rectangle-text">
                <h4>Are Large Multimodal Models Emotionally Aware?</h4>
                </div>
                <p>Machine Learning Publication, 2023</p>
                
            </section>
            <div className="box-project">
                <section className="rectangle-other">
                </section>
                <div className="rectangle-text">
                <h4>Various Coding Projects</h4>
                </div>
                <p>React, HTML, CSS, Python, Java, etc.</p>
                
            </div>
        </div>
    </div>
    {footer()}
</div>
}