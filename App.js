import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [age, setAge] = useState('')
  const [lowerLimit, setLowerLimit] = useState(0)
  const [upperLimit, setUpperLimit] = useState(0)

  const calculate = () => {
    
    const parsedAge = parseFloat(age.replace(',', '.'));

    if (!isNaN(parsedAge)) {
      const lower = (220 - parsedAge) * 0.65;
      const upper = (220 - parsedAge) * 0.85;

      setLowerLimit(lower);
      setUpperLimit(upper);
    } else {
      setLowerLimit(0);
      setUpperLimit(0);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.field}>Age</Text>
      <TextInput
      style={styles.field}
      placeholder='Age'
      value = {age}
      onChangeText={text => setAge(text)}
      keyboardType='decimal-pad'
      />

      <Text style={styles.field}>Lower Heart Rate Limit</Text>
      <Text style={styles.field}>{lowerLimit.toFixed(2)}</Text>

      <Text style={styles.field}>Upper Heart Rate Limit</Text>
      <Text style={styles.field}>{upperLimit.toFixed(2)}</Text>

      <Button title='Calculate' onPress={calculate}/>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    paddingLeft: 16,
    paddingTop: 64,
    margin: 8
  },

  field: {
    marginTop: 8,
    marginBottom: 8,
  }
});
