import React from 'react'
import Styled from "styled-components"

function Section(props) {
    return (
       <Container bgImage={props.backgroungImg} >
           <ModelName>
               <h1>{props.model}</h1>
               <p>{props.description}</p>
           </ModelName>
           <ButtonGroup>
                <LeftButton>{props.leftBtnText}</LeftButton>
                <RightButton>{props.rightBtnText}</RightButton>
           </ButtonGroup>
           <DownArrow src="/images/down-arrow.svg"/>
        
       </Container>
    )
}

export default Section;

const Container = Styled.div `
    background-color:blue;
    width:100%;
    height:100vh;
    background-image: ${props => `url('/images/${props.bgImage}')`};
    background-position:center;
    background-size:cover;
    background-repeat: no-repeat;
    align-items:center;
    display:flex;
    flex-direction:column;
`

const ModelName = Styled.div `
    padding-top:20vh;
    text-align:center;
    flex:1;

`

const ButtonGroup = Styled.div `
display:flex;
    @media (max-width:786px){
        flex-direction:column-reverse;
    }
`

const LeftButton = Styled.div `
    background-color:#393c41;
    height:40px;
    width:256px;
    opacity:0.85;
    color:white;
    border-radius:100px;
    display:flex;
    justify-content:center;
    align-items:center;
    text-transform:uppercase;
    font-size:14px;
    cursor:pointer;
    margin:8px;
`
const RightButton = Styled(LeftButton)`
    color:black;
    background-color:white;
    opacity:0.65;
    cursor:pointer;
    
`

const DownArrow = Styled.img `
    height:40px;
    animation: animateDown infinite 1.5s;

`