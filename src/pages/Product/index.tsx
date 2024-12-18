import { useParams } from "react-router-dom"
import { Container } from "../Home/styles"
import { ProductContainer } from "./styles"

export const ProductsDetails = () => {
    const { id } = useParams()

    return (
        <Container>
            <ProductContainer>

            <p>{id}</p>
            </ProductContainer>
        </Container>
    )
}