import styled from "styled-components";
import { FaSpotify, FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import { Grid, Row, Col } from 'react-flexbox-grid/dist/react-flexbox-grid';
import { mq } from "./style-vars"

const HeaderWrapper = styled.div`
  padding-bottom: 30px;

  h1 {
    text-align: center;
    letter-spacing: 5px;
    font-size: 70px;
    font-weight: lighter;
    margin: 10px;
    transition: text-shadow 0.5s;
  }

  h1:hover {
    text-shadow: 0px 0px 10px #16ccb7;
  }

  a {
    font-family: "Posterama";
    padding: 10px 20px;
    margin: 5px 50px;
    border-radius: 2px;
    text-decoration: none;
    color: black;
    font-size: 20px;
    letter-spacing: 5px;
    transition: box-shadow 0.5s;
  }

  a:hover {
    padding: 1px;

    ${mq.breakpoint('md')} {
      padding: 10px 18px;
    }
    border: 2px solid #FF308B;
    box-shadow: 0px 0px 10px #16ccb7;
  }
`;

const SocialWrapper = styled.div`
  position: fixed;
  top: 40%;
  left: 5px;
  z-index: 999;
  border-radius: 5px;
  background-color: rgba(35, 35, 35, 0.6);
  box-shadow: 0px 0px 40px #232323;
  

  display: flex;
  flex-direction: column;

  a {
    padding 5px;
    transition: color 0.5s;
    color: white;
  }

  a:hover {
    color: #16ccb7;
    cursor: pointer;
  }
`

const Social = () => (
  <SocialWrapper>
    <a href="https://open.spotify.com/artist/14lcNgeRqudVELvxmaQIEw?si=N1D8yVBdTOaAAzvkS7hFeg" target="_blank">
      <FaSpotify size={40} />
    </a>
    <a href="https://www.youtube.com/channel/UCyl883LKt8hfMgHPCkyXh4A" target="_blank">
      <FaYoutube size={40} />
    </a>
    <a href="https://www.instagram.com/_back2zero_/" target="_blank">
      <FaInstagram size={40} />
    </a>
    <a href="https://www.facebook.com/back2zeromusic/" target="_blank">
      <FaFacebook size={40} />
    </a>
    <a href="https://www.tiktok.com/@back2zeromusic" target="_blank">
      <SiTiktok size={40} />
    </a>
  </SocialWrapper>
)

const Header = () => (
  <Grid>
    <HeaderWrapper>
      <h1>
      BACK 2 ZERO
      </h1>
      <img src=""></img>
      <Row center="xs">
          <Col xs={12} md={2}>
            <a href="#music">MUSIC</a>
          </Col>
          <Col xs={12} md={2}>
            <a href="#video">VIDEO</a>
          </Col>
          <Col xs={12} md={2}>
          <a href="#photos">PHOTOS</a>
          </Col>
          <Col xs={12} md={2}>
          <a href="#tour">TOUR</a>
          </Col>
          <Col xs={12} md={2}>
          <a href="#contact">CONTACT</a>
          </Col>
      </Row>
    </HeaderWrapper>
    {/* <Social /> */}
  </Grid>
);

export default Header;