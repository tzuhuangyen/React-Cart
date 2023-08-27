//handleUpdateQuantity, handleRemoveItem
const Order = ({ item, handleRemoveItem, handleUpdatedCart }) => {
  return (
    <>
      <td>
        <button
          type="button"
          className="btn btn-sm"
          onClick={() => handleRemoveItem(item)}
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
            const value = e.target.value;
            item.quantity = parseInt(e.target.value);
            handleUpdatedCart(item, value);
          }}
        >
          {[...Array(10).keys()].map((item) => {
            return (
              <option value={item + 1} key={item}>
                {item + 1}
              </option>
            );
          })}
        </select>
      </td>
      <td>{item.price}</td>
      <td>{item.subtotal}</td>
    </>
  );
};

export default Order;
