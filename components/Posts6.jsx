import '../components/posts.css'
import profileImg from '../src/assets/veedu images/10016.jpg'
import postImg1 from '../src/assets/veedu images/10017.png'
import postImg2 from '../src/assets/veedu images/10018.png'
import postImg3 from '../src/assets/veedu images/10019.png'
import likeImg from '../src/assets/icons/like.png'
import likeImg1 from '../src/assets/icons/like2.png'
import comment from '../src/assets/icons/chat-box.png'
import share from '../src/assets/icons/share.png'
import location from '../src/assets/icons/10035.svg'
import menue from '../src/assets/icons/option.png'
function Posts6(){
    var postInfo = {
         headline:'Handicrafts',
        date:'19 November 2024',
        location:'Coimbatore South',
        propertDetails:'Simple and elegant, beautifully crafted coir products give an aesthetic appeal to any home or office. Crafted by men and women of picturesque coir villages the'
    
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

                            <div id="carouselExample" class="carousel slide">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                    <img src={postImg1} class="d-block w-100"width='100%' height='300px' alt="..."/>
                                    </div>
                                    <div class="carousel-item">
                                    <img src={postImg2} class="d-block w-100" width='100%' height='300px' alt="..."/>
                                    </div>
                                    <div class="carousel-item">
                                    <img src={postImg3} class="d-block w-100"width='100%' height='300px' alt="..."/>
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                                </div>


                <div id='posts-like'>
                    <img src={likeImg} width='25px' height='25px' alt="" />
                    <p>1</p>
                </div>
                <hr />
                <div style={{margin:'-10px'}} id='reactions'>
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
export default Posts6;