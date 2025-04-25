const Cart = require("../models/cart.model.js");
const CartItem = require("../models/cartItem.model.js");
const Product = require("../models/product.model.js");
const User = require("../models/user.model.js");


// Create a new cart for a user
async function createCart(user) {
  const cart = new Cart({ user });
  const createdCart = await cart.save();
  return createdCart;
}

// Find a user's cart and update cart details
async function findUserCart(userId) {
  
  let cart =await Cart.findOne({ user: userId })
  console.log("cartservice",cart)
  if(cart==null){
    return;
  }
  let cartItems=await CartItem.find({cart:cart._id}).populate("product")

  cart.cartItems=cartItems
  
 
  let totalPrice = 0;
  let totalDiscountedPrice = 0;   
  let totalItem = 0;

  for (const cartItem of cart.cartItems) {
    totalPrice += cartItem.price;
    totalDiscountedPrice += cartItem.discountedPrice;
    totalItem += cartItem.quantity;
  }

  cart.totalPrice = totalPrice;
  cart.totalItem = totalItem;
  cart.totalDiscountedPrice = totalDiscountedPrice;
  cart.discounte = totalPrice - totalDiscountedPrice;

  const updatedCart = await cart.save();
  return updatedCart;
  // return cart;

}


// Add an item to the user's cart
async function addCartItem(userId, req) {
  try {
    const cart = await Cart.findOne({ user: userId });
    const product = await Product.findById(req.productId);

    if (!cart || !product) {
      throw new Error('Cart or Product not found');
    }

    const isPresent = await CartItem.findOne({ cart: cart._id, product: product._id, userId });

    if (!isPresent) {  
      const cartItem = new CartItem({
        product: product._id,
        cart: cart._id,
        quantity: 1,
        userId,
        price: product.discountedPrice,
        size: "M",
        discountedPrice: product.discountedPrice
      });

      // console.log("cartItem", cartItem);

      const createdCartItem = await cartItem.save();
      // console.log("createdCartItem", createdCartItem);

      cart.cartItems.push(createdCartItem);
      // console.log("cart", cart);
      
      await cart.save();
    }

    return 'Item added to cart';

  } catch (error) {
    console.error("Error adding item to cart:", error);
    throw new Error('Failed to add item to cart');
  }
}

module.exports = { createCart, findUserCart, addCartItem };
