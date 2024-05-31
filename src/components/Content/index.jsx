import { useNavigate } from "react-router-dom"

import { FiArrowLeft } from "react-icons/fi"

import { ButtonIcon } from "../../components/ButtonIcon"

import { Container } from "./styles"

export function Content({ title, children, back }) {
  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }

  return (
    <Container>
      <header>
        {back && <ButtonIcon icon={FiArrowLeft} onClick={handleBack} />}
        <h1>{title}</h1>
      </header>

      {children}
    </Container>
  )
}
