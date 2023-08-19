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
import persona from '../img/Light.svg'
import storyboard from '../img/Storyboard 1.svg'
import storyboard2 from '../img/Storyboard 2.svg'
import connection from '../img/connection-pic.svg'
import schedule from '../img/schedule.svg'
import star from '../img/star.svg'
import wireframe1 from '../img/wireframe1.svg'
import wireframe2 from '../img/wireframe2.svg'
import Lowfidelity from '../img/Low-fidelity.svg'
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
    <div className="title-container-nus">
        <div className="title-text-nus">
        <h1>Researched and Found @NUS</h1>
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
        <img src={understandnus} className="understand-nus-pic" alt="pic-2" />
        <p>User Research</p>
        <p>User Interviews</p>
        </section>
        <section className="define-nus">
        <img src={define} className="define-nus-pic" alt="pic-2" />
        <p>User Personas</p>
        <p>Scenarios and Storyboards</p>
        </section>
        <section className="ideate-nus">
        <img src={ideate} className="ideate-nus-pic" alt="pic-2" />
        <p>Identify Key User Tasks</p>
        </section>
     </div>
     <div className="design-container-nus-row2">
        <section className="design-nus">
        <img src={design} className="design-nus-pic" alt="pic-2" />
        <p>Wireframes</p>
        <p>Lo-Fi & Hi-Fi Designs</p>
        <p>Prototype</p>
        </section>
        <section className="test-nus">
            <img src={test} className="test-nus-pic" alt="pic-2"/>
            <p>Feedback</p>
            <p>Conclusions</p>
            <p>Future Concept</p>
        </section>
    </div>
     </section>

    <section className="research-nus-container">
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
    <img src={persona} className="claire-persona-nus" alt="persona-pic"/>
    <heading className="storyboard-nus-heading">
    <h1>Storyboards</h1>
    <img src={line} className="line-storyboard" alt="line" />
    </heading>
    <div className="storyboard-nus">
        <img src={storyboard} className="storyboard-nus-pic" alt="storyboard"></img>
        <img src={storyboard2} className="storyboard-nus-pic2" alt="storyboard"></img>
    </div>
    <div className="key-user-tasks-nus">
        <h1>Key User Tasks</h1>
        <img src={line} className="line" alt="line" />
        <h2>After going through our user research, personas and storyboards, we
            were able to identify 3 key user tasks for this project.</h2>
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
        <h1>Low Fidelity Wireframes</h1>
        <img src={line} className="line" alt="line" />
        <section className="wireframe-pic">
        <img src={wireframe1} className="wireframe-pic-1" alt="wf-1"/>
        <img src={wireframe2} className="wireframe-pic-2" alt="wf-2"/>
        </section>
    </section>
    <section className="hi-fi-first">
        <h1>High Fidelity Prototypes - Variant One</h1>
        <img src={line} className="line" alt="line" />
        <h2>After our low fidelity wireframes, we decided to assemble a rough, first draft of a high fidelity prototype. </h2>
        <img src={Lowfidelity} className="low-fi-nus-pt1" alt="lowfi"/>
    </section>
    <section className="user-testing">
        <h1>User Testing</h1>
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
            <p> 3) Leave Ratings for Participant and Researcher</p>
            </div>
            <img src={effective} className="effective-pic" alt="pic-effect"/>
            
        </div>
        <div className="satisfaction-container">
            <div className="satisfaction-container-text">
            <h1>Evaluation</h1>
            <p>We decided to use two baselines in order to measure 
                the users experience and success with our app. 
            </p>
            <p>We conducted our user studies in the fashion of contextual inquiries and surveys.</p>
            <p>We chose contextual inquiries because we wanted an in-depth understanding of how the different personas from our target audiences interacted with research studies and each other. </p>
            <p>We chose surveys because we wanted to gain a better understanding of users' motivators and deterrents of participation in surveys and current frustrations that researchers face and improvements that would further their ease of access.</p>
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
                <p>Post-task completion timings and success indicators </p>
                <img src={efficiency} className="effic-img" alt="efficiency"/>
                </section>
                <div className="effic-img">
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
        <footer className="user-testing-conclusion">
            <h2>Given these suggestions and comments, we embarked on revising our prototype to 
                accomodate these shortcomings.
            </h2>
        </footer>
    </section>
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
        <h1>Key Takeaways</h1>
        <img src={line} className="line" alt="line" />
    </section>

    </div>
  );
};