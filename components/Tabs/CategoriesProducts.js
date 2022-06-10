import React, { useEffect } from "react";
import { useQuery } from "../../context/QueryProvider";
import { useQuery as usePostQuery } from "../../context/PosProvider";
export default function CategoriesProducts() {
  const { categoriesProducts } = useQuery();
  const { selectedCategory, setSelectedCategory } = usePostQuery();
  useEffect(() => {
    if (categoriesProducts) {
      setSelectedCategory(categoriesProducts[0]);
    }
   
  }, [categoriesProducts]);

  return (
    <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
      <ul className="flex flex-wrap -mb-px">
        {categoriesProducts.map((category, index) => (
          <li className="mr-2" key={index}>
            <a
              href="#"
              className={
                category === selectedCategory
                  ? " text-xl font-semibold tracking-tight text-gray-900 dark:text-white inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500"
                  : " text-xl font-semibold tracking-tight text-gray-900 dark:text-white inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              }
              onClick={() => setSelectedCategory(category)}
            >
              {category.name}
            </a>
          </li>
        ))}
        {/* <li className="mr-2">
          <a
            href="#"
            className="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500"
            aria-current="page"
          >
            Dashboard
          </a>
        </li> */}
      </ul>
    </div>
  );
}
