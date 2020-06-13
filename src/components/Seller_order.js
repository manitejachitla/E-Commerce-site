import React,{useEffect,useState} from 'react';
import axios from 'axios'
import style from './Order_item.module.css'
import {Link} from "react-router-dom";
function Seller_order({oid})
{
    const [od,setod]=useState([])
    const [pid,setpid]=useState('')
    const [pd,setpd]=useState([])
    useEffect( ()=>
    {
        console.log(oid)

        axios.get(`http://localhost:3500/orders/${oid}`)
            .then(res=>
            {
                console.log(res.data[0])
                setod(res.data[0])
                setpid(res.data[0]?.product_id)
                console.log(od)
                axios.get(`http://localhost:3500/product/${pid}`)
                    .then(res2=>
                    {
                        console.log(res2.data[0])
                        setpd(res2.data[0])
                    })
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
                    <Link to={{pathname:"/os",state:{id:oid,name:pd?.name}}}>
                    <button >Change Status</button>
                    </Link>

                </div>
            </div>
        </div>
    )

}
export default Seller_order;