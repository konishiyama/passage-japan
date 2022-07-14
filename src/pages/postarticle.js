import { Editor } from "@tinymce/tinymce-react"
import { useRouter } from "next/router"
import React, { useContext, useState } from "react"
import {
  Button,
  ErrorMessage,
  Form,
  Input,
  PageTitle,
  SubIndex,
} from "../components/common"
import { FirebaseContext } from "../components/Firebase"

const PostArticleTest = () => {
  const [titleValues, setTitleValues] = useState({ title: "" })
  const [contentValues, setContentValues] = useState({ content: "" })
  const { firebase } = useContext(FirebaseContext)
  const [errorMessage, setErrorMessage] = useState("")
  const [writerName, setWriterName] = useState("")
  const [image, setImage] = useState("")
  const [timeStamp, setTimeStamp] = useState("")
  const [articleNumber, setArticleNumber] = useState("")
  const router = useRouter()
  const profilePicPath =
    "https://firebasestorage.googleapis.com/v0/b/passage-76e68.appspot.com/o/images%2Fprofile_pics%2FprofilePic-"
  const yoshiPath =
    "Yoshi.jpg?alt=media&token=cdf6057e-10cc-4fc7-9b97-64ba1b5c192a"
  const liuPath = "Liu.jpg?alt=media&token=c9b3774f-fab2-465a-9dd5-74510c72ac8d"
  const huangPath =
    "Huang.jpg?alt=media&token=c9b3774f-fab2-465a-9dd5-74510c72ac8d"
  const passagePath =
    "Passage.jpg?alt=media&token=cecad4f3-1975-4971-94f4-22cb4fb0905a"
  let writerPhoto = ""

  function handleWriterInfo(e) {
    const writerName = e.target.value
    setWriterName(writerName)
    setTimeStamp(new Date().toLocaleDateString())
  }

  function handleSubmit(e) {
    if (writerName == "Yoshi") {
      writerPhoto = profilePicPath + yoshiPath
    } else if (writerName == "Liu") {
      writerPhoto = profilePicPath + liuPath
    } else if (writerName == "Huang") {
      writerPhoto = profilePicPath + huangPath
    } else {
      writerPhoto = profilePicPath + passagePath
    }
    e.preventDefault()
    firebase
      .setImage({
        image: image,
      })
      .then(imageUrl => {
        firebase.postArticle({
          writerName: writerName,
          writerPhoto: writerPhoto,
          title: titleValues.title,
          content: contentValues.content,
          imageUrl: imageUrl,
          date: timeStamp,
          articleNum: articleNumber,
        })
      })
      .then(() => router.push("/"))
      .catch(error => {
        setErrorMessage(error.message)
      })
  }

  function handleInputTitleChange(e) {
    // e.persist();
    setErrorMessage("")
    setTitleValues({
      title: e.target.value,
    })
    setTimeStamp(new Date().toLocaleDateString())
    firebase.getArticleNumbers().then(r => {
      setArticleNumber(r.docs.length + 1)
    })
  }

  function handleEditorChange(e) {
    setContentValues({
      content: e.target.getContent(),
    })
    setTimeStamp(new Date().toLocaleDateString())
  }

  function handleImage(e) {
    const image = e.target.files[0]
    setImage(image)
    setTimeStamp(new Date().toLocaleDateString())
  }

  return (
    <section>
      <PageTitle>
        <span>投稿專欄</span>
        <p>Post Article</p>
      </PageTitle>
      <Form onSubmit={handleSubmit}>
        <SubIndex>作成者</SubIndex>
        <select
          required
          name="writerName"
          id="writerName"
          onChange={handleWriterInfo}
          value={writerName}
          defaultValue={"-"}
          placeholder="Select writer name"
          style={{
            marginBottom: `4vw`,
            fontSize: `20px`,
          }}
        >
          <option value="-">-</option>
          <option value="Yoshi">Yoshi</option>
          <option value="Liu">Liu</option>
          <option value="Huang">Huang</option>
          <option value="Passage">Passage</option>
        </select>
        <SubIndex>COVER IMAGE</SubIndex>
        <input
          required
          type="file"
          onChange={handleImage}
          style={{
            marginBottom: `4vw`,
          }}
        />
        <br></br>
        <SubIndex>TITLE</SubIndex>
        <Input
          required
          placeholder="title"
          type="text"
          onChange={handleInputTitleChange}
        />
        <br></br>
        <SubIndex>CONTENT</SubIndex>
        <div className="App">
          <Editor
            init={{
              height: 500,
              menubar: false,
              plugins: [
                "advlist autolink lists link image",
                "charmap print preview anchor help",
                "searchreplace visualblocks code",
                "insertdatetime media table paste wordcount",
              ],
              toolbar:
                "undo redo | formatselect | forecolor | bold italic underline | \
              alignleft aligncenter alignright | \
              bullist numlist outdent indent | help",
            }}
            apiKey="n5flvaer5akndukhxw941fwbvz69k09cq48w1bhe57jq4s65"
            onChange={handleEditorChange}
            required
          />
        </div>
        {!!errorMessage && (
          <ErrorMessage>Failed posting article properly</ErrorMessage>
        )}
        <br></br>
        <Button type="submit" block>
          Post
        </Button>
      </Form>
      <br />
      <br />
      <br></br>
    </section>
  )
}

export default PostArticleTest
