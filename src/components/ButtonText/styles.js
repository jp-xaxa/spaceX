import styled from "styled-components"

export const Container = styled.button`
  display: flex;
  align-items: center;

  background: none;
  color: ${({ theme }) => theme.COLORS.BLACK};

  border: none;
  font-size: 1rem;
  cursor: pointer;

  > svg {
    margin-right: 0.5rem;
  }
`
