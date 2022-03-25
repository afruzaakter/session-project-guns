import React from 'react';
import './Guns.css'
import { BsFillCartDashFill } from "react-icons/bs";
const Guns = (props) => {
    // console.log(props.gun);
    const {name,img,bullet,capacity,action,price} = props.gun;

//click handler add
// const handleAddToCart = (id) => {
//     console.log(id);
// }

    return (
        <div className='card mb-5 ms-4 mt-5'>
           
            <div className='image-container'>
                <img src={img} alt="" />
            </div>
            <h3>{name}</h3>
            <p className='gub-text'>Bullet Type: {bullet}</p>
             <p className='gub-text'>Capacity: {capacity} </p>
            <p className='gub-text'>Action: {action} </p>
            <div className='add-to-cart'>
                <button onClick={() => props.handleAddToCart(props.gun)}>
                    <BsFillCartDashFill size={25} />
                </button>
                <h1>$ {price} </h1>
            </div>
        </div>
    );
};

export default Guns;