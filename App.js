import React, {useState} from 'react';
import { StyleSheet, Text, View, Picker } from 'react-native';

export default function App() {

  const [pizza, setPizza] = useState(0);

  const sabores = [
    {
      key : 0,
      nome : "Strogonoff",
      valor : 35.90
    },
    {
      key : 1,
      nome : "Calabresa",
      valor : 22.90
    },
    {
      key : 2,
      nome : "Brigadeiro",
      valor : 33.90
    },
    {
      key : 3,
      nome : "4 Queijos",
      valor : 39.90
    },
    {
      key : 4,
      nome : "Tomate Seco",
      valor : 29.90
    },
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Menu Pizzas</Text>

    <Picker
      selectedValue={pizza}
      onValueChange={(itemValue, itemIndex) => {setPizza(itemValue)}}
    >
      {sabores.map( sabor => (
        
         <Picker.Item key={sabor.key} value={sabor.key} label={sabor.nome} />
      ))}
    </Picker>

      <Text style={styles.title}>Voce Escolheu : {sabores[pizza].nome}</Text>
      <Text style={styles.subtitle}>{sabores[pizza].valor.toFixed(2)}</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  logo: {
    textAlign : 'center',
    fontSize : 25
  },
  title : {
    marginTop : 15,
    backgroundColor : '#ddd',
    fontSize : 25,
    textAlign : 'center'
  },
  subtitle : {
    marginTop : 15,
    fontSize : 15,
    textAlign : 'center'
  },
});
