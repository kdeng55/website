import project1 from '../img/project1.svg';
import React from "react";
import underline from '../img/underline.svg'
import Mockup1 from '../img/Mockup1.png'
import line from '../img/line.svg'
import understandnus from '../img/understand-nus.svg'
import define from '../img/define-nus.svg'
import ideate from '../img/ideate-nus.png'
import design from '../img/design-nus.svg'
import test from '../img/test-nus.svg'
import target from '../img/target-audience.svg'
import persona from '../img/Light.svg'

export default function nusresearch () {
return  (
    <div>
    <div className="title-container-nus">
        <div className="title-text-nus">
        <h1>Research, Improved. @nus</h1>
        <p>Improving Research at the National University of Singapore </p>
        <h2>UX Case Study</h2>
        <img src={underline} className="underline-nus" alt="underline"/>
        <h3>Duration:</h3>
        <h4>February, 2023 - May, 2023 (10 weeks)</h4>
        </div>
        <img src={project1} className="nus-pic-title" alt="proj1" />
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
        <img src={Mockup1} className="cover-nus-pic" alt="pic-1" />
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
    <img src={persona} className="claire-persona-nus" />
   
    </div>
  );
};