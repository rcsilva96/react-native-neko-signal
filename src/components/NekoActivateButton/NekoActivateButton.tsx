import React from 'react';
import { View, Pressable, Text } from 'react-native';

import { styles } from './NekoActivateButtonStyles';

export function NekoActivateButton() {
    return (
        <View style={styles.container}>
                <Text
                    style={styles.Text}>
                    Ativar Neko-Sinal
                </Text>
        </View>
    );
}