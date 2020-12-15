import React from "react"
import { SubTitle } from "../components/common"

const ContactSuccess = () => {
  return (
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0 0.8rem 1.45rem`,
      }}
    >
      <SubTitle>
        <span>Success!!</span>
      </SubTitle>
      <p>お問い合わせ内容が正常に送信されました。</p>
      <p>
        通常、4営業日以内にお知らせいただいたメールアドレス宛にご回答いたしますが、万一返答のない場合は、お手数ですが再度お問い合わせくださいますようお願いします。
      </p>
      <br></br>
      <br></br>
      <a href="/">
        <p
          style={{
            textAlign: `center`,
            textDecoration: `none`,
          }}
        >
          ホームに戻る
        </p>
      </a>

      <br></br>
      <br></br>
    </div>
  )
}

export default ContactSuccess
