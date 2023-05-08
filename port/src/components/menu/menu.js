import React,{useEffect,useState} from "react";
import"bootstrap/dist/css/bootstrap.css"
import"bootstrap/dist/js/bootstrap.bundle"
import"./menu.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCartShopping, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export function Menu(){

    const [time, setTime] = useState(new Date());

    useEffect(() => {
      const intervalID = setInterval(() => {
        setTime(new Date());
      }, 1000); // update every second
  
      return () => clearInterval(intervalID);
    }, []);
  
    const hours = time.getHours().toString().padStart(2, '0');
    const minutes = time.getMinutes().toString().padStart(2, '0');
    const seconds = time.getSeconds().toString().padStart(2, '0');





    return(
        <> 
               

            <nav className="navbar navbar-expand-lg navbar-light bg-nav sticky-top  col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
               <Link to='/'  > <a className="navbar-brand text-white font-weight-bolder ml-4" href="#"> JioMart<span className="span_nav">BETA</span></a> </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
            
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active ml-5 p-1">
                        
                    <a className="nav-link text-white  btn-s" href="https://www.jiomart.com/checkout/cart"> Delivery to Coimbatore-641103 </a> 
                    </li>
                
                    <li className="nav-item pt-3">
                
                        <span className="nav_search ml-5 p-2 col-lg-6  ">
                        <FontAwesomeIcon icon={faMagnifyingGlass}/>
                        <input type="text" placeholder="Search" size="22" className="nav_input pt-1 "/>
                        <FontAwesomeIcon icon={faBars} className="text-info"/>
                         </span>
                    
                    </li>
                    
                    <li className="nav-item ml-5 ">
                        <a className="nav-link active text-white shop " href="https://www.jiomart.com/checkout/cart" target="_blank">
                              <FontAwesomeIcon icon={faCartShopping}/>                            
                        </a>
                    </li>
                    
                    <li className="nav-item ml-5 ">
                          <Link to='/Log'  className="nav-link active text-white btn-s " href="C:\Users\Naveen\OneDrive\Desktop\HTML\PROJECT\log.html">
                            <button className="btn btn-outline-success my-2 my-sm-0 " type="submit">
                            <i className="fa-solid fa-user"></i>Sign In</button>
                        </Link>
                    </li>    


                    <li className="nav-item ml-2 ">
                          <Link to='/Log'  className="nav-link active text-white btn-s " href="C:\Users\Naveen\OneDrive\Desktop\HTML\PROJECT\log.html">
                           <h3 className="text-danger"> {hours}:<span className="text-warning">{minutes}:</span><span className="text-success">{seconds}</span> </h3>
                           </Link>
                    </li>    





 


                </ul>      
                </div>
            </nav>
                   

                    <nav className="navbar navbar-expand-lg navbar-light bg-nav-1 sticky-top  col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <Link to='/'className="navbar-brand text-warning" href="#">Categories</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item dropdown ml-5">
                            <Link to='/Groceries' className="nav-link dropdown-toggle text-white" href="#" role="button" data-toggle="dropdown" aria-expanded="false"> Groceries </Link>                              
                           
                                <div className="dropdown-menu">
                                <a className="dropdown-item" href="https://www.jiomart.com/c/groceries/fruits-vegetables/219"> Fruits & Vegetables</a>
                                <a className="dropdown-item" href="https://www.jiomart.com/c/groceries/dairy-bakery/61">Dairy & Bakery</a>
                                <a className="dropdown-item" href="https://www.jiomart.com/c/groceries/staples/13">Snacks & Branded Foods</a>
                                <a className="dropdown-item" href="https://www.jiomart.com/c/groceries/snacks-branded-foods/10">Beverages</a>
                                <a className="dropdown-item" href="https://www.jiomart.com/c/groceries/beverages/33">Personal Care</a>
                                <a className="dropdown-item" href="https://www.jiomart.com/c/groceries/personal-care/91">Home Care</a>
                                </div>
                            </li>
                            <li className="nav-item dropdown ml-3">
                            <Link to='/Fruit' className="nav-link dropdown-toggle text-white" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                                    Premium Fruits
                            </Link>
                                <div className="dropdown-menu">
                                <a className="dropdown-item" href="https://www.jiomart.com/c/premiumfruits/apples-pears/7470">Apples & Pears</a>
                                <a className="dropdown-item" href="https://www.jiomart.com/c/premiumfruits/avocado-peach-plum/7473">Avocado, Peach, Plum</a>
                                <a className="dropdown-item" href="https://www.jiomart.com/c/premiumfruits/banana-melons-coconut/7479">Banana, Melons & Coconut</a>
                                <a className="dropdown-item" href="https://www.jiomart.com/c/premiumfruits/cherries-berries-exotic-fruits/7483">Cherries, Berries & Exotic Fruits</a>
                                <a className="dropdown-item" href="https://www.jiomart.com/c/premiumfruits/citrus-mango-grapes/7489">Citrus, Mango & Grapes</a>
                                <a className="dropdown-item" href="https://www.jiomart.com/c/premiumfruits/dates/7493">Dates</a>
                                <a className="dropdown-item" href="https://www.jiomart.com/c/premiumfruits/gift-assorted-xl-packs/7496">Gift, Assorted & XL Packs</a>
                                </div>
                            </li>
                            <li className="nav-item dropdown ml-3">
                            <Link to='/Kitc' className="nav-link dropdown-toggle text-white" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                                    Home & Kitchen
                                </Link>
                                <div className="dropdown-menu">
                                <a className="dropdown-item" href="https://www.jiomart.com/c/homeandkitchen/bathroom-laundry-accessories/8655">Bathroom & Laundry Accessories</a>
                                <a className="dropdown-item" href="https://www.jiomart.com/c/homeandkitchen/disposables/8660">Disposables</a>
                                <a className="dropdown-item" href="https://www.jiomart.com/c/homeandkitchen/furnishing/8672">Furnishing</a>
                                <a className="dropdown-item" href="https://www.jiomart.com/c/homeandkitchen/furniture/8680">Furniture</a>
                                <a className="dropdown-item" href="https://www.jiomart.com/c/homeandkitchen/garden-outdoor/8716">Garden & Outdoor</a>
                                <a className="dropdown-item" href="https://www.jiomart.com/c/homeandkitchen/home-decor/8722">Home Decor</a>
                                </div>
                            </li>
                            <li className="nav-item dropdown ml-3">
                            <Link to='/offer' className="nav-link dropdown-toggle text-white" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                                Fashion
                                </Link>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="https://www.jiomart.com/c/fashion/men/496">Men</a>
                                <a className="dropdown-item" href="https://www.jiomart.com/c/fashion/women/493">Women</a>   
                                <a className="dropdown-item" href="https://www.jiomart.com/c/fashion/boys/499">Boys</a>
                                <a className="dropdown-item" href="https://www.jiomart.com/c/fashion/girls/563">Girls</a>
                                <a className="dropdown-item" href="https://www.jiomart.com/c/fashion/junior-boys/519">Junior Boys</a>
                                <a className="dropdown-item" href="https://www.jiomart.com/c/fashion/toys-baby-care/1442">KIDS</a>
                            </div>
                            </li>

                            <li className="nav-item dropdown ml-3">
                                  <Link to='/Elec'className="nav-link dropdown-toggle text-white" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                                    Electronics
                                  </Link>
                                <div className="dropdown-menu">
                                <a className="dropdown-item" href="https://www.jiomart.com/c/electronics/mobiles-tablets/757">Mobiles & Tablets</a>
                                <a className="dropdown-item" href="https://www.jiomart.com/c/electronics/tv-speaker/746">TV & Speaker</a>
                                <a className="dropdown-item" href="https://www.jiomart.com/c/electronics/home-appliances/724">Home Appliances</a>
                                <a className="dropdown-item" href="https://www.jiomart.com/c/electronics/cameras/736">Cameras</a>
                                <a className="dropdown-item" href="https://www.jiomart.com/c/electronics/kitchen-appliances/727">Kitchen Appliances</a>
                                <a className="dropdown-item" href="https://www.jiomart.com/c/electronics/personal-care-grooming/773">Personal Care & Grooming</a>
                                </div>
                            </li>
                            
                            <li className="nav-item dropdown ml-3">
                            <Link to='/offer' className="nav-link dropdown-toggle text-white" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                                    Jewellery
                                </Link>
                                <div className="dropdown-menu">
                                <a className="dropdown-item" href="https://www.jiomart.com/c/jewellery/fine-jewellery/1531">Fine Jewellery</a>
                                <a className="dropdown-item" href="https://www.jiomart.com/c/jewellery/jewellery/5308">Jewellery</a>
                
                                </div>
                            </li>
                            <li className="nav-item dropdown ml-3">
                            <Link to='/Kitc_h' className="nav-link dropdown-toggle text-white" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                                    Home Improvement
                             </Link>
                                <div className="dropdown-menu">
                                <a className="dropdown-item" href="https://www.jiomart.com/c/homeimprovement/auto-care/8844">Auto Care</a>
                                <a className="dropdown-item" href="https://www.jiomart.com/c/homeimprovement/building-supplies-measuring-tools/8924">Building Supplies & Measuring Tools</a>
                                <a className="dropdown-item" href="https://www.jiomart.com/c/homeimprovement/carpentry/9013">Carpentry</a>
                                <a className="dropdown-item" href="https://www.jiomart.com/c/homeimprovement/electrical/9045">Electrical</a>
                                <a className="dropdown-item" href="https://www.jiomart.com/c/homeimprovement/hardware-plumbing/9058">Hardware & Plumbing</a>
                                <a className="dropdown-item" href="https://www.jiomart.com/c/homeimprovement/home-cleaning-organisation/9070">Home Cleaning & Organisation</a>
                                </div>
                            </li>

                            <li className="nav-item dropdown ml-3">
                            <Link to='/Elec' className="nav-link dropdown-toggle text-white" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                                    Sports, Toys & Luggage
                                </Link>
                                <div className="dropdown-menu">
                                <a className="dropdown-item" href="https://www.jiomart.com/c/sportstoysluggage/toys-games/8848">Toys & Games</a>
                                <a className="dropdown-item" href="https://www.jiomart.com/c/sportstoysluggage/bags-travel-luggage/9242">Bags & Travel Luggage</a>
                                <a className="dropdown-item" href="https://www.jiomart.com/c/sportstoysluggage/sporting-goods-fitness-equipment/9279">Sporting Goods & Fitness Equipment</a>
                                </div>
                            </li>


                        </ul>

                        </div>
                    </nav>  

                    





        






     

        </>
    );
}