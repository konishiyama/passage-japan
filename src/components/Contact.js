import React from "react"
import styled from "styled-components"
import { Button, Form, Input, SubIndex } from "../components/common"
// import { FirebaseContext} from '../components/Firebase'
// import { Editor } from '@tinymce/tinymce-react';

const P = styled.p`
  font-family: noto sans tc, helvetica neue, sans-serif;
  color: #222;
  font-size: 15px;
`

const TEXTAREA = styled.textarea`
  display: block;
  width: 100%;
  height: 8rem;
  padding: 8px;
  font-size: 12px;
  margin-bottom: 6px;
  border-radius: 4px;
  border: 1px solid #ddd;
  box-shadow: none;
`

const Contact = () => {
  return (
    <>
      <Form
        name="contact"
        method="post"
        action="/contact_success"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact" />
        <SubIndex>姓名</SubIndex>
        <Input required placeholder="Name" type="text" name="name" />
        <SubIndex>郵件地址</SubIndex>
        <Input required placeholder="Email" type="email" name="email" />
        <SubIndex>電話號碼</SubIndex>
        <Input placeholder="Phone" type="tel" name="tel" />
        <SubIndex>資訊內容</SubIndex>
        <TEXTAREA
          required
          placeholder="Inquiry"
          type="text"
          name="inquiry"
        ></TEXTAREA>
        <br></br>
        <Button type="submit" block>
          發送
        </Button>
      </Form>
    </>
  )
}

export default Contact
