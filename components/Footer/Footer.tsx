import { Container, Title } from "./style";

type Props = {
  colorTitle: string;
}

export function Footer({ colorTitle }: Props) {
  return (
    <Container>
      <Title colorTitle={colorTitle}>2023 Copyright Paulo Victor</Title>
    </Container>
  )
}