import React,{useState} from 'react';
import style from './login.module.css'
import axios from 'axios';
import {Link} from "react-router-dom";
function Signup()
{
    const [usn,setusn]=useState('')
    const [name,setname]=useState('')
    const [pwd,setpwd]=useState('')
    const [cpwd,setcpwd]=useState('')
    const [type,settype]=useState('select')
    const signup=async ()=>
    {
        if (type==="select")
        {
            alert("Please Select type")
        }
        if (name.length===0 )
        {
            alert("please enter Name")
        }
        if (usn.length===0 )
        {
            alert("please enter UserName")
        }
         if (pwd.length===0 )
        {
            alert("please enter password")
            alert("please enter password")
        }
         if (pwd !==cpwd)
        {
            alert("two passwords must be same")
        }
        else
        {
            if (type==='customer')
            {
                const obj=
                    {
                        "name":`${name}`,
                        "username":`${usn}`,
                        "pwd":`${pwd}`,
                        "wishlist":{},
                        "cart":{},
                        "ordered_items":{}
                    }
                axios.post('http://localhost:3500/buyer',obj)
                    .then(res=>console.log(res))
                    .catch((e)=>console.log(e))
            }
            if (type==='seller')
            {
                const obj=
                    {
                        "name":`${name}`,
                        "username":`${usn}`,
                        "pwd":`${pwd}`,
                        "Items_list":{}
                    }
                axios.post('http://localhost:3500/seller',obj)
                    .then(res=>console.log(res))
                    .catch((e)=>console.log(e))
            }
        }
    }
    return(
            <div className={style.form}>
                <h4>Name</h4>
                <input type="text" onChange={(e)=>setname(e.target.value)}/>
                <h4>Username</h4>
                <input type="text" onChange={(e)=>setusn(e.target.value)}/>
                <h4>Password</h4>
                <input type="password" onChange={(e)=>setpwd(e.target.value)}/>
                <h4>Re-enter Password</h4>
                <input type="password" onChange={(e)=>setcpwd(e.target.value)} />
                <h4>Select Account Type</h4>
                <select onChange={(e)=>settype(e.target.value)}>
                    <option value="Select">Select</option>
                    <option value="seller">Seller</option>
                    <option value="customer">Customer</option>
                </select>
                <div className={style.signup}>
                    <Link to={"/login"}>
                        <h4>Have Account?,Click here to Loginp</h4>
                    </Link>
                </div>
                <button onClick={signup}>SignUp</button>
            </div>
    )

}
export default Signup;