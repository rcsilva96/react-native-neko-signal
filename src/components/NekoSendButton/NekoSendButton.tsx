import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './NekoSendButtonStyles';

export function NekoSendButton() {
    return (
        <View style={styles.container}>
            <Text
                style={styles.Text}>
                Enviar pedido
            </Text>
        </View>
    );
}