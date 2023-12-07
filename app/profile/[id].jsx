/** @format */

import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import { Link, useRouter, useLocalSearchParams, Stack } from "expo-router";
import { fakeProfiles } from "../../fakeDatabase/fakeProfiles";

export default function Profile() {
    const router = useRouter();
    const { id } = useLocalSearchParams();

    const { firstname, surname } = fakeProfiles.find(
        (prof) => prof.id === Number(id)
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Hello {firstname} {surname}{" "}
            </Text>

            <Button title="Go back" onPress={() => router.back()} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
    },
    button: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        width: "50%",
    },
    title: {
        fontSize: 24,
        textAlign: "center",
        marginBottom: 20,
    },
});
