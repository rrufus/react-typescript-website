import * as React from 'react';
import styled from 'styled-components';
import { TitleText, Description } from './components/Title';
import { Intro, MoreInfo, FavouriteLang, FrontEnd } from './Constants';
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
width: 50%;
min-width: 350px;
max-height: 140%;
object-fit: contain;
z-index: -1;
opacity: 0.6;
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
          <Description>{FavouriteLang}</Description>
          <Description>{FrontEnd}</Description>
        </ ContainingDiv >
        <ImageBox><Headshot src="headshot.png" /></ImageBox>
      </BlackBackground>
    );
  }
}

export default App;
