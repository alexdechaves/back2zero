import { useEffect, useState, useRef } from "react";
import Header from "./Header";
import Footer from "./Footer";
import ReactHtmlParser from 'html-react-parser'; 
import { Grid, Row, Col } from "react-flexbox-grid/dist/react-flexbox-grid"
import styled from "styled-components";

const VideoCard = (props) => {
    const [image, setImage] = useState()
    const [title, setTitle] = useState()

    useEffect(() => {
        fetch(`https://www.youtube.com/oembed?url=${props.url}&format=json`)
        .then(data => data.json())
        .then(data => {
            setImage(data.thumbnail_url)
            setTitle(data.title)
        })
    }, [])

    const VideoCardCol = styled(Col)`
        margin: 10px 20px;
        box-shadow: 0px 0px 40px #232323;
        padding: 0px;

        a {
            text-decoration: none;
        }

        div {
            background-image: url(${image});
            background-size: cover;
            height: 380px;
            z-index: -1;
            transition: transform 0.3s;
            border-radius: 5px;
            display: flex;
            justify-content: center;
            flex-direction: column;
        }

        div:hover {
            transform: scale(1.07);
        }

        h3 {
            color: white;
            text-align: center;
            font-size: 30px;
            padding: 0px 10px;
        }
    `

    return(
        <VideoCardCol xs={11} md={3}>
            <a href={props.url} target="_blank">
                <div>
                    <h3>{title}</h3>
                </div>
            </a>
        </VideoCardCol>
    )
};

const RowBg = styled(Row)`
    background-image: url("/images/bg.jpg");
    background-size: cover;
    padding: 50px 0px;
`


const VideoPage = () => (
      <RowBg id="video"center="xs">
        <VideoCard url="https://www.youtube.com/watch?v=w1cFGFnIAcE"/>
        <VideoCard url="https://www.youtube.com/watch?v=V0qEO9pdDGU"/>
        <VideoCard url="https://www.youtube.com/watch?v=EVV6PjgcHuk"/>
        <VideoCard url="https://www.youtube.com/watch?v=96L9kvRnBMU"/>
      </RowBg>
);

export default VideoPage;