/** @format */

import React from "react";
import { Stack, router, Tabs, Redirect } from "expo-router";
import { Alert, Button, View, Text } from "react-native";
import { useRouter } from "expo-router";

export default function MainLayout() {
    const [isLogged, setIsLogged] = React.useState(true);

    if (isLogged) {
        return <Redirect href="/home" />;
    }

    return (
        <View>
            <Text>Root Layout</Text>
        </View>
    );
}

// export default function MainLayout() {

//     const router = useRouter();

//     return (
//         <Stack
//             screenOptions={{
//                 // blue
//                 headerStyle: { backgroundColor: "#0D1117", opacity: 0.4 },
//                 headerTintColor: "#fff",
//                 headerTitleStyle: {
//                     fontWeight: "bold",
//                     textAlign: "center",
//                     fontSize: 20,
//                 },
//                 headerRight: () => (
//                     <Button
//                         onPress={() => router.push("/modal")}
//                         title="Edit"
//                         name="edit"
//                         backgroundColor="transparent"
//                         color="#000"
//                     />
//                 ),
//             }}
//         >
//             <Stack.Screen
//                 name="index"
//                 options={{
//                     title: "Home",
//                 }}
//             />
//             <Stack.Screen
//                 name="profile/[id]"
//                 options={{
//                     title: "Profile",
//                     headerShown: false,
//                 }}
//             />
//             <Stack.Screen
//                 name="modal"
//                 options={{
//                     presentation: "modal",
//                     title: "Edit Info",
//                 }}
//             />
//         </Stack>
//     );
// }
