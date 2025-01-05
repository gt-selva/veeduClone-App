import Navbar from '../components/Navbar'
import SectionOne from '../components/SectionOne'
import Cards from '../components/Cards'
import './App.css'
import icon from '../src/assets/icons/10016.jpg'
import Posts1 from '../components/Posts1'
import Posts2 from '../components/Posts2'
import Posts3 from '../components/Posts3'
import Posts4 from '../components/Posts4'
import Posts5 from '../components/Posts5'
import Posts6 from '../components/Posts6'
import Posts7 from '../components/Posts7'

function App() {
  return (
    <>
      <Navbar />
      <SectionOne show={true}/> 
      <Cards />
      <Posts1 />
      <Posts2 />
      <Posts3 />
      <Posts4 />
      <Posts5 />
      <Posts6 />
      <Posts7 />
    </>
  )
}

export default App
