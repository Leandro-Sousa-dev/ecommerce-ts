// import { useForm } from "react-hook-form";
import { CartContainer } from "./styles";
import { Container } from "../Home/styles";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/Button";
import { useCart } from "../../hooks/useCart";
import trash from "/trash.svg"


export const Cart = () => {
  const {
    cart,
    removeProductFromCart,
    productCartIncrement,
    productCartDecrement,
    priceTotal } = useCart();

  return (
    <Container>
      <h2>Carrinho de compras</h2>

      <CartContainer>
        <div>
          {cart.length > 0 ? (
            <table id="cartTable">
              <thead>
                <tr>
                  <th id="productColum">Produto</th>
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
                    <td id="productData">
                      <img id="productImg" src={item.image} alt="item.title" />
                    </td>
                    <td>
                      <Link to={`/${item.title}-${item.id}`}>{item.title}</Link>
                    </td>
                    <td>
                      <p>R$ {item.price},00</p>
                    </td>
                    <td>

                        <button disabled={item.quantity == 1} onClick={() => { productCartDecrement(item) }}>-</button>

                        <input type="text" value={item.quantity}/>

                        <button onClick={() => { productCartIncrement(item) }}>+</button>
                    </td>
                    <td>
                      <p>R$ {item.price * item.quantity},00</p>
                    </td>
                    <td>
                      <button id="trash" onClick={() => { removeProductFromCart(item) }}>
                        <img src={`${trash}`} alt="Remove from cart" />
                      </button>
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          ) : (
            <p>Sem itens</p>
          )}
          <div>
            <h4>Cupom</h4>
            <input type="text" />
            <button>Aplicar cupom</button>
          </div>
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

            <button>Atualizar endereço</button>

          </div>
          <div>
            <div>
              <p>Subtotal dos pedidos:</p>
              <p>{priceTotal()}</p>
            </div>
          </div>
        </div>

        <Button>Finalizar compra</Button>

      </CartContainer>
    </Container>
  );
};