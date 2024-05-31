import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: 250px auto;
  grid-template-areas: "menu content";
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5625rem;

  margin-top: 0.625rem;

  > button {
    width: 3.125rem;
  }
`

export const Section = styled.fieldset`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.625rem;

  border: none;

  > legend {
    width: 100%;
    font-size: 1.25rem;
    font-weight: 500;

    margin-bottom: 0.625rem;
    padding-bottom: 0.3125rem;
    color: ${({ theme }) => theme.COLORS.BLACK};

    border-bottom: 1px solid ${({ theme }) => theme.COLORS.BLACK};
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 0.3125rem;

    > label {
      font-size: 1rem;

      > span {
        font-size: 0.75rem;
        opacity: 0.6;
      }
    }

    > input {
      padding: 0.3125rem 0.625rem;

      border-radius: 0.375rem;
      border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_600};

      &:focus {
        border: 1px solid ${({ theme }) => theme.COLORS.BLACK};
      }

      &::placeholder {
        font-size: 1rem;
        color: ${({ theme }) => theme.COLORS.BLACK};
        opacity: 0.8;
      }
    }
  }
`

export const Tags = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;
`
