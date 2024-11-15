import { styled } from "styled-components";

export const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media (min-width: 900px) {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  }
`;
