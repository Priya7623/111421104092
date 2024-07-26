const ProductPage = ({ products }) => {
    const { productId } = useParams();
    const product = products.find((p) => p.id === productId);
  
    return (
      <div className="product-page">
        {product ? <ProductDetail product={product} /> : <p>Product not found</p>}
      </div>
    );
  };
  