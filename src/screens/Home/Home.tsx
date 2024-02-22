import React, { useState } from 'react';
import { View, Pressable } from 'react-native';

import { styles } from './HomeStyles';
import { NekoLogo } from '../../components/NekoLogo/NekoLogo';
import { NekoForm } from '../../components/NekoForm/NekoForm';
import { NekoActivateButton } from '../../components/NekoActivateButton/NekoActivateButton';
import { NekoSendButton } from '../../components/NekoSendButton/NekoSendButton';

export function Home() {

  const [formulario, setFormulario] = useState(true)

  function handleSwitch() {

    console.log(formulario)
    setFormulario(!formulario)

  }

  return (
    <View>

      <View style={[styles.container, { display: formulario ? 'flex' : 'none' }]}>

        <NekoLogo />
        <Pressable 
          onPress={handleSwitch}
          style={styles.btnSignal}>
          <NekoActivateButton />
        </Pressable>

      </View>

      <View style={[styles.container, { display: formulario ? 'none' : 'flex' }]} >

        <NekoForm />  

        <Pressable 
          onPress={handleSwitch}
          style={styles.btnSignal}>
          <NekoSendButton />
        </Pressable>

      </View>

    </View>
  );
}