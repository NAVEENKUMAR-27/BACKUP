import React,{useState,useEffect} from 'react';
import'bootstrap/dist/css/bootstrap.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlus}from'@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import StarRatings from 'react-star-ratings';
import"./offer.css"



export function Offer(){
    const[offer,setOffer]=useState([])

       useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(boost=>boost.json())
        .then(arr=>setOffer(arr))
       })
   
    return(
        <>
          <h1 className="text-center text-danger font-weight-bolder">Discount products</h1>
                   <marquee className="mar">80% offers on all products</marquee>
                  <div className="container-fluid">
                      <div class="row col-lg-12 justify-content-between mt-5">
        {
             offer.map((value,index)=>(
                <>
                  <div className="card  col-lg-3 ml-4 mt-5 bor_json ">
                                  <img src={value.image} className="card-img-top  img_height"/>
                                <div className="card-body">
                                    <h5 className="card-title ">{value.title}</h5>
                                    <p className="card-text">{value.price}</p>
                                    <p className="card-text font-weight-bolder"> {value.category}</p>
                                    <StarRatings
                                           
                                           rating={value.rating.rate}
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
    ); 
}


