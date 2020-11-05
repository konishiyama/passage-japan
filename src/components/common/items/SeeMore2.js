import styled from "styled-components"

export const SeeMore2 = styled.div`
  width: 35%;
  font-size: 15px;
  color: #fff;
  background-color: #000000;
  display: block;
  text-align: center;
  border: solid 1px #000000;
  padding: 0.5em;
  line-height: 1.5;
  text-decoration: none;
  margin: 1em auto 0;
  font-family: "游明朝", "Yu Mincho", "游明朝体", "YuMincho",
    "ヒラギノ明朝 Pro W3", "Hiragino Mincho Pro", "HiraMinProN-W3",
    "Roboto Slab", Garamond, "Times New Roman", "HGS明朝E", "ＭＳ Ｐ明朝",
    "MS PMincho", serif;
  &:hover {
    color: #000000;
    background-color: #fff;
    border: solid 1px #000000;
    transition: all 0.2s ease-in;
    cursor: pointer;
  }

  @media (min-width: 768px) {
    width: 16%;
  }

  @media (min-width: 1024px) {
    width: 12%;
  }
`
