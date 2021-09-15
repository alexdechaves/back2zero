import styled from "styled-components";
import { mq } from "./style-vars";
import { Grid, Row, Col } from 'react-flexbox-grid/dist/react-flexbox-grid'

const MusicCol = styled(Col)`
    height: inherit;
    color: black;
    font-size: 20px;
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
        width: 300px;
    }

    div {
        padding-left: 10px;
        display: flex;
        flex-direction: column;
        width: 100%;
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

    p {
        color: #797979;
        margin-bottom: 20px;
    }
    
    a:hover {
        background-color: #ff7eb7;
    }
`;

const MusicItem = (props) => (
    <MusicCol xs={12} lg={4}>
        <img src={props.image}></img>
        <div>
            <h3>{props.title}</h3>
            <p>{props.blurb}</p>
            <a>Listen</a>
        </div>
    </MusicCol>
);

const Music = () => (
    <div id="music">
        <Row center="xs">
            <MusicItem image="/images/WWLI.jpg" blurb="Single | 2021" title="World We Live In" />
            <MusicItem image="/images/PLU_COVER_YELLOW.png" blurb="Single | 2019" title="People Like Us" />
            <MusicItem image="/images/DRIVE.jpg" blurb="Single | 2019" title="Drive" />
            <MusicItem image="/images/HERE_ALONE.jpg" blurb="EP | 2017" title="Here, Alone" />
        </Row>
        <style jsx>{`
            border-bottom: 5px solid black;
            padding-top: 100px;
            padding-bottom: 100px;
            background-image: url("/images/stars.jpg");
            background-size: cover;
        `}</style>
  </div>
);

export default Music;