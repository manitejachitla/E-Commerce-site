import React,{useEffect,useState} from 'react';
import style from './product.module.css'
import {useLocation} from 'react-router-dom'
import axios from "axios";
import Review_item from "./Review_item";
function Product({uid})
{
    let location=useLocation()
    // const {pid}=location.state.id
    // const {pid}=props.location.state;
    const [item_details,set_item_details]=useState([])
    const [specs,set_specs]=useState([])
    const [reviews,set_review]=useState([])
    useEffect(()=>
    {
        console.log(location)
        axios.get(`http://localhost:3500/product/${location.state.id}`)
            .then(res=>
            {
                console.log(res.data[0])
                set_item_details(res.data[0])
                set_specs(res.data[0]?.specs)
                set_review(res.data[0]?.reviews)
            })
    },[])
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
    async function cart()
    {
        if (uid==='none')
        {

            alert("please login")
        }
        else
        {
            await axios.patch(`http://localhost:3500/buyer/${uid}/cart/${location.state.id}`)
                .then(res=>
                {
                    console.log(res)
                    alert("added to cart")
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
            await axios.patch(`http://localhost:3500/buyer/${uid}/wishlist/${location.state.id}`)
                .then(res=>
                {
                    console.log(res)
                    alert("added to wishlist")
                })
        }

    }
    return(
        <div className={style.main}>
                <h2>{item_details?.name}</h2>
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
                        <button onClick={cart}>cart</button>
                        <button onClick={wishlist}>wishlist</button>
                    </div>
                </div>

            </div>
            {
                reviews.map(item=>(
                    <Review_item item={item}/>
                ))
            }
        </div>
    )

}
export default Product;