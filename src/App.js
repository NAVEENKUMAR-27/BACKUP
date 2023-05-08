  import logo from './logo.svg';
  import './App.css';
  import {Menu} from "./components/menu/menu"
  import { BrowserRouter,Routes,Route } from 'react-router-dom';
  import { Menu_curosal } from './components/menu _carosel/menu_curosal';
 import { Groceries_mart } from './components/Groceries/Groceries';
import { Fruits_page } from './components/perimum fruit/fruits';
import { Home_Kitechen } from './components/home and kitchen/home_kit';
import { Electrons } from './components/electronic/electronic';
import { Offer } from './components/offer/offer';
import { Footer } from './components/footer/footer';
import { Login } from './components/login/login';

  function App() {
    return (
      <>
        <BrowserRouter>
           <Routes>
              <Route path='/' element={[<Menu_curosal/>,<Offer/>,<Footer/> ]}/>
              <Route path='/Groceries' element={[<Menu/>,<Groceries_mart/>,<Footer/>]}/>
              <Route path='/Fruit' element={[<Menu/>,<Fruits_page/>,<Footer/>]}/>
              <Route path='/Kitc' element={[<Menu/>,<Home_Kitechen/>,<Footer/>]}/>
              <Route path='/Kitc_h' element={[<Menu/>,<Home_Kitechen/>,<Offer/>,<Footer/>]}/>
              <Route path='/Elec' element={[<Menu/>,<Electrons/>,<Footer/>]}/>
              <Route path='/offer' element={[<Menu/>,<Offer/>,<Footer/>]}/>
              <Route path='/Log' element={[<Menu/>,<Login/>,<Footer/>]}/>

           </Routes>
        </BrowserRouter> 
              {/* <Groceries_mart/> 
              <Fruits_page/>
              <Home_Kitechen/>
               <Electrons/>
              <Offer/>
              <Footer/> */}
           


             {/* <Login/> */}
      </>
    );
  }

  export default App;
