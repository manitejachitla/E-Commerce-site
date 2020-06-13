import React,{useEffect,useState} from 'react';
import axios from 'axios';
import Order_item from "./Order_item";
import style from "./product.module.css";
import Login from "./Login";
import Seller_order from "./Seller_order";
function MyOrders({fun,id,type,sname})
{
    const [order_data,setdata]=useState([])
    // const [seller_data,setsellerdata]=useState([])
    const [sdt,setsdt]=useState([])
    // let sdt=[]
    useEffect( ()=>
    {
        console.log(type)
        if (type==="seller")
        {
             axios.get(`http://localhost:3500/seller/${sname}`)
                .then(res=>
                {
                    console.log(res.data[0].orders)
                    setsdt(res.data[0].orders)
                    // sdt=res.data[0].orders
                    console.log(sdt)
                })
        }
        if (type==="customer")
        {
            axios.get(`http://localhost:3500/buyer/fid/${id}`)
                .then(res=>
                {
                    console.log(res.data[0]?.ordered_items)
                    setdata(res.data[0]?.ordered_items)
                })
        }
    },[])
    if(id==='none')
    {
        return(
            <div>
                <h2 className={style.targettext}>please Login</h2>
                <Login  fun={fun} custname={'guest'}/>

            </div>
        )
    }
    else {
        if (type==="customer")
        {
            return(
                <div>

                    {
                        order_data.map(item => (<Order_item pid={item.product_id} oid={item.order_id} uid={id}/>))
                    }
                </div>
            )
        }
        if (type==="seller")
        {
            return (
                <div>
                    <h2>Hello</h2>
                    {
                        sdt.map(item => (<Seller_order  oid={item}/>))
                    }
                </div>
                )

        }

    }

}
export default MyOrders;