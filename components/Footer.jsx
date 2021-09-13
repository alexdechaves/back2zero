import styled from "styled-components";

const Footer = (props) => (
  <div>
    <iframe src="https://open.spotify.com/follow/1/?uri=spotify:artist:14lcNgeRqudVELvxmaQIEw&amp;size=detail&amp;" width="225" height="56" scrolling="no" frameborder="0" allowtransparency="true" data-gtm-yt-inspected-1_25="true"></iframe>
    <p>{`Copyright © ${new Date().getFullYear()}. Back 2 Zero. All Rights Reserved`}</p>
    <style jsx>{`
        div {
          background-color: white;
          border-bottom: 5px solid black;
        }

        iframe {
            margin: 100px auto;
            display: flex;
        }

        p {
            font-family: "Posterama";
            text-align: center;
            letter-spacing: 5px;
            font-size: 20px;
        }

    `}</style>
  </div>
);

export default Footer;
