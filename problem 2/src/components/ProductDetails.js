import React from 'react';

const ProductDetail = ({ product }) => {
 
  if (!product) {
    return <p>Product details not available</p>;
  }

  return (
    <div className="product-detail">
      <img src={product.image || 'default-image.jpg'} alt={product.name || 'Default Name'} />
      <h1>{product.name || 'Default Name'}</h1>
      <p>Company: {product.company || 'Default Company'}</p>
      <p>Category: {product.category || 'Default Category'}</p>
      <p>Price: ${product.price || '0'}</p>
      <p>Rating: {product.rating || 'No Rating'}</p>
      <p>Discount: {product.discount || '0%'}%</p>
      <p>Availability: {product.availability || 'Unknown'}</p>
    </div>
  );
};

export default ProductDetail;
