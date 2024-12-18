import { CartContainer } from "./styles";
import { Container } from "../Home/styles";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/Button";
import { useCart } from "../../hooks/useCart";

export const Cart = () => {
  const {cart, removeProductFromCart} = useCart();

  return (
    <Container>
      <h2>Carrinho de compras</h2>

      <CartContainer>
        <div>
          {cart.length > 0 ? (
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
              {cart.map((item, index) => (
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
                      <p>{item.quantity}</p>
                    </td>
                    <td>
                      <p>{item.price * item.quantity},00</p>
                    </td>
                    <td>
                      <Button onClick={()=>{removeProductFromCart(item)}}>{"remove from cart"}</Button>
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