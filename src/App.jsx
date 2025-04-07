import Header from './components/Header'
import Home from './sections/Home'
import About from './sections/About'
import Portfolio from './sections/Portfolio'
import Contact from './sections/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-red-500 text-gris-fonce">
      <Header />
      <main>
        <Home />
        <About />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App