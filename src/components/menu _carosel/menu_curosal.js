    import React from "react";
    import"bootstrap/dist/css/bootstrap.css"
    import"bootstrap/dist/js/bootstrap.bundle"
    import"./menu_curosal.css"
    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
    import { faBars, faCartShopping, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
    import { Link } from "react-router-dom";

    export function Menu_curosal(){
        
        return(
            <> 
                

                <nav className="navbar navbar-expand-lg navbar-light bg-nav sticky-top  col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                    <Link to='/' className="navbar-brand text-white font-weight-bolder ml-4" href="#"> JioMart<span className="span_nav">BETA</span></Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active ml-5 p-1">
                            
                        <a className="nav-link text-white  btn-s" href="https://www.jiomart.com/checkout/cart"> Delivery to Coimbatore-641103 </a> 
                        </li>
                    
                        <li className="nav-item">
                    
                            <span className="nav_search ml-5 p-2 ">
                            <FontAwesomeIcon icon={faMagnifyingGlass}/>
                            <input type="text" placeholder="Search" size="22" className="nav_input pt-1 "/>
                            <FontAwesomeIcon icon={faBars} className="text-info"/>
                            </span>
                        
                        </li>
                        
                        <li className="nav-item ml-5 ">
                            <a className="nav-link active text-white shop " href="https://www.jiomart.com/checkout/cart">
                                <FontAwesomeIcon icon={faCartShopping}/>
                                
                            </a>
                        </li>
                        
                        <li className="nav-item ml-5 ">
                            <Link to='Log' className="nav-link active text-white btn-s " >
                                <button className="btn btn-outline-success my-2 my-sm-0 " type="submit">
                                <i className="fa-solid fa-user"></i>Sign In</button>
                            </Link>
                        </li>      
                    </ul>      
                    </div>
                </nav>
                    

                        <nav className="navbar navbar-expand-lg navbar-light bg-nav-1 sticky-top  col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                            <Link className="navbar-brand text-warning" href="#">Categories</Link>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item dropdown ml-3">
                                    <Link to='/Groceries' className="nav-link dropdown-toggle text-white" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                                        Groceries
                                    </Link>
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
                                    <Link to='/Elec' className="nav-link dropdown-toggle text-white" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
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

                                            {/* curosal start */}


                        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                            <ol class="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                            </ol>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1680671459_Bank-Offer-Smartphones_Desktop.jpg" class="d-block w-100" alt="..."/>
                                </div>
                                <div class="carousel-item">
                                <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1677258329_Early_Summer_Deals_on_Air_Conditionters_..jpg" class="d-block w-100" alt="..."/>
                                </div>
                                <div class="carousel-item">
                                <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1677304180_AttaDalandSugar_1680x320.jpg" class="d-block w-100" alt="..."/>
                                </div>
                            </div>
                            <button class="carousel-control-prev courosal_but" type="button" data-target="#carouselExampleIndicators" data-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="sr-only">Previous</span>
                            </button>
                            <button class="carousel-control-next courosal_but" type="button" data-target="#carouselExampleIndicators" data-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="sr-only">Next</span>
                            </button>
                            </div>                      

                                        {/* first coursol end */}

                                        {/* second coursol start */}

                            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                            <ol class="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                            
                            </ol>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1680153270_Web_Mumbai_PremiumFruits.jpg" class="d-block w-100" alt="..."/>
                                </div>
                            </div>                         
                            </div>  
                                        {/* second coursol end */}

                                        {/* cricket banner */}

                                        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                            <ol class="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                            
                            </ol>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1680271838_web.jpg" class="d-block w-100" alt="..."/>
                                </div>
                            </div>                         
                            </div>            

                                        {/* cricket banner-end */}

                                        {/* block buster offer */}

                         <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                            <ol class="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                            
                            </ol>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                   <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1672856821_blockbuster.jpg" class="d-block w-100" alt="..."/>
                                </div>
                            </div>                         
                            </div> 
                                             {/* block buster offer -end */}

                                             {/* //big offer// */}

                         <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                            <ol class="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                            
                            </ol>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                   <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1680272527_Main-Banner1680x320.jpg" class="d-block w-100" alt="..."/>
                                </div>
                            </div>                         
                            </div> 



                     <div className="container-fluid pb-5">
                         <div className="d-flex">
                             <div className="col-lg-2">
                             <a href="https://www.jiomart.com/groceries/b/bigmuscles-nutrition/3468">
                             <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1677025738_Big_muscles_Desktop.jpg" class="size-brand  img img-fluid " alt="check your internet"/></a>
                        
                             </div>
                             <div className="col-lg-2">
                              <a href="https://www.jiomart.com/c/electronics/computers/laptops/775?prod_mart_electronics_products_popularity%5BrefinementList%5D%5Bbrand%5D%5B0%5D=Apple&prod_mart_electronics_products_popularity%5Bpage%5D=2">
                                <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1677063124_Mac_Book_Air_Desktop.jpg" class="size-brand  img img-fluid  " alt="check your internet"/></a>
                             </div>
                             <div className="col-lg-2">
                                 <a href="https://www.jiomart.com/c/fashion/3?prod_mart_fashion_products_popularity%5BrefinementList%5D%5Bbrand%5D%5B0%5D=LANCER%20FOOTWEAR&prod_mart_fashion_products_popularity%5BrefinementList%5D%5Bbrand%5D%5B1%5D=Lancer">
                                <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1677025923_Lancer_Desktop.jpg" class="size-brand  img img-fluid" alt="check your internet"/></a>
                            </div>
                            <div className="col-lg-2">
                                 <a href="https://www.jiomart.com/c/bestdeals/luggage_safari_deals_22_02_2023/15056">
                                <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1677025990_Safari_Desktop.jpg" class="size-brand  img  img-fluid" alt="check your internet"/></a>
                            </div>
                            <div className="col-lg-2">
                                <a href="https://www.jiomart.com/groceries/b/aeroplane/2650">
                                <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1677026297_Aeroplane_Desktop.jpg" class="size-brand  img img-fluid " alt="check your internet"/></a>
                            </div>
                             <div className="col-lg-2">
                                <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1677026046_Livflame_Desktop.jpg" class="size-brand  img img-fluid" alt="check your internet"/>
                            </div>

                         </div>
                    </div> 



                             {/*coustume curosal start */}


                        <div id="carouselExampleIndicators pt-4" class="carousel slide" data-ride="carousel">
                            <ol class="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                            </ol>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1680268311_Kuchipoo.jpg" class="d-block w-100 " alt="..."/>
                                </div>
                                <div class="carousel-item">
                                <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1680268370_Catwalk.jpg" class="d-block w-100" alt="..."/>
                                </div>
                                <div class="carousel-item">
                                <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1677304180_AttaDalandSugar_1680x320.jpg" class="d-block w-100" alt="..."/>
                                </div>
                            </div>
                            <button class="carousel-control-prev courosal_but" type="button" data-target="#carouselExampleIndicators" data-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="sr-only">Previous</span>
                            </button>
                            <button class="carousel-control-next courosal_but" type="button" data-target="#carouselExampleIndicators" data-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="sr-only">Next</span>
                            </button>
                            </div>                      

                                        {/* coustumes coursol end */} 



                              

            </>
        );
    }