import { useEffect, useState } from "react";
import { Row, Col } from "react-flexbox-grid/dist/react-flexbox-grid"
import styled from "styled-components";
import { Label } from "./Label";

const VideoCardCol = styled(Col)`
    margin: 10px 20px;
    box-shadow: 0px 0px 40px #232323;
    padding: 0px;

    a {
        text-decoration: none;
    }

    div {
        background-image: url(${props => props.image});
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

const VideoCard = (props) => {
    const [image, setImage] = useState()
    const [thumb, setThumb] = useState()
    const [title, setTitle] = useState()

    useEffect(() => {
        fetch(`https://www.youtube.com/oembed?url=${props.url}&format=json`)
        .then(data => data.json())
        .then(data => {
            setThumb(data.thumbnail_url)
            setImage(data.thumbnail_url)
            setTitle(data.title)
        })
        .then(() => setImage(thumb))
    }, [])


    return(
        <VideoCardCol image={image} onMouseEnter={() => props.gifUrl && setImage(props.gifUrl)} onMouseLeave={() => setImage(thumb)} xs={11} md={3}>
            <a href={props.url} target="_blank">
                {thumb && <div>
                    <h3>{title}</h3>
                </div>}
            </a>
        </VideoCardCol>
    )
};

const VideoWrapper = styled.div`
    background-image: url("/images/bg.jpg");
    background-size: cover;
    padding-bottom: 50px;
`


const VideoPage = () => (
    <VideoWrapper id="video">
        <Label>VIDEO</Label>
        <Row center="xs">
            <VideoCard url="https://www.youtube.com/watch?v=w1cFGFnIAcE" gifUrl="https://image.mux.com/gj2TuEkoHwPAVC1YjFlL01j631tphb00xwnIqIeU00zzP8/animated.gif?height=320&start=110&end=120"/>
            <VideoCard url="https://www.youtube.com/watch?v=V0qEO9pdDGU" gifUrl="https://image.mux.com/3U5mcVVUc00gt7XhB01DlnM02UMZr4HSV6SaDuqu4qrzq8/animated.gif?height=320&start=60"/>
            <VideoCard url="https://www.youtube.com/watch?v=EVV6PjgcHuk" gifUrl="https://image.mux.com/j9ku7S00n7UvICcFmdxyOFS01BmzubbFP3oBOGAFjmnZ00/animated.gif?height=320&start=40"/>
        </Row>
    </VideoWrapper>
);

export default VideoPage;