import styled from "styled-components"

export const SeeMore = styled.div`
  width: 30%;
  font-size: 15px;
  color: #39afca;
  background-color: #fff;
  display: block;
  text-align: center;
  border: solid 1.5px #39afca;
  border-radius: 4px;
  padding: 0.5em;
  line-height: 1.5;
  text-decoration: none;
  margin: 1em auto 0;
  font-family: noto sans tc, helvetica neue, sans-serif;
  font-weight: bold;
  &:hover {
    color: #fff;
    background-color: #39afca;
    border: solid 1.5px #fff;
    transition: all 0.2s ease-in;
    cursor: pointer;
  }

  @media (min-width: 768px) {
    width: 20%;
  }

  @media (min-width: 1024px) {
    width: 20%;
  }
`
