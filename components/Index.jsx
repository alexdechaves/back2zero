import styled from "styled-components";
import { mq } from "./style-vars";

const WrapperCard = styled.div`
  background-color: white;
  font-family: "Posterama";
  transition: padding, 0.3s;
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
  bottom: 20%;
  text-align: center;
  position: absolute;
  width: 200px;
  height: 100px;

  div {
    text-align: left;
    margin: 5px;

    ${mq.breakpoint('md')} {
      margin: 30px;
    }

    h2:nth-child(2) {
      margin-bottom: 60px;
    }
  }

  img {
    height: inherit;
  }

  a {
    background-color: #FF308B;
    border-radius: 5px;
    text-decoration: none;
    padding: 15px 30px;
    color: white;
  }

  a:hover {
    background-color: #ff7eb7;
  }

  ${mq.breakpoint('md')} {
    width: 700px;
    height: 350px;
  }
`;



const Wrapper = styled.div`
  background-color: black;

  video {
    opacity: 0.6;
    width: 100%;
    padding: 50px 0px;

    ${mq.breakpoint('md')} {
      padding: 0px;
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
          <h2>New Single</h2><h1>World We Live In</h1><h2>Out Now</h2>
          <a href="http://spotify.com">Listen</a>
        </div>
      </WrapperCard>
    </Wrapper>
    <ImgContainer>
      <iframe src="https://www.youtube.com/embed/w1cFGFnIAcE?feature=oembed" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </ImgContainer>
  </div>
);

export default Index;