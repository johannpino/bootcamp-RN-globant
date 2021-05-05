import React,{ useState, useContext} from 'react'
import {View, Text, TextInput, Button } from 'react-native'
import AuthContext from '../context/auth/authContext';

const Login = () => {

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const context = useContext(AuthContext);
    const { user, initializing, login, logout, register } = context;

    return (
        <View>
            <Text>Sign in</Text>
            <View>
              <Text>Email:</Text>
              <TextInput onChangeText={(text) => setEmail(text)}></TextInput>
            </View>
            <View>
              <Text>Password:</Text>
              <TextInput onChangeText={(text) => setPass(text)}></TextInput>
            </View>
            <Button title="Sign in" onPress={() => login(email, pass)}></Button>
        </View>
    )
}

export default Login
