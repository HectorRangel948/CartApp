import { useEffect, useState } from "react";
import { calculateTotal } from "../services/productService";

const CartView = ({ cartItems, handlerDelete }) => {

  const [total, setTotal] = useState(0);

  useEffect(()=>{
    setTotal(calculateTotal(cartItems));
    sessionStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems])
 
  const onDeleteProduct = (id) => {
    handlerDelete(id);
  };

  return (
    <>
      <h3>Carrito de compra</h3>
      <table className="table table-hover table-strip">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Total</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => {
            return (
              <tr key={item.product.id}>
                <td>{item.product.name}</td>
                <td>{item.product.price}</td>
                <td>{item.quantity}</td>
                <td>{item.quantity * item.product.price}</td>
                <td>
                  <button className="btn btn-danger" onClick={()=>onDeleteProduct(item.product.id)}>
                    Eliminar
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="3" className="text-end fw-bold">
              {" "}
              Total
            </td>
            <td colSpan="2" className="text-start fw-bold">
              {" "}
              {total}
            </td>
          </tr>
        </tfoot>
      </table>
    </>
  );
};

export default CartView;
