import React, { createContext, useContext, useState } from "react";
import { checkOut } from "../admin-functions/orders";
const QueryContext = createContext();

export const useQuery = () => {
  return useContext(QueryContext);
};
export default function QueryProvider({ children }) {
  // initial products state
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [order, setOrder] = useState({
    items: [],
    totalAmount: 0,
  });

  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "PHP",
  });

  const addItem = (item) => {
    let newOrder = { ...order };
    newOrder.items.push(item);
    newOrder.totalAmount += item.price;
    setOrder(newOrder);
  };

  const updateItemQuantity = (index, quantity) => {
    quantity = Number(quantity);
    let newOrder = { ...order };

    newOrder.totalAmount =
      newOrder.totalAmount -
      newOrder.items[index].price * newOrder.items[index].quantity;
    newOrder.totalAmount =
      newOrder.totalAmount + quantity * newOrder.items[index].price;
    newOrder.items[index].quantity = quantity;
    if (quantity == 0) {
      newOrder.items.splice(index, 1);
    }
    setOrder(newOrder);
  };

  const removeItem = (index) => {
    let newOrder = { ...order };
    newOrder.totalAmount -=
      newOrder.items[index].price * newOrder.items[index].quantity;
    newOrder.items.splice(index, 1);
    setOrder(newOrder);
  };

  const checkout = async () => {
    try {
      await checkOut(order);
      clearOrder();
    } catch (err) {
      alert(err);
    }
  };

  const clearOrder = () => {
    setOrder({
      items: [],
      totalAmount: 0,
    });
  };

  const value = {
    selectedCategory,
    setSelectedCategory,
    order,
    addItem,
    updateItemQuantity,
    removeItem,
    formatter,
    checkout,
  };

  return (
    <QueryContext.Provider value={value}>{children}</QueryContext.Provider>
  );
}
