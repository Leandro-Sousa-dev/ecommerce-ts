import { Link, useParams } from "react-router-dom"
import { Container } from "../Home/styles"
import { ProductContainer } from "./styles"

import { products } from "../../mocks/json"
import { ProductData } from "@interfaces/ProductData"
import { Button } from "@components/ui/Button"
import { useCart } from "@hooks/useCart"

export const ProductsDetails = () => {
    const { id } = useParams()
    const { addProductIntoCart } = useCart()

    const product: ProductData | undefined = products.find((product: ProductData) => {
        if (product.id == Number(id)) return product
    })

    const similarProducts: ProductData[] = products.filter((product: ProductData) => {
        if (product.id !== Number(id)) {
            return { product }
        }

    })

    return (
        <Container>
            <ProductContainer>
                {product ? (
                    <>
                        <div>
                            <div className="productHighlight">
                                <img src={product.image} alt={product.title} />

                                <div className="productDetails">
                                    <h2>{product.title}</h2>

                                    <div>
                                        <div>
                                            <p><span>Cor: </span>{product.color = product.color.charAt(0).toUpperCase() + product.color.slice(1)}</p>
                                        </div>
                                        <div>
                                            <p><span>Tamanho: </span>{product.size}</p>
                                        </div>
                                    </div>
                                    <p className="price">R$ {product.price},00</p>
                                    <div>
                                        <p><span>Descrição: </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quo facilis, ipsum mollitia similique recusandae vel veniam nam id, praesentium molestiae magnam culpa ut, deserunt aliquam porro vero. Quibusdam, eligendi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi commodi earum incidunt distinctio, ea consequuntur iure porro nihil odio dolorem temporibus asperiores at et accusantium nam obcaecati laboriosam. Nobis, quasi.</p>
                                    </div>
                                    <div className="addToCartBtn">
                                        <Button onClick={() => {
                                            addProductIntoCart(product);
                                        }}>Adicionar ao carrinho</Button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="similarContainer">
                            <div>
                                <h4>Produtos semelhantes</h4>

                            </div>
                            <ul className="similarProducts">
                                {similarProducts.slice(0, 4).map((product, i) => {
                                    return (
                                        <li key={i} >
                                            <Link to={`/products/${product.id}`}>
                                                <img src={product.image} alt={product.title} />

                                            </Link>

                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </>
                ) : (
                    <p>Product not found</p>
                )}
            </ProductContainer>
        </Container>
    )
}