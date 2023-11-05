import sing from '../img/sing.jpeg';
import taiwan from '../img/taiwan.JPG';
import timeline from '../components/timeline.js';
import footer from '../components/footer.js'

export default function About () {
    return <div className="ab-container">
    <section className="name">
        <p>About me</p>
    </section>
    <div className="about-container">
        <section className="background">
        <p>
            Hi! My name is Kat and I'm a computer science major with a history
            minor at Boston University. Throughout my journey in school, I've found
            that I'm interested in human centered computing
            as well as human computer interaction. I love exploring the intersection
            between technology and human behavior! 
        </p>
        </section>
        <div className="tai-container">
        <img src={taiwan} className="taiwan" alt="img2" />
        <p className="caption-taiwan">me, circa 2023, taiwan</p>
        </div>
    </div>
    <div className="hobbies">
            <section className="things-i-enjoy">
            <h1>Things I enjoy</h1>
            <p>I like machine learning, travelling and trying out new foods from around the world</p>
            </section>
            <section className="my-current-obsession">
            <h1>My current Obsession</h1>
            <p>Watching Disney movies. I love the nostalgia of watching early 2000's animated movies.</p>
            </section>
        </div>
        {footer()}
    </div>
    
}