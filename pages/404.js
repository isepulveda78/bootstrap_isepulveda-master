import Layout from "components/Layout"
import NavBar from "components/NavBar"
import Footer from "components/Footer"
import Hero from "components/Hero"
import Link from "next/link"
export default function NotFoundPage() {
const divStyle = {
    height: '50vh'
}
  return (
    <>
     <NavBar />
      <Layout title="isepulveda | Porfolio" keywords="Israel Sepulveda's Web Portfolio" description="Web Applications built by Israel Sepulveda">
          <Hero header="404 - Page not found!" description="Oops. Did you do it again? Can't find what you need?" />
          <div className="text-center mt-5" style={ divStyle }>
            <Link className="btn btn-primary text-white btn-lg" href="/">Go Back</Link>
          </div>
      </Layout>
     <Footer />
    </>
  
  )
}

