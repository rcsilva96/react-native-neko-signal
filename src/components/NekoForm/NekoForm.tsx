import React from 'react';
import { View, TextInput, Image } from 'react-native';

import { styles } from './NekoFormStyles';

export function NekoForm() {
  return (
    <View style={styles.container}>
      
      <Image
        style={styles.stretch}
        source={require('../../../assets/neko.png')
      }/>

      <TextInput 
        style={styles.textInput}
        placeholder='Insira seu nome'
        numberOfLines={2}/>

      <TextInput 
        style={styles.textInput}
        placeholder='Local da ocorrência'
        numberOfLines={4}/>

      <TextInput 
        style={styles.textInput}
        placeholder='Descreva a ocorrência'
        numberOfLines={8}/>
      
      <TextInput 
        style={styles.textInput}
        placeholder='Detalhes adicionais'
        numberOfLines={8}/>
    </View>
  );
}