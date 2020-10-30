import React from "react"
import styled from "styled-components"
import { Button, Form, Input, PageCover, SubIndex } from "../components/common"
// import { FirebaseContext} from '../components/Firebase'
// import { Editor } from '@tinymce/tinymce-react';

const TEXTAREA1 = styled.textarea`
  display: block;
  width: 100%;
  height: 4rem;
  padding: 8px;
  font-size: 14px;
  margin-bottom: 18px;
  border-radius: 4px;
  border: 1px solid #ddd;
  box-shadow: none;
`
const TEXTAREA2 = styled.textarea`
  display: block;
  width: 100%;
  height: 8rem;
  padding: 8px;
  font-size: 14px;
  margin-bottom: 18px;
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
        <p>下記フォームに必要事項をご記入の上、「送信」を押してください。</p>
        <p>
          お問い合わせ・注文内容を確認させていただき、お支払い・配送について当方からご連絡差し上げます。
        </p>
        <br></br>
        <input type="hidden" name="form-name" value="contact" />
        <SubIndex>お名前</SubIndex>
        <Input required placeholder="Name" type="text" name="name" />
        <SubIndex>ご住所</SubIndex>
        <Input required placeholder="Address" type="text" name="address" />
        <SubIndex>メールアドレス</SubIndex>
        <Input required placeholder="Email" type="email" name="email" />
        <SubIndex>注文品種・分量</SubIndex>
        <TEXTAREA1 required placeholder="Order" name="order" />
        <SubIndex>お問合せ内容</SubIndex>
        <TEXTAREA2 required placeholder="Inquiry" name="inquiry" />
        <Button type="submit" block>
          送信
        </Button>
      </Form>
    </>
  )
}

export default Contact
