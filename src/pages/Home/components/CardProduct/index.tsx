import { Link } from "react-router-dom";
import { Button } from "../../../../components/ui/Button";
import { CardContainer } from "./styles";

interface ProductData {
  id: number;
  image: string;
  title: string;
  color: string;
  size: string;
  price: number;
}

interface CardProductsProps {
  products: ProductData;
}

export const CardProduct = ({ products }: CardProductsProps) => {
  // const { addToCart } = useCart()

  return (
    <CardContainer>
      <Link to="/batata">
        <div>
          <img src={products.image} alt="Foto do produto" />
        </div>
        
        <div>
          <h2>{products.title}</h2>

          <p>Cor: {products.color}</p>
          <p>Tamanho: {products.size}</p>

          <div>
            <p>R$ {products.price},00</p>
          </div>

          <Button>Adicionar ao carrinho</Button>
        </div>
      </Link>
    </CardContainer>
  );
};
