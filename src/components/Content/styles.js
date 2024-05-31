import styled from "styled-components"

export const Container = styled.section`
  grid-area: content;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_200};
  box-shadow: 0rem 0.25rem 1rem ${({ theme }) => theme.COLORS.BACKGROUND_200};

  margin: 1rem 1.875rem;
  border-radius: 1.25rem;

  padding: 1rem 1.875rem;

  overflow-y: scroll;

  > header {
    display: flex;
    align-items: center;

    margin-bottom: 0.625rem;

    > h1 {
      font-size: 1.5625rem;
      color: ${({ theme }) => theme.COLORS.BLACK};
      margin-left: 0.625rem;
    }
  }

  &::-webkit-scrollbar {
    width: 0.625rem;
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_200};
    border-radius: 3.125rem;
    margin-right: 0.5rem;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
  }
`
