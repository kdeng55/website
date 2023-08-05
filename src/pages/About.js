import sing from '../img/sing.jpeg';
import taiwan from '../img/taiwan.JPG';
import timeline from '../components/timeline.js';



export default function About () {
    return <div className="home-container">
    <section className="name">
        <p>About me</p>
    </section>
    <div className="about-container">
        <section className="background">
        <p>
            Although I’m a computer science student, 
            I’ve always been interested in human centered computing and Human-Computer Interaction. 
            I discovered my passion for UX Design while I was studying abroad my Junior Year in Singapore. 
            I was lucky enough to spend a semester at NUS, and be guided by wonderful teachers and TA’s 
            through an interaction design class. I found UX design particularly interesting because it explored 
            the intersection between technology and human behavior. Other than UX design, I am also interested 
            in the field of machine learning and natural language processing!
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
    </div>
    
}