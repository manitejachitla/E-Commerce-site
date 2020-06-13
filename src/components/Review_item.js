import React from 'react';
import style from './Reviewitem.module.css'
function Review_item({item})
{
    return(
        <div className={style.cont}>
            <h2>{item.title}</h2>
            <h3>{item.review}</h3>
            <h1>Rating:{item.rating}</h1>

        </div>
    )

}
export default Review_item;