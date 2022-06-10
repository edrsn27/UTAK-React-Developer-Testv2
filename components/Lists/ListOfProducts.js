import React, { useEffect } from "react";
import { useQuery } from "../../context/PosProvider";

export default function ListOfProducts() {
  const { selectedCategory, addItemToOrder, order, formatter } = useQuery();
  const { categories } = useQuery();
  const addItemToOrderHandler = (item) => {
    addItemToOrder(item);
  };

  return (
    <>
      <div className="max-h-full ">
        {selectedCategory != null &&
          selectedCategory.products &&
          Object.values(selectedCategory.products).map((product, index) => {
            return (
              <div
                key={index}
                className="max-w-sm mt-2 bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <div className="px-5 pb-5">
                  <a
                    onClick={() =>
                      addItemToOrderHandler({
                        name: product.name,
                        quantity: 1,
                        price: Number(product.price),
                      })
                    }
                    className="cursor-pointer"
                  >
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                      {product.name}
                    </h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      {product.description}
                    </p>
                    <div className="text-3xl font-bold text-gray-900 dark:text-white">
                      {formatter.format(product.price)}
                    </div>
                  </a>

                  {/* <div className="flex items-center justify-between">
                        <a
                          href="#"
                          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                          Add to cart
                        </a>
                      </div> */}
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}
