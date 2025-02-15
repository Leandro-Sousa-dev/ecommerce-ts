import { CartContainer } from "./styles";
import { Container } from "../../Home/styles";
import { useCart } from "@hooks/useCart";
import { CartTable } from "./components/CartTable";
import { CupomContainer } from "./components/CupomContainer";
import { ShipmentContainer } from "./components/ShipmentContainer"
import { useState } from "react";


export const Cart = () => {
  const [cupom, setCupom] = useState('')

  const handleValidCupom = (c: string) => {
    setCupom(c)
  }

  const {
    cart,
    priceTotal } = useCart();

  return (
    <Container>

      <CartContainer>
        {cart.length > 0 ? (
          <div>
            <h2>Carrinho de compras</h2>
            <div className="responsive">
              <div>
                <CartTable />
                <CupomContainer onValidateCupom={handleValidCupom} />

              </div>

              <ShipmentContainer $cupom={cupom} $priceTotal={priceTotal()} />
            </div>
          </div>
        ) : (
          <p>✖ Nenhum item no carrinho...</p>
        )}
      </CartContainer>

    </Container>
  );
};