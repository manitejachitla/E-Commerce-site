import React, {useState} from 'react';
import {useLocation} from 'react-router-dom';
import style from './login.module.css';
import axios from 'axios'

function Review({fun,custname})
{
    const [titile,setusn]=useState('')
    const [review,setpwd]=useState('')
    const [rating,settype]=useState('select')
    let location=useLocation()
    const add_review=()=>
    {
        const obj=
            {
                "title":titile,
                "review":review,
                "rating":rating
            }
            axios.post(`http://localhost:3500/product/review/${location.state.id}`,obj)
                .then(res=>{
                    console.log(res)
                    alert("review added")
                })
    }
        return(
            <div className={style.form}>
                <h4>Selected Product</h4>
                <select onChange={(e)=>settype(e.target.value)}>
                    <option value="1">{location.state.name}</option>
                </select>
                <h4>Title</h4>
                <input type="text" onChange={(e)=>setusn(e.target.value)}/>
                <h4>Review</h4>
                {/*<input type="text" onChange={(e)=>setpwd(e.target.value)} />*/}
                <textarea name="review" className={style.textarea} cols="30" rows="10" onChange={e=>setpwd(e.target.value)}/>
                <h4>Rating</h4>
                <select onChange={(e)=>settype(e.target.value)}>
                    <option value="Select">Select</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <button onClick={add_review} >Submit</button>
            </div>
        )


}
export default Review;