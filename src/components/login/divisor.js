import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Divisor = () => {
    return (
        <View style={styles.divisor}>
            <View style={styles.linea} />
            <Text style={styles.texto}>o</Text>
            <View style={styles.linea} />
        </View>
    );
};

const styles = StyleSheet.create({
    divisor: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
    },
    linea: {
        flex: 1,
        height: 1,
        backgroundColor: '#ccc',
    },
    texto: {
        marginHorizontal: 10,
        color: '#999',
    },
});

export default Divisor;
