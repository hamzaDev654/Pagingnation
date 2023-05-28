import React, { Fragment, useEffect, useState } from "react";
import { ProductList } from "./ProductList";
import { Pagingnation } from "./Pagingnation";
import "./Products.css";
export const ProductsTwo = () => {
  const [productsData, setProductsData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch(
        `https://dummyjson.com/products?limit=10&skip=${page * 10 - 10}`
      );

      const data = await res.json();
      if (data && data.products) {
        setProductsData(data.products);
        setTotalPages(data.total / 10);
      }
    };
    fetchProducts();
  }, [page]);

  const selectedPageHandler = (selectedPage) => {
    console.log(selectedPage);
    if (selectedPage >= 1 && selectedPage <= totalPages) {
      setPage(selectedPage);
    }
  };
  return (
    <Fragment>
         <div className="products">
      {productsData.map((data) => {
         
        return (     
           <span className="products__single" key={data.id}>
            <ProductList
              name={data.title}
              image={data.thumbnail}
            />
           </span>
        );
      
      })}
         </div>
      <Pagingnation
        onSelectedPageHandler={selectedPageHandler}
        page={page}
        products={productsData}
        totalPages={totalPages}
      />
    </Fragment>
  );
};
