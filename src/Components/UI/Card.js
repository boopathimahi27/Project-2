import React from 'react';
import  cardStyles from './Card.module.css'

const Card=(props)=>{
    const classNames=`${cardStyles.card} ${props.className}`
   
    return( 
        <div className={classNames}>
            {
                props.children
            }
        </div>
        )
}

export default Card;