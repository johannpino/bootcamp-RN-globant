import React,{ useState, useContext} from 'react'
import {View, Text, TextInput, Button, StyleSheet } from 'react-native'
import AuthContext from '../context/auth/authContext';

const Login = ({navigation}) => {

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const context = useContext(AuthContext);
    const { user, initializing, login, logout, register } = context;

    return (
        <View>
            <Text>Sign in</Text>
            <Text>Email:</Text>
            <TextInput onChangeText={(text) => setEmail(text)}></TextInput>
            <Text>Password:</Text>
            <TextInput onChangeText={(text) => setPass(text)}></TextInput>
            <Button title="Sign in" onPress={() => login(email, pass)}></Button>
            <Button title="go to register" onPress={() => navigation.navigate('RegisterScreen')}>aaaaaaa</Button>
        </View>
    )
}

const styles = StyleSheet.create({

})

export default Login
