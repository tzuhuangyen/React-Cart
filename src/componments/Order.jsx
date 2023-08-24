import { useState } from "react";

const Order = ({ cart, handleRemoveItem }) => {
  //   const [total, setTotal] = useState(0);
  //   return (
  //     <>
  //       <table className="table">
  //         <thead>
  //           <tr>
  //             <th scope="col" width="50">
  //               操作
  //             </th>
  //             <th scope="col">品項</th>
  //             <th scope="col">描述</th>
  //             <th scope="col" width="90">
  //               數量
  //             </th>
  //             <th scope="col">單價</th>
  //             <th scope="col">小計</th>
  //           </tr>
  //         </thead>
  //         <tbody>
  //           {cart.map((item) => (
  //             <tr key={item.id}>
  //               <td>
  //                 <button
  //                   type="button"
  //                   className="btn btn-sm"
  //                   onClick={() => handleRemoveItem(index)}
  //                 >
  //                   x
  //                 </button>
  //               </td>
  //               <td>{item.title}</td>
  //               <td>
  //                 <small>{item.description}</small>
  //               </td>
  //               <td>
  //                 <select
  //                   className="form-select"
  //                   value={item.qty}
  //                   onChange={(e) =>
  //                     handleUpdateQuantity(index, event.target.value)
  //                   }
  //                 >
  //                   <option value="1">1</option>
  //                   <option value="2">2</option>
  //                   <option value="3">3</option>
  //                   <option value="4">4</option>
  //                   <option value="5">5</option>
  //                   <option value="5">6</option>
  //                   <option value="7">7</option>
  //                   <option value="8">8</option>
  //                   <option value="9">9</option>
  //                   <option value="10">10</option>
  //                 </select>
  //               </td>
  //               <td>{item.price}</td>
  //               <td>{item.price}</td>
  //             </tr>
  //           ))}
  //         </tbody>
  //       </table>
  //       <div className="text-end mb-3">
  //         <h5>
  //           總計: <span>${total}</span>
  //         </h5>
  //       </div>
  //       <textarea
  //         className="form-control mb-3"
  //         rows="3"
  //         placeholder="備註"
  //       ></textarea>
  //       <div className="text-end">
  //         <button className="btn btn-primary">送出</button>
  //       </div>
  //     </>
  //   );
};

export default Order;
