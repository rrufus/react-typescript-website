import * as React from 'react';
import styled from 'styled-components';
import { TitleText, Description } from './components/Title';
import { Intro, MoreInfo } from './Constants';
import Buttons from './components/Buttons';

const BlackBackground = styled.div`
  display: flex;
  flex-direction: column;
  height:100vh;
  width: 100vw;
`;

const ContainingDiv = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  
  max-width: 800px;
  width: 90%;
  height: 100%;
`;

const ImageBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  height: 100%;
`;

const Headshot = styled.img`
width: auto;
max-height: 100%;
object-fit: contain;
`;

class App extends React.Component {
  render() {
    return (
      <BlackBackground>
        <ContainingDiv>
          <Buttons />
          <TitleText>Rufus Russell</TitleText>
          <Description>{Intro}</Description>
          <Description>{MoreInfo}</Description>
          <Description>My favourite language is golang.</Description>
          <Description>On the front end, I like React and Typescript.</Description>
        </ ContainingDiv >
        <ImageBox><Headshot src="headshot.png" /></ImageBox>
      </BlackBackground>
    );
  }
}

export default App;
