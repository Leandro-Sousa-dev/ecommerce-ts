import styled from "styled-components";

export const CartContainer = styled.section`
    color: #fff;
    #cartTable{
        background-color: #130234;

        thead{
            background-color: #6528D3;
            
            tr{
                th{
                    border: 1px solid #fff;
                    padding: 1rem 0.5rem;
                    
                }

            }
        }

        tbody{
            tr{
                td{
                    
                    img{
                        width: 7rem;
                        border-radius: 8px;
                        padding: 0 1rem;
                    }
                        
                    border: 1px solid #fff;
                    padding: 1rem 0.5rem;
                    
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