import Layout from "components/Layout"
import NavBar from "components/NavBar"
import Footer from "components/Footer"
import Hero from "components/Hero"
import Post from "components/Post"
import { getSideprojects } from "wordpress/wordpress-apis"

export default function Home({posts}) {

  const jsxPosts = posts.map((post) => {
    return <Post key={post.id} post={post} />
  })
  return (
    <>
     <NavBar />
      <Layout title="isepulveda | Side Projects" keywords="Israel Sepulveda's Web Portfolio" description="Web Developer based in Greensboro, North Carolina (NC). Here's a list of some of my side projects that are built with React.js">
          <Hero header="Side Projects" description="These are side projects to keep me updated on new web tech." />
            { posts.length === 0 && <h3>No Posts</h3> }
            { jsxPosts }
      </Layout>
     <Footer />
    </>
  
  )
}

export async function getStaticProps(){
  const posts = await getSideprojects()

  return {
    props: {
      posts
    },
    revalidate: 10,
  }
}