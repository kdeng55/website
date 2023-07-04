import sing from '../img/sing.jpeg';
import taiwan from '../img/taiwan.JPG'

export default function About () {
    return <div className="home-container">
    <div className="name">
        <p>About me</p>
    </div>
    <div className="about-container">
    <div className="about-me">
        <p>I'm a current student at Boston University 
            pursuing a BA in Computer Science along with 
            a minor in History! I'm interested in
            pursuing a future in UX Design and 
            Front End Development. </p>
    </div>
            <img src={sing} className="sing" alt="img1" />
        </div>
    <div className="background-container">
        <img src={taiwan} className="taiwan" alt="img2" />
        <div className="background">
        <p>I grew up in Newton, Massachusetts and graduated from 
            Newton South High in May of 2020. From there, I pursued an education 
            at Boston University. I chose to major in CS and history because 
            I'm especially interested in the interesection of 
            technology and human interaction!
        </p>
        </div>
    </div>
    </div>
}