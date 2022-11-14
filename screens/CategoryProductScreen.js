import React from 'react'
import { View, Text, StyleSheet, Button} from 'react-native'
import Header from '../components/Header'

const CategoryProductScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Header/>
            <Text>Categorias</Text>
            <Button title="Ir a detalle" onPress={() =>{
                navigation.navigate('Detalle')
            }}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex :1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default CategoryProductScreen;