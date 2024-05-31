import styled from "styled-components"

export const Container = styled.div`
  grid-area: menu;
  height: calc(100vh - 2rem);
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_200};
  border: none;
  border-radius: 1.25rem;
  box-shadow: 0rem 0.25rem 1rem ${({ theme }) => theme.COLORS.BACKGROUND_200};
  margin: 1rem;

  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  justify-content: start;

  padding: 1.5rem;

  > h1 {
    font-size: 1.5rem;
    font-weight: 600;

    text-align: center;
  }
`

export const Nav = styled.nav`
  > ul {
    display: flex;
    flex-direction: column;
    gap: 0.94rem;

    list-style: none;
    text-decoration: none;

    > li {
      > a {
        font-size: 1.25rem;
        color: ${({ theme }) => theme.COLORS.BLACK};

        transition: 0.4s;

        > svg {
          margin-right: 0.625rem;
        }
      }

      > a:hover {
        font-weight: 500;
      }
    }
  }
`

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 0.875rem;

  margin-top: auto;

  > div {
    display: flex;
    flex-direction: column;

    > button:nth-child(1) {
      font-size: 0.875rem;
      color: ${({ theme }) => theme.COLORS.BLACK};
      white-space: nowrap;
      margin-bottom: 0.5rem;
    }

    > button:nth-child(2) {
      font-size: 0.875rem;
      color: ${({ theme }) => theme.COLORS.WHITE};
      justify-content: start;
    }
  }

  > img {
    width: 3.375rem;
    height: 3.375rem;
    border-radius: 50%;
    cursor: pointer;
  }
`
