/** @format */

import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableOpacity,
    Alert,
    Image,
    ImageBackground,
} from "react-native";
import { Link, Redirect } from "expo-router";
import { router } from "expo-router";
import { fakeProfiles } from "../fakeDatabase/fakeProfiles";
import { auth } from "../utils/firebase";
import { styles as globalStyles } from "../styles/globalStyles";
import BouncyCheckbox from "react-native-bouncy-checkbox";

export default function Page() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);

    const isLoggedIn = false;

    if (isLoggedIn) {
        return <Redirect href="/home" />;
    }

    function login() {
        console.log("login");
    }
    function register() {
        console.log("register");
        auth.createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(`user: ${user}`);
                return <Redirect href="/home" />;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(
                    `error \n code: ${errorCode} \n message: ${errorMessage}`
                );
                if (errorCode === "auth/email-already-in-use") {
                    Alert.alert("Error", "Email already in use");
                } else if (errorCode === "auth/invalid-email") {
                    Alert.alert("Error", "Invalid email");
                }
                // ..
            });
    }
    function onChange(type, text) {
        if (type === "email") {
            setEmail(text);
        } else if (type === "password") {
            setPassword(text);
        }
    }

    return (
        <ImageBackground
            source={require("../assets/background1.png")}
            blurRadius={90}
            style={globalStyles.fullSize}
        >
            <View style={styles.container}>
                <Image
                    source={require("../assets/mobischool_logo.png")}
                    style={styles.logo}
                />
                <View
                    style={{
                        ...globalStyles.fullWidth,
                        ...styles.normalGapSize,
                        marginBottom: 24,
                    }}
                >
                    <TextInput
                        placeholder="Email"
                        style={styles.input}
                        placeholderTextColor={"rgba(52,58,64, 0.9)"}
                        onChangeText={(text) => {
                            onChange("email", text);
                        }}
                        value={email}
                    />
                    <TextInput
                        placeholder="Password"
                        style={styles.input}
                        placeholderTextColor={"rgba(52,58,64, 0.9)"}
                        secureTextEntry={true}
                        onChangeText={(text) => {
                            onChange("password", text);
                        }}
                        value={password}
                    />
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginTop: 8,
                            marginBottom: 24,
                        }}
                    >
                        <BouncyCheckbox
                            size={24}
                            fillColor="#343A40"
                            unfillColor="transparent"
                            text="Remember me"
                            iconStyle={{ borderColor: "#343A40" }}
                            innerIconStyle={{ borderWidth: 2 }}
                            onPress={(isChecked) => {}}
                        />
                        {/* TODO: Make a link */}
                        <View style={{borderBottomWidth: 1, borderColor: "#343A40"}}>
                            <Text style={{ color: "#343A40" }}>
                                Forgot password?
                            </Text>
                        </View>
                    </View>
                    <TouchableOpacity
                        onPress={login}
                        style={{
                            ...globalStyles.primaryButton,
                            ...globalStyles.largeButton,
                            ...styles.softShadow,
                        }}
                        activeOpacity={0.9}
                    >
                        <Text
                            style={{
                                color: "#fff",
                                textAlign: "center",
                                fontSize: 22,
                            }}
                        >
                            Login
                        </Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    onPress={login}
                    style={globalStyles.ghostButton}
                >
                    <Text style={{ color: "#fff", textAlign: "center" }}>
                        Register
                    </Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        padding: 24,
        backgroundColor: "rgba(255,255,255,0.6)",
    },
    input: {
        width: "100%",
        height: 50,
        padding: 12,
        borderWidth: 2,
        borderColor: "#343A40",
        borderRadius: 10,
    },
    logo: {
        width: 200,
        height: 200,
        resizeMode: "contain",
        marginBottom: 24,
    },
    normalGapSize: {
        gap: 8,
    },
    normalShadow: {
        shadowColor: "#171717",
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    // soft shadow
    softShadow: {
        elevation: 8,
        shadowColor: "#000",
    },
});
