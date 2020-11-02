import "react-slideshow-image/dist/styles.css"
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"
import Layout from "../components/layout"
import "../components/layout.css"
import "../../public/fonts/style.css"

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
