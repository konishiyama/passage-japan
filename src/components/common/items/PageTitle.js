import styled from "styled-components"

export const PageTitle = styled.div`
  margin: 0rem auto 2rem;
  padding-top: 6rem;
  text-align: center;
  display: block;
  @media (min-width: 1024px) {
    padding-top: 3rem;
  }
  span {
    display: inline-block;
    letter-spacing: 0.03em;
    font-size: 20px;
    color: #222;
    margin: 0 auto 0.5em;
  }
  p {
    letter-spacing: 0.03em;
    font-size: 12px;
    color: #808080;
  }
  p:after {
    content: "";
    display: block;
    height: 1.8px;
    width: 65px;
    margin: 0.8rem auto 0;
    background-color: #39afca;

    @media (min-width: 768px) {
      width: 75px;
    }

    @media (min-width: 1024px) {
      width: 85px;
    }
  }
`
