import React from 'react';
import styled from 'styled-components';

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

  return (
    <MainContent>
      <Section1>
        <h1>Can you see this</h1>
      </Section1>
      <Section2>
        <h1>Can you see this</h1>
      </Section2>
      <Section3>
        <h1>Can you see this</h1>
      </Section3>
    </MainContent>
  );
}