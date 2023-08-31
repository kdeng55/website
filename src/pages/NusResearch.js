import React from "react";
import './NusResearch.css'
import graphite from '../img/large1.svg'
import underline from '../img/underline.svg'
import line from '../img/line.svg'
import understandnus from '../img/understand-nus.svg'
import define from '../img/define-nus.svg'
import ideate from '../img/ideate-nus.png'
import design from '../img/design-nus.svg'
import test from '../img/test-nus.svg'
import target from '../img/target-audience.svg'
import persona from '../img/fassler.png'
import storyboard from '../img/Storyboard 1.svg'
import storyboard2 from '../img/Storyboard 2.svg'
import connection from '../img/connection-pic.svg'
import schedule from '../img/schedule.svg'
import star from '../img/star.svg'
import wireframe1 from '../img/wireframe1.svg'
import wireframe2 from '../img/wireframe2.svg'
import Lowfidelity from '../img/low-fidelity-9.svg'
import effective from '../img/effectiveness.png'
import satisifaction from '../img/satisfaction.png'
import efficiency from '../img/efficiency.png'
import hifi1 from '../img/hi-fi.svg'
import hifi2 from '../img/hi-fi-2.svg'
import hifi3 from '../img/hi-fi-3.svg'
import hifiall from '../img/hi-fi-all.svg'
import nustitlepic from '../img/nus-title-picture.svg'
import ImageFade from '../components/ImageFade.js'
import useScrollFadeIn from "../components/ScrollEffect.js"; 
import '../components/ImageFade.css'
import ProgressBar from "../components/ProgressBar.js";
import "../components/ProgressBar.css"; // Import the CSS file
import text from '../img/text.svg';
import arrow from '../img/Arrow.svg';
import benjamin from '../img/benjamin.png'
import footer from '../components/footer.js'


function scrollToSection(event, sectionId) {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }

