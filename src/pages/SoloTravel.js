import './SoloTravel.css'
import graphite from '../img/large1.svg'
import underline from '../img/underline.svg'
import line from '../img/line.svg'
import ProgressBar from "../components/ProgressBar.js";
import nustitlepic from '../img/nus-title-picture.svg'
import "../components/ProgressBar.css";
import travelpic from '../img/travel-targetpic.svg'
import companalysis from '../img/comp-analysis.svg'
import empathy from '../img/EmpathyMap.svg'
import persona from '../img/Julie Persona.svg'
import userflow from '../img/userflow.svg'
import useScrollFadeIn from "../components/ScrollEffect.js"; 
import '../components/ImageFade.css'
import ImageFade from '../components/ImageFade.js'
import community from '../img/community.svg'
import safety from '../img/safety.svg'
import itinerary from '../img/itinerary.svg'
import lowfi from '../img/travel-low-fi.svg'
import communitypic from '../img/communitypic.svg'
import safetypic from '../img/safetypic.svg'
import itinerarypic from '../img/itinerarypic.svg'
import hifiall from '../img/hifiall-travel.svg'
import footer from '../components/footer.js'
import cover from '../img/covertravel.png'
import cover2 from '../img/covertravel2.png'

export default function SoloTravel () {
    const imageRefStar = useScrollFadeIn()
    const imageRefSchedule=useScrollFadeIn()
    const imageRefConnection=useScrollFadeIn()
    const imageRef = useScrollFadeIn()
    const imageRef2 = useScrollFadeIn()
    const imageRef3 = useScrollFadeIn()
    return <div>
         <ProgressBar />
    <div className="title-container-nus">
        <div className="title-text-nus">
        <h1>Carousel</h1>
        <p>New Opportunities for Solo Travel</p>
        <h2>UX Case Study</h2>
        <img src={underline} className="underline-nus" alt="underline"/>
        <h3>Duration:</h3>
        <h4>July - August, 2023 </h4>
        <h4>(4 Weeks)</h4>
        </div>
        <img src={cover} className="nus-pic-title" alt="proj1" />
     </div>
     <section className="second-pic-nus">
        <div className="second-pic-nus-text"> 
        <h1>Product Overview</h1>
        <img src={line} className="line" alt="line" />
        <p>
        Last summer, I embarked on an exhilarating solo backpacking 
        trip across Scandinavia. This voyage marked 
        my inaugural solo expedition and unveiled to me the wonders of solo trave.
        It was during this trip that I became aware of the lack of dedicated resources tailored to the needs of solo adventurers.
        A discernible void existed in this area, prompting the recognition of a
        necessity for a comprehensive and unified platform catering to the distinctive demands of solo travelling.
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
        <img src={cover2} className="cover-nus-pic" alt="pic-1" />
     </section>
     <section className="problem-statement-travel">
        <h1>Problem Statement</h1>
        <p>In an increasingly interconnected world, solo travel has become a popular and empowering way 
            for individuals to explore new places and cultures. However, solo travellers often encounter 
            unique challenges, ranging from safety concerns to navigating unfamiliar environments and 
            a sense of loneliness.</p>
        <h1>Our Goal</h1>
        <p> Carousel is a UX design project aimed at providing a comprehensive digital 
            solution to enhance the solo travel experience, offering convenience, safety, and community interaction.
        </p>
     </section>
     <section className="research-travel-container" id="section1result">
        <h1>Target Audience</h1>
        <img src={line} className="line" alt="line" />
        <section className="research-travel-target-container">
        <p>Our target audience will be solo travellers, typically adults
            from 20-55. From research, I found that whilst young solo 
            travellers (ages 18-30) are the norm in many hostels, solo 
            travel is not limited to just the younger generation. Studies
            show that the typical age of solo travellers are individuals 
            over 35 years of age.
        </p>
        <img src={travelpic} className="target-audience-pic-travel" alt="line" />
        </section>
    </section>
    <section className="user-research-container-travel">
        <div className="user-research-heading-travel">
            <h1>Competitive Analysis</h1>
            <img src={line} className="line" alt="line"/>
            <p>For our competitive analysis, we wanted to check out a few 
                of our competitors to see what was already on the market. For each website
                I looked at their features, navigation, visual design, content and accessibility.
                The competitors that I chose were TripAdvisor, Travello and Kayak. 
            </p>
            <p> <span className="blue-text">TripAdvisor</span> is a known website for planning trips and booking activities,
                but have recently tried to add a social media aspect. </p>
            <p><span className="blue-text">Travello</span> is a website that specifically targets solo travellers 
                and has multiple features to meet other travellers while abroad
            </p>
            <p>
            <span className="blue-text">Kayak</span> is a great website for budget travellers--they find you the cheapest
              flights anywhere, and also has features like booking hotels and cars. 
            </p>
            <div className="comp-analysispic-container">
            <img src={companalysis} className="comp-analysis-pic" alt="comp-analysis"/>
            </div>
            <div className="unique-features">
            <h1>Unique Features and Takeaways</h1>
            <p> Travello was by far the most similar application to Carousel; they have 
                a multitude of features such as being able to see travellers near you, 
                meetups, and specific pages to follow in order to meet other travellers. However,
                like TripAdvisor, I found their design to be heavily cramped, almost as if they have too
                many features cramped onto their pages. I also found their UI to be a little outdated, and 
                seemed like they needed a revamp.
            </p>
            <p>I found that while TripAdvisor and Travello have the most "social media" aspects,
                the layout and design of the websites are much more cramped with bustles of information
                that might overwhelm the user. On the other hand, while lacking the social media aspect,
                Kayak's UI and front end design looked great because of their clean, 
                minimalist design and straightforward navigation. Unlike the other apps, they put their navigation
                bar on the left side of the app, freeing up a lot of white space that helps with 
                the user experience.
                </p>
            </div>
        </div>
    </section>
    <div className="empathy-map-heading">
        <h1>Empathy Map and Persona</h1>
        <img src={line} className="line" alt="line"/>
        <p>Going forward, I decided to create a persona and empathy map to illustrate the 
            pain points and goals for using this application. For this, I decided to make a 
            persona called Julie, a 24 year old Fitness Instructor planning a 
            trip to Portugal soon, but has some doubts about travelling alone. She's scared 
            of possibly feeling lonely while abroad, overwhelmed about what tours and activites to book 
            as well as feeling unsafe about travelling alone as a woman. However, despite these fears,
            she wants to meet many different people abroad who have the same interests as her, as well
            as participate in the activities that she is interested in.
        </p>
    </div>
    <div className="empathy-map">
        <img src={persona} className="persona-pic-travel" alt="persona-pic"/>
    </div>
    <div className="persona-text-travel">
    <h1>Empathy Map</h1>
     <img src={line} className="line" alt="line"/>
    </div>
    <div className="persona-travel-container">
        <img src={empathy} className="empathy-map-pic" alt="empathy-pic"/>
    </div>
    <section className="userflow-travel">
        <h1>User Flow</h1>
        <img src={line} className="line" alt="line"/>
        <p>After empathizing with the persona and figuring out
            what pain points and goals they have, I wanted to sketch out a quick
            user flow of the user going through the application in order to get a better
            visualization of what my application would look like. For this flow chart, 
            I visualized what the steps would be to reach out to a fellow traveller and message
            them about potentially meeting up.
        </p>
        <img src={userflow} className="userflow-pic" alt="user flow"/>
    </section>

    <div className="key-user-tasks"> 
        <h1>Key User Tasks</h1>
        <img src={line} className="line" alt="line"/>
        <p>At this point, I had a pretty good idea of our application's purpose, and 
            identified three clear key user tasks that I thought were user's biggest concerns
            while traveling abroad, and wanted to focus on solving.
        </p>
        {/*
        <p>
            1) Community: Solo travelers might feel isolated, Carousel will give travelers the ability
            to be able to connect, chat and meet up with other like minded individuals. Further,
            based on a ratings system, Carousel will recommend top recommended activities and tours.
        </p>
        <p>
            2) Safety: Many female travelers are often worried about traveling to unknown 
            places by themselves. Travellers should feel safe with Carousel having a built in 
            emergency safety button for travellers to push if help is needed. On top of that, the 
            platform will incorporate real-time safety insights by leveraging location data and local information.
        </p>
        <p>
            3) <span className="blue-text">Budget</span>: Managing finances while travelling solo is crucial. The budget tracking feature assists
             users in monitoring their expenses, suggesting cost-effective options, and sending alerts when nearing
            budget limits.
        </p>
        */}
    </div>

    <section className="container-key-user-tasks-travel">
            <div className="container-community">
                    <div className="fade-in-container" ref={imageRefConnection}>
                    <div className="community-pic-nus">
                    <ImageFade
                    imageSrc={community}
                    width="100%"
                    height= "100%"
                    style={{borderRadius: "1rem"}}
                    />
                    </div>
                    </div>
            <section className="community-text">
                <h1>Community</h1>
                <p>Community: Solo travelers might feel isolated, Carousel will give travelers the ability
            to be able to connect, chat and meet up with other like minded individuals. Further,
            based on a ratings system, Carousel will recommend top recommended activities and tours..</p>
            </section>
            </div>
            <section className="safety-text-travel">
                <div className="safety-text">
                <h1>Safety</h1>
                <p>Many female travelers are often worried about traveling to unknown 
            places by themselves. Travellers should feel safe with Carousel having a built in 
            emergency safety button for travellers to push if help is needed. On top of that, the 
            platform will incorporate real-time safety insights by leveraging location data and local information.</p>
                </div>
                <div className="fade-in-container" ref={imageRefSchedule}>
                    <div className="safety-pic">
                    <ImageFade
                    imageSrc={safety}
                    width="70%"
                    height= "100%"
                    style={{borderRadius: "1rem"}}
                    />
                    </div>
                    </div>
            </section>
            <section className="budget-container-nus">
            <div className="fade-in-container" ref={imageRefStar}>
                    <div className="itinerary-pic-travel">
                    <ImageFade
                    imageSrc={itinerary}
                    width="90%"
                    height= "100%"
                    style={{borderRadius: "1rem"}}
                    />
                    </div>
                    </div>
                <div className="budget-text-nus">
                    <h1>Itinerary</h1>
                    <p>Finding what the best activity to do can be hard, organizing all your 
                        travel information together can be harder. Carousel helps provide an itinerary feature
                        that assists users in planning their day to day activities by providing you
                        the distance, directions and time of the next booking.</p>
                </div>
            </section>
        </section>
        <section className="low-fi-travel">
            <div className="low-fi-text">
            <h1>Low Fi Prototypes</h1>
            <img src={line} className="line" alt="line"/>
            <p>From here, I decided to make a few wireframes of what the app
                might visually look like. The frames visualize how searching for activities 
                on the app, and finding other fellow solo travellers might look like. Obviously, a lot is still up for change, but
                currently, I'm just trying to map out the visuals and layout for the application.
                Between transitioning between this and a hi-fi prototype, I'll have to figure out 
                a color scheme and clear functions I want on each page of the navbar. </p>
            
            </div>
            <div className="travel-lowfi-container">
            <img src={lowfi} className="travel-lowfi" alt="lowfi"/>
            </div>

        </section>
        <section className="hi-fi-prototype-travel">
            <div className="hi-fi-prototype-travel-text">
                <h1>Hi Fi Prototypes</h1>
                <img src={line} className="line" alt="line"/>
                <p>To transform from low-fi prototypes to hi-fi prototype, I carved out a 
                    appropiate color scheme and font. I decided to use the Inter font, 
                    and use a variation from light, to bold. Further, I decided to use the following three shades as my 
                    base for the app. 
                </p>
                <div className="color-container">
                    <div className="blue-container">
                    </div>
                    <div className="yellow-container">
                    </div>
                    <div className="white-container">
                    </div>
                </div>
                <div className="color-text-container">
                    <p>#2F80ED</p>
                    <p>
                       #CE9912
                    </p>
                    <p> 
                       #EDEDED
                    </p>
                </div>
                <p>
                    From there, I tried to highlight the three key features,
                    making them as accessible as possible for the user. I emphasized 
                    clarity and simplicity in their presentation, ensuring that users 
                    can immediately grasp their purpose and functionality.
                    To achieve this, I incorporated intuitive icons and labels, as well 
                    as concise descriptions that guide users seamlessly through each feature. 
                    By prioritizing accessibility, I aimed to create an experience where even 
                    new users can effortlessly engage with the app's core functionalities without 
                    any confusion or hesitation.
                </p>
                </div>
    <div className="fade-in-container-travel" ref={imageRef}>
        <div className="hi-fi-pic1">
            <h1>Community</h1>
            <ImageFade
                imageSrc={communitypic}
                width="100%"
                height= "100%"
            />
            </div>
            </div>

            <div className="fade-in-container-travel" ref={imageRef2}>
                <div className="hi-fi-pic1">
                <h1>Safety</h1>
            <ImageFade
            imageSrc={safetypic}
            width="100%"
            height= "100%"
            />
            </div>
            </div>

        <div className="fade-in-container-travel" ref={imageRef3}>
            <div className="hi-fi-pic1">
            <h1>Itinerary</h1>
            <ImageFade
            imageSrc={itinerarypic}
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
    <section className="conclusion-travel">
        <h1>Conclusion and Further Steps</h1>
        <img src={line} className="line" alt="line"/>
        <p>
        Obviously, the application right now isn't perfect, so 
        some future steps I plan to take in order to refine this 
        application are as follows.
        One pivotal step is to embark on user testing, ensuring 
        that the app seamlessly aligns with the intuitive needs of 
        our target users. Conducting an accessibility assessment will 
        ensure that the app is usable by individuals with disabilities, 
        reflecting our commitment to inclusivity. Additionally, the canvas 
        of design remains open for enhancement, with the aim of crafting an 
        aesthetically delightful experience. Performance optimization is key 
        as well, as we evaluate the app's loading times and interactions to 
        ensure a fast and smooth user experience. This project is ever-evolving, 
        a testament to ongoing progress. Stay engaged and check in on any future progress!</p>
    </section>

    {footer()}


    </div>
}

