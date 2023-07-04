import timeline from '../components/timeline.js'

export default function Skills () {
    return <div className="skill-container">
        <div className="skill-top">
        <h1>Skills</h1>
        <p>Past experience, qualifications, github
            and portfolio
        </p>
        </div>
        <div className="skill-middle-container">
        <h1>Past Experience </h1>
        {timeline()}
        </div>
    </div>
}