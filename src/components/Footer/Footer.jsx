import React from 'react';
import './Footer.css'

function Footer() {
    return (
        <footer>
            <section class="footer">
                <div class="brand">
                    <div class="h5"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path fill="#F2C855" d="M3.671 2.832H3.67a.855.855 0 0 0-.854.859V16.57c0 .472.386.858.86.859 1.999.005 5.348.421 7.658 2.839V6.79c0-.16-.04-.31-.118-.435C9.32 3.3 5.675 2.837 3.671 2.832ZM21.185 16.57V3.69a.855.855 0 0 0-.854-.859h-.002c-2.004.005-5.648.469-7.544 3.523a.823.823 0 0 0-.118.435v13.477c2.31-2.418 5.66-2.835 7.659-2.84a.862.862 0 0 0 .86-.858Z" />
                        <path fill="#F2C855" d="M23.141 5.802h-.622V16.57a2.197 2.197 0 0 1-2.19 2.192c-1.696.004-4.492.336-6.472 2.21 3.425-.839 7.035-.294 9.092.175A.857.857 0 0 0 24 20.31V6.661a.86.86 0 0 0-.859-.859ZM1.481 16.57V5.801H.86a.86.86 0 0 0-.86.86v13.648a.857.857 0 0 0 1.05.837c2.058-.47 5.668-1.014 9.093-.176-1.98-1.873-4.776-2.205-6.472-2.209a2.197 2.197 0 0 1-2.19-2.192Z" />
                    </svg>
                        Read me.</div>
                    <p>Let's go secure your brighter future!</p>
                    <div class="social">
                        <a href="#twitter" class="social-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" fill="none" viewBox="0 0 20 16">
                                <path fill="#F2C855" d="M6.038 16c7.246 0 11.208-6.155 11.208-11.492 0-.175-.003-.35-.011-.523A8.127 8.127 0 0 0 19.2 1.894a7.702 7.702 0 0 1-2.262.636A4.038 4.038 0 0 0 18.67.296c-.773.47-1.62.802-2.501.98A3.89 3.89 0 0 0 13.293 0c-2.175 0-3.94 1.809-3.94 4.039 0 .317.035.625.103.92C6.182 4.792 3.28 3.184 1.336.74a4.107 4.107 0 0 0-.533 2.03c0 1.402.695 2.639 1.753 3.363a3.837 3.837 0 0 1-1.784-.505v.051c0 1.956 1.357 3.59 3.16 3.96a3.853 3.853 0 0 1-1.78.069c.502 1.605 1.956 2.773 3.68 2.805A7.78 7.78 0 0 1 0 14.185 10.951 10.951 0 0 0 6.038 16" />
                            </svg>
                        </a>
                        <a href="#fb" class="social-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="20" fill="none" viewBox="0 0 11 20">
                                <path fill="#F2C855" d="m10.009 11.249.555-3.618h-3.47V5.284c0-.99.484-1.955 2.04-1.955h1.577V.244S9.28 0 7.907 0c-2.858 0-4.73 1.733-4.73 4.871v2.76H0v3.618h3.178V20h3.91v-8.751h2.92Z" />
                            </svg>
                        </a>
                        <a href="#youtube" class="social-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="14" fill="none" viewBox="0 0 18 14">
                                <path fill="#F2C855" d="m9.37 13.043-3.6-.066c-1.166-.023-2.334.023-3.477-.215C.554 12.407.43 10.666.303 9.205a24.955 24.955 0 0 1 .225-6.181c.19-1.143.934-1.825 2.086-1.899C6.5.855 10.413.888 14.29 1.013c.41.012.822.075 1.226.147 1.994.349 2.042 2.322 2.172 3.984a22.587 22.587 0 0 1-.172 5.032c-.198 1.38-.576 2.538-2.172 2.65-2 .146-3.953.263-5.957.226 0-.009-.012-.009-.018-.009ZM7.254 9.55c1.506-.865 2.984-1.716 4.482-2.575-1.51-.865-2.984-1.716-4.482-2.575v5.15Z" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div class="about">
                    <div class="h5">About Us</div>
                    <a href="#">Address</a>
                    <a href="#">Community update</a>
                    <a href="#">Press Kit</a>
                    <a href="#">Contact Us</a>
                </div>
                {/* <div class="subjects">
                    <div class="h5">Subjects</div>
                    <a href="#">English</a>
                    <a href="#">Math</a>
                    <a href="#">Science</a>
                    <a href="#">Social Sceince</a>
                </div> */}
                <div class="product">
                    <div class="h5">Product</div>
                    <a href="#">Pricing</a>
                    <a href="#">Enterprise</a>
                    <a href="#">Integrate</a>
                    <a href="#">What's New</a>
                    <a href="#">Collaborate</a>
                </div>
                <div class="subscribe">
                    <div class="h5">Subscribe Now</div>
                    <div class="newsletter">
                        <input type="email" name="email" placeholder="Email Address" />
                        <button type="submit" name="submit">Send</button>
                    </div>
                </div>
            </section>

            <section class="copyright">
                <p><span>©</span> 2022 Rights Reserved, VIT</p>
                <p>
                    <a href="#privacy">Privacy</a>
                    |
                    <a href="#terms">Terms & Conditions</a>
                    |
                    <a href="#security">Security & Privacy by URPG</a>
                </p>
            </section>
        </footer>
    )
}

export default Footer