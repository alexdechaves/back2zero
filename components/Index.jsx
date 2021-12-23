import styled from "styled-components";
import { mq } from "./style-vars";

const WrapperCard = styled.div`
  background-color: white;
  align-self: center;
  transition: padding,0.3s;
  margin: 10px auto;
  display: flex;
  justify-content: center;
  z-index: 5;
  border: 3px solid #FF308B;
  box-shadow: 0px 0px 40px #16ccb7;
  border-radius: 4px;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
  position: absolute;
  width: 350px;
  height: 200px;

  h1, h2 {
    font-size: 15px;
  }

  div {
    text-align: left;
    padding: 0px 5px;
    display: flex;
    flex-direction: column;

    ${mq.breakpoint('md')} {
      margin: 30px;
    }

    h2:nth-child(2) {
      margin-bottom: 60px;
    }
  }

  img {
    height: 200px;
  }

  a {
    background-color: #FF308B;
    border-radius: 5px;
    text-decoration: none;
    padding: 10px 30px;
    color: white;
    text-align: center;
  }

  a:hover {
    background-color: #ff7eb7;
  }

  ${mq.breakpoint('md')} {
    width: 700px;
    height: 350px;

    img {
      height: inherit;
    }

    h2 {
      font-size: 24px;
    }

    h1 {
      font-size: 25px;
    }

    a {
      padding: 15px 30px;
    }
  }
`;



const Wrapper = styled.div`
  background-color: black;
  display: flex;
  justify-content: center;

  video {
    opacity: 0.6;
    height: 325px;
    width: 100%;
    padding: 0px;
    object-fit: cover;

    ${mq.breakpoint('md')} {
      height: 100%;
    }
  }
`;

const ImgContainer = styled.div`
  width: 100%;
  height: 100%;
  background-image: url("/images/WWLI.jpg");
  padding: 75px 0px;
  display: flex;
  justify-content: center;
  border-bottom: 5px solid black;

  ${mq.breakpoint('md')} {
    padding: 200px 0px;
  }

  iframe {
    width: 90%;
    height: 300px;

    ${mq.breakpoint('md')} {
      width: 960px;
      height: 540px;
    }
  }
`;

const Index = (props) => (
  <div>
    <Wrapper>
      <video ref={props.videoRef} nocontrols autoplay loop muted></video>
      <WrapperCard>
        <img src="/images/WWLI.jpg"></img>
        <div>
          <h2>New Singles</h2><h1>'World We Live In' & 'Lie To Me'</h1><h2>Out Now</h2>
          <a href="https://open.spotify.com/album/12R2wa2gg7d2A2vmGKUEd5?si=5X0pORs8QnmeGsjtPWqjFA">Listen</a>
        </div>
      </WrapperCard>
    </Wrapper>
    <ImgContainer>
      <iframe src="https://www.youtube.com/embed/w1cFGFnIAcE?feature=oembed" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </ImgContainer>
  </div>
);

export default Index;