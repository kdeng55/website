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
            minor. Throughout my journey in school, I've found
            that I'm interested in human centered computing
            as well as human computer interaction or UX Design. I discovered
            my UX passion whilst taking an interaction design class abroad
            in Singapore, and had the help of wonderful teachers and TA's guiding
            me along. I hope to pursue a future in the intersection of computer science
            and human behavior.  
            On top of those, I also am interested in the area of machine learning!
        </p>
        </section>
        <div className="tai-container">
        <img src={taiwan} className="taiwan" alt="img2" />
        <p className="caption-taiwan">me, circa taiwan, 2023</p>
        </div>
    </div>
    <div className="hobbies">
            <section className="things-i-enjoy">
            <h1>Things I enjoy</h1>
            <p>While I’m not designing or coding, I love to try new food, play video games, and most of all, travel!</p>
            </section>
            <section className="my-current-obsession">
            <h1>My current Obsession</h1>
            <p>Watching Disney movies. I love the nostalgia of watching early 2000 Pixar movies.</p>
            </section>
        </div>
        {footer()}
    </div>
    
}