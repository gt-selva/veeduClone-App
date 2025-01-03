import './Cards.css'
import homeImg1 from '../src/assets/veedu images/10026.jpg'
import homeImg2 from '../src/assets/veedu images/10027.jpg'
import homeImg3 from '../src/assets/veedu images/10028.jpg'
import homeImg4 from '../src/assets/veedu images/10029.jpg'
import homeImg5 from '../src/assets/veedu images/10030.jpg'
import homeImg6 from '../src/assets/veedu images/10031.jpg'
import homeImg7 from '../src/assets/veedu images/10032.jpg'
import homeImg8 from '../src/assets/veedu images/10033.jpg'
import homeImg9 from '../src/assets/veedu images/10034.jpg'
import mapIcon from '../src/assets/icons/10035.svg'
import bed from '../src/assets/icons/10010.svg'
import bath from '../src/assets/icons/10011.svg'
import sqFeet from '../src/assets/icons/10012.svg'
import dtcp from  '../src/assets/icons/10013.svg'
function Cards(){
    return(
        <>
               
    <div id="carouselExampleRide" class="carousel slide" data-bs-ride="true">
  <div class="carousel-inner" href='#caurosel-cotent-1'>
    <div class="carousel-item active">
      <img src={homeImg1} width='300px' height='395px' class="d-block w-100" alt="..." />
      <div id='caurosel-cotent-1' className='container'>
        <div style={{display:'flex',justifyContent:'space-between'}} >
            <button id='btn-1'>Nagarcoil</button>
            <h1 style={{color:'green'}}>₹9600000</h1>
        </div>
        <div>
            <p>House For Sale at Nagarcoil, 3BHK North Facing House</p>
        </div>
        <div id='location'>
            <img src={mapIcon} width='20px' alt="" />
            <h6>Nagarcoil, N G O  Colony,.....</h6>
        </div>
        <div id='facilities'>
            <img src={bed} width='20px' alt="" />
            <p>3 Beds</p>
            <img src={bath} width='20px' alt="" />
            <p>3 Baths</p>
            <img src={sqFeet} width='20px' alt="" />
            <p>1200sq.ft</p>
        </div>
        <hr />
        <div id='id'>
          <p>ID:2</p>
          <button className='btn btn-primary'>View</button>
        </div>
      </div>
    </div>
    <div class="carousel-item">
      <img src={homeImg2} width='300px' height='395px' class="d-block w-100" alt="..." />
          <div id='caurosel-cotent-1' className='container'>
            <div style={{display:'flex',justifyContent:'space-between'}} >
                <button id='btn-1'>Karamadai</button>
                <h1 style={{color:'green'}}>₹7500000</h1>
            </div>
            <div>
                <p>3BHK Duplex.</p>
            </div>
            <div id='location'>
                
                <h6>0</h6>
            </div>
            <div id='facilities'>
                <img src={bed} width='20px' alt="" />
                <p>3 Beds</p>
                <img src={bath} width='20px' alt="" />
                <p>4 Baths</p>
                <img src={sqFeet} width='20px' alt="" />
                <p>2800sq.ft</p>
            </div>
            <hr />
            <div id='id'>
              <p>ID:12</p>
              <button className='btn btn-primary'>View</button>
            </div>
          </div>

    </div>
    <div class="carousel-item">
      <img src={homeImg3} width='300px' height='395px' class="d-block w-100" alt="..." />

          <div id='caurosel-cotent-1' className='container'>
            <div style={{display:'flex',justifyContent:'space-between'}} >
                <button id='btn-1'>Guduvanchery</button>
                <h1 style={{color:'green'}}>₹3643800</h1>
            </div>
            <div>
                <p>SRS - EXTENSIONS</p>
            </div>
            <div id='location'>
                <img src={mapIcon} width='20px' alt="" />
                <h6>Guduvanchery to THiruporu</h6>
            </div>
            <div id='facilities'>
                <img src={sqFeet} width='20px' alt="" />
                <p>1375 sq.feet</p>
                <img src={dtcp} width='20px' alt="" />
                <p>DTCP Approved</p>
            </div>
            <hr />
            <div id='id'>
              <p>ID:13</p>
              <button className='btn btn-primary'>View</button>
            </div>
          </div>
        </div>
    <div class="carousel-item">
      <img src={homeImg4} width='300px' height='395px' class="d-block w-100" alt="..." />
      <div id='caurosel-cotent-1' className='container'>
        <div style={{display:'flex',justifyContent:'space-between'}} >
            <button id='btn-1'>Nagarcoil</button>
            <h1 style={{color:'green'}}>₹160000</h1>
        </div>
        <div>
            <p>5 Cents To 10 Cents Plats For Sale in Vellamadam,Nagarcoil..... </p>
        </div>
        <div id='location'>
            <img src={mapIcon} width='20px' alt="" />
            <h6>Vellamadam , Nagarcoil</h6>
        </div>
        <div id='facilities'>
            <img src={sqFeet} width='20px' alt="" />
            <p>5 Cent</p>
            <img src={dtcp} width='20px' alt="" />
            <p>Panchayat Approved</p>
        </div>
        <hr />
        <div id='id'>
          <p>ID:5</p>
          <button className='btn btn-primary'>View</button>
        </div>
      </div>
          
    </div>
    <div class="carousel-item">
      <img src={homeImg5} width='300px' height='395px' class="d-block w-100" alt="..." />
      <div id='caurosel-cotent-1' className='container'>
        <div style={{display:'flex',justifyContent:'space-between'}} >
            <button id='btn-1'>Nagarcoil</button>
            <h1 style={{color:'green'}}>₹11700000</h1>
        </div>
        <div>
            <p>Luxury 3BHK Villa for Sale With Courtyard,Modular,Kitchen,Car Parking...</p>
        </div>
        <div id='location'>
            <img src={mapIcon} width='20px' alt="" />
            <h6>Nagarcoil, Thambathu Kona ...</h6>
        </div>
        <div id='facilities'>
            <img src={bed} width='20px' alt="" />
            <p>3 Beds</p>
            <img src={bath} width='20px' alt="" />
            <p>3 Baths</p>
            <img src={sqFeet} width='20px' alt="" />
            <p>2500sq.ft</p>
        </div>
        <hr />
        <div id='id'>
          <p>ID:3</p>
          <button className='btn btn-primary'>View</button>
        </div>
      </div>
    </div>
    <div class="carousel-item">
      <img src={homeImg6} width='300px' height='395px' class="d-block w-100" alt="..." />
      <div id='caurosel-cotent-1' className='container'>
        <div style={{display:'flex',justifyContent:'space-between'}} >
            <button id='btn-1'>Saravanampatti</button>
            <h1 style={{color:'green'}}>₹7788000</h1>
        </div>
        <div>
            <p>East Facing 4BHK House</p>
        </div>
        <div id='facilities'>
            <img src={bed} width='20px' alt="" />
            <p>4 Beds</p>
            <img src={bath} width='20px' alt="" />
            <p>4 Baths</p>
            <img src={sqFeet} width='20px' alt="" />
            <p>3540sq.ft</p>
        </div>
        <hr />
        <div id='id'>
          <p>ID:6</p>
          <button className='btn btn-primary'>View</button>
        </div>
      </div>
    </div>
    <div class="carousel-item">
      <img src={homeImg7} width='300px' height='395px' class="d-block w-100" alt="..." />
      <div id='caurosel-cotent-1' className='container'>
        <div style={{display:'flex',justifyContent:'space-between'}} >
            <button id='btn-1'>Coimbatore</button>
            <h1 style={{color:'green'}}>₹1000000</h1>
        </div>
        <div>
            <p>3BHK House Sale at Thudiyalur,Coimbatore</p>
        </div>
        <div id='location'>
            <img src={mapIcon} width='20px' alt="" />
            <h6>Bharath Meenathi Garden,...</h6>
        </div>
        <div id='facilities'>
            <img src={bed} width='20px' alt="" />
            <p>3 Beds</p>
            <img src={bath} width='20px' alt="" />
            <p>3 Baths</p>
            <img src={sqFeet} width='20px' alt="" />
            <p>1950sq.ft</p>
        </div>
        <hr />
        <div id='id'>
          <p>ID:1</p>
          <button className='btn btn-primary'>View</button>
        </div>
      </div>
    </div>
    <div class="carousel-item">
      <img src={homeImg8} width='300px' height='395px' class="d-block w-100" alt="..." />
      <div id='caurosel-cotent-1' className='container'>
        <div style={{display:'flex',justifyContent:'space-between'}} >
            <button id='btn-1'>Nagarcoil</button>
            <h1 style={{color:'green'}}>₹2500000</h1>
        </div>
        <div>
            <p>Beautiful Designed Home Under 25 Lakhs With Complete Interiors!</p>
        </div>
        <div id='facilities'>
            <img src={bed} width='20px' alt="" />
            <p>2 Beds</p>
            <img src={bath} width='20px' alt="" />
            <p>3 Baths</p>
            <img src={sqFeet} width='20px' alt="" />
            <p>964sq.ft</p>
        </div>
        <hr />
        <div id='id'>
          <p>ID:11</p>
          <button className='btn btn-primary'>View</button>
        </div>
      </div>
    </div>
    <div class="carousel-item">
      <img src={homeImg9} width='300px' height='395px' class="d-block w-100" alt="..." />
      <div id='caurosel-cotent-1' className='container'>
        <div style={{display:'flex',justifyContent:'space-between'}} >
            <button id='btn-1'>Nagarcoil</button>
            <h1 style={{color:'green'}}>₹9600000</h1>
        </div>
        <div>
            <p>House For Sale at Nagarcoil, 3BHK North Facing House</p>
        </div>
        <div id='location'>
            <img src={mapIcon} width='20px' alt="" />
            <h6>Nagarcoil, N G O  Colony,.....</h6>
        </div>
        <div id='facilities'>
            <img src={bed} width='20px' alt="" />
            <p>3 Beds</p>
            <img src={bath} width='20px' alt="" />
            <p>3 Baths</p>
            <img src={sqFeet} width='20px' alt="" />
            <p>1200sq.ft</p>
        </div>
        <hr />
        <div id='id'>
          <p>ID:2</p>
          <button className='btn btn-primary'>View</button>
        </div>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

               

        </>

    );
}
export default Cards ;