import '../components/posts.css'
import profileImg from '../src/assets/icons/10016.jpg'
import postImg from '../src/assets/veedu images/10001.jpg'
import likeImg from '../src/assets/icons/like.png'
import likeImg1 from '../src/assets/icons/like2.png'
import comment from '../src/assets/icons/chat-box.png'
import share from '../src/assets/icons/share.png'
import location from '../src/assets/icons/10035.svg'
import menue from '../src/assets/icons/option.png'

function Posts(postData) {
    // var postInfo = {
    //     headline:'Veedu For Buisness',
    //     date:'23 December 2024.',
    //     location:'Sulur',
    //     propertDetails:'Excellent Ferro Cement Slab Work'

    // }
    console.log(postData)
    return (
        <>
            {/* post-1  */}
            <div id="posts">
                <div id='posts-header-sec'>
                    <div id='icon-text'>
                        <div>
                            <img src={postData.profileImg} width='50px' alt="" />
                        </div>
                        <div id='profile-details'>
                            <h6>{postData.headline}</h6>
                            <div id='date-location'>
                                <div><p>{postData.date} </p></div>
                                <div> <img src={location} width='20px' alt='' /></div>
                                <div><p>{postData.location}</p></div>
                            </div>
                            <div id='menue-icon'>
                                <img src={menue} width='35px' alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div id='posts-content-text'>
                    <h6>{postData.propertDetails}</h6>
                </div>
                <div id='posts-image'>
                    <img src={postImg} width='100%' height='300px' alt="" />
                </div>
                <div id='posts-like'>
                    <img src={likeImg} width='25px' height='25px' alt="" />
                    <p>1</p>
                </div>
                <hr />
                <div id='reactions'>
                    <div style={{ display: 'flex' }}>
                        <img src={likeImg1} width='30px' height='30px' alt="Like" />
                        <p>Like</p>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <img src={comment} width='30px' height='30px' alt="Comment" />
                        <p>Comment</p>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <img src={share} width='30px' height='30px' alt="share" />
                        <p>Share</p>
                    </div>
                </div>

            </div>
            {/* post-2  */}

        </>
    );
}
export default Posts;