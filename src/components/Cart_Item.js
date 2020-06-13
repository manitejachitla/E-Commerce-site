import React,{useEffect,useState} from 'react';
import style from './product.module.css'
import axios from "axios";
import {Link} from "react-router-dom";
function Cart_item({pid,uid,fun})
{
    const [item_details,set_item_details]=useState([])
    const [specs,set_specs]=useState([])
    useEffect(()=>
    {
        axios.get(`http://localhost:3500/product/${pid}`)
            .then(res=>
            {
                console.log(res)
                set_item_details(res.data[0])
                set_specs(res.data[0]?.specs)
            })
    },[pid])
    function buynow()
    {
        if (uid==='none')
        {
            alert('please Login')
        }
        else
        {
            console.log("buynow")
        }

    }
    async function delete_item()
    {
        if (uid==='none')
        {
            alert("please login")
        }
        else
        {
            fun()
            await axios.delete(`http://localhost:3500/buyer/${uid}/cart/${pid}`)
                .then(res=>
                {
                    console.log(res)
                    alert("deleted from cart")
                })
        }

    }
    async function wishlist()
    {
        if (uid==='none')
        {
            alert('please Login')
        }
        else
        {
            await axios.patch(`http://localhost:3500/buyer/${uid}/wishlist/${pid}`)
            await axios.delete(`http://localhost:3500/buyer/${uid}/cart/${pid}`)
                .then(res=>
                {
                    fun()
                    console.log(res)
                    alert("added to wishlist")
                })
        }

    }
    return(
        <div className={style.main}>
            <Link to={"/product"}>
            <h2>{item_details?.name}</h2>
            </Link>
            <div className={style.inner}>
                <div className={style.right}>
                    <img src={item_details?.img} alt="LAptop "/>
                </div>
                <div className={style.right}>
                    <h2>Specifications</h2>
                    <ul>
                        {/*<li>{item_details.price}</li>*/}
                        <li>Storage: {specs?.disk}</li>
                        <li>Operating System: {specs?.os}</li>
                        <li>Processor: {specs?.processor}</li>
                        <li>RAM: {specs?.ram}</li>
                        <li>Screen: {specs?.screen}</li>
                    </ul>
                    <div>
                        <button onClick={buynow}>Buynow</button>
                        <button onClick={delete_item}>Delete from Cart</button>
                        <button onClick={wishlist}>wishlist</button>
                    </div>
                </div>
            </div>

        </div>
    )

}
export default Cart_item;