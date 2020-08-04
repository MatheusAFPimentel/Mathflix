import styled from 'styled-components'

const Button = styled.button`
  color: black;
  border: 1px solid var(--white);
  background: #fff200;
  box-sizing: border-box;
  cursor: pointer;
  padding: 16px 24px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  outline: none;
  border-radius: 5px;
  text-decoration: none;
  display: inline-block;
  transition: opacity .3s;


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