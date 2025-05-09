import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Encabezado from './login/encabezado';
import Formulario from './login/formulario';
import BotonesPrincipales from './login/botonesprincipales';
import BotonesRedes from './login/botonesredes';
import Divisor from './login/divisor';

const LoginScreen = () => {
    return (
        <View style={styles.contenedor}>
            <StatusBar style="light" backgroundColor="#007BFF" />
            <View style={styles.barra} />
            <Text style={styles.tituloApp}>Login App Berenstein y Klawir</Text>
            <Encabezado />
            <Formulario />
            <BotonesPrincipales />
            <Divisor />
            <BotonesRedes />
        </View>
    );
};

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 30,
    },
    barra: {
        height: 30,
        backgroundColor: '#007BFF',
    },
    tituloApp: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 10,
    },
});

export default LoginScreen;
