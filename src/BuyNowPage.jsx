import React, { useContext, useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
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

  // Extract the productId from the URL parameters
  const { productId } = useParams();

  // Get the list of all products from the UserContext
  const allProducts = useContext(UserContext);

  // Find the selected product based on the productId
  const [selectedProduct, setSelectedProduct] = useState(null);

  // State to manage the quantity of the product
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const product = allProducts.find(product => product.id === parseInt(productId));
    setSelectedProduct(product);
  }, [productId, allProducts]);

  // Function to handle incrementing the quantity
  const handleIncrement = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  // Function to handle decrementing the quantity
  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  // Calculate the total amount based on the selected product price and quantity
  const totalAmount = selectedProduct ? selectedProduct.price * quantity : 0;

  // Find the corresponding image for the selected product
  const selectedImage = images.find(img => img.id === parseInt(productId));

  return (
    <div className='container mt-3'>
      <h3 className='text-center mb-3'>Check Out</h3>
      <div className='row'>
        <div className='col-sm-12 col-md-12 col-lg-6 col-xl-6'>
          {/* Display selected product details */}
          {selectedProduct && (
            <>
              {selectedImage && <img className="mb-3" id='buy-now-img' src={selectedImage.image} alt={selectedProduct.title} />}
              <h4>{selectedProduct.title}</h4>
              <h5>Brand - {selectedProduct.brand}</h5>
              <p>{selectedProduct.description}</p>
            </>
          )}
        </div>
        <div className='col-sm-12 col-md-12 col-lg-6 col-xl-6'>
          {selectedProduct && (
            <>
              <div className='d-flex gap-2'>
                <span><b>Quantity - </b></span>
                {/* Button to decrement quantity */}
                <button className='btn btn-primary py-0' onClick={handleDecrement}>-</button>
                <span><b>{quantity}</b></span>
                {/* Button to increment quantity */}
                <button className='btn btn-primary py-0' onClick={handleIncrement}>+</button>
                <span><b>Price: ${selectedProduct.price}</b></span>
              </div>
              {/* Display calculated amounts */}
              <p className='mt-2'><b>Sub Total: ${totalAmount}</b></p>
              <p><b>Shipping: Free</b></p>
              <p><b>Quantity: {quantity}</b></p>
              <p><b>Total: ${totalAmount}</b></p>
              {/* Payment method selection dropdown */}
              <select className="form-select w-50" id='payment-methods' aria-label="Default select example">
                <option defaultValue={'Select Payment Method'}>Select Payment Method</option>
                <option value="1">Cash on Delivery</option>
                <option value="2">Card</option>
                <option value="3">UPI - Transaction</option>
              </select>
              <div className='d-flex gap-3'>
                {/* Link to go back to the home page */}
                <Link to={'/'}>
                  <button className='btn btn-secondary mt-3'>Back</button>
                </Link>
                {/* Button to place the order */}
                <button className='btn btn-success mt-3' onClick={() => alert("Your Order has been Placed. Thankyou!!")}>Buy Now</button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default BuyNowPage;