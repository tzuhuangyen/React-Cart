//菜單元件
const Menu = ({ menu, handleAddToCart }) => {
  return (
    <>
      <a
        href="#"
        className="list-group-item list-group-item-action"
        onClick={(e) => {
          e.preventDefault();
          handleAddToCart(menu);
        }}
      >
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">{menu.name}</h5>
          <small>${menu.price}</small>
        </div>
        <p className="mb-1">{menu.description}</p>
      </a>
    </>
  );
};
export default Menu;
