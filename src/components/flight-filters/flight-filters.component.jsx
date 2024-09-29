import React from "react";

import { useDispatch } from "react-redux";
import { filterByPrice } from "../../store/slices/flights";

const FlightFilters = () => {
  const dispatch = useDispatch();

  const filterHandler = (price) => {
    dispatch(filterByPrice({ price: price }));
  };

  return (
    <div>
      <p>Price</p>
      <ul>
        <li
          onClick={() => {
            filterHandler(1000);
          }}
        >
          1000
        </li>
        <li
          onClick={() => {
            filterHandler(2000);
          }}
        >
          2000
        </li>
        <li
          onClick={() => {
            filterHandler(3000);
          }}
        >
          3000
        </li>
        <li
          onClick={() => {
            filterHandler(4000);
          }}
        >
          4000
        </li>
        <li
          onClick={() => {
            filterHandler(5000);
          }}
        >
          5000
        </li>
        <li
          onClick={() => {
            filterHandler(6000);
          }}
        >
          6000
        </li>
        <li
          onClick={() => {
            filterHandler(null);
          }}
        >
          Clear
        </li>
      </ul>
    </div>
  );
};

export default FlightFilters;
