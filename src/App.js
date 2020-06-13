import React,{useState} from 'react';
import './App.css';
import ItemsList from "./components/Items_list";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Header from "./components/Header";
import Signup from "./components/Signup";
import WatchList from "./components/WatchList";
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Product from "./components/Product";
import Intro from "./components/Intro";
import MyOrders from "./components/MyOrders";
import Review from "./components/Review";
import Order_status from "./components/Order_Status";
import Add_product from "./components/Add_product";
function App()
{
    const [user,setuser]=useState('guest')
    const [cid,setcid]=useState('none')
    const [type,settype]=useState('none')
    const productid='5ebe583d8e23e11d9c2ef340'
    function setusername(name,id,type)
    {
        setuser(name)
        setcid(id)
        settype(type)

    }

  return (
      <Router>
        <div className="App">
            <Header user={user} type={type}/>
            <Route path="/review" component={Review}/>
            <Route path="/os" component={Order_status}/>
            <Route path="/ap" component={Add_product}/>
          <Route path="/product" component={()=>
              // <userContext.Provider value={{name:productid,method:setpid}}>
              <Product pid={productid} uid={cid}/>
              // </userContext.Provider>
          }/>

          <Route path="/shop"  component={()=>
              // <userContext.Provider value={{name:productid,method:setpid}}>
              <ItemsList  id={cid} />
              // </userContext.Provider>
          }/>
          <Route path="/cart" component={()=><Cart id={cid} fun={setusername} />}/>
          <Route path="/"  exact component={()=><Intro/>}/>
          <Route path="/watchlist" component={()=><WatchList fun={setusername} id={cid} />}/>
          <Route path="/login" component={()=><Login fun={setusername} custname={user}/>}/>
          <Route path="/signup" component={Signup}/>
          <Route path="/myorders" component={()=><MyOrders fun={setusername} id={cid} sname={user} type={type}/>}/>

        </div>
      </Router>
  );
}

export default App;
