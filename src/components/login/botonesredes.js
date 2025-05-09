import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const BotonesRedes = () => {
    return (
        <View style={styles.contenedor}>
            <TouchableOpacity style={[styles.boton, { backgroundColor: '#DB4437' }]} activeOpacity={0.7}>
                <Text style={styles.textoBoton}>Continuar con Google</Text>
            </TouchableOpacity>
            <View style={styles.espacio} />
            <TouchableOpacity style={[styles.boton, { backgroundColor: '#4267B2' }]} activeOpacity={0.7}>
                <Text style={styles.textoBoton}>Continuar con Facebook</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    contenedor: {
        marginTop: 10,
    },
    boton: {
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
    },
    textoBoton: {
        color: '#fff',
        fontWeight: 'bold',
    },
    espacio: {
        height: 10,
    },
});

export default BotonesRedes;
