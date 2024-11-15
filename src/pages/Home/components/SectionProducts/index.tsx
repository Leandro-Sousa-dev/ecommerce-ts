import { CardProduct } from "../CardProduct";
import { Container } from "./styles";

interface ProductData {
  id: number;
  image: string;
  title: string;
  color: string;
  size: string;
  price: number;
}

export interface SectionProductsProps {
  products: ProductData[];
}

export const SectionProducts = ({ products }: SectionProductsProps) => {
  return (
    <Container>
      {products.map((product) => (
        <CardProduct key={product.id} products={product} />
      ))}
    </Container>
  );
};
