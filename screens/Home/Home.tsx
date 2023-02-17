import { Container, Input, Title } from "./style";
import React, { useState } from 'react';
import { View, Text, TouchableWithoutFeedback, Modal, StyleSheet } from 'react-native';

export function Home() {
  const [modalVisibleDifficulty, setModalVisibleDifficulty] = useState(false);
  const [modalVisibleType, setModalVisibleType] = useState(false);
  const [selectedDifficulty, setSelectedDifficulty ] = useState("None");
  const [selectedType, setSelectedType ] = useState("None");

  const difficulty = [
    "Iniciante",
    "intermeiário",
    "Avançado",
  ];

  const type = [
    "cardio",
    "Levantamento Olímpico",
    "Treino Plyometrico",
    "Powerlifting",
    "Força",
    "Strongman",
    "Alongamento",
  ]

  return (
    <View style={styles.container}>
      <Text>Escolha o nível do exercício</Text>
      <TouchableWithoutFeedback onPress={() => setModalVisibleDifficulty(true)}>
        <View style={styles.select}>
          <Text style={styles.selectText}>{selectedDifficulty}</Text>
        </View>
      </TouchableWithoutFeedback>
      <Modal
        visible={modalVisibleDifficulty}
        animationType="fade"
        transparent={false}
        onRequestClose={() => setModalVisibleDifficulty(false)}
      >
        <View style={styles.modal}>
          {difficulty.map((option, index) => (
            <TouchableWithoutFeedback key={index} onPress={() => {
              setSelectedDifficulty(option);
              setModalVisibleDifficulty(false);
            }}>
              <View style={styles.option}>
                <Text style={styles.optionText}>{option}</Text>
              </View>
            </TouchableWithoutFeedback>
          ))}
        </View>
      </Modal>

      <Text>Escolha o nível do exercício</Text>
      <TouchableWithoutFeedback onPress={() => setModalVisibleType(true)}>
        <View style={styles.select}>
          <Text style={styles.selectText}>{selectedType}</Text>
        </View>
      </TouchableWithoutFeedback>
      <Modal
        visible={modalVisibleType}
        animationType="fade"
        transparent={false}
        onRequestClose={() => setModalVisibleType(false)}
      >
        <View style={styles.modal}>
          {type.map((option, index) => (
            <TouchableWithoutFeedback key={index} onPress={() => {
              setSelectedType(option);
              setModalVisibleType(false);
            }}>
              <View style={styles.option}>
                <Text style={styles.optionText}>{option}</Text>
              </View>
            </TouchableWithoutFeedback>
          ))}
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  select: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    borderRadius: 5,
  },
  selectText: {
    fontSize: 16,
  },
  modal: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 5,
  },
  option: {
    paddingVertical: 10,
  },
  optionText: {
    fontSize: 16,
  },
});