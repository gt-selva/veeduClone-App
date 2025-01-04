import Navbar from '../components/Navbar'
import SectionOne from '../components/SectionOne'
import Cards from '../components/Cards'
import './App.css'
import icon from '../src/assets/icons/10016.jpg'
import Posts1 from '../components/Posts1'
import Posts2 from '../components/Posts2'
import Posts3 from '../components/Posts3'

function App() {
  var homeData = {
    profileImg:icon,
    h3:'Veedu for Buisness'
  }
  return (
    <>
      <Navbar />
      <SectionOne /> 
      <Cards />
      <Posts1 />
      <Posts2 />
      <Posts3/>
    </>
  )
}

export default App
