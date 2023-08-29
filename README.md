# React + Vite drinks ordering system
The provided code is a React application for a drinks ordering system. It includes a menu with various drinks, a shopping cart to add selected drinks, and an order summary card.

The key features of the application are as follows:

1. The menu component displays a list of drinks with their names, prices, and descriptions. Each drink has an "Add to Cart" button, which allows users to add the drink to their shopping cart.

2. The shopping cart component keeps track of the selected drinks. It displays the items in a table with columns for item name, description, quantity, price, and subtotal. Users can adjust the quantity of each item or remove items from the cart.

3. The cart component calculates the total price of the items in the cart and displays it below the table. It also provides a textarea for users to add any additional notes or comments for their order.

4. When users click the "Submit" button, the order component is triggered. It creates an order object with a unique ID, the cart items, the order description, and the total price. The order is then displayed in the order summary card.

5. The order summary card component shows the details of the submitted order, including the items, quantities, subtotals, and the overall total. If no order has been created yet, it displays a message indicating that no order has been placed.

Overall, this application allows users to browse a menu, add items to a shopping cart, adjust quantities, and submit an order with additional notes. The order summary card provides a clear overview of the selected items and the total price.

該應用程序允許用戶瀏覽菜單，將項目添加到購物車，調整數量，並提交帶有附加備註的訂單。訂單摘要卡提供了對所選項目和總價格的清晰概述。

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
