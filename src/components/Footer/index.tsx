import { List } from "../ui/List"
import { FooterContainer, Attribuition } from "./styles"

const institucionalList = [
    { name: 'Home', url: '/' },
    { name: 'Sobre', url: '/sobre' },
    { name: 'Produtos', url: '/produtos' },
    { name: 'Perguntas frequêntes', url: '/perguntas-frequentes' },
    { name: 'Fale conosco', url: '/fale-conosco' },
]

const ajudaList = [
    { name: 'Trocas e devoluções', url: '/trocas-devolucoes' },
    { name: 'Termos e condições', url: '/termos-condicoes' },
    { name: 'Política de privacidade', url: '/politica-de-privacidade' },
    { name: 'Padrão de qualidade', url: '/padrao-de-qualidade' },
]

const enderecoList = [
    { name: 'Rua Vale do Silício, 321', url: '/' },
    { name: 'São Francisco, Califórnia', url: '/' },
    { name: 'Estados Unidos da América', url: '/' },
    { name: '(32) 1234-4567', url: '/' },
    { name: 'vendas@ecommercedd.com', url: '/' },
]


export const Footer = () => {
    return (
        <>
            <FooterContainer>
                <div>

                    <div>
                        <h3>Institucional</h3>
                        <List list={institucionalList}></List>
                    </div>

                    <div>
                        <h3>Ajuda</h3>
                        <List list={ajudaList}></List>
                    </div>

                    <div>
                        <h3>Endereço</h3>
                        <List list={enderecoList}></List>
                    </div>

                </div>
            </FooterContainer>
            <Attribuition>
                <p>@2024 - Todos os direitos reservados</p>
            </Attribuition>
        </>
    )
}