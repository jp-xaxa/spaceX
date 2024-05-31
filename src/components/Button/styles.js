import styled from "styled-components"

export const Container = styled.div`
  max-width: 12.5rem;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.625rem;

  padding: 0.75rem 1.375rem;

  border-radius: 0.5rem;
  box-shadow: 0 0 0.125rem ${({ theme }) => theme.COLORS.BLACK};
  background-color: ${({ theme, $selected }) =>
    $selected ? theme.COLORS.BLUE : theme.COLORS.BACKGROUND_100};
  border: 1px solid
    ${({ theme, $selected }) =>
      $selected ? theme.COLORS.BACKGROUND_100 : theme.COLORS.BLACK};
  color: ${({ theme, $selected }) =>
    $selected ? theme.COLORS.BACKGROUND_100 : theme.COLORS.BLACK};

  cursor: pointer;

  transition: 0.4s;

  > button {
    background: transparent;
    border: none;

    color: ${({ theme, $selected }) =>
      $selected ? theme.COLORS.BACKGROUND_100 : theme.COLORS.BLACK};
    font-size: 1.125rem;
    white-space: nowrap;

    cursor: pointer;
  }

  &:hover {
    transform: scale(1.01);
  }
`
