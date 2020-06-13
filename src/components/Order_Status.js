import React, {useState} from 'react';
import style from './login.module.css'
import {useLocation} from 'react-router-dom'
import axios from 'axios'
function Order_status()
{
    const [status,settype]=useState('select')
    let loc=useLocation()
    const changestatus=()=>
    {
        if (status==='select')
        {
            alert("select order status")
        }
        else
        {
            axios.patch(`http://localhost:3500/orders/${loc.state.id}/${status}`)
                .then(res=>
                {
                    console.log(res.data)
                    alert("Status Changed")
                })
        }
    }


    return(
        <div className={style.form}>
            <h4>Selected Product</h4>
            <select onChange={(e)=>settype(e.target.value)}>
                <option value="1">{loc.state.name}</option>
            </select>
            <h4>Status</h4>
            <select onChange={(e)=>settype(e.target.value)}>
                <option value="Select">Select</option>
                <option value="Ordered">Ordered</option>
                <option value="In transit">In transit</option>
                <option value="Delivered">Delivered</option>
            </select>
            <button onClick={changestatus} >Submit</button>
        </div>
    )


}
export default Order_status;