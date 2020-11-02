import styled from "styled-components"

export const SubTitle = styled.div`
  margin: 5rem auto 3.5rem;
  text-align: center;

  span {
    font-family: "Times New Roman", "游明朝", "Yu Mincho", "游明朝体",
      "YuMincho", "ヒラギノ明朝 Pro W3", "Hiragino Mincho Pro", "HiraMinProN-W3",
      "HGS明朝E", "ＭＳ Ｐ明朝", "MS PMincho", serif;
    font-weight: bold;
    letter-spacing: 0.03em;
    font-size: 20px;
    color: #444444;
    margin: 0 auto;
  }
  span:after {
    content: "";
    display: block;
    height: 1px;
    width: 65px;
    margin: 1.5rem auto 0;
    background-color: #800080;

    @media (min-width: 768px) {
      width: 75px;
    }

    @media (min-width: 1024px) {
      width: 85px;
    }
  }
`
