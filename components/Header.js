import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Header = () => {

    // const titulo  = "BIENVENIDOS";

    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>BIENVENIDOS</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: "100%",
        height: 50,
        backgroundColor: "#675C54",
        alignItems: "center",
        justifyContent: "center"
    },
    headerTitle: {
        color: "#fffaf0",
        fontSize: 40,
        fontFamily: "IndieFlower-Regular",

    }
  })
export default Header;
