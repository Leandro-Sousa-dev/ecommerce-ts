import { products } from "../../mocks/json"
import { SectionProducts } from "./components/SectionProducts"
import { Container } from "./styles"

export const Home = () => {
    return (
        <Container>
            <h1>Produtos</h1>
            <SectionProducts products={products}/>
        </Container>
    )
}