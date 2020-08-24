import React from 'react';
import styled from 'styled-components';
import motorcyle from './images/motorcycle.png';
import work from './images/work.png';
import skills from './images/skills.png';

export default function Body() {

  const MainContent = styled.div`
    display: flex;
    flex-flow: column wrap;
  `

  const Section1 = styled.section`
    display: flex;
    height: 500px;
    width: 100%;
    margin-top: 3%;
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
        <h3>About me</h3>
        <p></p>
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
              -Axiosk<br/>
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
          -Lead a cohort of 200 students and 20 Team Leads through core curriculum in programming and software engineering modalities.
          -Lead a team in Agile Methodology, facilitated with Daily Stand- Ups, organizing goals, work progress, and handle conflict resolutions.
          -Facilitated further learning on varied topics with Mock Projects and code practice challenges related to software engineering.
          </p>
          <p>Team Lead</p>
          <p>Lambda School fall 2019 remote</p>
          <p>- Provided daily feedback and issue resolution of all curriculum through Slack Help Channel and code review. 
          -Delivered 1:1 feedback and code review on a weekly basis.
          -Lead a team of 8 students that emulates a real work environment using Agile Methodology
          -Facilitated daily standup meetings to build camaraderie, facilitate sharing of ideas and work progress, and provide guidance for that week's material
          -Delivered supplemental lectures on various topics related to Software Engineering
          </p>
          <h1>Photo by Glenn Carstens-Peters on Unsplash</h1>
        </WorkText>
      </Section3>
    </MainContent>
  );
}