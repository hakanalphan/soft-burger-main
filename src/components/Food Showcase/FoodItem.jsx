import React, { useEffect, useState } from "react";
import * as cartActions from "../../redux/actions/CartAction";
import alertify from "alertifyjs";
import pot from '../../assets/burgermenu.png';
import { useDispatch } from "react-redux"; // Import useSelector
import { UseSelector } from "react-redux/es/hooks/useSelector";

import ProductService from "../../service/productService"

const FoodItem = (props) => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);

  const addToCartHandler = (product) => {
    dispatch(cartActions.addToCart(product));
    alertify.success(product.productName + " sepete eklendi");
  };

  useEffect(() => {
    
    let productService = new ProductService();
    productService
      .getProducts()
      .then((result) => {
        setProducts(result.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="flex justify-center col">
      <div className="bg-white border border-gray-100 transition transform duration-700 hover:shadow-xl hover:scale-103 p-4 rounded-lg relative ">
        <span className="bg-red-100 border border-red-500 rounded-full text-primary text-sm poppins px-4 py-1 inline-block mb-4 ">
          Burger
        </span>
        <img
          className="w-64 mx-auto transform transition duration-300 hover:scale-105"
          src={pot}
          alt=""
        />
        <div className="flex flex-col items-center my-3 space-y-2">
          <h1 className="text-gray-900 poppins text-lg">ikili burger</h1>
          <p className="text-gray-500 poppins text-sm text-center">
            HFJ HDU DHHSU DHYSB DHHSYU DSD
          </p>
          <h2 className="text-gray-900 poppins text-2xl font-bold">120tl</h2>
          <button
            className="bg-primary text-white px-8 py-2 focus:outline-none poppins rounded-full mt-24 transform transition duration-300 hover:scale-105"
            onClick={() => addToCartHandler(products[0])} 
          >
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};





export default FoodItem;