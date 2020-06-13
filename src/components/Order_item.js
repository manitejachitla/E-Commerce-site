import React,{useEffect,useState} from 'react';
import axios from 'axios'
import style from './Order_item.module.css'
import {Link} from "react-router-dom";
function Order_item({pid,oid,uid})
{
    function buynow()
    {
        const jd=new Date()
        const date=`${jd.getDate()}:${jd.getMonth()}:${jd.getFullYear()}`
        const time=`${jd.getHours()}:${jd.getMinutes()}:${jd.getSeconds()}:${jd.getMilliseconds()}`
        const obj=
            {
                "time": {
                    "date": date,
                    "time": time
                },
                "product_id": pid,
                "user_id":uid,
                "status":"ordered"

            }
        // console.log(obj)
        axios.post('http://localhost:3500/orders',obj)
            .then(res=>
                {
                    console.log(res.data)
                    console.log(pd.seller)
                    console.log(res.data._id)
                    axios.patch(`http://localhost:3500/buyer/${uid}/or/${pid}`)
                    axios.patch(`http://localhost:3500/seller/${pd.seller}/${res.data._id}`)
                        .then(alert("order completed"))
                }
            )
    }
    const [od,setod]=useState([])
    const [pd,setpd]=useState([])
    useEffect(()=>
    {
        console.log(pid)
        axios.get(`http://localhost:3500/product/${pid}`)
            .then(res=>
            {
                console.log(res.data[0])
                setpd(res.data[0])
            })
        axios.get(`http://localhost:3500/orders/${oid}`)
            .then(res=>
            {
                console.log(res.data[0])
                setod(res.data[0])
            })
    },[])
    return(
        <div className={style.main}>
            <div className={style.left}>
                <img src={pd?.img} alt="LAptop "/>
            </div>
            <div className={style.right}>
                <h2>Product:{pd?.name}</h2>
                <h2>Price:{pd?.price}</h2>
                <h2>Seller:{pd?.seller}</h2>
                <h2>Orderd on:{od?.time?.date}</h2>
                <h2>Order time:{od?.time?.time}</h2>
                <h2>Order Status:{od?.status}</h2>
                <div>
                    <button onClick={buynow}>Order Again</button>
                    <Link to={{pathname:"/review",state:{id:pid,name:pd?.name}}}>
                    <button>Write Review</button>
                    </Link>
                </div>
            </div>
        </div>
    )

}
export default Order_item;