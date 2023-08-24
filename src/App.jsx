import { useState, useEffect } from "react";
import datas from "./componments/datas";
//import Card from "./componments/Card";
import MenuItem from "./componments/Menu";
//import Order from "./componments/Order";

function App() {
  const [drinks, setDrinks] = useState(datas);
  const [cart, setCart] = useState([]);
  const [sum, setSum] = useState(0);

  //點擊菜單加入購物車
  const handleAddToCart = (menu) => {
    const menuIndex = cart.findIndex((item) => item.id === menu.id);
    //如果當前購物車沒有此飲料就新增一筆
    if (menuIndex !== -1) {
      const targetItem = cart[menuIndex];
      targetItem.quantity = targetItem.quantity + 1;
      targetItem.quantity = targetItem * targetItem.price;
      setCart([...cart]);
    } else {
      setCart([
        ...cart,
        {
          ...menu,
          id: new Date().getTime(),
          quantity: 1,
          subtotal: menu.price,
        },
      ]);
    }
  };

  //更新購物車
  // const updatedCart = (item, value) => {
  //   const newCart = cart.map((cartItem) => {
  //     if (cartItem.id === item.id) {
  //       return {
  //         ...cartItem,
  //         quantity: parseInt(value),
  //         subtotal: cartItem.price * parseInt(value),
  //       };
  //     }
  //     return cartItem;
  //   });
  //   setCart(newCart);
  // };
  //更新購物車總價
  // useEffect(
  //   () => {
  //     const total = cart.reduce((pre, next) => {
  //       return pre + next.price;
  //     }, 0);
  //     setSum(total);
  //   },
  //   { cart }
  // );

  //刪除購物車項目
  // const handleRemoveItem = (index) => {
  //   const updatedCart = [...cart];
  //   updatedCart.splice(index, 1);
  //   setCart(updatedCart);
  // };

  return (
    <>
      {/* <h1>deplay sussceful</h1> */}
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4">
            <div className="list-group">
              {datas.map((item) => {
                return (
                  <MenuItem
                    key={item.id}
                    menu={item}
                    handleAddToCart={handleAddToCart}
                  />
                );
              })}
            </div>
          </div>
          {/* <div className="col-md-8">
            <Order handleRemoveItem={handleRemoveItem} />
          </div> */}
          <hr />
          {/* <div className="row justify-content-center">
            <div className="col-8">
              <Card />
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default App;
