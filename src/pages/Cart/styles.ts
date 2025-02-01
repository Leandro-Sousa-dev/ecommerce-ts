import styled from "styled-components";
import { theme } from "../../styles/variables";

export const CartContainer = styled.section`
    color: ${theme.baseColor};
    display: flex;
    flex-direction: column;
    // grid-template-columns: 7fr 3fr;
    gap: 2rem; 

    #cartTable{

        #productColum,
        #productData{
            display: none;
        }

        width: 100%;

        border-collapse: collapse;
        background-color: ${theme.bgDarkColor};
        thead{
            background-color: ${theme.bgLightColor};
            
            tr{
                th{
                    padding: 1rem 0.5rem;
                    
                }

            }
        }

        tbody{

            font-weight: 400;    

            tr{
                td{ 

                    text-align: center;

                    padding: 1rem 0.5rem;

                    input{
                        height: 3rem;
                        width: 3rem;
                        color: ${theme.baseColor};
                    
                        padding: 1rem 0.5rem;
                        
                        border: 1px solid ${theme.bgLightColor};
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
                        
                        &:disabled{
                            color: ${theme.disabledColor};
                            cursor: default;
                        }
                    }         
                    
                    #productImg{
                        display: none;
                        width: 7rem;
                        border-radius: 8px;
                    }
                        
                    #trash{ 
                        border: 0;
                        background: transparent;
                        
                        img{
                            width: 100%;
                        }
                    }
                    
                }

                td:nth-child(2){
                    color: ${theme.bgLightColor};
                }

                td:nth-child(5){
                    color: ${theme.priceColor};

                    font-weight: 700;
                }

            }
        }
    }

`