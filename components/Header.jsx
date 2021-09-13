import styled from "styled-components";
import { FaSpotify, FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa";


const HeaderWrapper = styled.div`
  body{
    margin: 0px;
  }

  h1 {
    font-family: "Posterama";
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

  nav {
    text-align: center;
    border-bottom: 1px solid #e8e8e8;
    padding-bottom: 30px;
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
    padding: 10px 18px;
    border: 2px solid #FF308B;
    box-shadow: 0px 0px 10px #16ccb7;
  }
`;

const SocialWrapper = styled.div`
  position: fixed;
  top: 40%;
  left: 0;
  z-index: 999;
  border: 1px solid white;
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
    <a href="/">
      <FaSpotify size={40} />
    </a>
    <a>
      <FaYoutube size={40} />
    </a>
    <a>
      <FaInstagram size={40} />
    </a>
    <a>
      <FaFacebook size={40} />
    </a>
  </SocialWrapper>
)

const Header = () => (
  <div>
    <HeaderWrapper>
      <h1>
      BACK 2 ZERO
      </h1>
      <nav>
        <a href="/music">MUSIC</a>
        <a href="/video">VIDEO</a>
        <a href="/photos">PHOTOS</a>
        <a href="/tour">TOUR</a>
        <a href="/contact">CONTACT</a>
      </nav>
    </HeaderWrapper>
    <Social />
  </div>
);

export default Header;