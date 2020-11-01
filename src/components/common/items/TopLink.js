import styled from "styled-components"

export const TopLink = styled.a`
  width: 35%;
  font-size: 14px;
  color: #800080;
  display: block;
  text-align: center;
  border: solid 1px #800080;
  padding: 0.5em;
  line-height: 1.5;
  text-decoration: none;
  margin-top: 3em;
  &:hover {
    color: #fff;
    background-color: #fdd000;
    border: solid 1px #fdd000;
    transition: all 0.2s ease-in;
  }

  @media (min-width: 768px) {
    width: 25%;
  }

  @media (min-width: 1024px) {
    width: 25%;
  }
`
