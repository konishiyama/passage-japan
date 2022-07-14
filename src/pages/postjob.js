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

const PostJob = () => {
  const [titleValues, setTitleValues] = useState({ title: "" })
  const [contentValues, setContentValues] = useState({ content: "" })
  const { firebase } = useContext(FirebaseContext)
  const [errorMessage, setErrorMessage] = useState("")
  const [image, setImage] = useState("")
  const [timeStamp, setTimeStamp] = useState("")
  const [jobNumber, setJobNumber] = useState("")
  const router = useRouter()

  function handleSubmit(e) {
    e.preventDefault()
    firebase
      .setImage({
        image: image,
      })
      .then(imageUrl => {
        firebase.postJob({
          title: titleValues.title,
          content: contentValues.content,
          imageUrl: imageUrl,
          date: timeStamp,
          jobNum: jobNumber,
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
    firebase.getJobNumbers().then(r => {
      setJobNumber(r.docs.length + 1)
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
          <ErrorMessage>Failed posting job properly</ErrorMessage>
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

export default PostJob
