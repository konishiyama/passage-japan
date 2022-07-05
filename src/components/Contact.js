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

const TEXTAREA1 = styled.textarea`
  display: block;
  width: 100%;
  height: 4rem;
  padding: 8px;
  font-size: 14px;
  margin-bottom: 12px;
  border-radius: 4px;
  border: 1px solid #ddd;
  box-shadow: none;
`
const TEXTAREA2 = styled.textarea`
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
        <P>下記フォームに必要事項をご記入の上、「送信」を押してください。</P>
        <P>
          お問い合わせ・注文内容を確認させていただき、お支払い・配送について当方からご連絡差し上げます。
        </P>
        <br></br>
        <input type="hidden" name="form-name" value="contact" />
        <SubIndex>お名前</SubIndex>
        <Input required placeholder="Name" type="text" name="name" />
        <SubIndex>メールアドレス</SubIndex>
        <Input required placeholder="Email" type="email" name="email" />
        <SubIndex>電話番号</SubIndex>
        <Input placeholder="Phone" type="tel" name="tel" />
        <SubIndex>お問合せ内容</SubIndex>
        <TEXTAREA2
          required
          placeholder="Inquiry"
          type="text"
          name="inquiry"
        ></TEXTAREA2>
        <br></br>
        <Button type="submit" block>
          送信
        </Button>
      </Form>
    </>
  )
}

export default Contact
