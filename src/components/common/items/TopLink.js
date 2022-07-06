import styled from "styled-components"

export const TopLink = styled.a`
  width: 40%;
  font-size: 15px;
  color: #fff;
  display: block;
  text-align: center;
  border: solid 1px #fff;
  border-radius: 6px;
  padding: 0.5em;
  line-height: 1.5;
  text-decoration: none;
  margin-top: 3em;
  &:hover {
    color: #39afca;
    background-color: #fff;
    border: solid 1px #fff;
    transition: all 0.2s ease-in;
  }

  @media (min-width: 768px) {
    width: 25%;
  }

  @media (min-width: 1024px) {
    width: 25%;
  }
`
