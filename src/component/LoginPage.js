
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ImageBackground, Image, Dimensions } from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginScreen = ({ navigation }) => {
    const [secureText, setSecureText] = useState(true);
    const [email, setEmail] = useState("testpracticaluser001@mailinator.com"); // Default for testing
    const [password, setPassword] = useState("Test@123");
    const [loading, setLoading] = useState(false);

    const { height } = Dimensions.get("window");

    const handleLogin = async () => {
        setLoading(true);
        try {
            let formData = new FormData();
            formData.append("email", email);
            formData.append("password", password);

            const response = await fetch(
                "http://3.7.81.243/projects/plie-api/public/api/login",
                {
                    method: "POST",
                    body: formData,
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );

            const data = await response.json();
            console.log("Full API Response:", data);

            if (response.ok) {
                if (data.data && data.data.token) {
                    const token = data.data.token;
                    navigation.navigate('FormDetail');

                    await AsyncStorage.setItem("authToken", token);
                } else {
                    console.log("Check response format:", data);
                }
            } else {
            }
        } catch (error) {
            console.error("Login Error:", error);
        } finally {
            setLoading(false);
        }
    };



    return (
        <>
            <ImageBackground
                source={{ uri: 'https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?cs=srgb&dl=pexels-padrinan-255379.jpg&fm=jpg' }}
                style={{ width: "100%", height: height / 3 }}
                resizeMode="cover"
            />
            <View style={styles.container}>
                <Text style={styles.title}>Login</Text>
                <Text style={{ alignSelf: 'flex-start' }}>{"Email"}</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
                <Text style={{ alignSelf: 'flex-start' }}>{"Password"}</Text>
                <View style={{ backgroundColor: '#fff', flexDirection: "row", alignItems: "center", borderWidth: 1, borderRadius: 8, paddingHorizontal: 10, borderColor: '#ccc', }}>
                    <TextInput
                        style={{ flex: 1, height: 40 }}
                        placeholder="Password"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry={secureText}
                    />
                    <TouchableOpacity onPress={() => setSecureText(!secureText)}>
                        <Icon name={secureText ? "eye-off" : "eye"} size={24} color="gray" />
                    </TouchableOpacity>
                </View>
                <Text style={{ alignSelf: 'flex-end' }}>{"Forgot pasword ?"}</Text>
                <TouchableOpacity style={styles.button} onPress={handleLogin} disabled={loading}>
                    <Text style={styles.buttonText}>Sign in </Text>
                </TouchableOpacity>
                <Text style={{ alignSelf: 'flex-end' }}>{"not a member ? sign Up here"}</Text>
                <Text style={{ marginTop: 40 }}>{"-----------------------------or sign in with---------------------------"}</Text>
                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                    <TouchableOpacity onPress={() => console.log('Google Login')}>
                        <Image
                            source={require('../assets/google.png')}
                            style={{ width: 50, height: 50, marginHorizontal: 10 }}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Image
                            source={require('../assets/apple.png')}
                            style={{ width: 50, height: 50, marginHorizontal: 10 }}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Image
                            source={require('../assets/facebook.png')}
                            style={{ width: 50, height: 50, marginHorizontal: 10 }}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginBottom: 10,
        backgroundColor: '#fff',
    },
    button: {
        backgroundColor: '#2f7376',
        padding: 10,
        borderRadius: 5,
        alignSelf: 'flex-end',
        marginTop: 20
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default LoginScreen;
