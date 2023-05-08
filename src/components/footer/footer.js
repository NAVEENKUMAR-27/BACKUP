import React,{useEffect,useState} from "react";
import"./footer.css"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faPhone,faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp,faGithub,faLinkedin} from "@fortawesome/free-brands-svg-icons";


export function Footer(){

        
    return(
        <>
          <div className="container pt-5 ">
             <div className="row">
                 <div className="col-lg-12">

                                         <h4 className="text-center">Contact me</h4>
                        <div className="justify-conntent-between text-center mt-5 black" target="_blank">
                                     <a className="btn ml-3 m-1 hov" href="https://wa.me/9626154215">
                                       <FontAwesomeIcon icon={faWhatsapp} className="cont_btn text-white bg-primary p-4 "></FontAwesomeIcon>
                                    </a>
 
                                    <a className="btn ml-3 m-1 hov" href="tel:91+9626154215" target="_blank"><FontAwesomeIcon icon={faPhone} className="cont_btn text-white bg-primary p-4"/></a>
                                      <a className="btn ml-3 "  href="mailto:s.naveenkumarnavee27.gmail.com" target="_blank">
                                         <FontAwesomeIcon icon={faEnvelope} className="cont_btn text-white bg-primary p-4"></FontAwesomeIcon>
                                     </a>
                                     <a className="btn ml-3 m-1 hov" href="https://github.com/NAVEENKUMAR-27">
                                               <FontAwesomeIcon icon={faGithub} className="cont_btn text-white bg-primary p-4"></FontAwesomeIcon>
                                    </a>
                                    <a className="btn ml-3 m-1 hov" href="https://www.linkedin.com/in/naveenkumarnavee/">
                                    <FontAwesomeIcon icon={faLinkedin} className="cont_btn text-white bg-primary p-4"></FontAwesomeIcon>
                                    </a>
                             
                        </div>
                </div>

                 
                 <div className="col-lg-4">
                     <h6>All Categories</h6>
                     <p>Grocery</p>
                     <p>Electronics</p> 
                     <p>Fashion</p>
                     <p>Beauty</p>
                     <p>Home & Kitchen</p>
                     <p>Premium Fruits</p>
                     <p>Books</p>
                 </div>

                 <div className="col-lg-4">
                     <h5>Help & Support</h5>
                     <p>About Us</p>
                     <p>FAQ</p>
                     <p>Terms & Conditions</p>
                     <p>Privacy Policy</p>
                     <p>E-waste Policy</p>
                     <p>Cancellation & Return Policy</p>
                     <p>Shipping & Delivery Policy</p>


                 </div>
                 <div className="col-lg-4">
                    <h2>Contact Us</h2>
                     <h6>WhatsApp us: <span className="text-primary">70003 70003</span></h6>
                     <h6>Call us:<span className="text-primary">1800 890 1222</span></h6>
                     <h6>8:00 AM to 8:00 PM, 365 days</h6>
                     <p>Please note its not original Jiomart its copy</p>
                     <h2>Created by : <span className="text-primary" >NAVEENKUMAR S</span></h2>
                     <h4>Download the app</h4>
                       <a href="">
                      <img src="https://www.jiomart.com/assets/ds2web/jds-icons/google-play-icon.svg" className=""/></a>
                      <a href="">
                      <img src="https://www.jiomart.com/assets/ds2web/jds-icons/ios_app_icon.svg" className=""/></a>

                 </div>
             </div>

        </div>
        
            

        </>
    )
}