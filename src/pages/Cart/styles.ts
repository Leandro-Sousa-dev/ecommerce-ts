import styled from "styled-components";

export const CartContainer = styled.section`
    color: #fff;
    display: grid;
    grid-template-columns: 7fr 3fr;
    gap: 2rem; 

    #cartTable{
        width: 100%;

        border-collapse: collapse;
        background-color: #130234;
        thead{
            background-color: #6528D3;
            
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
                        color: #fff;
                    
                        padding: 1rem 0.5rem;
                        
                        border: 1px solid #6528D3;
                        border-radius: 5px;
                        background: #130234;

                        :-webkit-outer-spin-button,
                        :-webkit-inner-spin-button {
                            -webkit-appearance: none;
                            margin: 0;
                        }
                    }
                   
                    button{
                        color: #fff;

                        border: 0;
                        background: transparent;
                        font-weight: 700;
                        
                        font-size: 1rem;
                        
                        width: 1.5rem;
                        height: 1.5rem;
                        
                        &:disabled{
                            color: #333;
                            cursor: default;
                        }
                    }         
                    
                    #productImg{
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
                    color: #6528D3;
                }

                td:nth-child(5){
                    color: #6BB27C;

                    font-weight: 700;
                }

            }
        }
    }

`