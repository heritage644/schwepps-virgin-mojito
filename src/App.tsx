import NavBar from './components/navbar'
import './App.css'
import Cocktail from './components/cocktail'
import Hero from './components/hero'
import About from './components/about'
import Art from './components/art'
import Menu from './components/menu'
import Footer from './components/footer'
function App() {
  return(
    <>
    <div className="site-content">
       <NavBar/>
    <Hero/>
    <Cocktail/>
    <About/>
   <Art/>
   <Menu/>
   <Footer/>
    </div>
  <div className='w-full items-center flex justify-center h-screen md:hidden'>
      <div className='small-screen-warining text-[25px] w-70  text-indigo-200 text-center '>
      Please use a desktop or a bigger screen to view this website.

    </div>
  </div>
   

    </>
  )
}

export default App
