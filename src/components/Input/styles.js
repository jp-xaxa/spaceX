import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_100};
  color: ${({ theme }) => theme.COLORS.BLACK};

  border-radius: 0.625rem;
  border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_300};
  box-shadow: 0rem 0.25rem 1rem ${({ theme }) => theme.COLORS.BACKGROUND_200};

  &:focus-within {
    border-color: ${({ theme }) => theme.COLORS.BLACK};
  }

  > input {
    height: 3.125rem;
    width: 100%;

    padding: 0.75rem;
    color: ${({ theme }) => theme.COLORS.BLACK};
    background: transparent;
    border: 0;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.BLACK};
      opacity: 0.5;
    }
  }

  > svg {
    margin-left: 1rem;
  }
`
