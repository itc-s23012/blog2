import Header from 'components/header'
import Footer from 'components/footer'
import Container from 'components/container'

const Layout = ({ children }) => {
  return (
    <>
      <Header />

      <main>
        <Container>{children}</Container>
      </main>

      <Footer />
    </>
  )
}

export default Layout
