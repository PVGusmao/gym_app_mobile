import { Container, Img } from "./style";

import logo from "../../assets/logo.png";

export function Header() {
  return (
    <Container>
      <Img source={logo} />
    </Container>
  )
}