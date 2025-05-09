import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const BotonesPrincipales = () => {
    return (
        <View style={styles.contenedor}>
            <TouchableOpacity style={styles.boton} activeOpacity={0.7}>
                <Text style={styles.textoBoton}>Iniciar Sesión</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    contenedor: {
        marginBottom: 20,
    },
    boton: {
        backgroundColor: '#007BFF',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
    },
    textoBoton: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default BotonesPrincipales;
