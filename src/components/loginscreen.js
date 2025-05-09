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
            <View style={styles.superior}>
                <Text style={styles.tituloApp}>Login App Berenstein y Klawir</Text>
            </View>
            <View style={styles.cuerpo}>
                <Encabezado />
                <Formulario />
                <BotonesPrincipales />
                <Divisor />
                <BotonesRedes />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    superior: {
        backgroundColor: '#007BFF',
        paddingVertical: 25,
        alignItems: 'center',
        marginTop: -205,
      },
    tituloApp: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
    },
    cuerpo: {
        paddingHorizontal: 30,
        marginTop: 20,
    },
});

export default LoginScreen;
