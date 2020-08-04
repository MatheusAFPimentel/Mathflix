import styled from 'styled-components'

const Button = styled.button`
color: black;
border: 1px solid #fff200;
box-sizing: border-box;
cursor: pointer;
padding: 16px 24px;
font-style: normal;
font-weight: bold;
font-size: 20px;
outline: none;
border-radius: 5px;
text-decoration: none;
display: inline-block;
transition: opacity .3s;
background-color: #fff200;
left: 0;
top: 0;
fill: none;
stroke: #fff;
stroke-dasharray: 150 480;
stroke-dashoffset: 150;
transition: 0.35s ease-in-out;


&:hover{
    transition: 0.35s ease-in-out;
    background: #f6e58d;
    background-color: #8395a7;
    stroke-dashoffset: -980;
    color: yellow;
    font-size: 19px;
    font-weight: 100
}
`

export default Button