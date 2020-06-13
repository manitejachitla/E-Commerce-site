import React,{useState} from 'react';
import style from './header.module.css'
import {Link} from "react-router-dom";
function Header({user,type})
{
    const [cn,setcn]=useState(style.right)
    if (type==='customer')
    {
        return(
            <div className={style.header}>
                <div className={style.left}>
                    <Link to={'/'}>
                        <h2>SNAPCART</h2>
                    </Link>
                </div>
                <div className={cn}>
                    <h2>Welcome {user}</h2>
                    <Link to={'/login'}>
                        <h2>login</h2>
                    </Link>
                    <Link to={'/shop'}>
                        <h2>shop</h2>
                    </Link>
                    <Link to={'/cart'}>
                        <h2>cart</h2>
                    </Link>
                    <Link to={'/watchlist'}>
                        <h2>wishlist</h2>
                    </Link>
                    <Link to={'/myorders'}>
                        <h2>myorders</h2>
                    </Link>

                </div>

            </div>
        )
    }
    if (type==='none')
    {
        return(
            <div className={style.header}>
                <div className={style.left}>
                    <Link to={'/'}>
                        <h2>SNAPCART</h2>
                    </Link>
                </div>
                <div className={cn}>
                    <h2>Welcome {user}</h2>
                    <Link to={'/login'}>
                        <h2>login</h2>
                    </Link>
                    <Link to={'/shop'}>
                        <h2>shop</h2>
                    </Link>
                </div>

            </div>
        )
    }
    if (type==='seller')
    {
        return(
            <div className={style.header}>
                <div className={style.left}>
                    <Link to={'/'}>
                        <h2>SNAPCART</h2>
                    </Link>
                </div>
                <div className={cn}>
                    <h2>Welcome {user}</h2>
                    <Link to={'/login'}>
                        <h2>login</h2>
                    </Link>
                    <Link to={'/shop'}>
                        <h2>shop</h2>
                    </Link>
                    <Link to={'/ap'}>
                        <h2>AddProduct</h2>
                    </Link>
                    <Link to={'/myorders'}>
                        <h2>myorders</h2>
                    </Link>

                </div>

            </div>
        )
    }



}
export default Header;