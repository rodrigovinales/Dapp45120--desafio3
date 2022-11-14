import React from 'react'
import { View, Text, StyleSheet, ImageBackground, Dimensions, TouchableOpacity, Alert, Image } from 'react-native'
import Header from '../components/Header'

const CategoriesScreen = ({ navigation }) => {


    const { width, height } = Dimensions.get('window')

    const image = require('../assets/3empas.jpg')
    const pizza = require('../assets/pizza-margarita.jpg')
    const bebidas = require('../assets/bebidas.jpg')
    const contacto = require('../assets/contacto.png')


    const somos = () => {
        Alert.alert("Tel: 0810-333-3.Empanadas")
    }

    return (
        <View style={styles.contenedor}>
            <Header />
            <Text style={styles.textInfo}>CATEGORIAS</Text>
            <ImageBackground source={image} style={styles.container} resizeMode='stretch'>
                <View style={styles.containItem}>
                    <TouchableOpacity
                        style={styles.btn}
                        onPress={() => { navigation.navigate('Productos') }}>
                        <Image
                            source={pizza}
                            style={styles.imageProducto} />
                        <Text
                            style={styles.btnTxt}>
                            Pizzas
                        </Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => { navigation.navigate('Productos') }}>
                    <Text
                        style={styles.btnTxt}>
                        Bebidas
                    </Text>
                    <Image
                        source={bebidas}
                        style={styles.imageProducto} />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btnContact}
                    onPress={somos}>
                    <Text
                        style={styles.btnTxt}>
                        CONTACTO
                    </Text>
                    <Image
                        source={contacto}
                        style={styles.imageProductoC}
                    />

                </TouchableOpacity>
            </ImageBackground >

        </View>
    )
}

const styles = StyleSheet.create({
    contenedor: {
        flex: 1
    },
    container: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'flex-end',
        flexDirection: 'column',
    },
    containItem: {
        flexDirection: 'row'
    },
    textInfo: {
        fontSize: 40,
        textAlign: 'center',
        backgroundColor: "#39a49b",
        fontFamily: "Montserrat-Regular"
    },
    btnTxt: {
        fontSize: 25,
        color: "black",
        // fontWeight: 'bold',
        fontFamily: "SmoochSans-Regular",
        textAlign: 'center',
    },
    btn: {
        width: 110,
        height: 110,
        borderRadius: 5,
        alignItems: 'center',
        backgroundColor: "#f2f2a6",
        // opacity: 0.6,
    },
    btnContact: {
        width: 180,
        height: 60,
        borderRadius: 5,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: "#abb2b3",
        // opacity: 0.6
    },
    imageProducto: {
        width: 80,
        height: 80,
        borderColor: '#000',
        borderRadius: 25
    },
    imageProductoC: {
        width: 30,
        height: 30,
        borderRadius: 20
    }
})

export default CategoriesScreen;