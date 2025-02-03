import { Link } from "react-router-dom";
import trash from "/trash.svg"
import { useCart } from "../../../../hooks/useCart";
import { Table } from "./styles";


export const CartTable = () => {
    const {
        cart,
        removeProductFromCart,
        productCartDecrement,
        productCartIncrement
    } = useCart()

    return (
        <Table>
            <thead>
                <tr className="tGrid">
                    <th className="hidden">Produto</th>
                    <th>Descrição</th>
                    <th>Preço</th>
                    <th>Quantidade</th>
                    <th className="hidden" >Total</th>
                    <th></th>
                </tr>
            </thead>
            {cart.map((item, index) => (
                <tbody key={index}>
                    <tr className="tGrid">
                        <td className="hidden">
                            <img className="productImg" src={item.image} alt="item.title" />
                        </td>
                        <td className="title">
                            <Link to={`/${item.title}-${item.id}`}>{item.title}</Link>
                        </td>
                        <td className="price">
                            <p>R$ {item.price},00</p>
                        </td>
                        <td className="quantityContainer">

                            <button disabled={item.quantity == 1} onClick={() => { productCartDecrement(item) }}><p className="minus">-</p></button>

                            <p className="quantity">{item.quantity}</p>

                            <button onClick={() => { productCartIncrement(item) }}><p>+</p></button>
                        </td>
                        <td className="hidden">
                            <p>R$ {item.price * item.quantity},00</p>
                        </td>
                        <td>
                            <button className="trash" onClick={() => { removeProductFromCart(item) }}>
                                <img src={`${trash}`} alt="Remove from cart" />
                            </button>
                        </td>
                    </tr>
                </tbody>
            ))}
        </Table>
    )
}