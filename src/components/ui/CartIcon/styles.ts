import { Link } from "react-router-dom";
import styled from "styled-components";

export const CartStyles = styled(Link)`

    img{
      width: 2rem;
    }

    position: relative;

    display: flex;
    align-items: center;

    gap: 20px;

    div{
      position: absolute;
      bottom: -4px;
      left: 15px;

      display: flex;
      align-items: center;
      justify-content: center;
      
      width: 1.3rem;
      height: 1.3rem;
      
      font-size: 0.8rem;
      
      background-color: #6528D3;
      
      border-radius: 50%;

      padding: 5px;  
    }
`