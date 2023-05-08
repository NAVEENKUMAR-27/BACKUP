import React,{useEffect,useState} from "react";
import"./home_kit.css"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";


export function Home_Kitechen(){
    const[kitchen,setKitchen]=useState([])
    useEffect(()=>{
     fetch("/kitc.json")
     .then(add=>add.json())
     .then(cart=>setKitchen(cart))
    })
        
    return(
        <>
        
        <div className="container-fluid">
                              <h3 className="text-center font-weight-bolder text-white pt-2  bg-info">Kitchen-Items</h3>                          
                   <div className="row col-lg-12 justify-content-between mt-5">
     {
         kitchen.map((value,index)=>(
            <>
              <div className="card  col-lg-3 ml-4 mt-5  ">                                                                 
                                                                        
                               <img src={value.image} className="card-img-top"/>
                                 
                             <div className="card-body">
                                   <h5 className="card-title ">{value.name}</h5>
                                   <p className="card-text font-weight-bolder">{value.para}<span className="font-weight-light span_offer">{value.span}</span></p>
                                   <a href={value.add}>
                                  <button className='bt_card text-white  cart_butt_groc col-lg-11 text-dark ml-2 '> Add cart <FontAwesomeIcon icon={faPlus} className="text-primary ml-3"/></button> </a>
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