import React,{ useState, useContext } from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import AuthContext from '../context/auth/authContext';

const Register = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass ] = useState('')

    const context = useContext(AuthContext);
    const { user, initializing, login, logout, register } = context;

    return (
        <View>
            <Text>Sign up</Text>
            <View>
              <Text>Name:</Text>
              <TextInput onChangeText={(text) => setName(text)}></TextInput>
            </View>
            <View>
              <Text>Email:</Text>
              <TextInput onChangeText={(text) => setEmail(text)}></TextInput>
            </View>
            <View>
              <Text>Password:</Text>
              <TextInput onChangeText={(text) => setPass(text)}></TextInput>
            </View>
            <Button
              title="Sign up"
              onPress={() => register(name, email.toLocaleLowerCase(), pass)} // IMPORTANTE EL TOLOWERCASE
            ></Button>
        </View>
    )
}

export default Register
