import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, Image, Platform, StatusBar } from 'react-native';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import Encabezado from './login/encabezado.js';
import Formulario from './login/formulario.js';
import BotonesPrincipales from './login/botonesprincipales.js';
import BotonesRedes from './login/botonesredes.js';
import Divisor from './login/divisor.js';

const LoginScreen = () => {
    return (
        <SafeAreaView style={styles.contenedor}>
            <ExpoStatusBar style="light" backgroundColor="#007BFF" />
            <View style={styles.superior}>
                <Text style={styles.tituloApp}>Login App Berenstein y Klawir</Text>
            </View>
            <View style={styles.contenedorImagen}>
                <Image
                    source={require('../../assets/images/coca-cola.png')}
                    style={styles.imagen}
                    resizeMode="contain"
                />
            </View>
            <View style={styles.cuerpo}>
                <Encabezado />
                <Formulario />
                <BotonesPrincipales />
                <Divisor />
                <BotonesRedes />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    superior: {
        backgroundColor: '#007BFF',
        paddingVertical: 20,
        alignItems: 'center',
    },
    tituloApp: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
    },
    contenedorImagen: {
        backgroundColor: '#fff',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10,
    },
    imagen: {
        width: 300,
        height: 180,
    },
    cuerpo: {
        paddingHorizontal: 30,
    },
});

export default LoginScreen;
