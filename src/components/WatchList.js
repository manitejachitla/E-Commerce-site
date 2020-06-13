import React, {useEffect, useState} from 'react';
import Login from "./Login";
import axios from "axios";
import style from './product.module.css'
import WishlistItem from "./Wishlist_item";
function WatchList({fun,id})
{
    const [wishlist,setdata]=useState([])
    const [changeval,setval]=useState(0)
    useEffect(()=>
    {
        axios.get(`http://localhost:3500/buyer/fid/${id}`)
            .then(res=>
            {
                console.log(res.data[0])
                setdata(res.data[0]?.wishlist)
            })
    },[changeval])
    const change=()=>
    {
        setval(val=>val+1)
    }
    if(id==='none')
    {
        return(
            <div>
                <h2 className={style.targettext}>please Login</h2>
                <Login fun={fun} custname={'guest'}/>

            </div>
        )
    }
    else
    {

        return(
            <div>
                <h1 style={{"margin":"auto"}}>WatchList</h1>
                {
                    wishlist.map(item=>(<WishlistItem pid={item} uid={id} fun={change} />))
                }
            </div>
        )

    }

}
export default WatchList;