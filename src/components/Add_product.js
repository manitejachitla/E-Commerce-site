import React,{useState} from 'react';
import axios from 'axios'
import style from './AddProduct.module.css'
function Add_product()
{
    const [name,setname]=useState('')
    const [price,setprice]=useState('')
    const [img,setimg]=useState('')
    const [seller,setseller]=useState('')
    const [screen,setscreen]=useState('')
    const [os,setos]=useState('')
    const [ram,setram]=useState('')
    const [processor,setprocessor]=useState('')
    const [disk,setdisk]=useState('')
    const add=()=>
    {
        const obj=
            {
                "name":name,
                "price":price,
                "img":img,
                "specs":
                    {
                        "processor":processor,
                        "ram":ram,
                        "os":os,
                        "disk":disk,
                        "screen":screen
                    },
                "seller":seller,
                "revies":[]
            }
            axios.post('http://localhost:3500/product',obj)
                .then(res=>
                {
                    console.log(res)
                    alert("Added")
                })
        console.log(obj)
    }
    return(
        <div className={style.form}>
            <div className={style.contone}>
                <div>
                    <h4>Name</h4>
                    <input type="text" onChange={e=>setname(e.target.value)}/>
                    <h4>Price</h4>
                    <input type="text" onChange={e=>setprice(e.target.value)}/>
                    <h4>img</h4>
                    <input type="text" onChange={e=>setimg(e.target.value)}/>
                    <h4>Seller</h4>
                    <input type="text" onChange={e=>setseller(e.target.value)}/>
                    <h4>Screen</h4>
                    <input type="text" onChange={e=>setscreen(e.target.value)}/>
                </div>
                <div>
                    <h4>processor</h4>
                    <input type="text" onChange={e=>setprocessor(e.target.value)}/>
                    <h4>ram</h4>
                    <input type="text" onChange={e=>setram(e.target.value)}/>
                    <h4>os</h4>
                    <input type="text" onChange={e=>setos(e.target.value)}/>
                    <h4>disk</h4>
                    <input type="text" onChange={e=>setdisk(e.target.value)}/>
                </div>
            </div>
            <button onClick={add}>ADD product</button>
        </div>
    )

}
export default Add_product;