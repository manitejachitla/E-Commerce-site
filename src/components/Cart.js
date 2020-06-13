import React,{useEffect,useState} from 'react';
import Login from "./Login";
import axios from 'axios'
import Cart_item from "./Cart_Item";
function Cart({fun,id})
{
    const [data,setdata]=useState([])
    const [changeval,setval]=useState(0)
    const change=()=>
    {
        setval(val=>val+1)
    }
    useEffect(()=>
    {
        axios.get(`http://localhost:3500/buyer/fid/${id}`)
            .then(res=>
            {
                console.log(res.data)
                setdata(res.data[0]?.cart)
            })
    },[changeval])

        if(id==='none')
        {

            return(
                <div>
                    <h2>please Login</h2>
                    <Login fun={fun} custname={'guest'}/>
                </div>
            )
        }
        else
        {

            return(
                <div>
                    <h1>Cart-{id}</h1>
                    {
                        data.map(item=> (<Cart_item pid={item} uid={id} fun={change}/>))
                    }
                </div>
            )

        }


}
export default Cart;