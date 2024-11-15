import { styled } from 'styled-components'

export const Container = styled.header`
  background: #111111;

  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 5rem;

  color: #fff;

  div:first-child {
    button {
      img {
        width: 100%;
      }
    }
  }

  nav ul {
    display: flex;
    gap: 30px;
  }

  div:last-child {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;
