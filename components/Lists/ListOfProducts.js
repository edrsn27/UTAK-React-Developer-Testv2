import React, { useEffect } from "react";
import { useQuery } from "../../context/PosProvider";

export default function ListOfProducts() {
  const { selectedCategory, addItem, order, formatter } = useQuery();
  const { categories } = useQuery();

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
                      addItem({
                        product_uuid: product.uuid,
                        category_uuid: selectedCategory.uuid,
                        name: product.name,
                        price: product.price,
                        quantity: 1,
                        option: "",
                      })
                    }
                    className="cursor-pointer"
                  >
                    <img
                      className="object-cover w-full h-48 rounded-t-lg"
                      src={product.image}
                      alt=""
                    />
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                      {product.name}
                    </h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      {product.description}
                    </p>
                    <div className="text-3xl font-bold text-gray-900 dark:text-white">
                      {formatter.format(product.price)}
                    </div>
                    <div className="font-bold text-gray-900 text-xm dark:text-white">
                      stocks : {product.stocks}
                    </div>
                  </a>
                  <div key={index} className="mt-3">
                    <div className="flex mt-4 space-x-3 lg:mt-6">
                      {product.options &&
                        product.options.map((option, index) => (
                          <a
                            key={index}
                            className="inline-flex cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-sm rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            onClick={() =>
                              addItem({
                                product_uuid: product.uuid,
                                category_uuid: selectedCategory.uuid,
                                name: product.name,
                                price:
                                  Number(product.price) +
                                  Number(option.additionalCost),
                                quantity: 1,
                                option: option.name,
                              })
                            }
                          >
                            {option.name} + {option.additionalCost}
                          </a>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}
