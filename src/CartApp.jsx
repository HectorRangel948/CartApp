import CatalogView from "./components/CatalogView";
import CartView from "./components/CartView";
import { useItemsCart } from "./hooks/useItemsCart";
import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { CartRoutes } from "./routes/CartRoutes";

const CartApp =()=>{

    const {cartItems, handlerAddProductCart, handlerDeleteProductCart} = useItemsCart();

    return <>
        <Navbar/>
        <div className="container">
            <h3>Cart</h3>
            <CartRoutes 
                cartItems={cartItems} 
                handlerAddProductCart={handlerAddProductCart} 
                handlerDeleteProductCart={handlerDeleteProductCart}
            />
              
        </div>
    </>
}

export default CartApp;