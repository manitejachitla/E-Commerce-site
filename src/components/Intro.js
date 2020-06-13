import React from 'react';
import style from './intro.module.css'
import {Link} from "react-router-dom";
function Intro()
{
    return(
        <div className={style.intro}>
            <h2>Welcome to Snap Cart</h2>
            <h3>Amazing Deals at Amazing Prices</h3>
            <Link to={"/shop"}>
            <button>Shop Now</button>
        </Link>
        </div>
    )

}
export default Intro;