export default function Nusresearch () {
    const imageRefStar = useScrollFadeIn()
    const imageRefSchedule=useScrollFadeIn()
    const imageRefConnection=useScrollFadeIn()
    const imageRef = useScrollFadeIn()
    const imageRef2 = useScrollFadeIn()
    const imageRef3 = useScrollFadeIn()
    const blueColor = "var(--blue-blue-600, #3676E0)";
return  (
    <div>
        <ProgressBar />
    <div className="title-container-nus">
        <div className="title-text-nus">
        <h1>Researched and Found</h1>
        <p>Improving Undegraduate Research at the National University of Singapore </p>
        <h2>UX Case Study</h2>
        <img src={underline} className="underline-nus" alt="underline"/>
        <h3>Duration:</h3>
        <h4>February 2023-April 2023</h4>
        <h4>(10 Weeks)</h4>
        </div>
        <img src={nustitlepic} className="nus-pic-title" alt="proj1" />
     </div>
     <section className="second-pic-nus">
        <div className="second-pic-nus-text"> 
        <h1>Product Overview</h1>
        <img src={line} className="line" alt="line" />
        <p>
        During my semester abroad in Singapore, I had the opportunity to collaborate with a 
        group of three other UX Designers. Together, we aimed to create a mobile application aimed at 
        streamlining the research endeavors of our academic institution. Given the research-intensive nature of NUS, there was a 
        clear need for an improved platform to facilitate the recruitment of students for these initiatives.
        </p>
            <div className="second-pic-nus-text-bottom-container">
            <section className="line-2">
            <h1>Responsibility</h1>
            <img src={line} className="line" alt="line" />
            <p>UX Designer</p>
            </section>
            
            <h2>Tools</h2>
            <section className="line-3">
            <img src={line} className="line" alt="line" />
            <p>Figma</p>
            <p>Miro</p>
            </section>
            </div>
        </div>
        <img src={graphite} className="cover-nus-pic" alt="pic-1" />
     </section>
     <section className="problem-statement-nus">
        <h1>Problem Statement</h1>
        <p>Students from the National University of Singapore (NUS) may find it difficult to get 
            research-related help for their coursework. Many student researchers need participants
            to recruit for their studies, and often have trouble getting their quota amount, or meeting 
            an adequate sample size of individuals.</p>
        <p>The lack of adequate amounts of the right connections or knowledge of certain avenues and 
            communities hinder these students from effectively reaching those they hope to contact.</p>
        <h1>Our Goal</h1>
        <p>Our goal is to design an efficient and practical solution to this widespread issue at NUS. 
            We aim to provide a centralized platform for users to be able to use. 
        </p>
     </section>
     <section className="design-overview-nus">
     <h1>My Design Process</h1>
     <img src={line} className="line" alt="line" />
     <div className="design-container-nus">
        <section className="understand-nus">
        <a href="#section1" onClick={(e) => scrollToSection(e, "section1result")}>
        <img src={understandnus} className="understand-nus-pic" alt="pic-2" />
        </a>
        <p>User Research</p>
        <p>User Interviews</p>
        <div className="textnarrow">
     <img src={arrow} className="arrownus" alt="arrow"/>
     <img src={text} className="text-with-arrow" alt="text"/>
     </div>
        </section>
        <section className="define-nus">
        <a href="#section2" onClick={(e) => scrollToSection(e, "section2result")}>
        <img src={define} className="define-nus-pic" alt="pic-2" />
        </a>
        <p>User Personas</p>
        <p>Scenarios and Storyboards</p>
        </section>
        <section className="ideate-nus">
        <a href="#section3" onClick={(e) => scrollToSection(e, "section3result")}>
        <img src={ideate} className="ideate-nus-pic" alt="pic-2" />
        </a>
        <p>Identify Key User Tasks</p>
        </section>
     </div>
     <div className="design-container-nus-row2">
        <section className="design-nus">
        <a href="#section4" onClick={(e) => scrollToSection(e, "section4result")}>
        <img src={design} className="design-nus-pic" alt="pic-2" />
        </a>
        <p>Wireframes</p>
        <p>Lo-Fi & Hi-Fi Designs</p>
        <p>Prototype</p>
        </section>
        <section className="test-nus">
            <a href="#section5" onClick={(e) => scrollToSection(e, "section5result")}>
            <img src={test} className="test-nus-pic" alt="pic-2"/>
            </a>
            <p>Feedback</p>
            <p>Conclusions</p>
            <p>Future Concept</p>
        </section>
    </div>
     </section>

    <section className="research-nus-container" id="section1result">
        <h1>Target Audience</h1>
       
        <img src={line} className="line" alt="line" />
        <section className="research-nus-target-p">
        <p>In order to obtain a deeper understanding of 
            our users' goals, needs, experiences and behavior, we 
            found that our target audience were mainly student and
            faculty at NUS, which can be then divided into four categories:
        </p>
        <p>Researchers from FASS (Faculty of Arts and Sciences)</p>
        <p>Researchers from SOC (School of Computing)</p>
        <p>Exchange Student Researcher</p>
        <p>Research Participant</p>
        <p>We determined this target audience based on the biggest populations
            of students and faculty who may need access to research resources
        </p>
        </section>
        <img src={target} className="target-audience-pic" alt="line" />
    </section>
    <section className="qualitative-research-nus">
        <h1>User Research</h1>
        <img src={line} className="line" alt="line" />
        <p>In order to get the most accurate representation and results of the general population, we decided to use two different methods of research:
            The first method is interviews/contextual inquiries. We chose to use this method because we wanted an in-depth understanding of how the different 
            personas from our target audiences interacted with research studies and each other. By asking our interviewees to demonstrate certain steps of the 
            process and asking follow-up questions, we were able to understand our interviewees’ thought processes and priorities.
            Our second method was using surveys, which were used to understand the perception of the issue and the experiences of our audiences.
            </p>
        <h2>Process:</h2>
            <p>- We conducted contextual inquiries with a research participant, a researcher from the Faculty of Arts & Social Sciences (FASS), and a researcher from the School of Computing (SOC)</p>
            <p>- We could not find an exchange student who was doing research in time for a contextual inquiry</p>
            <p>- Two versions of the survey were created with different questions to target researchers and research participants. </p>
            <p>- Convenience sampling was used and resulted in a total of 24 and 22 responses for our researcher and research participant survey respectively. </p>
            <p>- For our surveys disseminated, we got around 50 respondents.</p>
            <div className="observation-nus">
            <h2>Observations</h2>
            <p>After collecting all of our results, we compiled them into a Miro file 
                in order to brainstorm and come up with ideas. The following are our 
                results and conclusions from our collected data.
            </p>
            <div className="observation-nus-container-1">
                <section className="trust-nus">
                <h2>Trustworthiness</h2>
                <li>
                The relationship between researcher and respondents (or lack thereof) factors in participants' decision to participate.
                </li>
                <li>
                A researcher's credibility can be established via communication channels and reputation.
                </li>
                </section>
                <section className="commun-nus">
                    <h2>Communication</h2>
                    <li>
                    Information like duration of study, compensation, and data usage must be communicated clearly.
                    </li>
                    <li>
                    There is difficulty with scheduling interviews, in terms of finding a time/place and the various platforms involved.
                    </li>
                </section>
            </div>
            <div className="observation-nus-container-2">
                <section className="adv-nus">
            <h2>Advertisement</h2>
                <li>
                When posting studies, researchers considered various platforms' popularity and ease of use.
                </li>
                <li>
                Participants were more attracted to studies that directly impacted themselves.
                </li>
                </section>
                <section className="ineff-nus">
            <h2>Inefficiencies</h2>
            <li>
            Researchers felt a lack of access to their target group, especially for niche target groups.
            </li>
            <li>
            Both researchers and participants experience a lack of centralized source for research opportunities.
            </li>
            <li>
            Most researchers had no choice but to rely on convenience sampling.
            </li>
                </section>
            </div>
            </div>
    </section>
    <div id="section2result">
        <div className="persona-text-nus">
        <h1>User Personas</h1>
        <img src={line} className="line" alt="line" />
        <p>In our user personas, we created two specific ones. One to 
            represent the Researcher, and one to represent the Participant so
            we are able to look at both sides of using the application. 
        </p>
        <p>
        Fassler is a NUS researcher who is frustrated with her lack of participants for her research lab
        and wants an easier and more centralized way to source participants. She's currently bouncing between a 
        couple apps and sometimes have difficulty contacting her participants. 
        </p>
        <p>Ben represents a research participant who does studies a few times a semester. He usually
            hears of research opportunities through various messaging apps and word of mouth. He's looking for
            an easier and more trustworthy way to contact and message the researchers.
        </p>
        </div>
        <div className="persona-container">
   <img src={persona} className="fassler-persona-nus" alt="persona-pic"/>
    <img src={benjamin} className="ben-persona-nus" alt="persona-pic"/>
    </div> 
    </div>
    <div className="storyboard-nus-heading" >
    <h1>Storyboards</h1>
    <img src={line} className="line" alt="line" />
    <p>After creating the user personas, we did some brainstorming in order 
        to visualize each user's journey throughout the application. In turn with 
        the personas, we created two storyboards--one for a researcher and one for 
        a participant in order to document the user process.
    </p>
    <p>The researcher's initial flow was pretty simple: Submit a research posting through 
        the app's custom form with all the necessary information such as title, description, pay and
        target audience. Once submitting, the researcher would reach a confirmation screen verifying their
        posting.
    </p>
    <p>The participant's flow was also initially simple: Find a research posting by searching 
        and filtering the postings until they find a post that is relevant or interesting to them. After,
        they click on the post in order to participate.
    </p>
    </div>
    <div className="storyboard-nus">
        <img src={storyboard} className="storyboard-nus-pic" alt="storyboard"></img>
        <img src={storyboard2} className="storyboard-nus-pic2" alt="storyboard"></img>
    </div>
    <div className="key-user-tasks-nus">
        <h1 id="section3result">Key User Tasks</h1>
        <img src={line} className="line" alt="line" />
        <p>Following reviewing our user research, personas and storyboards, we wanted 
            to narrow down on specific tasks to focus on. The process of defining these tasks
            were through reviewing our survey and interview responses and find the most 
            prevalent struggles and aspirations of our target user group. Many desired a centralized
            platform for all research communication, as well as a safe and trustworthy way to participate
            in research studies with trustworthy researchers. Thus, we were able to identify the following 3 key user tasks for this project that we wanted to focus on
            defining and implementing into our application.</p>
        <section className="container-key-user-tasks">
            <div className="container-connection">
                    <div className="fade-in-container" ref={imageRefConnection}>
                    <div className="connection-pic-nus">
                    <ImageFade
                    imageSrc={connection}
                    width="100%"
                    height= "100%"
                    style={{borderRadius: "1rem"}}
                    />
                    </div>
                    </div>
            <section className="connection-text-nus">
                <h1>Connection</h1>
                <p>Users are able to post a research study by completing a streamlined, standardized form with all the information potential respondents would like to see.</p>
            </section>
            </div>
            <section className="scheduling-text-nus">
                <div className="schedule-text">
                <h1>Scheduling</h1>
                <p>Researchers can find a time to schedule an interview by viewing the participant's availability and messaging them, all in the same application.</p>
                </div>
                <div className="fade-in-container" ref={imageRefSchedule}>
                    <div className="schedule-pic">
                    <ImageFade
                    imageSrc={schedule}
                    width="100%"
                    height= "100%"
                    />
                    </div>
                    </div>
            </section>
            <section className="feedback-container-nus">
            <div className="fade-in-container" ref={imageRefStar}>
                    <div className="feedback-pic-nus">
                    <ImageFade
                    imageSrc={star}
                    width="100%"
                    height= "100%"
                    />
                    </div>
                    </div>
                <div className="feedback-text-nus">
                    <h1>Feedback</h1>
                    <p>After the research is conducted, the researcher can leave feedback on the participant and vice versa. The ratings will be published on the users' profile pages.</p>
                </div>
            </section>
        </section>
    </div>
    <section className="low-fi-nus">
        <h1 id="section4result">Low Fidelity Wireframes</h1> 
        <img src={line} className="line" alt="line" />
        <section className="wireframe-pic">
        <img src={wireframe1} className="wireframe-pic-1" alt="wf-1"/>
        <img src={wireframe2} className="wireframe-pic-2" alt="wf-2"/>
        </section>
    </section>
    <section className="hi-fi-first">
        <h1>High Fidelity Prototypes - Variant One</h1>
        <img src={line} className="line" alt="line" />
        <p>After our low fidelity wireframes, we decided to assemble a rough, first draft of a high fidelity prototype 
            based on our wireframes. Bringing it from wireframe to prototype, we chose to incorporate the NUS
            colors, orange and blue, as the main colors for our application. Designing the 
            "post research" page was the most difficult; it was hard to determine how much 
            information to add to the page without overcrowding it for the user. 
        </p>
        <p>For the navbar, we decided to include four elements: research opportunities, chats, action to post,
            notifications and the user's profile. We theorized that these would be the
            most important elements for a user while using the application.
        </p>
        <p>In addition, we decided to add a feature to the research postings page: a meter to 
            measure if the user fits the target audience based on the criteria the researcher set, and the
            user's tags and information. Given the meter, it would allow users to 
            easily identify which studies fit their profile easily without checking each individual study.
        </p>
        <img src={Lowfidelity} className="low-fi-nus-pt1" alt="lowfi"/>
    </section>
    <div className="user-testing">
        <h1 id="section5result">User Testing</h1>
        <img src={line} className="line" alt="line" />
        <h2>After the completion of our hi-fidelity prototype, we decided to 
            conduct a round of user testing in order to evaluate our product on 
            our target demographic.
        </h2>

        <div className="container-effective-text">
            <div>
        <h3>We measured our user testing with a baseline 
            number of criteria for each user task:</h3>
            <p> 1) Posting Research </p>
            <p> 2) Scheduling a Meeting</p>
            <p> 3) Leave Rating for Participant </p>
            <p> 4) Leave Rating for Researcher</p>
            </div>
            <img src={effective} className="effective-pic" alt="pic-effect"/>
            
        </div>
        <div className="satisfaction-container">
            <div className="satisfaction-container-text">
            <h1>Evaluation</h1>
            <p>We decided to use two baselines in order to measure 
                the users experience and success with our app: Satisfaction and Effictiveness/Efficiency. We conducted our user studies in the fashion of contextual inquiries and surveys in order to gain
                a perspective of the user's flow and thoughts while navigating through the application.</p>
            <p>We chose contextual inquiries because we wanted an in-depth understanding of how the different personas from our target audiences interacted with research studies and each other.
                During the contextual inquiries, we asked the participants to engage in the think aloud method so we could 
                understand their thoughts and questions while completing the task. Each user was asked to
                complete all four tasks.</p>
            <p>After each task, we asked the participants to fill out a post-task questionaire, in addition to 
                a post-completion survey. We disseminated these surveys in hopes of seeing any pain points or misconceptions
                in any one of the tasks, and get an overall review of our current prototype's usability.
            </p>
            <section className="satis-container">
            <div className="satis-text-container">
            <h2>Satisfaction</h2>
            <p>This questionnaire was presented to all users after testing along with the statements and ratings.
            Within this questionnaire, 3 was indicated as a neutral answer, while scores of 1 and 5 represented strong disagreement and strong agreement respectively.
            From this evaluation, users found the application to be clean and intuitive, however 
            expressed that the application wasn't particularly attractive or consistent.</p>
            </div>
            <img src={satisifaction} className="satisimg" alt="satisfaction-img"/>
            </section>
            <div className="effic-container">
                <section className="effec-img-container">
                <img src={efficiency} className="effic-img" alt="efficiency"/>
                <p className="completion-p">Post-task completion timings and success indicators </p>
                </section>
                <div className="effic-img-text">
                <h2>Effectiveness and Efficiency</h2>
                <p>However, through our user study, we found that our efficiency and effectiveness was lacking.
                    Many of the participants were not able to complete some tasks within one and a half 
                    time benchmark set by the team. This indicates that there is some room for improvement 
                    for all tasks in terms of optimization. This was especially so for the final task, as users failed
                     to apply for the study before chatting with the researcher in question.</p>
                    </div>  
                </div>
            </div>
        </div>
        <div className="user-testing-conclusion">
            <p>Given these suggestions and comments, we embarked on revising our prototype to 
                accomodate these shortcomings. In our final prototype we took these criticisms to 
                mind and went forth and altering our product to be more intuitive, friendly 
                and aesthetic.
            </p>
        </div>
    </div>
    <section className="high-fidelity-nus">
        <div className="hi-fi-screen-text">
        <h1>High Fidelity Screens</h1>
        <img src={line} className="line" alt="line" />
        </div>
        <div className="fade-in-container" ref={imageRef}>
            <div className="hi-fi-pic1">
        <ImageFade
          imageSrc={hifi1}
          width="100%"
          height= "100%"
        />
        </div>
        </div>

        <div className="fade-in-container" ref={imageRef2}>
            <div className="hi-fi-pic1">
        <ImageFade
          imageSrc={hifi2}
          width="100%"
          height= "100%"
        />
        </div>
        </div>

        <div className="fade-in-container" ref={imageRef3}>
            <div className="hi-fi-pic1">
        <ImageFade
          imageSrc={hifi3}
          width="100%"
          height= "100%"
        />
        </div>
        </div>
        <div className="hi-fi-all-container">
        <div>
        <h1>Other Screens</h1>
        <img src={line} className="line" alt="line" />
        </div>
        <img src={hifiall} className="hi-fi-pic-all" alt="hifipic1"/>
        </div>
        
    </section>
    <section className="nus-conclusion-container">
        <div className="conclusion-heading">
        <h1>Key Takeaways</h1>
        <img src={line} className="line" alt="line" />
        </div>
        <div className="key-takeaways-text">
            <p>The opportunity to work on this project with three other wonderful
            UX designers was incredible and was a great first experience for me to 
            enter the world of UI/UX. Guided by an amazing mentor, we were able to 
            explore so many new concepts through brainstorming, researching, prototyping and testing.</p>

            <p>While our current prototype is close from being perfect, the process of 
                improvement and iteration was a grueling but rewarding journey. Time constraints
                were a big factor, as we had deliverable deadlines, but through constant communication
                and hard work, we were able to deliver the best product we could have. One of the hardest
                parts was balancing the UI with the UX factor which is something that I am still
                working to improve on. While usability is important, the interface design is also crucial a crucial
                factor to keep balanced.
            </p>
            <p>If given more time to continue working on this project, the next step would be running 
                more iterations of user studies and modifying, making sure the flow is easy and intuitive 
                to understand for all users, as well as monitering for any risks or oversights in development.
            </p>

        </div>
    </section>
    {footer()}
    </div>
  );
};