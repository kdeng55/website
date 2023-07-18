import timeline from '../components/timeline.js'
import github from '../img/github-mark.png'
import linkedin from'../img/linkedin.png'

export default function Skills () {
    return <div className="skill-container">
        <div className="skill-top">
        <h1>Skills</h1>
        <p>Past experience, qualifications, github
            and portfolio
        </p>
        </div>
        <heading className="canDo">
            <h2>So ... What can I do?</h2>
        </heading>
        <div className="skills-head">
            <h3>Ideate</h3>
            <h3>Design</h3>
            <h3>Code</h3>
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
    </div>
}