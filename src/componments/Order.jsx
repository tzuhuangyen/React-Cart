//handleUpdateQuantity, handleRemoveItem
const Order = ({ item, updateCart }) => {
  return (
    <>
      <tr>
        <td>
          <button
            type="button"
            className="btn btn-sm"
            // onClick={() => handleRemoveItem(index)}
          >
            x
          </button>
        </td>
        <td>{item.name}</td>
        <td>
          <small>{item.description}</small>
        </td>
        <td>
          <select
            className="form-select"
            value={item.quantity}
            onChange={(e) => {
              item.quantity = parseInt(e.target.value);
              updateCart(item, e.target.value);
            }}
          >
            {[...Array(10).keys()].map((item) => {
              return <option value={item + 1} key={item + 1}></option>;
            })}
          </select>
        </td>
        <td>{cartItem.price}</td>
        <td>{cartItem.price * cartItem.quantity}</td>
      </tr>
      ;
    </>
  );
};

export default Order;
