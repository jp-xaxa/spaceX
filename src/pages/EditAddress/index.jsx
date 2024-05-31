import { FaHome, FaBriefcase, FaUserAlt } from "react-icons/fa"

import { Menu } from "../../components/Menu"
import { Content } from "../../components/Content"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

import { Container, Form, Section, Tags } from "./styles"

export function EditAddress() {
  return (
    <Container>
      <Menu />

      <Content title="Editar Endereço" back>
        <Form>
          <Section>
            <legend>Informações do Endereço</legend>

            <div>
              <label htmlFor="address">
                Rua <span>(obrigatorio)</span>
              </label>
              <Input placeholder="Endereço" type="text" />
            </div>

            <div>
              <label htmlFor="number">
                Número <span>(obrigatorio)</span>
              </label>
              <Input placeholder="Número" type="number" />
            </div>

            <div>
              <label htmlFor="page">
                Bairro <span>(obrigatorio)</span>
              </label>
              <Input placeholder="Bairro" type="text" />
            </div>

            <div>
              <label htmlFor="city">
                Cidade <span>(obrigatorio)</span>
              </label>
              <Input placeholder="Cidade" type="text" />
            </div>

            <div>
              <label htmlFor="state">
                Estado <span>(obrigatorio)</span>
              </label>
              <Input placeholder="Estado" type="text" />
            </div>

            <div>
              <label htmlFor="complement">Complemento</label>
              <Input placeholder="Complemento" type="text" />
            </div>
          </Section>

          <Section>
            <legend>Informações de Contato</legend>

            <div>
              <label htmlFor="contact">
                Número de Contato <span>(obrigatorio)</span>
              </label>
              <Input placeholder="Número" type="number" />
            </div>

            <div>
              <label htmlFor="tag">Tag</label>
              <Tags>
                <Button title="Casa" icon={FaHome} />
                <Button title="Trabalho" icon={FaBriefcase} $selected />
                <Button title="Outro" icon={FaUserAlt} />
              </Tags>
            </div>
          </Section>

          <Button title="Salvar" />
        </Form>
      </Content>
    </Container>
  )
}
