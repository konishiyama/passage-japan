import styled from "styled-components"

export const SubTitle = styled.div`
  margin: 5rem auto 3.5rem;
  text-align: center;

  span {
    font-family: noto sans tc, helvetica neue, sans-serif;
    font-weight: bold;
    letter-spacing: 0.03em;
    font-size: 20px;
    color: #222;
    margin: 0 auto;
  }
  span:after {
    content: "";
    display: block;
    height: 2px;
    width: 65px;
    margin: 1.5rem auto 0;
    background-color: #39afca;

    @media (min-width: 768px) {
      width: 75px;
    }

    @media (min-width: 1024px) {
      width: 85px;
    }
  }
`
