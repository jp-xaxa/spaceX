import { useNavigate } from "react-router-dom"

import { FaHome, FaBriefcase, FaUserAlt, FaPencilAlt } from "react-icons/fa"
import { RiDeleteBin5Fill } from "react-icons/ri"

import { ButtonIcon } from "../ButtonIcon"

import { Container, Header, Info } from "./styles"

export function Card({ title, icon: Icon, address, number }) {
  const navigate = useNavigate()

  function handleEditAddress() {
    navigate("/edit-address")
  }

  function handleRemoveAddress() {
    const userConfirmation = confirm("Você deseja excluir esse endereço?")

    if (userConfirmation) {
      alert("Endereço excluido!")
    }
  }

  return (
    <Container>
      <Header>
        <div>
          {Icon && <Icon />}
          <h3>{title}</h3>
        </div>

        <div>
          <ButtonIcon icon={FaPencilAlt} onClick={handleEditAddress} />
          <ButtonIcon icon={RiDeleteBin5Fill} onClick={handleRemoveAddress} />
        </div>
      </Header>

      <Info>
        <p>{address}</p>
        <p>{number}</p>

        <a href="#">Ver mapa</a>
      </Info>
    </Container>
  )
}
