import '../components/SectionOne.css'
import image from '../src/assets/icons/10003.png'
import editPng from '../src/assets/icons/edit.png'
import forSale from '../src/assets/icons/10004.jpg'
import forRent from '../src/assets/icons/10005.jpg'
import land from '../src/assets/icons/10006.jpg'
import model from '../src/assets/icons/10007.jpg'
import map from '../src/assets/icons/10008.png'
import Add from '../src/assets/icons/10009.png'
import dropDown from '../src/assets/icons/down-chevron.png'
function SectionOne(){
    return(
        <>
    <div id='head-section'>
             <div className='container'>
                 <div id='head-section'>
                 <div id='section-1'>
                 <div><img src={image} width='35px' alt="" /> </div>
                 <div><p>Choose Location</p></div> 
                 <div><img src={editPng} width='20px' alt="" /></div>
                 <button className='btn btn-primary'>All</button>
                 </div>
        
                 <div id='section-2'>
                     
                     <div id='property-button'>
                         <h2 id='hi'className='btn'>Property</h2>
                         <h2 className='btn'>Professionals</h2>
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
        
                  <div id='search-btn'>
                         <button className='btn btn-primary'>Search</button>
                     </div>
        
                     <div id='map-section'>
                         <img src={map} width='50px' alt="map image" />
                         <p>Use Map</p>
                     </div>
              </div>
        
                     <div id='terms-services'>
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

    <div id='second-part'>
        <div>
         <img src={Add} width='50px' alt="" />
         </div>
         <div>
            <p>Create New Post</p>
            <p>Share your designs, completed projects, new updates, etc...</p>
         </div>
         <div><img src={dropDown} width='30px' alt="drop down image" /></div>
     </div>
        </>
    );
}
export default SectionOne;

