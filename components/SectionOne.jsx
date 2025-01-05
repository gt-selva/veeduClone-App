import '../components/SectionOne.css'
import App from '../src/App'
import profileIm from '../src/assets/veedu images/10002.jpg'
import profileImg1 from '../src/assets/icons/10016.jpg'
import profileImg2 from '../src/assets/icons/10016.jpg'
import image from '../src/assets/icons/10003.png'
import editPng from '../src/assets/icons/edit.png'
import forSale from '../src/assets/icons/10004.jpg'
import forRent from '../src/assets/icons/10005.jpg'
import land from '../src/assets/icons/10006.jpg'
import model from '../src/assets/icons/10007.jpg'
import map from '../src/assets/icons/10008.png'
import location from '../src/assets/icons/10035.svg'


function SectionOne() {

    return (
        <>
            <div id='head-section'>
                <div className='container'>
                    <div id='head-section'>
                        <div id='section-1'>
                            <div onClick={() => {
                                var button = document.getElementById('back-btn');
                                var section = document.querySelector('.sec-2');
                                var term = document.querySelector('.terms-services');
                                var loc = document.getElementById('locations');
                                var card = document.getElementById('carouselExampleRide')
                                var posts = document.getElementById('posts');
                                var postSec = document.getElementById('post-sec')
                                var secondPart = document.getElementById('second-part')

                                if (term && term.style.display === "flex") {
                                    loc.style.display = section.style.display = term.style.display = "none"
                                    loc.style.marginLeft = section.style.marginLeft = term.style.marginLeft = "-800px"
                                    button.style.marginLeft = '300px'
                                    button.style.transition = '1s'
                                    card.style.top = "80px"
                                    posts.style.top = "29px"
                                    postSec.style.marginLeft = '-320px'
                                    postSec.style.transition = '3s'
                                    section.style.marginLeft = secondPart.style.marginLeft = '-320px'
                                    secondPart.style.transition = '3s'
                                } else {
                                    // loc.style.transitionDelay = section.style.transitionDelay = term.style.transitionDelay = "1s"
                                    loc.style.marginLeft = section.style.marginLeft = term.style.marginLeft = "0px"
                                    section.style.transition = '1s'
                                    button.style.marginLeft = '0px'
                                    button.style.transition = '0s'
                                    loc.style.display = term.style.display = "flex"
                                    card.style.display = section.style.display = "block"
                                    card.style.top = "-400px"
                                    posts.style.top = "-400px"
                                    postSec.style.marginLeft = '0px'
                                    secondPart.style.marginLeft = '0px'

                                }
                                //    section.classList.toggle('hide')
                                //    term.classList.toggle('hide')


                            }} id='back-btn'><img src={image} width='35px' alt="" /> </div>
                            <div id='locations'>
                                <div><p>Choose Location</p></div>
                                <div><img src={editPng} width='20px' alt="" /></div>
                                <button className='btn btn-primary'>All</button>
                            </div>
                        </div>

                        <div class='sec-2' id='section-2'>

                            <div id='property-button'>
                                <h2 onClick={() => {
                                    var property = document.getElementById('hi')
                                    var prof = document.getElementById('prof')
                                    var porper = document.getElementById('property')
                                    var professionals = document.getElementById('professional-users')
                                    var button = document.getElementById('search-btn')
                                    button.style.marginTop = '0px'
                                    professionals.style.display = 'none'
                                    property.style.backgroundColor = 'green'
                                    prof.style.backgroundColor = ''
                                    porper.style.display = 'flex'
                                }} id='hi' className='btn'>Property</h2>

                                <h2 onClick={() => {
                                    var porper = document.getElementById('property')
                                    var property = document.getElementById('hi')
                                    var prof = document.getElementById('prof')
                                    var professionals = document.getElementById('professional-users')
                                    var button = document.getElementById('search-btn')
                                    porper.style.display = 'none'
                                    button.style.marginTop = '-127px'
                                    professionals.style.display = 'block'
                                    property.style.backgroundColor = ''
                                    prof.style.backgroundColor = 'green'
                                }} id='prof' className='btn'>Professionals</h2>
                            </div>


                            <div id='property'>
                                <div id='property-section'>
                                    <div id="img-sec">
                                        <img src={forSale} width="60px" alt="forSale" />
                                        <h5>For Sale</h5>
                                    </div>
                                </div>

                                <div id='property-section'>
                                    <div id="img-sec">
                                        <img src={forRent} width="60px" alt="forSale" />
                                        <h5>For Rent</h5>
                                    </div>
                                </div>

                                <div id='property-section'>
                                    <div id="img-sec">
                                        <img src={land} width="60px" alt="forSale" />
                                        <h5>Land/Plot</h5>
                                    </div>
                                </div>

                                <div id='property-section'>
                                    <div id="img-sec">
                                        <img src={model} width="60px" alt="forSale" />
                                        <h5>Model House</h5>
                                    </div>
                                </div>
                            </div>

                            <div id='professional-users'>
                                <div id='search-items'>
                                    <input type="text" placeholder='Search Professionals' />
                                </div>

                                <div id='users'>
                                    <div id='user-detail'>
                                        <img src={profileImg1} width='35px' alt="" />
                                        <h6>Raju Ram</h6>
                                    </div>
                                    <div id='user-location'>
                                        <img src={location} width='25px' alt="" />
                                        <button className='btn btn-primary w-20'>Follow</button>
                                    </div>
                                </div>

                                <div id='users'>
                                    <div id='user-detail'>
                                        <img src={profileImg2} width='35px' alt="" />
                                        <h6>Ezhil Arasu</h6>
                                    </div>
                                    <div id='user-location'>
                                        <img src={location} width='25px' alt="" />
                                        <button className='btn btn-primary w-20'>Follow</button>
                                    </div>
                                </div>

                                <div id='users'>
                                    <div id='user-detail'>
                                        <img src={profileIm} width='35px' alt="" />
                                        <h6>Raju Ram</h6>
                                    </div>
                                    <div id='user-location'>
                                        <img src={location} width='25px' alt="" />
                                        <button className='btn btn-primary w-20'>Follow</button>
                                    </div>
                                </div>




                            </div>

                            <div id='search-btn'>
                                <button className='btn btn-primary'>Search</button>
                            </div>

                            <div id='map-section'>
                                <img src={map} width='50px' alt="map image" />
                                <p>Use Map</p>
                            </div>
                        </div>

                        <div class='terms-services'>
                            <p>Privacy . </p>
                            <p>Terms  .</p>
                            <p>About  .</p>
                            <p>More...</p>
                            <p>Veedu App @ 2024</p>
                        </div>

                    </div>
                </div>

                {/* section part 2 */}
            </div>


        </>
    );
}
export default SectionOne;

