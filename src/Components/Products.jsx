import React, { Fragment, useEffect, useState } from "react";
import { ProductList } from "./ProductList";
import { Pagingnation } from "./Pagingnation";
import "./Products.css";
export const Products = () => {
  const [productsData, setProductsData] = useState([]);
  const [page, setPage] = useState(1);
  const fetchProducts = async () => {
    const res = await fetch("https://dummyjson.com/products?limit=100");
    const data = await res.json();
    if (data && data.products) {
      setProductsData(data.products);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const selectedPageHandler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= productsData.length / 10 
    ) {
      setPage(selectedPage);
    }
  };
  return (
    <Fragment>
      {productsData.slice(page * 10 - 10, page * 10).map((data) => {
        return (
          <div className="products" key={data.id}>
            <ProductList
              id={data.id}
              name={data.title}
              image={data.thumbnail}
            />
          </div>
        );
      })}
      <Pagingnation
        onSelectedPageHandler={selectedPageHandler}
        page={page}
        products={productsData}
      />
    </Fragment>
  );
};
