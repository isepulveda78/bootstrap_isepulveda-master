import '../styles/Custom.scss'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
          <Component {...pageProps} />
          <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"></script>
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js"></script>
    </>
  ) 
}
