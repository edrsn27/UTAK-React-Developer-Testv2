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
    newItems.push(item);
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
    formatter,
  };
  return (
    <QueryContext.Provider value={value}>{children}</QueryContext.Provider>
  );
}
