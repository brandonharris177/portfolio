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
    background-color: blue;
    height: 300px;
    width: 100%;
    margin-top: 5%;
  `

  const Section2 = styled.section`
    display: flex;
    justify-content: flex-end;
    background-color: black;
    height: 300px;
    width: 100%;
  `

  const Section3 = styled.section`
    display: flex;
    background-color: gray;
    height: 300px;
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

  return (
    <MainContent>
      <Section1>
        <Motorcyle src = {motorcyle} alt = '' />
        <p>About me</p>
      </Section1>
      <Section2>
       <Skills src = {skills} alt = ''/>
      </Section2>
      <Section3>
        <Work src = {work} alt = ''/>
        <h1>Photo by Glenn Carstens-Peters on Unsplash</h1>
      </Section3>
    </MainContent>
  );
}