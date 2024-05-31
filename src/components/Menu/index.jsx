import { Link } from "react-router-dom"

import { BiHome, BiLogOut } from "react-icons/bi"
import { LuImagePlus } from "react-icons/lu"

import avatar from "../../assets/avatar_placeholder.svg"
import { ButtonText } from "../ButtonText"

import { Container, Nav, Profile } from "./styles"

export function Menu() {
  return (
    <Container>
      <h1>SpaceX</h1>

      <Nav>
        <ul>
          <li>
            <Link to="/">
              <BiHome /> Home
            </Link>
          </li>
          <li>
            <Link to="/new-address">
              <LuImagePlus /> Novo Endereço
            </Link>
          </li>
        </ul>
      </Nav>

      <Profile>
        <img src={avatar} alt="Foto do usuário" />

        <div>
          <ButtonText title="João Pedro" />
          <ButtonText title="sair" icon={BiLogOut} />
        </div>
      </Profile>
    </Container>
  )
}
