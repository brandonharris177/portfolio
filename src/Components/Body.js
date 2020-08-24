import React from 'react';
import styled from 'styled-components';
import motorcyle from './images/motorcycle.png';
import work from './images/work.png';
import skills from './images/skills.png';

export default function Body() {

  const MainContent = styled.div`
    background-color: #53535B;
    display: flex;
    flex-flow: column wrap;
  `

  const Section1 = styled.section`
    display: flex;
    height: 500px;
    width: 100%;
    margin-top: 3%;
    border-bottom: 1px solid black;
  `

  const Section2 = styled.section`
    display: flex;
    justify-content: flex-end;
    height: 500px;
    width: 100%;
  `

  const Section3 = styled.section`
    display: flex;
    height: 500px;
    width: 100%;
  `

  const Motorcyle = styled.img`
    height: 100%;
    clip-path: polygon(0 0, 50% 0, 100% 125%, 0% 100%);
  `

  const Work = styled.img`
    height: 100%;
    clip-path: polygon(0 0, 50% 0, 100% 125%, 0% 100%);
  `
  const Skills = styled.img`
    height: 100%;
    clip-path: polygon(48% 0, 100% 1%, 100% 100%, 25% 100%);
  `
  const WorkText = styled.div`
    display: flex;
    flex-flow: column wrap;
  `

  const CoreSkills = styled.div`
    display: flex;
    flex-flow: column wrap;
  `

  const SkillsText = styled.div`
    display: flex;
  `

  const SkillsSection = styled.div`
    display: flex;
    flex-flow: column wrap;
  `

  return (
    <MainContent>
      <Section1>
        <Motorcyle src = {motorcyle} alt = '' />
        <CoreSkills>
          <h3>About me</h3>
          <p>In 2018 I graduated from Brigham Young University with a Bachelors in Economics and realized "I have no hard skills". Several months of job searching led me to the conclusion that without the ability to make an immediate impact wherever I worked my degree was no more useful to employers than the paper it was printed on. During this time, I noticed a common thread; everyone was looking for someone who could code, talk to computers, design, manipulate and analyse data. This realization that the internet is here to stay led me to Lambda School where I got my first real into to code and learned the skills to further a career in Web Development.</p>

          <p>I have experience working in a variety of fields before Web Development including Warehouse Manager, Turf and Solar Installation as well as a Contract Handyman. I love seeing the results of a well built project or peice of code come together. In many ways the principles are the same for construction and coding: have patience, don't be afraid to learn, and find satisfaction in the journey and the product. <br/>
          When I'm not coding I enjoy riding my motorcyle, throwing around the football, a game of Magic: The Gathering, or a good book, preferably a Clancy novel or books about life sciences. <br/> To talk about my work or about how I can help you feel free to shoot me an email at brandonharris177@gmail.com
          </p>
        </CoreSkills>
      </Section1>
      <Section2>
        <CoreSkills>
          <h3>Core Skills</h3>
          <SkillsText>
            <SkillsSection>
              <p>
              -JavaScript<br/>
              -Node.js<br/>
              -Express.js<br/>
              -Git/Version Control<br/>
              -RESTful API<br/>
              -Knex.js<br/>
              -LESS/SCSS<br/>
              </p>
            </SkillsSection>
            <SkillsSection>
              <p>
              -Python<br/>
              -SQL<br/>
              -GraphQL<br/>
              -Apollo<br/>
              -HTML/CSS<br/>
              -Postgress<br/>
              -Insomnia/Postman<br/>
              </p>
            </SkillsSection>
            <SkillsSection>
              <p>
              -React.js<br/>
              -Redux<br/>
              -Axios<br/>
              -Formik<br/>
              -Unit Testing<br/>
              -Integration Testing<br/>
              -Styled Components<br/>
              </p>
            </SkillsSection>
          </SkillsText>
        </CoreSkills>
        <Skills src = {skills} alt = ''/>
      </Section2>
      <Section3>
        <Work src = {work} alt = ''/>
        <WorkText>
          <h3>Work Experience</h3>
          <p> <strong>Section Lead </strong><br/>
         <strong>Lambda school 2019-present Remote</strong>  <br/>
          -Lead a cohort of 200 students and 20 Team Leads through core curriculum in programming and software engineering modalities.<br/>
          -Lead a team in Agile Methodology, facilitated with Daily Stand- Ups, organizing goals, work progress, and handle conflict resolutions.<br/>
          -Facilitated further learning on varied topics with Mock Projects and code practice challenges related to software engineering.<br/>
          </p>
          <p><strong>Team Lead</strong>
          <strong>Lambda School fall 2019 remote</strong> <br/>
          - Provided daily feedback and issue resolution of all curriculum through Slack Help Channel and code review. 
          -Delivered 1:1 feedback and code review on a weekly basis.<br/>
          -Lead a team of 8 students that emulates a real work environment using Agile Methodology. <br/>
          -Facilitated daily standup meetings to build camaraderie, facilitate sharing of ideas and work progress, and provide guidance for that week's material. <br/>
          -Delivered supplemental lectures on various topics related to Software Engineering. <br/>
          </p>
          <p>Photo by Glenn Carstens-Peters on Unsplash</p>
        </WorkText>
      </Section3>
    </MainContent>
  );
}