import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const Formulario = () => {
    const [correo, setCorreo] = useState('');
    const [clave, setClave] = useState('');

    return (
        <View style={styles.contenedor}>
            <TextInput
                style={styles.entrada}
                placeholder="Correo electrónico"
                value={correo}
                onChangeText={setCorreo}
                keyboardType="email-address"
            />
            <TextInput
                style={styles.entrada}
                placeholder="Contraseña"
                value={clave}
                onChangeText={setClave}
                secureTextEntry
            />
        </View>
    );
};

const styles = StyleSheet.create({
    contenedor: {
        marginBottom: 20,
    },
    entrada: {
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 15,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
});

export default Formulario;
