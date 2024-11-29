import { useContext } from "react";
import { CartContainer } from "./styles";
import { CartContext } from "../../Contexts/CartContext";
import { Container } from "../Home/styles";
import { Link } from "react-router-dom";

export const Cart = () => {
  const context = useContext(CartContext);

  const cartContext = context!;

  return (
    <Container>
      <h2>Carrinho de compras</h2>

      <CartContainer>
        <div>
          {cartContext.cart.length > 0 ? (
            <table id="cartTable">
              <thead>
                <tr>
                  <th>Produto</th>
                  <th>Descrição</th>
                  <th>Preço</th>
                  <th>Quantidade</th>
                  <th>Total</th>
                  <th></th>
                </tr>
              </thead>
              {cartContext.cart.map((item, index) => (
                <tbody key={index}>
                  <tr>
                    <td>
                      <img src={item.image} alt="item.title" />
                    </td>
                    <td>
                      <Link to={`/${item.title}-${item.id}`}>{item.title}</Link>
                    </td>
                    <td>
                      <p>{item.price},00</p>
                    </td>
                    <td>
                      <p>{"input to multiply"}</p>
                    </td>
                    <td>
                      <p>{"item.price * multiplyed"}</p>
                    </td>
                    <td>
                      <button>{"remove from cart"}</button>
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          ) : (
            <p>Sem itens</p>
          )}
        </div>

        <div>
          <div>
            <p>Entrega</p>
            <div>
              <label>CEP</label>
              <input type="number" />
            </div>

            <div>
              <label htmlFor="pais">Pais</label>
              <select id="pais">
                <option value="brasil">Brasil</option>
                <option value="canada">Canadá</option>
                <option value="italia">Itália</option>
                <option value="franca">França</option>
              </select>
            </div>
          </div>
          <div></div>
        </div>
      </CartContainer>
    </Container>
  );
};

// {cartContext.cart.length > 0 ? cartContext.cart.map((product, index) => (
//     <li key={index}>
//         <p>product.title</p>
//     </li>
//     console.log(product)
// )) : console.log('a')}
