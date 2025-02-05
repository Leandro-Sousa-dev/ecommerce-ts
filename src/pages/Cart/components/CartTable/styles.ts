import styled from "styled-components";
import { theme } from "../../../../styles/variables";

export const Table = styled.table`
    .hidden{
        display: none;
    }

    text-align: center; 
        
    width: 100%;
    
    border-collapse: collapse;
    background-color: ${theme.bgDarkColor};

    .tGrid{        
        display: grid;
        grid-template-columns: repeat(3, minmax(7rem ,1fr)) 3rem;
        gap: 0.5rem;

    }

    thead{
    
        background-color: ${theme.bgLightColor};
        tr{
            th{
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 1rem 0.5rem;
                font-weight: 400;
            }

        }
    }

    tbody{

        font-weight: 400;    
        
        tr{

            td{ 

                display: flex;
                align-items: center;
                justify-content: center;
                
                padding: 1rem 0.5rem;               
                        
                .productImg{
                    display: none;
                    width: 7rem;
                    border-radius: 8px;
                }
                    
                .trash{ 
                    border: 0;
                    background: transparent;
                    
                    img{
                        width: 100%;
                    }
                }
                
            }

            .quantityContainer{
                gap: 0.5rem;
                .quantity{
                    height: 3rem;
                    width: 3rem;
                    color: ${theme.baseColor};
                
                    padding: 1rem 0.5rem;
                    
                    border: 1px solid ${theme.bgMediumColor};
                    border-radius: 5px;
                    background: ${theme.bgDarkColor};

                    :-webkit-outer-spin-button,
                    :-webkit-inner-spin-button {
                        -webkit-appearance: none;
                        margin: 0;
                    }
                }

                button{
                    color: ${theme.baseColor};

                    border: 0;
                    background: transparent;
                    font-weight: 700;
                    
                    font-size: 1rem;

                    width: 1.5rem;
                    height: 1.5rem;
                    
                    display: flex;
                    
                    justify-content: center;
                    align-items: center;

                    p{  
                        width: 1rem;
                        height: 1rem;
                    }

                    .minus{
                        line-height: 1rem;
                    
                    }

                    &:disabled{
                        color: ${theme.disabledColor};
                        cursor: default;
                    }
                } 

            }

            .title{
                text-align: left;
                text-wrap: wrap;
                color: ${theme.bgLightColor};
                
            }

            .price{
                color: ${theme.priceAlterColor}
            }

            .total{
                color: ${theme.priceColor};

                font-weight: 700;
            }

        }
    }

`