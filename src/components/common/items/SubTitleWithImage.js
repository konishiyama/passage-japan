import styled from "styled-components"

export const SubTitleWithImage = styled.img`
  margin: 0 auto;
  text-align: center;
  width: 30%;

  span {
    font-family: "游明朝", "Yu Mincho", "游明朝体", "YuMincho",
      "ヒラギノ明朝 Pro W3", "Hiragino Mincho Pro", "HiraMinProN-W3",
      "Roboto Slab", Garamond, "Times New Roman", "HGS明朝E", "ＭＳ Ｐ明朝",
      "MS PMincho", serif;
    letter-spacing: 0.03em;
    font-size: 20px;
    color: #222;
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
