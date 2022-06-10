import React, { createContext, useContext, useState } from "react";

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

    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });

  const addItem = (item) => {
    let newOrder = { ...order };
    newOrder.items.push(item);
    newOrder.totalAmount += item.price;
    setOrder(newOrder);
    console.log(newOrder);
  };

  const updateItemQuantity = (index, quantity) => {
    let newOrder = { ...order };

    newOrder.totalAmount =
      newOrder.totalAmount -
      newOrder.items[index].price * newOrder.items[index].quantity;
    newOrder.totalAmount =
      newOrder.totalAmount + quantity * newOrder.items[index].price;
    newOrder.items[index].quantity = quantity;

    setOrder(newOrder);
  };

  const removeItem = (index) => {
    let newOrder = { ...order };
    newOrder.totalAmount -=
      newOrder.items[index].price * newOrder.items[index].quantity;
    newOrder.items.splice(index, 1);
    setOrder(newOrder);
  };

  const value = {
    selectedCategory,
    setSelectedCategory,
    order,
    addItem,
    updateItemQuantity,
    removeItem,
    formatter,
  };
  return (
    <QueryContext.Provider value={value}>{children}</QueryContext.Provider>
  );
}
