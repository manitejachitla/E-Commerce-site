import React, {useState} from 'react';
import style from './login.module.css'
import {Link} from "react-router-dom";
import axios from 'axios';

function Login({fun,custname})
{


    const [usn,setusn]=useState('')
    const [pwd,setpwd]=useState('')
    const [type,settype]=useState('select')
    function setcust(name,id)
    {
        fun(name,id,type)

    }
    const login=async ()=>
    {
        if (usn.length===0 )
        {
            alert("please enter UserName")
        }
        if (pwd.length===0 )
        {
            alert("please enter password")
        }
        if (type==="select")
        {
            alert("Please Select type")
        }
        else
        {
           if (type==='customer')
           {
               await axios.get(`http://localhost:3500/buyer/${usn}`)
                   .then(res=>

                   {
                       console.log(res.data)
                       if (res.data[0]?.username===usn && res.data[0].pwd===pwd)
                       {
                           setcust(res.data[0].name,res.data[0]._id)

                       }
                       else alert("Invalid Details")
                   })
                   

           }
           if (type==='seller')
           {
               await axios.get(`http://localhost:3500/seller/${usn}`)
                   .then(res=>

                   {
                       console.log(res.data)
                       if (res.data[0]?.username===usn && res.data[0].pwd===pwd)
                       {
                           setcust(res.data[0].name,res.data[0]._id)

                       }
                       else alert("Invalid Details")
                   })

           }
        }
    }
    const logout=()=>
    {
        setcust('guest','none','none')
    }
    if (custname==='guest')
    {
        return(
            <div className={style.form}>
                <h4>Username</h4>
                <input type="text" onChange={(e)=>setusn(e.target.value)}/>
                <h4>Password</h4>
                <input type="password" onChange={(e)=>setpwd(e.target.value)} />
                <h4>Select Account Type</h4>
                <select onChange={(e)=>settype(e.target.value)}>
                    <option value="Select">Select</option>
                    <option value="seller">Seller</option>
                    <option value="customer">Customer</option>
                </select>
                <div className={style.signup}>
                    <Link to={"/signup"}>
                        <h4>New user?Click here to SignUp</h4>
                    </Link>
                </div>
                <button onClick={login}>Login</button>
            </div>
        )
    }
    else
    {
        return (
            <div className={style.form2}>
                <h4>Logged in</h4>
                <Link to={"/shop"}>
                    <button>Continue to Shop</button>
                </Link>
            </div>
        )
    }


}
export default Login;