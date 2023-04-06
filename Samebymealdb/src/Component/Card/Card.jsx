import React from 'react';
import './Card.css'
const Card = (props) => {
    console.log(props.handler);
    console.log(props.data);
    let handler=props.handler
    let propsdata=props.data;

    return (
        <div className='card'>
            <img src={propsdata.strCategoryThumb} alt="food" />
            <p>Food Name: {propsdata.strCategory}</p>
            <p>{propsdata.strCategoryDescription.slice(0,200)}</p>
            <button onClick={()=>handler(props.data)} className='baton' style={{backgroundColor:"orange",width:"100%"}}>Add to cart</button>
        </div>
    );
};

export default Card;