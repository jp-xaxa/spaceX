import { Container } from "./styles"

export function Button({ title, icon: Icon, $selected, ...rest }) {
  return (
    <Container $selected={$selected} {...rest}>
      {Icon && <Icon size={18} />}
      <button>{title}</button>
    </Container>
  )
}
