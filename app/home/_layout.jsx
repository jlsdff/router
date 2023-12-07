/** @format */

import React from "react";
import { Tabs } from "expo-router";
import { Text, StyleSheet, View, Button } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from '@expo/vector-icons';

export default function HomeLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
            }}
        >
            <Tabs.Screen
                name="feed"
                options={{
                    title: "Home",
                    tabBarIcon: ({ color, size }) => (
                        <Entypo name="home" color={color} size={size} />
                    ),
                }}
            />  
            <Tabs.Screen
                name="task"
                options={{
                    title: "Task",
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="tasks" size={size} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="classes"
                options={{
                    title: "Classes",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="school" size={size} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="settings"
                options={{
                    title: "Settings",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="settings" size={size} color={color} />
                    ),
                }}
            />
        </Tabs>
    );
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
