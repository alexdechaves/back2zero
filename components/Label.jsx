import styled from "styled-components"

export const Label = styled.h1`
    color: ${props => props.color ? props.color: 'white'};
    text-align: center;
    letter-spacing: 15px;
    font-size: 40px;
    margin: 0;
    padding: 50px;
`