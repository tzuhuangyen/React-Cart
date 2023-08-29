import { useState, useEffect } from "react";
import datas from "./componments/datas";
import Menu from "./componments/Menu";
import Order from "./componments/Order";
import Card from "./componments/Card";

function App() {
  const [drinks] = useState(datas);
  const [cart, setCart] = useState([]); //加入購物車使用
  const [sum, setSum] = useState(0);
  const [description, setDescription] = useState("");
  const [order, setOrder] = useState([]);

  //點擊菜單加入購物車
  const handleAddToCart = (drink) => {
    const existItem = cart.find((item) => item.name === drink.name);
    if (existItem) {
      //使用name找相同項目 如果當前購物車有此飲料就更新數量
      handleUpdatedCart(existItem, existItem.quantity + 1);
      return;
    } else {
      //如果當前購物車沒有此飲料就新增一筆
      setCart([
        ...cart,
        {
          ...drink,
          id: new Date().getTime(),
          quantity: 1,
          subtotal: drink.price,
        },
      ]);
    }
  };
  //更新購物車內容
  const handleUpdatedCart = (item, value) => {
    //item更新的购物車項目 value 代表更新後的數量小計。
    const newCart = cart.map((cartItem) => {
      //當點擊的項目的 id 與購物車內 item 的 id 相同，說明這是要更新的项目
      if (cartItem.id === item.id) {
        return {
          ...cartItem,
          quantity: parseInt(value),
          subtotal: cartItem.price * parseInt(value),
        };
      }
      return cartItem;
    });
    setCart(newCart);
  };

  //更新購物車總價
  useEffect(() => {
    const total = cart.reduce((pre, next) => {
      return pre + next.subtotal;
    }, 0);
    setSum(total);
  }, [cart]);

  //刪除購物車項目
  const handleRemoveItem = (item) => {
    const newCart = cart.filter((cartItem) => {
      return cartItem.id !== item.id;
    });
    setCart(newCart);
  };

  //建立/送出訂單
  const createOrder = () => {
    setOrder({
      id: new Date().getTime(),
      cart,
      description,
      sum,
    });
    setCart([]);
    setDescription("");
  };

  return (
    <>
      {/* <h1>deplay sussceful</h1> */}
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4">
            <div className="list-group">
              {drinks.map((drink) => {
                return (
                  <Menu
                    key={drink.id}
                    name={drink.name}
                    price={drink.price}
                    description={drink.description}
                    handleAddToCart={handleAddToCart}
                    handleUpdatedCart={handleUpdatedCart}
                  />
                );
              })}
            </div>
          </div>
          <div className="col-md-8">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col" width="50">
                    操作
                  </th>
                  <th scope="col">品項</th>
                  <th scope="col">描述</th>
                  <th scope="col" width="90">
                    數量
                  </th>
                  <th scope="col">單價</th>
                  <th scope="col">小計</th>
                </tr>
              </thead>

              {cart.map((item) => {
                return (
                  <tbody key={item.id}>
                    <tr>
                      {/*傳入要顯示的參數和函示*/}
                      <Order
                        item={item}
                        handleRemoveItem={handleRemoveItem}
                        handleUpdatedCart={handleUpdatedCart}
                        cart={cart}
                        setCart={setCart}
                      />
                    </tr>
                  </tbody>
                );
              })}
            </table>
            <div className="text-end mb-3">
              {cart.length === 0 ? (
                <div className="alert alert-primary text-center" role="alert">
                  請選擇商品
                </div>
              ) : (
                <>
                  <div className="text-end mb-3">
                    <h5>
                      總計: <span>${sum}</span>
                    </h5>
                  </div>
                  <textarea
                    className="form-control mb-3"
                    rows="3"
                    placeholder="備註"
                    onChange={(e) => {
                      setDescription(e.target.value);
                    }}
                  ></textarea>
                  <div className="text-end">
                    <button
                      className="btn btn-primary"
                      onClick={(e) => {
                        e.preventDefault();
                        createOrder();
                      }}
                    >
                      送出
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>

          <hr />
          <div className="row justify-content-center">
            <div className="col-8">
              <Card
                name={name}
                //quantity={quantity}
                //subtotal={subtotal}
                description={description}
                sum={sum}
                order={order}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
