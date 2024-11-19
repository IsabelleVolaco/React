import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// Componente principal da calculadora
export default function Calculator() {
  // Define que "display" e "result" são do tipo string
  const [display, setDisplay] = useState<string>('');
  const [result, setResult] = useState<string>('');

  // Função chamada quando um botão da calculadora é pressionado
  const handlePress = (value: string) => {
    if (value === 'C') {
      setDisplay('');
      setResult('');
    } else if (value === '=') {
      try {
        setResult(eval(display).toString());
      } catch (error) {
        setResult('Erro');
      }
    } else {
      setDisplay(display + value);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.display}>{display || '0'}</Text>
      <Text style={styles.result}>{result}</Text>

      <View style={styles.buttons}>
        {['7', '8', '9', '/'].map((item) => (
          <Button key={item} value={item} onPress={handlePress} />
        ))}
        {['4', '5', '6', '*'].map((item) => (
          <Button key={item} value={item} onPress={handlePress} />
        ))}
        {['1', '2', '3', '-'].map((item) => (
          <Button key={item} value={item} onPress={handlePress} />
        ))}
        {['C', '0', '=', '+'].map((item) => (
          <Button key={item} value={item} onPress={handlePress} />
        ))}
      </View>
    </View>
  );
}

// Componente para os botões da calculadora, definindo tipos para as props
function Button({ value, onPress }: { value: string; onPress: (value: string) => void }) {
  return (
    <TouchableOpacity style={styles.button} onPress={() => onPress(value)}>
      <Text style={styles.buttonText}>{value}</Text>
    </TouchableOpacity>
  );
}

// Estilos da calculadora
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f9fb',
    padding: 20,
    justifyContent: 'center',
  },
  display: {
    fontSize: 32,
    color: '#333',
    textAlign: 'right',
    marginBottom: 10,
  },
  result: {
    fontSize: 24,
    color: '#666',
    textAlign: 'right',
    marginBottom: 20,
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  button: {
    backgroundColor: '#4e8dff',
    padding: 20,
    borderRadius: 8,
    margin: 5,
    width: '20%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});