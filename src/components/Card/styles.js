import styled from "styled-components"

export const Container = styled.div`
  width: 100%;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_100};
  border-radius: 0.625rem;
  box-shadow: 0rem 0.25rem 1rem ${({ theme }) => theme.COLORS.BACKGROUND_200};

  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  padding: 0.625rem;
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;
    gap: 0.625rem;
  }
`

export const Info = styled.div`
  > p {
    font-size: 1rem;

    margin-bottom: 0.625rem;
  }

  > a {
    
  }
`
