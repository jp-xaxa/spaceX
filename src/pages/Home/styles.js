import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: 250px auto;
  grid-template-areas: "menu content";
`

export const Search = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
`

export const List = styled.div`
  margin-top: 1.875rem;
  padding: 0.625rem;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  place-content: center;
  gap: 1.875rem 1.25rem;
`
