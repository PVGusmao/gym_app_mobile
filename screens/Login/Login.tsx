import { CustomInput } from "../../components/CustomInput/CustomInut";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { Container, InputWrapper, ScrollViewWrapper, Title } from "./style";

export function Login() {
  return (
    <ScrollViewWrapper>
      <Header />
      <Container>

        <InputWrapper>
      
          <CustomInput />
          <CustomInput />
      
        </InputWrapper>

      </Container>
      
      <Footer />
    </ScrollViewWrapper>
  )
}