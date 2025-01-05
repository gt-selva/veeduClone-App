import '../components/Footer.css'

function Footer() {
    return (
        <>
            <div id='footer-section'>
                <div id='sign-up'>
                    <div>
                        <h3>Want to Become a Real Estate Professional?</h3>
                        <p>We'll help you to grow your career and growth.</p>
                    </div>
                    <div>
                        <button onClick={() => {
                            var login = document.getElementById('login')
                            var footer = document.getElementById('footer-section')
                            if (login.style.display === "none") {
                                login.style.display = 'block'
                                footer.style.marginTop = '0px'
                            } else {
                                login.style.display = 'none'
                                footer.style.marginTop = '-600px'
                            }
                        }} id='sign-up-btn'>Sign Up Today</button>
                    </div>
                </div>

                <div id='Footer'>
                    <div id='address'>
                        <h1 style={{ color: 'white' }}>Veedu</h1>
                        <p>No: 2/12, <br />
                            South Thamaraikulam, <br />
                            Kanyakumari District - 629701. <br />
                        </p>
                        <p>+91 94 8606 0448</p>
                        <p>ezhilarasu007@gmail.com</p>
                    </div>
                    <div id='about'>
                        <h6 style={{ color: 'white' }}>About</h6>
                        <p>About us</p>
                        <p>Contact us</p>
                        <p>Privacy policy</p>
                        <p>Refund policy</p>
                        <p>Terms of use</p>
                    </div>
                </div>
            </div>
        </>
    );

}
export default Footer;