import React from "react";
import CartItem from "./CartItem";
import { Badge, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCart } from "../../../Redux/Customers/Cart/Action";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const jwt = localStorage.getItem("jwt");
  const { cart } = useSelector((store) => store);
  // console.log("cart ", cart);

  useEffect(() => {
    dispatch(getCart(jwt));
  }, [jwt]);

  return (
    <div className="">
      {cart && cart.cartItems && cart.cartItems.length > 0 ? (
        <div className="relative grid-cols-3 lg:grid lg:px-16">
          <div className="bg-white lg:col-span-2 lg:px-5">
            <div className="space-y-3">
              {cart.cartItems.map((item,index) => {
                return (
                  <CartItem key={index} item={item} showButton={true} />
                );
              })}
            </div>
          </div>
          <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0 ">
            <div className="p-5 bg-white border rounded-md shadow-lg">
              <p className="pb-4 font-bold opacity-60">PRICE DETAILS</p>
              <hr />
              <div className="space-y-3 font-semibold">
                <div className="flex justify-between pt-3 text-black ">
                  <span>Price ({cart.cart?.totalItem} item)</span>
                  <span>₹{cart.cart?.totalPrice}</span>
                </div>
                <div className="flex justify-between">
                  <span>Discount</span>
                  <span className="text-green-700">
                    -₹{cart.cart?.discounte}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery Charges</span>
                  <span className="text-green-700">Free</span>
                </div>
                <hr />
                <div className="flex justify-between text-lg font-bold">
                  <span>Total Amount</span>
                  <span className="text-green-700">
                    ₹{cart.cart?.totalDiscountedPrice}
                  </span>
                </div>
              </div>
              <Button
                onClick={() => navigate("/checkout?step=2")}
                variant="contained"
                type="submit"
                sx={{ padding: ".8rem 2rem", marginTop: "2rem", width: "100%" }}
              >
                Check Out
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div className="py-20 text-xl font-semibold text-center text-gray-600">
          No items in your cart 🛒
        </div>
      )}
    </div>
  );
};

export default Cart;
