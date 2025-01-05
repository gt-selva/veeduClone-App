import Navbar from '../components/Navbar'
import SectionOne from '../components/SectionOne'
import Cards from '../components/Cards'
import './App.css'
import icon from '../src/assets/icons/10016.jpg'
// import Posts from '../components/Posts'
import Posts1 from '../components/Posts1'
import Posts2 from '../components/Posts2'
import Posts3 from '../components/Posts3'
import Posts4 from '../components/Posts4'
import Posts5 from '../components/Posts5'
import Posts6 from '../components/Posts6'
import Posts7 from '../components/Posts7'
import Login from '../components/Login'
import Footer from '../components/Footer'

// var postsData = [
//   {
//     headline: 'Veedu For Buisness',
//     date: '23 December 2024.',
//     location: 'Sulur',
//     propertDetails: 'Excellent Ferro Cement Slab Work',
//     profileImg: '/src/assets/icons/10016.jpg',
//     postImage: []
//   },
// {
//   headline: 'Ezhil Arasu ',
//   date: '23 December 2024.',
//   location: 'Kinathukadavu ',
//   propertDetails: 'Bus Stand அருகில் குறைந்த விலையில் வீட்டுமனைகள் | 600Sqft முதல் | DTCP Approved Residential Plots'
// },
// {
//   headline: 'Veedu For Buisness',
//   date: '12 December 2024',
//   location: 'Sulur',
//   propertDetails: 'வெறும் 1 லட்சம் இருந்தால் Plot, 5 லட்சம் இருந்தால் வீடு வாங்கலாம் | Residential Plots and Villas...'
// },
// {
//   headline: 'Colors Green Tec',
//   date: '20 November 2024',
//   location: 'Coimbatore',
//   propertDetails: 'Residential Services - Best for Residential Apartments & Villas Commercial Services - Bio Tank best for Factories and Industrial....'
// },
// {
//   headline: 'Kupsa Coatings',
//   date: '19 November 2024',
//   location: 'Coimbatore South',
//   propertDetails: 'Our products always have the highest quality Wholesale & Retail- Contact to order +91 8778488238'
// }, {
//   headline: 'Handicrafts',
//   date: '19 November 2024',
//   location: 'Coimbatore South',
//   propertDetails: 'Simple and elegant, beautifully crafted coir products give an aesthetic appeal to any home or office. Crafted by men and women of picturesque coir villages the'
// }, {
//   headline: 'Colors Green Tec',
//   date: '11 November 2024',
//   location: 'Coimbatore South',
//   propertDetails: 'At Wide Range of Services Across Tamil Nadu . Contact - 8778488238.At GREEN ECO TANKS, we take pride in delivering products of the highest'
// }
// ]
function App() {
  // var postss = postsData.map(re => { return <Posts postData={re} /> })

  return (
    <>
      <Navbar />
      <div id='body-section'>
        <div>
          <SectionOne />
        </div>
        <div id='post-sec'>
          <Cards />
          {/* {postss} */}
          <Posts1 />
          <Posts2 />
          <Posts3 />
          <Posts4 />
          <Posts5 />
          <Posts6 />
          <Posts7 />
        </div>
      </div>
      <div id='footer-sec'>
        <Login />
        <Footer />
      </div>


    </>
  )
}

export default App
