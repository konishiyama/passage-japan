import Link from "next/link"
import React from "react"
import styled from "styled-components"

const EachJob = styled.li`
  margin: 0 auto 2rem;
  box-shadow: rgb(212 217 214 / 50%) 1px 1px 16px;
  border-radius: 8px;
  width: 90%;
  cursor: pointer;
  &:hover {
    h3 {
      color: #39afca;
      transition: all 0.4s ease-in;
    }
  }
`
const A = styled.a`
  text-decoration: none;
`

const Container = styled.div`
  width: 100%;
  text-align: center;
  border-radius: 8px;
  p {
    text-align: left;
    color: #888;
    margin-bottom: 0.1rem;
  }
`

const ImgContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 8px 8px 0 0;
`

const Thumnail = styled.img`
  width: 100%;
  height: 9rem;
  object-fit: cover;
`

const TextContainer = styled.div`
  width: 90%;
  margin: 0.5rem auto;
`

const Title = styled.h3`
  padding-top: 0.5rem;
  height: 3.4em;
  font-size: 18px;
  line-height: 1.6;
  width: 100%;
  text-decoration: none;
  font-size: 18px;
  color: #222;
  text-align: left;
  letter-spacing: normal;
`

const Date = styled.p`
  width: 100%;
  font-size: 15px;
  text-decoration: none;
  letter-spacing: normal;
  padding-bottom: 0.7rem;
`

const JobsRoll = props => {
  return (
    <>
      <EachJob>
        <Link as={`/job/${props.id}`} href={"/job/[id]"}>
          <A>
            <Container>
              <ImgContainer>
                <Thumnail src={props.thumnail} alt="thumnail"></Thumnail>
              </ImgContainer>
              <TextContainer>
                <Title>{props.title}</Title>
                <Date>{props.date}</Date>
              </TextContainer>
            </Container>
          </A>
        </Link>
      </EachJob>
    </>
  )
}

export default JobsRoll
