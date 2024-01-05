import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, Image, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function Login() {
    const [titleText, setTitleText] = useState("Login");


    const onPressTitle = () => {
        setTitleText("Login");
    };
    return (
        <View style={styles.container}>
            {/* <View style={styles.d}></View> */}
            <View style={styles.head}>
            <Image
                source={require('../assets/images/tp1.png')}
                style={{ width: 150, height: 150, margin: 3 }}
            />

            <Text style={styles.head} onPress={onPressTitle}>
                Login
                {'\n'}
                {'\n'}
                <SafeAreaView>
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Password" 
                    />
                    <Text>{'\n'}</Text>
                    <Button
                        style={styles.input}
                        title="Login"
                        color="#841584"
                    />
                    <Text style={styles.phu}>Forgot password?</Text>
                </SafeAreaView>

            </Text>

            <StatusBar style="auto" />
        </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //padding: 10,
        marginTop:10,
    },
    ccc: {
        flex: 1,
        backgroundColor: '#ddd',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    head: {
        flex: 10,
        color: 'red',
        fontSize: 30,
        fontWeight: 'bold',
        backgroundColor: '#ddd',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 0,
        marginTop: 0,
    },
    d: {
        flex: 2,
        padding: 16,
        marginTop: 5,
    },
    input: {
        height: 35,
        width: 300,
        margin: 15,
        borderWidth: 1,
        padding: 10,
    },
    phu: {
        flex: 1,
        backgroundColor: '#ddd',
        alignItems: 'center',
        justifyContent: 'center',
    },
    // button: {
    //     height: 25,
    //     width: 50,
    //     margin: 12,
    //     borderWidth: 1,
    //     padding: 10,
    // },

});
