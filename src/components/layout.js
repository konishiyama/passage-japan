import PropTypes from "prop-types"
import React from "react"
import { FirebaseContext, useAuth } from "./Firebase"
import Footer from "./Footer"
import Header from "./header"
import { NextSeo } from "next-seo"

const Layout = ({ children }) => {
  const { user, firebase, loading } = useAuth()

  return (
    <FirebaseContext.Provider value={{ user, firebase, loading }}>
      <NextSeo
        title="ふくむらさきの山口農園"
        description="自然豊かな栃木県日光市にて、ふくむらさきの栽培を中心とした有機農業を営む山口農園の公式ウェブサイトです。"
        canonical="https://yamaguchi-farms.com/"
        openGraph={{
          url: "https://yamaguchi-farms.com/",
          title: "ふくむらさきの山口農園",
          description:
            "ふくむらさきの栽培を中心とした有機農業を営む山口農園の公式ウェブサイトです。",
          images: [
            {
              url:
                "https://firebasestorage.googleapis.com/v0/b/shohei-s-webapp-with-gatsby.appspot.com/o/site_default_images%2FS__34308262.jpg?alt=media&token=93f4afce-ebc0-40fe-a52e-ecf5fe77dde3",
              width: 800,
              height: 600,
              alt: "Yamaguchi's Farm",
            },
            {
              url:
                "https://firebasestorage.googleapis.com/v0/b/shohei-s-webapp-with-gatsby.appspot.com/o/site_default_images%2FS__34308262.jpg?alt=media&token=93f4afce-ebc0-40fe-a52e-ecf5fe77dde3",
              width: 900,
              height: 800,
              alt: "Yamaguchi's Farm",
            },
          ],
          site_name: "ふくむらさきの山口農園",
        }}
      />
      <Header />
      <main>{children}</main>
      <Footer />
    </FirebaseContext.Provider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
