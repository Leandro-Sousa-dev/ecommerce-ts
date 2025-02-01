import { styled } from "styled-components";
import { theme } from "../../styles/variables";

export const Container = styled.div`
  min-height: 100vh;

  max-width: 1250px;

  margin: 0 auto;

  display: flex;
  flex-direction: column;
  padding: 1rem;

  h2 {
    color: ${theme.baseColor};

    padding: 1.5rem 0;

    font-size: 1.5rem;

    font-weight: 400;
  }

  @media(min-width: 768px){
    padding: 2rem;

  }
`;
