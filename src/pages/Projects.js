import footer from '../components/footer.js'
import { Link } from 'react-router-dom';
import React from 'react';
import publicationimg from '../img/pub-img.svg'
import './Projects.css';
import code from '../img/code.svg'
import cover from '../img/covertravel.png'
import covernus from '../img/cover-nus1.svg'


export default function Projects () {
    const openPDF = () => {
        const pdfURL = 'https://arxiv.org/abs/2308.16741';
        window.open(pdfURL, '_blank');
      };

return <div className="projects">
    <h1 className="projects-h1">UX Projects</h1>
    <div className="project-ux-container">
        <div className="proj1-box">
        <Link to="/SoloTravel" className="code-link">
        <section className="project-travel"> 
        <img src={cover} className="cover-travelpic" alt="travel-img"/>
        </section>
            <h4>Carousel.</h4>
            <p>UX Design Project, 2023</p>
            </Link>
        </div>
        <div className="proj2-box">
        <section className="project-research">
        <Link to="/NusResearch" className="research-link">
        <img src={covernus} className="proj1-projects" alt="proj1" />
        </Link>
        </section>
        <Link to="/NusResearch" className="research-link">
            <h4>Researched and Found @ NUS</h4>
            <p> UX Design Project, 2023</p>
        </Link>
        </div>
    </div>
    <h2 className="code-research">Code and Research</h2>
    <div className="other-projects">
        <div className="row-projects">
            <section className="box-project"  >
                <div className="rectangle-other" onClick={openPDF}>
                    <img src={publicationimg} className="publication-img" alt="pub-img"/>
                </div>
                <div className="rectangle-text" >
                <h4 onClick={openPDF}>Are Large Multimodal Models Emotionally Aware?</h4>
                </div>
                <p>Machine Learning Publication, 2023</p>
                <p>Accepted at ICCV 2023:</p>
                <p> WECIA Workshop on Emotionally Intelligient AI</p>
                
            </section>
            <div className="box-project">
            <Link to="/CodingProjects" className="code-link">
                <section className="rectangle-other">
                <img src={code} className="code-pic" alt="codepicture"/>
                </section>
                </Link>
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