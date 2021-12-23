import React, { useState } from "react";
import styled from "styled-components"
import { Row, Col } from 'react-flexbox-grid/dist/react-flexbox-grid'
import { Label } from "./Label";
import { mq } from "./style-vars"

const images = [
    "/images/instagram/1.jpg",
    "/images/instagram/2.jpg",
    "/images/instagram/3.jpg",
    "/images/instagram/4.jpg",
    "/images/instagram/5.jpg",
    "/images/instagram/6.jpg",
    "/images/instagram/7.jpg",
    "/images/instagram/8.jpg",
    "/images/instagram/9.jpg",
    "/images/instagram/10.jpg",
    "/images/instagram/11.jpg",
    "/images/instagram/12.jpg",
    "/images/instagram/13.jpg",
    "/images/instagram/14.jpg",
    "/images/instagram/15.jpg"
]

const PhotoCard = styled.div`
    transition: transform 0.3s;

    &:hover {
        transform: scale(1.03);
        cursor: pointer;
    }

    img {
        object-fit: cover;
        width: 100%;

        ${mq.breakpoint('lg')} {
            width: 600px;
            height: 400px;
        }
    }
`

const PhotoWrapper = styled.div`
    background-color: black;
`

const Backdrop = styled.div`
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100vw;
    height: 100%;
    overflow: hidden;
    display: flex;
    z-index: 1200;
    position: fixed;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.7);
    -webkit-tap-highlight-color: transparent;

    img {
        width: 100%;

        ${mq.breakpoint('md')} {
            width: auto;
        }
    }
`



const Photos = () => {
    const [backdropImage, setBackdropImage] = useState(false)

    return (
        <PhotoWrapper id="photos">
            <Label>PHOTOS</Label>
            {backdropImage && 
                <Backdrop onClick={() => setBackdropImage()}>
                    <img src={backdropImage}></img>
                </Backdrop>}
            <Row>
            {images.map((image, index) => {
                return(
                    <Col xs={12} md={6} lg={4}>
                        <PhotoCard onClick={() => setBackdropImage(image)}>
                            <img key={index} src={image} ></img>
                        </PhotoCard>
                    </Col>
                )
            })}
            </Row>
        </PhotoWrapper>
    )
}

export default Photos;