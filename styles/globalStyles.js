/** @format */

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    largeTitle: {
        fontSize: 32,
        fontWeight: "bold",
        marginBottom: 24,
    },
    fullSize: {
        width: "100%",
        height: "100%",
    },
    fullWidth: {
        width: "100%",
    },
    largeButton: {
        height: 50,
        paddingHorizontal: 24,
        paddingVertical: 12,
        gap: 8,
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    },
    mediumButton: {
        height: 40,
        paddingHorizontal: 16,
        paddingVertical: 8,
        gap: 8,
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    },
    smallButton: {
        height: 32,
        paddingHorizontal: 8,
        paddingVertical: 4,
        gap: 4,
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    },
    primaryButton: {
        backgroundColor: "#002B64",
        borderRadius: 10,
        width: "100%",
    },
    ghostButton: {
        paddingHorizontal: 24,
        paddingVertical: 12,
        borderRadius: 6,
        width: "100%",
        color: "#004aad",
        borderWidth: 1,
    },
});

export { styles };
