import { CartContainer } from "./styles";
import { Container } from "../Home/styles";
import { Button } from "../../components/ui/Button";
import { useCart } from "../../hooks/useCart";
import { CartTable } from "./components/CartTable";
import { CupomContainer } from "./components/CupomContainer";


export const Cart = () => {
  const {
    cart,
    priceTotal } = useCart();

  return (
    <Container>

      <CartContainer>
        {cart.length > 0 ? (
          <div>
            <h2>Carrinho de compras</h2>
            <div>
              <CartTable />
              <CupomContainer />

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

          </div>
        ) : (
          <p>✖ Nenhum item no carrinho...</p>
        )}
      </CartContainer>

    </Container>
  );
};