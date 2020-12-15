import React from "react"
import styled from "styled-components"
import { Button, Form, Input, PageTitle, SubIndex } from "../components/common"

const TEXTAREA1 = styled.textarea`
  display: block;
  width: 100%;
  height: 4rem;
  padding: 8px;
  font-size: 14px;
  margin-bottom: 12px;
  border: 1px solid #ddd;
  box-shadow: none;
`

const TEXTAREA2 = styled.textarea`
  display: block;
  width: 100%;
  height: 8rem;
  padding: 8px;
  font-size: 14px;
  margin-bottom: 24px;
  border: 1px solid #ddd;
  box-shadow: none;
`

const Contact = () => {
  return (
    <>
      <section>
        <PageTitle>
          <span>お問合せ・ご注文</span>
          <p>Contact</p>
        </PageTitle>
        <Form
          name="contact"
          method="post"
          action="/contact_success"
          data-netlify="true"
          netlify
          netlify-honeypot="bot-field"
          // hidden
        >
          <br></br>
          <p style={{ fontSize: "15px" }}>
            下記フォームに必要事項をご記入の上、「送信」を押してください。
          </p>
          <p style={{ fontSize: "15px" }}>
            お問い合わせ・注文内容を確認させていただき、お支払い・配送について当方からご連絡差し上げます。
          </p>
          <br></br>
          <input type="hidden" name="form-name" value="contact" />
          <SubIndex>お名前</SubIndex>
          <Input required placeholder="Name" type="text" name="name" />
          <SubIndex>ご住所</SubIndex>
          <Input placeholder="Address" type="text" name="address" />
          <SubIndex>メールアドレス</SubIndex>
          <Input required placeholder="Email" type="email" name="email" />
          <SubIndex>電話番号</SubIndex>
          <Input required placeholder="Phone" type="tel" name="tel" />
          <SubIndex>注文品種・分量</SubIndex>
          <TEXTAREA1 placeholder="Order" type="text" name="order" />
          <SubIndex>お問合せ内容</SubIndex>
          <TEXTAREA2
            required
            placeholder="Inquiry"
            type="text"
            name="inquiry"
          />
          <Button type="submit" block>
            Send
          </Button>
        </Form>
      </section>
    </>
  )
}

export default Contact
