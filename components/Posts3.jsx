import '../components/posts.css'
import profileImg from '../src/assets/veedu images/10002.jpg'
import postImg1 from '../src/assets/veedu images/10008.jpg'
import likeImg from '../src/assets/icons/like.png'
import likeImg1 from '../src/assets/icons/like2.png'
import comment from '../src/assets/icons/chat-box.png'
import share from '../src/assets/icons/share.png'
import location from '../src/assets/icons/10035.svg'
import menue from '../src/assets/icons/option.png'
function Posts3(){
    var postInfo = {
         headline:'Veedu For Buisness',
        date:'12 December 2024',
        location:'Sulur',
        propertDetails:'வெறும் 1 லட்சம் இருந்தால் Plot, 5 லட்சம் இருந்தால் வீடு வாங்கலாம் | Residential Plots and Villas...'
    
        }
        return(
            <>
                                {/* post-1  */}
            <div id="posts">
                <div id='posts-header-sec'>
                    <div id='icon-text'>
                        <div>
                            <img src={profileImg} width='50px' alt="" />
                        </div>
                        <div id='profile-details'>
                            <h6>{postInfo.headline}</h6>
                            <div id='date-location'>
                                <div><p>{postInfo.date} </p></div>
                                <div> <img src={location} width='20px' alt=''/></div>
                                <div><p>{postInfo.location}</p></div>
                            </div>
                         <div id='menue-icon'>
                            <img src={menue} width='35px'alt="" />
                         </div>
                        </div>
                    </div>
                </div>
                <div id='posts-content-text'>
                    <h6>{postInfo.propertDetails}</h6>
                </div>
                            {/* caurocel */}


                            <div id="carouselExampleIndicators" class="carousel slide">
                                <div class="carousel-indicators">
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                </div>
                                <div class="carousel-inner">
                                        <div class="carousel-item active">
                                        <iframe width="100%" height="300" src="https://www.youtube.com/embed/OzGJ0Y-yB6s?si=lwau1IFQC-zcc0q7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                        </div>
                                        <div class="carousel-item">
                                        <img src={postImg1} class="d-block " width='100%' height='300px' alt="..."/>
                                        </div>
                                </div>
                                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span class="visually-hidden">Previous</span>
                                        </button>
                                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span class="visually-hidden">Next</span>
                                        </button>
                                </div>



                <div id='posts-like'>
                    <img src={likeImg} width='25px' height='25px' alt="" />
                    <p>1</p>
                </div>
                <hr />
                <div id='reactions'>
                        <div style={{display:'flex'}}>
                            <img src={likeImg1} width='30px' height='30px' alt="Like" />
                            <p>Like</p>
                        </div>
                        <div style={{display:'flex'}}>
                        <img src={comment} width='30px' height='30px' alt="Comment" />
                        <p>Comment</p>
                        </div>
                        <div style={{display:'flex'}}>
                        <img src={share} width='30px' height='30px' alt="share" />
                        <p>Share</p>
                        </div>
                </div>
            </div>
            </>
        )
}
export default Posts3;