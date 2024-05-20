import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from './UserContext';

// Import images
import iPhone9Image from '/iPhone9.jpg';
import iPhoneXImage from '/iPhoneX.jpg';
import SamsungImage from '/Samsung.jpg';
import OppoImage from '/oppoPhone.jpg';
import HuwaiImage from '/huwaiPhone.jpg';

function LandingPage() {
  // Use the UserContext to get the list of products
  const products = useContext(UserContext);

  // To store the images
  const images = [
    { id: 1, title: "iPhone 9", image: iPhone9Image },
    { id: 2, title: 'iPhone X', image: iPhoneXImage },
    { id: 3, title: 'Samsung Universe 9', image: SamsungImage },
    { id: 4, title: 'Oppo F19', image: OppoImage },
    { id: 5, title: 'Huwai P30', image: HuwaiImage },
  ];

  return (
    <>
      {/* Navigation Bar */}
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container">
            <a className="navbar-brand" href="#">JustShopIt</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">About</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Shop
                  </a>
                  <ul className="dropdown-menu" id="dropdown-list-items">
                    <li><a className="dropdown-item" href="#">All Products</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Popular Items</a></li>
                    <li><a className="dropdown-item" href="#">New Arrivals</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      {/* Home Page Header */}
      <header className="bg-dark py-4">
        <div className="container">
          <h1 className="text-center text-white mt-3">
            📱Shop in Style📱
          </h1>
          <p className="text-center text-white-50">
            Make Your Choice
          </p>
        </div>
      </header>

      {/* Products Section */}
      <div className='container-fluid'>
        <h1 className='text-center mt-4'>Products</h1>
        <div className='container px-4 mt-3 mb-5'>
          <div className='row'>
            {/* Map through the products and display each product in a card */}
            {products && products.map(product => {
              // Find the corresponding image for the product
              const image = images.find(img => img.id === product.id)?.image;
              return (
                <div className='col-sm-12 col-md-6 col-lg-4 col-xl-4 py-3' key={product.id}>
                  <div className='card mb-3 h-100'>
                    {image && <img className="card-img-top" src={image} alt={product.title} />}
                    <div className="card-body">
                      <h4>{product.title}</h4>
                      <h5>Brand - {product.brand}</h5>
                      <p>{product.description}</p>
                      <p>Ratings - {product.rating}⭐</p>
                      <p>Price - ${product.price}</p>
                      <p>Discount Percentage - {product.discountPercentage}%</p>
                      <p>Available Stocks - {product.stock}</p>
                      {/* Link to the Buy Now page for the selected product */}
                      <Link to={`/buy-now/${product.id}`}>
                        <button className="btn btn-outline-success">Buy Now</button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-5 bg-dark">
        <div className="container">
          <p className="m-0 text-center text-white">Copyright ©</p>
        </div>
      </footer>
    </>
  );
}

export default LandingPage;
