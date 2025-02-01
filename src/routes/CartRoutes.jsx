import { Navigate, Route, Routes } from "react-router-dom";
import CartView from "../components/CartView";
import CatalogView from "../components/CatalogView";

export const CartRoutes = ({handlerAddProductCart, cartItems, handlerDeleteProductCart}) => {
  return (
    <>
      <Routes>
        <Route
          path="catalog"
          element={<CatalogView handler={handlerAddProductCart} />}
        />
        <Route
          path="cart"
          element={
            cartItems.length > 0 ? (
              <div className="my-4 w-50">
                <CartView
                  cartItems={cartItems}
                  handlerDelete={handlerDeleteProductCart}
                />
              </div>
            ) : (
              <div className="alert alert-warning">
                No hay productos en el carrito de compras!
              </div>
            )
          }
        />
        <Route path="/" element={<Navigate to={"/catalog"} />} />
      </Routes>
    </>
  );
};
