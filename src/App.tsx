import Header from './components/Header'
import Hero from './components/Hero'
import Work from './components/Work'
import Experience from './components/Experience'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Work />
        <Experience />
      </main>
      <Footer />
    </>
  )
}
