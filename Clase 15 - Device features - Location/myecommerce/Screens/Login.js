import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colors } from '../Global/colors'
import InputForm from '../Components/InputForm'
import SubmitButton from '../Components/SubmitButton'
import { useLoginMutation } from '../services/authService'
import { useDispatch } from 'react-redux'
import { setUser } from '../features/auth/authSlice'

const Login = ({navigation}) => {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [triggerSignin, result] = useLoginMutation()
    const dispatch = useDispatch();

    const onSubmit = () => {
        try {
            console.log("submit");
            console.log(triggerSignin);
            triggerSignin({
                email,
                password
            })
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(()=> {
        console.log(result);
        if(result.data) {
            console.log(result.data);
            dispatch(setUser(result.data))
        }
    }, [result])

  return (
    <View style={styles.main}>
        <View style={styles.container}>
            <Text style={styles.title}>Login to start</Text>
            <InputForm 
                label={"email"}
                onChange={setEmail}
                error={""}
            />
            <InputForm 
                label={"password"}
                onChange={setPassword}
                error={""}
                isSecure={true}
            />
            <SubmitButton 
                onPress={onSubmit}
                title = "Send"
            />
            <Text style={styles.sub}>Not have an account?</Text>
            <Pressable onPress={()=> navigation.navigate('Signup')}>
                <Text style={styles.subLink}>Sign up</Text>
            </Pressable>
        </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    main: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        width: '90%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.green1,
        gap: 15,
        paddingVertical: 20,
        borderRadius: 10,
    },
    title: {
        fontSize: 22,
        fontFamily: 'Lobster'
    },
    sub: {
        fontSize: 14,
        fontFamily: 'Josefin',
        color: 'black',
    },
    subLink: {
        fontSize: 14,
        fontFamily: 'Josefin',
        color: 'blue',
    }
})