import timeline from '../components/timeline.js'
import github from '../img/github-mark.png'
import linkedin from'../img/linkedin.png'
import footer from '../components/footer.js'
import mirofigma from '../img/mirofigma.png'
import illus from '../img/illus.jpeg'
import vscode from '../img/vscode.png'

export default function Skills () {
    return <div className="skill-container">
        <div className="skill-top">
        <h1>Skills</h1>
        <p>What Can I do?
        </p>
        </div>
        <heading className="skills-title">
            <h2>UX Design Toolkit</h2>
        </heading>
        <div className="skills-head">
            <div className="ideate">
                <h3>Ideate</h3>
                <div className="rec-1">
                <img src={mirofigma} className="mirofigma" alt="mfig" />
                <h4>Miro</h4>
                <p>Before I start designing, I like to take a second and brainstorm all the ideas I currently have. 
                From there, I put those notes into a platform like Miro Boards, or Figma, which allow for great visualization.</p>
                <div className="rec-2-ideate"><p>Miro</p></div>
                </div>
            </div>
            <div className="design">
            <h3>Design</h3>
                <div className="rec-1">
                <img src={illus} className="mirofigma" alt="illustrator" />
                <h4>Figma and Illustrator</h4>
                <p>With my design ideas in hand, I typically use Figma as a platform to test these ideas. 
                    When needed, I’ll use Illustrator to create some cool graphics to use in my Figma prototype.</p>
                    <div className="rec-2"> <p>Figma Prototype</p></div>
                </div>
            </div>
            <div className="code">
            <h3>Code</h3>
            <div className="rec-1">
            <img src={vscode} className="mirofigma" alt="vscode" />
            <h4>Visual Studio Code, React</h4>
            <p>Once I have my Figma prototype, I’m ready to get coding. In React, I use a combination of CSS, HTML, Javascript and various 
                libraries in order to get the design looking good. From my prototype, I turn all my ideas into code and onto a working webpage.</p>
                <div className="rec-2-code"><p>Github</p></div>
            </div>
        </div>
        </div>
        
        <div className="skill-middle-container">
        <h2>My Past Experience </h2>
        <body className="skills-body">
        <aside className="timeline">
            {timeline()}
        </aside>
        <aside className="find-me">
            <h3>Find me on the Internet</h3>
            <ul>
            <li>Email me!</li>
            <li>Linkedin</li>
            <li>Github</li>
            </ul>
        </aside>
        </body>
        </div>
        
        {footer()}
    </div>
}