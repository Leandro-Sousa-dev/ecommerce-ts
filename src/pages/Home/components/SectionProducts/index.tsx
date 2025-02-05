import { CardProduct } from "../CardProduct";
import { Container } from "./styles";
import { ProductData } from "../../../../interfaces/ProductData";

export interface SectionProductsProps {
  products: ProductData[];
}

export const SectionProducts = ({ products }: SectionProductsProps) => {
  return (
    <Container>
      {products.map((product) => (
        <CardProduct key={product.id} product={product} />
      ))}
    </Container>
  );
};