import { useNavigate } from "react-router-dom"

import { FiSearch, FiPlus } from "react-icons/fi"
import { FaHome, FaBriefcase, FaUserAlt } from "react-icons/fa"

import { Menu } from "../../components/Menu"
import { Content } from "../../components/Content"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { Card } from "../../components/Card"

import { Container, Search, List } from "./styles"

export function Home() {
  const navigate = useNavigate()

  function handleNewAddress() {
    navigate("/new-address")
  }

  return (
    <Container>
      <Menu />

      <Content title="Home">
        <Search>
          <Input placeholder="Pesquisar endereço..." icon={FiSearch} />
          <Button
            title="Novo Endereço"
            icon={FiPlus}
            onClick={handleNewAddress}
          />
        </Search>

        <List>
          <Card
            title="Casa"
            icon={FaHome}
            number="+55 (31) 98402-8894"
            address="Rua Gil Guatimosim, 58 - Pioneiros, Ouro Branco - MG"
          />

          <Card
            title="Trabalho"
            icon={FaBriefcase}
            number="+55 (31) 98402-8894"
            address="Avenida Paulista, 555 - SP"
          />

          <Card
            title="Casa de Nanda"
            icon={FaUserAlt}
            number="+55 (31) 90000-0000"
            address="Rua Guaíra, 23 - Inconfidentes, Ouro Branco - MG"
          />
        </List>
      </Content>
    </Container>
  )
}
