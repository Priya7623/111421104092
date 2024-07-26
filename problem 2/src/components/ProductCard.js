import React from 'react';

const ProductCard = ({ product }) => {

  if (!product) {
    return <div className="product-card">Product data not available</div>;
  }

  return (
    <div className="product-card">
      <img src={product.image || 'default-image.jpg'} alt={product.name || 'Default Name'} />
      <h2>{product.name || 'Default Name'}</h2>
      <p>Company: {product.company || 'Default Company'}</p>
      <p>Category: {product.category || 'Default Category'}</p>
      <p>Price: ${product.price || '0'}</p>
      <p>Rating: {product.rating || 'No Rating'}</p>
      <p>Discount: {product.discount || '0'}%</p>
      <p>Availability: {product.availability || 'Unknown'}</p>
    </div>
  );
};

export default ProductCard;
