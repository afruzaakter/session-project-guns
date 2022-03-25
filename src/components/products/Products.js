import React, { useEffect, useState } from 'react';
import Guns from '../Guns//Guns'
import Modal from 'react-modal';
//react modal use
const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  Modal.setAppElement('#root');

const Products = () => {
const [guns, setGuns] = useState([]);
// console.log(guns);
//evenhandler ar jonno usestate add
const [cart, setCart] = useState([])
// console.log(cart);

const [modalIsOpen, setIsOpen] = useState(false);

function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
//even handler add
const handleAddToCart = (gun) => {
    const newCart = [...cart, gun]
    // console.log(newCart);
    setCart(newCart);
}

useEffect(() => {
    fetch("https://raw.githubusercontent.com/mir-hussain/guns/main/data.json")
    .then(res => res.json())
    .then(data => setGuns(data))
}, [])

    return (
        <div className='container'>
            <h1>Kopa Samsu Store</h1>

            <button onClick={openModal}>Open Modal</button>



   <div className='row justify-content-md-center '>
   {
        guns.map(gun => <Guns key={gun.id} gun = {gun} handleAddToCart={handleAddToCart} ></Guns> )
    }
   </div>

  
 
<div>
<Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        
      >
          <button onClick={closeModal}></button>
        <div>
        {
    cart.map((item) =>(<h1 key={item.id} > {item.name
    }
    </h1>
    ))
}
        </div>
          </Modal> 
</div>
        </div>
        
    );
};

export default Products;