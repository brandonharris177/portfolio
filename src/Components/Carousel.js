import React from 'react';
import Carousel from "react-elastic-carousel";
import styled from 'styled-components';
import Sauti from './images/Sauti.png';
import game from './images/game.png';
import wander from './images/wander.png';
import celeb from './images/celeb.png';


export default function ProjectCarousel() {

    const breakPoints = [
        { width: 1, itemsToShow: 1 }
        ];

    const SaudiDatabank = styled.div`  
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${Sauti});
    height: 700px;
    width: 100%;
    color: #fff;
    margin: 0 15px;
    font-size: 4em;
  `;

  const ConroysGame = styled.div`  
  display: flex;
  justify-content: center;
  align-items: center;
   background-image: url(${game});
  height: 700px;
  width: 100%;
  color: #fff;
  margin: 0 15px;
  font-size: 4em;
  `;

  const CelebDeadorAlive = styled.div`  
  display: flex;
  justify-content: center;
  align-items: center;
   background-image: url(${celeb});
  height: 700px;
  width: 100%;
  color: #fff;
  margin: 0 15px;
  font-size: 4em;
  `;

  const WanderLust = styled.div`  
  display: flex;
  justify-content: center;
  align-items: center;
   background-image: url(${wander});
  height: 700px;
  width: 100%;
  color: #fff;
  margin: 0 15px;
  font-size: 4em;
  `;

  return (
    <>
    <h1>Projects</h1>
    <Carousel breakPoints={breakPoints}>
        <SaudiDatabank>This</SaudiDatabank>
        <ConroysGame>One</ConroysGame>
        <CelebDeadorAlive>Two</CelebDeadorAlive>
        <WanderLust>Three</WanderLust>
    </Carousel>
    </>
  );
}