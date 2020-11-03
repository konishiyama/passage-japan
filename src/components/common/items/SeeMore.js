import styled from "styled-components"

export const SeeMore = styled.div`
  width: 35%;
  font-size: 14px;
  color: #fff;
  background-color: #000000;
  display: block;
  text-align: center;
  border: solid 1px #000000;
  padding: 0.5em;
  line-height: 1.5;
  text-decoration: none;
  margin: 1em auto 0;
  &:hover {
    color: #000000;
    background-color: #fff;
    border: solid 1px #000000;
    transition: all 0.2s ease-in;
    cursor: pointer;
  }

  @media (min-width: 768px) {
    width: 20%;
  }

  @media (min-width: 1024px) {
    width: 15%;
  }
`
