import { CartContainer } from "./styles";
import { Container } from "../Home/styles";
import { useCart } from "../../hooks/useCart";
import { CartTable } from "./components/CartTable";
import { CupomContainer } from "./components/CupomContainer";
import { ShipmentContainer } from "./components/ShipmentContainer"


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

            <ShipmentContainer $priceTotal={priceTotal()} />
          </div>
        ) : (
          <p>✖ Nenhum item no carrinho...</p>
        )}
      </CartContainer>

    </Container>
  );
};