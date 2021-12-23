import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Row, Col } from "react-flexbox-grid/dist/react-flexbox-grid"
import { Label } from './Label';
import { mq } from "./style-vars"

const TourWrapper = styled.div`
    padding-bottom: 50px;
    top: 50%;
    left: 50%;
    z-index: 2;

    a {
        text-decoration: none;
        color: black;
    }
`

const EventCard = styled.div`
    display: flex;
    border-top: 1px solid grey;
    border-bottom: 1px solid grey;
    padding: 30px 0px;
    transition: background-color 0.2s;

    &:hover {
        background-color: #e7e7e7;
    }

    a {
        padding: 10px 20px;
        margin: 5px 50px;
        border-radius: 2px;
        text-decoration: none;
        color: black;
        font-size: 20px;
        letter-spacing: 5px;
        border: 2px solid #FF308B;
        box-shadow: 0px 0px 10px #16ccb7;
        transition: background-color 0.2s;
    }

    a:hover {
        background-color: #FF308B;
        color: white;
    }
`

const DateLocationElement = styled.div`
    margin: auto 0;
    font-size: 20px;
    letter-spacing: 5px;
`

const VenueName = styled.div`
    margin: auto 15px;
    flex-grow: 4;
    color: #FF308B;
    text-shadow: 0px 0px 10px #16ccb7;
    font-size: 23px;
    letter-spacing: 5px;
`

const Tour = () => {
    const [events, setEvents] = useState()

    useEffect(() => {
        fetch('https://rest.bandsintown.com/artists/back2zero/events?app_id=12345')
        .then(data => data.json())
        .then(data => setEvents(data))
    },[])

    return (
        <TourWrapper id="tour">
            <Label color="black">TOUR</Label>
            {events && events.map(event => (
                <Row center="xs">
                    <Col xs={9}>
                        <a href={event.url} target="_blank">
                        <EventCard>
                            <DateLocationElement><span>{new Date(event.datetime).toDateString()}</span></DateLocationElement>
                            <VenueName><span>{event.venue.name}</span></VenueName>
                            <DateLocationElement><span>{event.venue.location}</span></DateLocationElement>
                            <a href={event.offers[0].url} target="_blank">Tickets</a>
                        </EventCard>
                        </a>
                    </Col>
            </Row>
            ))}
        </TourWrapper>
    )
};

export default Tour;