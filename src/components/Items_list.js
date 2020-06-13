import React,{useState,useEffect} from 'react';
import Card from './Card'
import axios from 'axios'
import styles from './itemlist.module.css'
function ItemsList({id})
{
    const [items,setitems]=useState([])
    useEffect(()=>
    {
        axios.get('http://localhost:3500/product')
            .then(res=>
            {
                setitems(res.data)}
                )
    },[])
    return(
        <div>
            <div className={styles.glay}>
                {items.map((item)=>(

                    <Card key={item._id} sn={item.seller} uid={id} pid={item._id} name={item.name}  img={item.img} price={item.price}/>
                ))}
            </div>
        </div>
    )

}
export default ItemsList;