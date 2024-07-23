


const ProductItem = ({ item }) => {
  return (
    <div className="product-item">
      <img className="product-item-img" src={item.image} alt="" />
      <div className="product-item-block">
      <h4 className="product-item-title">
        {item.title.length > 30
          ? item.title.substr(0, 27).trim() + "..."
          : item.title}
      </h4>
      <p className="product-item-text">
        {item.description.length > 30
          ? item.description.substr(0, 27).trim() + "..."
          : item.description}
      </p>
      <p className="product-item-price">${item.price}</p>
    </div>
    </div>
  );
};

export default ProductItem;
