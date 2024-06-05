import React, { useContext, useState, useEffect } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { UserContext } from './UserContext';

// Import images
import iPhone9Image from '/iPhone9.jpg';
import iPhoneXImage from '/iPhoneX.jpg';
import SamsungImage from '/Samsung.jpg';
import OppoImage from '/oppoPhone.jpg';
import HuwaiImage from '/huwaiPhone.jpg';

function BuyNowPage() {
  // To store the images
  const images = [
    { id: 1, title: "iPhone 9", image: iPhone9Image },
    { id: 2, title: 'iPhone X', image: iPhoneXImage },
    { id: 3, title: 'Samsung Universe 9', image: SamsungImage },
    { id: 4, title: 'Oppo F19', image: OppoImage },
    { id: 5, title: 'Huwai P30', image: HuwaiImage },
  ];

  const { products } = useContext(UserContext);
  const { productId } = useParams();
  const location = useLocation();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // If productId exists, add the selected product to the cart
    if (productId) {
      const product = products.find(product => product.id === parseInt(productId));
      setCart([{ ...product, quantity: 1 }]);
    } 
    // If cart data is passed from the previous page, set the cart state
    else if (location.state && location.state.cart) {
      const updatedCart = location.state.cart.map(item => ({ ...item, quantity: 1 }));
      setCart(updatedCart);
    }
  }, [productId, products, location.state]);

  // Function to handle incrementing the quantity
  const handleIncrement = (productId) => {
    setCart(cart.map(item => item.id === productId ? { ...item, quantity: item.quantity + 1 } : item));
  };

  // Function to handle decrementing the quantity
  const handleDecrement = (productId) => {
    setCart(cart.map(item => item.id === productId ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 } : item));
  };

  // Function to handle removing a product from the cart
  const handleRemove = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  // Calculate the total amount based on the selected product price and quantity
  const totalAmount = cart.reduce((total, product) => total + (product.price * product.quantity), 0);

  // Calculate the total quantity of products in the cart
  const totalQuantity = cart.reduce((total, product) => total + product.quantity, 0);

  return (
    <div className='container mt-3'>
      <h3 className='text-center mb-3'>Cart</h3>
      {/* Display products in the cart */}
      {cart.length > 0 ? cart.map(product => {
        // Find the image corresponding to the product
        const selectedImage = images.find(img => img.id === product.id)?.image;
        return (
          <div className='row' key={product.id}>
            <div className='col-sm-12 col-md-12 col-lg-6 col-xl-6'>
              {/* Display product details */}
              {selectedImage && <img className="mb-3" id='buy-now-img' src={selectedImage} alt={product.title} />}
              <h4>{product.title}</h4>
              <h5>Brand - {product.brand}</h5>
              <p>{product.description}</p>
              <p>Discount - {product.discountPercentage}%</p>
            </div>
            <div className='col-sm-12 col-md-12 col-lg-6 col-xl-6'>
              <div className='d-flex gap-2'>
                {/* Button to decrement quantity */}
                <span><b>Quantity - </b></span>
                <button className='btn btn-primary py-0' onClick={() => handleDecrement(product.id)}>-</button>
                <span><b>{product.quantity}</b></span>
                {/* Button to increment quantity */}
                <button className='btn btn-primary py-0' onClick={() => handleIncrement(product.id)}>+</button>
                <span><b>Price: ${product.price}</b></span>
              </div>
              {/* Display subtotal and remove button */}
              <p className='mt-2'><b>Sub Total: ${product.price * product.quantity}</b></p>
              <button className='btn btn-danger' onClick={() => handleRemove(product.id)}>Remove from Cart</button>
            </div>
          </div>
        );
      }) : (
        // Display message if the cart is empty
        <>
        <p>No products in the cart.</p>
        <Link to={'/'}>
              <button className='btn btn-secondary'>Back</button>
        </Link>
        </>
      )}
      
      {/* Display total quantity, total amount, payment method selection, and buttons */}
      {cart.length > 0 && (
          <div className='row'>
            <div className='col-sm-12 col-md-12 col-lg-6 col-xl-6'>
              <p className='mt-3'><b>Total Quantity: {totalQuantity}</b></p>
              <p><b>Total Amount: ${totalAmount}</b></p>
              {/* Payment method selection dropdown */}
              <select className="form-select mb-3" id='payment-methods' aria-label="Default select example">
                <option defaultValue={'Select Payment Method'}>Select Payment Method</option>
                <option value="1">Cash on Delivery</option>
                <option value="2">Card</option>
                <option value="3">UPI - Transaction</option>
              </select>
              {/* Buttons to go back and buy now */}
              <div className='d-flex gap-3 mb-4'>
                <Link to={'/'}>
                  <button className='btn btn-secondary'>Back</button>
                </Link>
                <button className='btn btn-success' onClick={() => alert("Your Order has been Placed. Thank you!")}>Buy Now</button>
              </div>
            </div>
          </div>
      )}
    </div>
  );
}

export default BuyNowPage;
