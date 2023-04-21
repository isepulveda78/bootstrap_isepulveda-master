import Layout from "components/Layout"
import NavBar from "components/NavBar"
import Footer from "components/Footer"
import Hero from "components/Hero"
import Post from "components/Post"
import { getPortfolio } from "wordpress/wordpress-apis"

export default function Home({posts}) {

  const jsxPosts = posts.map((post) => {
    return <Post key={post.id} post={post} />
  })
  return (
    <>
     <NavBar />
      <Layout title="isepulveda | Porfolio" keywords="Israel Sepulveda's Web Portfolio" description="Web Developer based in Greensboro, North Carolina (NC). Here's a list of projects that I have worked on. Most projects were done with BigCommerce and WordPress.">
          <Hero header="Portfolio" description="These are some of the work that I have done over the years." />
            { posts.length === 0 && <h3>No Posts</h3> }
            { jsxPosts }
      </Layout>
     <Footer />
    </>
  
  )
}

export async function getStaticProps(){
  const posts = await getPortfolio()

  return {
    props: {
      posts
    },
    revalidate: 10,
  }
}