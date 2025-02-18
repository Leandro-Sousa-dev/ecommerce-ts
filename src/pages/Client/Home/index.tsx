import { getProducts } from "services/getProducts"
import { products } from "../../../mocks/json"
import { SectionProducts } from "./components/SectionProducts"
import { Container } from "./styles"

export const Home = () => {
    const fetchData = async () => {
        const data = await getProducts()
        console.log(data);
    }
    fetchData()

    return (
        <Container>
            <h2>Produtos</h2>
            <SectionProducts products={products} />
        </Container>
    )
}