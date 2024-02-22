import React from 'react';
import { View, Image } from 'react-native';

import { styles } from './NekoLogoStyles';

export function NekoLogo() {
  return (
    <View style={styles.container}>

        <Image
            source={require('../../../assets/neko.png')}
            style={styles.imgNeko}
        />

    </View>
  );
}