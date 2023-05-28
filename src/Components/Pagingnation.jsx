import React from "react";
import "./Pagingnation.css";
export const Pagingnation = ({ products, onSelectedPageHandler, page, totalPages }) => {
//   const length = products.length / 10;

//   const array = Array.from({ length });

//   console.log([...Array(totalPages)]);

  return (
    <div className="pagingantion">
      <button
        onClick={() => {
          onSelectedPageHandler(page - 1);
        }}

        className={`${page > 1 ? "" : "disabled"}`}
      >
        Prev
      </button>
      {[...Array(totalPages)].map((_, i) => {
        return (
          <span
            key={i}
            onClick={() => {
              onSelectedPageHandler(i + 1);
            }}
            className={`${page === i + 1 ? "active" : ""}`}
          >
            {i + 1}
          </span>
        );
      })}

      <button
        onClick={() => {
          onSelectedPageHandler(page + 1);
        }}
        className={`${page === totalPages ? "disabled" : ""}`}
        
      >
        Next
      </button>
    </div>
  );
};
