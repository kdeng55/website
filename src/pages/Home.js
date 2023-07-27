import ytop from '../img/ytop.svg'
import greenblob from '../img/greenblob.svg'
import blueblob from '../img/blueblob.svg'
import redblob from '../img/redblob.svg'
import research from '../img/research.png'


export default function Home () {
return <div className="home">
    <div className="home-container">
        <p className="greeting">C'mon in,</p>
        <p className="greeting">I'm Katherine</p>
        <img src={ytop} className="ytop" alt="yblob" />
        <img src={greenblob} className="gblob" alt="gblob" />
        <body className="home-body">
        <p>Hey there, my name is Katherine. 
            I’m a current senior @ Boston University, 
            majoring in Computer Science and minoring in History. 
            Feel free to explore around my website. Check out some of my
            case studies below!</p>
        </body>
        <img src={redblob} className="rblob" alt="rblob" />
        </div>
        <img src={blueblob} className="bblob" alt="bblob" /> 
        <div className="row-container"> 
            <div className="row">
                <p>2023</p>
                <h1>Solo Travelling, Made Easier.</h1>
                <p className="description1">UX Research and Design</p>
            </div>
            <div class="container-rec">
                <h1>Research, Improved. @NUS</h1>
                <div class="rectangle"></div>
            </div>
        </div>
        <footer className="footer">
            <div className="email"> 
            <h1>kdeng@bu.edu</h1>
            </div>
            <div className="socials">
                <h1>Linkedin</h1>
            </div>
        </footer>
    </div>
}