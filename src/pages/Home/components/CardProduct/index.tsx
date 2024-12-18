import { Link } from "react-router-dom";
import { Button } from "../../../../components/ui/Button";
import { CardContainer } from "./styles";
import { useCart } from "../../../../hooks/useCart";

interface ProductData {
  id: number;
  image: string;
  title: string;
  color: string;
  size: string;
  price: number;
}

interface CardProductsProps {
  product: ProductData;
}

export const CardProduct = ({ product }: CardProductsProps) => {
  const { addProductIntoCart } = useCart();

  return (
    <CardContainer>
      <Link to={`/${product.title}-${product.id}`}>
        <div>
          <img src={product.image} alt="Foto do produto" />
        </div>

        <div>
          <h3>{product.title}</h3>

          <p>Cor: {product.color}</p>
          <p>Tamanho: {product.size}</p>

          <div>
            <p>R$ {product.price},00</p>
          </div>
        </div>
      </Link>
      <Button
        onClick={() => {
          addProductIntoCart(product);
        }}
      >
        Adicionar ao carrinho
      </Button>
    </CardContainer>
  );
};
