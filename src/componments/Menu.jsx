//菜單元件
const Menu = ({ name, price, description, handleAddToCart }) => {
  return (
    <>
      <a
        href="#"
        className="list-group-item list-group-item-action"
        onClick={(e) => {
          e.preventDefault();
          handleAddToCart({ name, price, description });
        }}
      >
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">{name}</h5>
          <small>${price}</small>
        </div>
        <p className="mb-1">{description}</p>
        {/*<button handleAddToCart={handleAddToCart}>加入購物車</button>*/}
      </a>
    </>
  );
};
export default Menu;
