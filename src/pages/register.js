import { useRouter } from "next/router"
import React, { useContext, useState } from "react"
import styled from "styled-components"
import {
  Button,
  ErrorMessage,
  Form,
  FormContainer,
  Input,
  SmallP,
  SubIndex,
  Title,
  UploadButton,
  Message,
} from "../components/common"
// import { FirebaseContext} from '../components/Firebase'
import { FirebaseContext } from "../components/Firebase"

const A = styled.a`
  text-decoration: none;
  color: #39afca;
  &:hover {
    color: #39afca;
    cursor: pointer;
    text-decoration: underline;
  }
`

const Register = () => {
  const { firebase } = useContext(FirebaseContext)
  const [errorMessage, setErrorMessage] = useState("")

  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    username: "",
  })
  const [fileErrorMessage, setFileErrorMessage] = useState("")
  const [fileUploaded, setFileUploaded] = useState("")
  const [image, setImage] = useState("")
  const [imageUrl, setImageUrl] = useState("")

  const router = useRouter()

  function handleInputChange(e) {
    e.persist()
    setErrorMessage("")
    setFormValues(currentValues => ({
      ...currentValues,
      [e.target.name]: e.target.value,
    }))
  }

  function handleSubmit(e) {
    e.preventDefault()

    if (formValues.password === formValues.confirmPassword) {
      firebase
        .register({
          username: formValues.username,
          email: formValues.email,
          password: formValues.password,
          photoURL: imageUrl,
        })
        .then(() => router.push("/"))
        .catch(error => {
          setErrorMessage(error.message)
        })
    } else {
      setErrorMessage("Password and Confirm Password do not match")
    }
  }

  function onSubmitFile(e) {
    e.preventDefault()
    if (image === "") {
      setFileErrorMessage("Error File Uploading!")
    }
    firebase.storage
      .ref(`/images/${image.name}`)
      .put(image)
      .then(complete, setFileErrorMessage(""), setFileUploaded("File Uploaded"))
      .catch(error => {
        setFileErrorMessage(error.message)
      })
  }

  function complete() {
    firebase.storage
      .ref("images")
      .child(image.name)
      .getDownloadURL()
      .then(fireBaseUrl => {
        setImageUrl(fireBaseUrl)
      })
  }

  function handleImage(e) {
    const image = e.target.files[0]
    setImage(image)
  }

  return (
    <section>
      <div
        style={{
          margin: `0 auto`,
          // maxWidth: 960,
          padding: `4rem 0rem 1.45rem`,
        }}
      >
        <FormContainer>
          <Title>????????????</Title>
          <br></br>
          <Form required onSubmit={onSubmitFile}>
            <SubIndex>????????????????????????</SubIndex>
            <input
              type="file"
              onChange={handleImage}
              style={{
                marginBottom: `1vw`,
              }}
            />
            <br></br>
            <UploadButton>??????</UploadButton>
            {!!fileUploaded && (
              <Message>?????????????????????????????????????????????</Message>
            )}
            {!!fileErrorMessage && (
              <ErrorMessage>
                ??????????????????????????????????????????????????????????????????
              </ErrorMessage>
            )}
          </Form>
          <br></br>
          <Form onSubmit={handleSubmit}>
            <SubIndex>???????????????</SubIndex>
            <Input
              onChange={handleInputChange}
              value={formValues.username}
              placeholder="username"
              type="text"
              required
              name="username"
            />
            <SubIndex>EMAIL</SubIndex>
            <Input
              onChange={handleInputChange}
              value={formValues.email}
              placeholder="email"
              type="email"
              required
              name="email"
            />
            <SubIndex>???????????????</SubIndex>
            <Input
              onChange={handleInputChange}
              value={formValues.password}
              placeholder="password"
              type="password"
              required
              minLength={6}
              name="password"
            />
            <SubIndex>????????????????????????</SubIndex>
            <Input
              onChange={handleInputChange}
              value={formValues.confirmPassword}
              placeholder="confirm password"
              type="password"
              required
              minLength={6}
              name="confirmPassword"
            />
            {!!errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
            <br></br>
            <Button
              type="submit"
              block
              style={{
                fontSize: `14px`,
              }}
            >
              ???????????????????????????????????????
            </Button>
          </Form>
          <br></br>
          <SmallP>
            <p>
              ????????????????????????
              <A href="/terms" target="_blank">
                {" "}
                ?????????
              </A>
            </p>
          </SmallP>
          <SmallP>
            <p>
              ????????????????????????????????????
              <A to="/">????????????</A>
            </p>
          </SmallP>
          <br />
        </FormContainer>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
    </section>
  )
}

export default Register
