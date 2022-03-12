import React from 'react'
import { Platform, TouchableOpacity, StyleSheet, Text, View, TextInput, StatusBar, ScrollView } from 'react-native'
import * as Animatable from 'react-native-animatable';
import { Icon } from 'react-native-elements';

const Login = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={"#00897b"} barStyle="light-content" />
            <View style={styles.header}>
                <Text style={styles.text_header}>Iniciar sesión</Text>
            </View>
            <Animatable.View style={styles.footer} animation="fadeInUpBig">
                <Text style={styles.text_footer}>E-mail</Text>
                <View style={styles.action}>
                    <Icon type='material-community' name='email' size={19} color={'grey'} />
                    <TextInput style={styles.textInput} placeholder="Ingresa tu correo electrónico" autoCapitalize='none' />
                    <Icon type='material-community' name='check-circle-outline' size={19} color={'#00897b'} />
                </View>
                <Text style={[styles.text_footer, { marginTop: 20 }]}>Contraseña</Text>
                <View style={styles.action}>
                    <Icon type='material-community' name='lock' size={19} color={'grey'} />
                    <TextInput secureTextEntry={true} style={styles.textInput} placeholder="Ingresa tu clave" autoCapitalize='none' />
                    <Icon type='material-community' name='eye-off' size={19} color={'#00897b'} />
                </View>
                <TouchableOpacity style={styles.signIn}>
                    <Text style={styles.textSign}>Iniciar sesión</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.signIn, { backgroundColor: "#fff", borderWidth: 1, borderColor: "#00897b" }]}>
                    <Text style={[styles.textSign, { color: "#00897b" }]}>Registrate</Text>
                </TouchableOpacity>

                <Text style={{ textAlign: "center", marginTop: 10, color: "grey" }} onPress={() => navigation.navigate('Home')}>Olvidastes tú contraseña</Text>
            </Animatable.View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#00897b"
    },

    header: {
        flex: 1,
        justifyContent: "flex-end",
        paddingHorizontal: 20,
        paddingBottom: 50
    },

    footer: {
        flex: 3,
        backgroundColor: "#fff",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },

    text_header: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 30
    },

    text_footer: {
        color: "grey",
        fontSize: 18
    },

    action: {
        flexDirection: "row",
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#f2f2f2",
        paddingBottom: 5
    },

    textInput: {
        flex: 1,
        marginTop: Platform === "ios" ? 0 : -6,
        paddingLeft: 10,
        color: "#05375a",
    },

    button: {
        alignItems: "center",
        marginTop: 50
    },

    signIn: {
        width: "100%",
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        backgroundColor: "#00897b",
        marginTop: 20
    },

    textSign: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#fff",
        letterSpacing: 1,
    }
})