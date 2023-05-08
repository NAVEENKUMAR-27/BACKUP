    import React,{useState,useEffect} from 'react';
    import'bootstrap/dist/css/bootstrap.css'
    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
    import {faPlus}from'@fortawesome/free-solid-svg-icons'
    import { Link } from 'react-router-dom';
    import StarRatings from 'react-star-ratings';
    import Side from "./res.png";
    import"./login.css"
    import { Button } from 'bootstrap';
    import { specialCharMap } from '@testing-library/user-event/dist/keyboard';

    export function Login(){


        function enableOtpButton()
        {
            var phone = document.getElementById("num").value;
            var opt_btn = document.getElementById("opt_btn");
            var spa=document.getElementById("sp1");
            
            var size = phone.length;

            if ( size == 10 )
            {
                opt_btn.removeAttribute("disabled");
                opt_btn.style.backgroundColor="blue"

            }
            else
            {
                opt_btn.setAttribute("disabled","true");
                opt_btn.style.backgroundColor="grey"


                
            }

            var pn = new RegExp(/^[6-9]{1}[0-9]{9}$/g);

            if (pn.test(phone)){
            spa.style.color="Green"
            spa.innerHTML="Valid Number"    
            }
            else{
                
                spa.style.color="red"
            spa.innerHTML="Enter your Valid Number"
            
            }

        }

       


        return(
            <>
            <div className="container-fluid">
                            <div className="row  pt-5">
                                <div className="col-lg-7 col-md-7">
                                        <img src={Side} alt="No image" className="log_img col-lg-11"  />
                                </div>

                                <div classNameName="my-5  col-lg-5 col-md-5">
                                    <div className='col-lg-1'></div>

                                    <div className='col-lg-8 col-md-8 text-center bor_log my-5'>
                                               <h2 className='text-center pt-5 font-weight-bolder'>Sign in to JioMart</h2>
                                               <p className='pt-2'>to access your Addresses, Orders & Wishlist.</p>  <br/>                               
                                                +91 <input type="number" id="num" name="num" placeholder='Enter your phone number' onKeyUp={enableOtpButton} className="bor_inp" />
                                                <br/>    
                                                <br/>                       
                                                <span id="sp1" className='span_text'></span>
                                            <input type="button" id="opt_btn" name="btn" value="GET OTP" className="otp_btn bt pt mr-5 bt-color"   disabled/>
                                            <p className="mt-2">By continuing, you agree to our <span className="log_sp">Terms of Service</span> and <span className="log_sp"> Privacy & Legal Policy </span></p>
                            
                                    
                                    </div>   
                                    <div className='col-lg-1'></div>

                                </div>

                            </div>
                        </div>
            </>
        );
    }






