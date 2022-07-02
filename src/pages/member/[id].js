import Link from "next/link"
import { useRouter } from "next/router"
import React, { useContext } from "react"
import { useDocumentDataOnce } from "react-firebase-hooks/firestore"
import renderHTML from "react-render-html"
import styled from "styled-components"
import { PostComments, BottomBar } from "../../components/common"
import { FirebaseContext } from "../../components/Firebase"
import CreateIcon from "@material-ui/icons/Create"

const PostTemplate = () => {
  const router = useRouter()

  const { user, firebase } = useContext(FirebaseContext)

  const [pageContext = null] = useDocumentDataOnce(
    router.query.id && firebase
      ? firebase.db.collection("memberposts").doc(router.query.id)
      : null,
    { idField: "id" }
  )

  const Container = styled.div`
    width: 100%;
    text-align: center;
    margin: 1rem auto 0;
    border-bottom: 1px solid #f4f4f4;
  `

  const SubContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    margin: 0 auto 1rem;
    div {
      text-align: left;
      color: #888;
    }
    span {
      text-align: left;
      color: #888;
    }
    span:before {
      content: "|";
      padding: 0 0.5em;
      font-size: 0.8em;
      color: #ccc;
    }
  `

  const Title = styled.h2`
    width: 100%;
    text-decoration: none;
    margin-bottom: 1rem;
    font-weight: 800;
    color: #02102e;
    text-align: left;
    letter-spacing: normal;
  `

  const Image = styled.img`
    width: 1.5em;
    height: 1.5em;
    text-align: left;
    object-fit: cover;
    border-radius: 50%;
    border: solid 1px;
    border-color: #eeeeee;
    margin-bottom: 0;
    margin-right: 0.2em;
  `

  const Content = styled.p`
    margin-top: 1rem;
  `

  const PostItem = styled.section``

  if (!pageContext) {
    return <p></p>
  }

  return (
    <section>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `3rem 1.5rem 1.45rem`,
        }}
      >
        <PostItem>
          <Container>
            <Title>{pageContext.title}</Title>
            <SubContainer>
              {!!pageContext.userPhoto && (
                <Image src={pageContext.userPhoto}></Image>
              )}
              {!pageContext.userPhoto && (
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/shohei-s-webapp-with-gatsby.appspot.com/o/site_default_images%2FuserDefaultPic.png?alt=media&token=2e1c678f-910a-4332-a6c5-6d3161aa16e6"
                  alt="userpic"
                ></Image>
              )}
              <div>{pageContext.username}</div>
              <span>{pageContext.date}</span>
            </SubContainer>
          </Container>
          <Content>{renderHTML(pageContext.content)}</Content>
        </PostItem>
        {!!firebase && (
          <PostComments firebase={firebase} postId={pageContext.id} />
        )}
        {!!user && (
          <BottomBar>
            <Link href="/member-write">
              <CreateIcon
                style={{
                  color: `white`,
                  backgroundColor: `#39AFCA`,
                  borderRadius: `50%`,
                  padding: `0.5rem`,
                  height: `3rem`,
                  width: `3rem`,
                  boxShadow: `rgba(0, 0, 0, 0.4) 0 2px 5px`,
                }}
              />
            </Link>
          </BottomBar>
        )}
      </div>
    </section>
  )
}

export default PostTemplate
