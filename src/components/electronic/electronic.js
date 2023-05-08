import React,{useEffect,useState} from "react";
import"./electronic.css"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import StarRatings from 'react-star-ratings';


export function Electrons(){
    const[mobile,setMobile]=useState([])
    useEffect(()=>{
     fetch("/mobile.json")
     .then(add=>add.json())
     .then(cart=>setMobile(cart))
    })
        
    return(
        <>
        
           <h1 className="text-center text-primary font-weight-bolder pt-4">TOP BRAND MOBILE</h1>
                  <div className="container-fluid shadow-lg">
                      <div class="row col-lg-12 justify-content-between mt-5">
        {
            mobile.map((value,index)=>(
                <>
                          <div className="card  col-lg-3 ml-4 mt-5 bor_json ">
                                  <img src={value.img} className="card-img-top"/>
                                <div className="card-body">
                                    <h5 className="card-title ">{value.heading}</h5>
                                    <p className="card-text">{value.des}</p>
                                    <p className="card-text font-weight-bolder"> {value.pri}</p>
                                    <StarRatings
                                            rating={value.rate}
                                            starDimension="15px"
                                            starSpacing="1px"
                                            starRatedColor="gold"
                            />
                                    <button className='bt_card text-white  cart_butt_groc col-lg-11 text-dark ml-2 mt-2 '> Add cart <FontAwesomeIcon icon={faPlus} className="text-primary ml-3"/></button> 
                                   </div> 
                             
                          </div>


                </>
            ))
        }
        </div>
    </div>
            

        </>
    )
}