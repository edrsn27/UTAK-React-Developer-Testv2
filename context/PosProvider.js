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

  // let orderTemp = {
  //   items: [
  //     {
  //       name: "",
  //       quantity: 0,
  //       price: 0,
  //       option: {
  //         name: "",
  //         additionalCost: 0,
  //       },
  //     },
  //   ],
  //   totalAmount: 0,
  //   receivedAmount: 0,
  //   change: 0,
  // };

  const addItemToOrder = (item) => {
    let newItems = [...order.items];
    let newTotalAmount = order.totalAmount;
    newTotalAmount += item.price;
    setOrder({
      items: newItems,
      totalAmount: newTotalAmount,
    });
    // setOrder((order.items) => [...items, item]);
    // console.log(order);
  };
  const value = {
    selectedCategory,
    setSelectedCategory,
    order,
    addItemToOrder,
  };
  return (
    <QueryContext.Provider value={value}>{children}</QueryContext.Provider>
  );
}
