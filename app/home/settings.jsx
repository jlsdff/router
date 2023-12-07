import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

export default function Settings(){
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Settings tab</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0D1117",
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        color: "#fff",
        fontSize: 20,
    },
});