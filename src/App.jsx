import './App.css'
import Aside from './components/Aside'
import Footer from './components/Footer'
import Header from './components/Header'
import Section from './components/Section'

function App() {
  

  return (

    <>
    <Header/>
    <main className='common mb-3 row'>
      <Aside/>
      <Section/>
    </main>
    <Footer/>
    
     
    </>
  )
}

export default App
