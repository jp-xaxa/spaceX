import styled from "styled-components"

export const Container = styled.button`
  display: flex;
  align-items: center;

  background: ${({ theme }) => theme.COLORS.BACKGROUND_300};
  padding: 0.625rem;
  color: ${({ theme }) => theme.COLORS.BLACK};
  box-shadow: 0rem 0.25rem 1rem ${({ theme }) => theme.COLORS.BACKGROUND_300};

  border-radius: 0.625rem;

  border: none;
  cursor: pointer;

  transition: 0.4s;

  &:hover {
    background: ${({ theme }) => theme.COLORS.BACKGROUND_400};
  }
`
