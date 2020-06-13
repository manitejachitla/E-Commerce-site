import React from 'react';
import style from './card.module.css'
import {Link} from "react-router-dom";
import axios from "axios";
function Card({sn,uid,pid,name,price,img})
{
    function buynow()
    {
        if (uid==='none')
        {
            alert('please Login')
        }
        else
        {
            // console.log("buynow")
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
                    const obj=
                        {
                            "product_id":pid,
                            "order_id":res.data._id
                        }
                    console.log(obj)
                    console.log(res.data)
                    console.log(sn)
                    console.log(res.data._id)
                    axios.patch(`http://localhost:3500/buyer/${uid}/or`,obj)
                    axios.patch(`http://localhost:3500/seller/${sn}/${res.data._id}`)
                        .then(alert("order completed"))
                }
                )

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
            await axios.patch(`http://localhost:3500/buyer/${uid}/cart/${pid}`)
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
            await axios.patch(`http://localhost:3500/buyer/${uid}/wishlist/${pid}`)
                .then(res=>
                {
                    console.log(res)
                    alert("added to wishlist")
                })
        }

    }

    return(
            <div className={style.card} >
                {/*<h4>u{uid}</h4>*/}
                {/*<h4>p{pid}</h4>*/}
                <Link to={{pathname:"/product",state:{id:pid}}}>
                <h2>{name}</h2>
                </Link>
                <img src={img} alt="hello world "/>
                <div className="details">
                    <h3>price:{price}</h3>
                </div>
                <div>
                    <button onClick={buynow}>Buynow</button>
                    <button onClick={cart}>cart</button>
                    <button onClick={wishlist}>wishlist</button>
                </div>
            </div>
    )

}
export default Card;