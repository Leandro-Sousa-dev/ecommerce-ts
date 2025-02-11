import styled from "styled-components";
import { InputMenssage } from "../../../interfaces/InputProps";

export const Pstyled = styled.p<InputMenssage>`
    color: ${({ $color }) => $color};

    font-size: 0.8rem;

    position: absolute;
    bottom: -1.1rem;
`