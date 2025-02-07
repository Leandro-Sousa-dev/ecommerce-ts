import styled from "styled-components";
import { theme } from "../../styles/variables";

export const ProductContainer = styled.section`

    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin: 1.5rem 0;
    
    color: ${theme.baseColor};

    .productHighlight{    
        display: flex;
        flex-direction: column;
        gap: 1.5rem;

        h2{
            font-size: 2.5rem;
            padding: 0;
        }
        
        img{
            width: 100%;
            background: #ffffff;
        }

        .productDetails{
            display: flex;
            flex-direction: column;
            gap: 1.6rem;

            font-weight: 300;

            .price{
                color: ${theme.priceColor};
                font-size: 1.5rem;
                font-weight: 400;
            }
        }
        
        span{
            font-weight: 400;
        }

    
        .addToCartBtn{
            button{
                width: 100%;
            }
        }

    }

    .similarContainer{
        display: flex;
        flex-direction: column;
        gap: 1.5rem;

        h4{
            font-size: 1.6rem;
            font-weight: 400;
        }

        .similarProducts{
            display: flex;
            gap: 1rem;
            img{
                width: 100%;
                background: #ffffff;
            }
        }
    }

    @media (min-width: 640px){
        .productHighlight{    
            img{
                width: 50%;
                align-self: center;
            }
        }
    }

    @media (min-width: 992px){
        .productHighlight{
            flex-direction: row;
            gap: 2.5rem;

            img{
                align-self: start;
            }

            .addToCartBtn{
                button{
                    width: max-content;
                }
            }
        }
    }
`