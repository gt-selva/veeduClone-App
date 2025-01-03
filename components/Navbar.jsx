import './Navbar.css'
import navimage from '../src/assets/icons/10002.png' 
import navDropdownIcon from '../src/assets/icons/10019.svg' 

function Navbar(){
    return(
        <>
       <nav id='nav-1'>
            <div id="navbar-container">
                    <div>
                    <img src={navimage} width='150px' alt="nav bar image" />
                    </div>
                   
                 <div class="dropdown">
                        <a class="btn  dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Pages
                        </a>

                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">My Pages</a></li>
                            <li><a class="dropdown-item" href="#">Professionals</a></li>
                            <li><a class="dropdown-item" href="#">Tags</a></li>
                        </ul>
                     </div>

                        <div class="dropdown">
                            <a class="btn  dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Pricing
                            </a>

                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Plans&Pricing</a></li>
                                
                            </ul>
                        </div>
                             
                             <div>
                             <a class="btn" role="button" >Sign Up</a>
                             </div>
                
                             <div id='nav-dropdown-buttons'>
                        <div class="dropdown ">
                             <a class="btn btn-success dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Add new
                             </a>
                             <ul class="dropdown-menu">
                                 <li><a class="dropdown-item" href="#">
                                     <img src={navDropdownIcon} width='20px' alt="" />Add property</a>
                                     </li>
                                 <li><a class="dropdown-item" href="#">
                                    <img src={navDropdownIcon} width='20px' alt="" />Create Professional Page</a>
                                    </li>
                             </ul>
                        </div>

                        <div>
                        <button type="button" class="btn btn-info">Sign In</button>
                        </div>
                </div>
                
                 </div>

                       
       </nav>

       <nav class="navbar bg-body-tertiary fixed-top" id='nav-2'>
  <div class="container-fluid">
  <img src={navimage} width='150px' alt="nav bar image" />
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Pages
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">My Pages</a></li>
              <li><a class="dropdown-item" href="#">Professionals</a></li>
              <li>
              </li>
              <li><a class="dropdown-item" href="#">Tags</a></li>
              </ul>
          </li>

          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              pricing
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Plans&Pricing</a></li>
              </ul>
          </li>
        </ul>
        <div class="dropdown ">
          <a class="btn btn-success dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
             Add new
          </a>
          <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">
                  <img src={navDropdownIcon} width='20px' alt="" />Add property</a>
                  </li>
              <li><a class="dropdown-item" href="#">
                 <img src={navDropdownIcon} width='20px' alt="" />Create Professional Page</a>
                 </li>
          </ul>
        </div>
            <div id='button-2'>
            <button type="button" class="btn btn-info">Sign In</button>
            </div>
      </div>
    </div>
  </div>
</nav>
        
        
        
        </>
    );
}
export default Navbar ;