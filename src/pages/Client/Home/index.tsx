import { products } from "../../../mocks/json"
import { SectionProducts } from "./components/SectionProducts"
import { Container } from "./styles"

export const Home = () => {
    return (
        <Container>
            <h2>Produtos</h2>
            <SectionProducts products={products}/>
        </Container>
    )
}