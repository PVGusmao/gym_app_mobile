import { useState } from "react";
import { ButtonSelect, Container, ModalContainer, ModalText, SelectText, SelectTextWrapper, SimpleText, ViewModal, ViewModalText } from "./style";

type Props = {
  filter: string[];
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
}

export function Select({ filter, state = 'None', setState }: Props) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Container>
      <ButtonSelect onPress={() => setModalVisible(true)}>
        <SelectTextWrapper>
          <SelectText>{state}</SelectText>
        </SelectTextWrapper>
      </ButtonSelect>

      <ModalContainer
        visible={modalVisible}
        animationType="fade"
        transparent={false}
        onRequestClose={() => setModalVisible(false)}
      >
        <ViewModal>
          {filter.map((option, index) => (
            <ButtonSelect key={index} onPress={() => {
              setState(option);
              setModalVisible(false);
            }}>
              <ViewModalText>
                <ModalText>{option}</ModalText>
              </ViewModalText>
            </ButtonSelect>
          ))}
        </ViewModal>
      </ModalContainer>
    </Container>
  )
}