import styled from "styled-components";
import { mq } from "./style-vars";
import { Grid, Row, Col } from 'react-flexbox-grid/dist/react-flexbox-grid'
import { Label } from "./Label";

const MusicCol = styled(Col)`
    height: inherit;
    color: black;
    display: flex;
    border: 1px solid black;
    margin: 60px;
    text-align: left;
    border-radius: 10px;
    background-color: white;
    border: 3px solid #FF308B;
    box-shadow: 0px 0px 40px #16ccb7;
    padding-left: 0px; // hack

    img {
        width: 170px;
        height: 170px;
        ${mq.breakpoint('md')} {
            width: 300px;
            height: 300px;
        }
    }

    div {
        padding-left: 10px;
        display: flex;
        flex-direction: column;
        width: inherit;
    }

    a {
        background-color: #FF308B;
        border-radius: 5px;
        text-decoration: none;
        padding: 15px 30px;
        color: white;
        width: 70px;
        cursor: pointer;
    }
    
    h3 {
        margin-block-start: 1em;
        margin-block-end: 0em;

        ${mq.breakpoint('md')} {
            margin-block-start: 3em;
        }
    }

    p {
        color: #797979;
        margin-bottom: 20px;
        font-size: 12px;

        ${mq.breakpoint('md')} {
            font-size: 20px;
        }
    }
    
    a:hover {
        background-color: #ff7eb7;
    }
`;

const MusicItem = (props) => (
    <MusicCol xs={11} lg={4}>
        <img src={props.image}></img>
        <div>
            <h3>{props.title}</h3>
            <p>{props.blurb}</p>
            <a href={`https://open.spotify.com/${props.spotify}`} target="_blank">Listen</a>
        </div>
    </MusicCol>
);

const Music = () => (
    <div id="music">
        <Label>MUSIC</Label>
        <Row center="xs">
            <MusicItem image="/images/WWLI.jpg" blurb="Single | 2021" title="Lie To Me" spotify="track/3U84nyXGq7taMYdMcdMeZm"/>
            <MusicItem image="/images/WWLI.jpg" blurb="Single | 2021" title="World We Live In" spotify="track/4basfPrTYFvNYwPNq9NLOs"/>
            <MusicItem image="/images/PLU_COVER_YELLOW.png"  spotify="track/5uCXgdrJXmtEJkyCmGnolJ" blurb="Single | 2019" title="People Like Us" />
            <MusicItem image="/images/DRIVE.jpg" spotify="track/3idqvOaXKayjTZpOSHX5Cq" blurb="Single | 2019" title="Drive" />
            <MusicItem image="/images/HERE_ALONE.jpg" spotify="album/45JKHwLPYS31eA8cuOSNAf" blurb="EP | 2017" title="Here, Alone" />
        </Row>
        <style jsx>{`
            border-bottom: 5px solid black;
            background-image: url("/images/blur.png");
            background-size: cover;
            margin-right: 0px;
            margin-left: 0px;
        `}</style>
  </div>
);

export default Music;