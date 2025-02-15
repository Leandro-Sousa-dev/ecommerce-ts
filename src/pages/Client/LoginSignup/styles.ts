import styled, { css } from "styled-components";

export const LoginContainer = styled.div`
    ${({ theme }) => theme && css`
    color: ${theme.baseColor};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.5rem;

    padding: 2.5rem 0;

    h2{
        font-size: 2rem;
        padding: 0;
    }

    .loginCard{
        width: 100%;

        background: ${theme.bgDarkColor};

        padding: 0 1.5rem;

        h3{
            font-size: 1.8rem;
            font-weight: 400;
            padding: 0.7rem 0;
        }

        .login{
            display: flex;
            flex-direction: column;
            gap: 1.5rem;

            padding-bottom: 2.5rem;


            label{
                display: flex;
                flex-direction: column;

                font-weight: 300;
                font-size: 1.2rem;
        
            }

            .checkbox{
                span{
                    position: absolute;
                    left: 0;

                    width: 1.5rem;
                    height: 1.5rem;
                    
                    background-color: ${theme.bgBaseColor};
                    border: 2px solid ${theme.bgLightColor};
                    
                    cursor: pointer;
                    
                    border-radius: 2px;
                    transition: 0.3s;
                
                }

                .checked{
                    &:after {
                        content: "";
                        position: absolute;
                        
                        left: 0.3rem;
                        bottom: 0.2rem;

                        width: 0.4rem;
                        height: 0.8rem;
                        border: solid white;
                        border-width: 0 3px 3px 0;
                        transform: rotate(45deg);
                    }
                }

                input{
                    display: none;
                }

                label{
                    margin-left: 2.5rem;
                }
            }

            .passwordRecovery{
                color: ${theme.bgLightColor};
            }

            .submitBtn{
                button{
                    width: 100%;
                }
            }

            .singup{
                display: flex;
                justify-content: center;
                color: ${theme.bgLightColor};

            }

            .signupTerms{
                font-weight: 300;
            }
        }   
    }

    @media (min-width: 640px){
        .loginCard{
            width: 40rem;
        }
    }

    `}

`