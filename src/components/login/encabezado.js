import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Encabezado = () => {
    return (
        <View style={styles.contenedor}>
            <Text style={styles.titulo}>Iniciar Sesión</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    contenedor: {
        marginBottom: 20,
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
        alignSelf:'center',
    },
});

export default Encabezado;
