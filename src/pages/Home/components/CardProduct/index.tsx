import { Link } from "react-router-dom";
import { Button } from "../../../../components/ui/Button";
import { Container } from "./styles";

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
    <Container>
      <Link to="/batata">
        <div>
          <img src={products.image} alt="Foto do produto" />
        </div>
        <div>
          <h2>{products.title}</h2>
          <div>
            <p>Cor: {products.color}</p>
            <p>Tamanho: {products.size}</p>
          </div>
        </div>
        <Button>Adicionar ao carrinho</Button>
      </Link>
    </Container>
  );
};
