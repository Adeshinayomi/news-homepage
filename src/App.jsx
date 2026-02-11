import { Header } from './component/Header.jsx'
import { Hero } from './component/Hero.jsx'
import { New } from './component/New.jsx'
import { Last } from './component/Last.jsx'
import './App.css'

function App() {
  return(
    <div className='md:w-[90%] md:mx-auto'>
      <Header />
      <section className='md:flex'>
        <Hero />
        <New />
      </section>
      <Last />
    </div>
  )
}

export default App
