import React from 'react'
import Styled from "styled-components"

function Header() {
    return (
       <Container>

            <a href="#"> 
                <img src="./images/logo.svg"/>
            </a>
          

       <MenuGroup>
            <p>Model S</p>
            <p>Model 3</p>
            <p>Model X</p>
            <p>Model Y</p>
            <p>Solar Roof</p>
            <p>Solar Panels</p>

       </MenuGroup>

        <RightGroup>
            <p>Shop</p>
            <p>Account</p>
            <p>Menu</p>
        </RightGroup>
       </Container>
    )
}

export default Header;

const Container = Styled.div `
    
        display:flex;
        justify-content:space-between;
        min-height:60px;
        align-items:center;
        padding:0 20px;
        position:fixed;
        top:0;
        left:0;
        right:0;
    
`
const MenuGroup = Styled.div `
    display:flex;
    p{
        padding-right:20px;
        font-weight:600;
        cursor:pointer;
    }

    @media (max-width:786px){
        display:none;
    }
    

`

const RightGroup = Styled.div `
    display:flex;
    p{
        padding-right:20px;
        font-weight:600;
        cursor:pointer;
    }
`
