import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { colors } from "../Global/colors";
import InputForm from "../Components/InputForm";
import SubmitButton from "../Components/SubmitButton";
import { useSignUpMutation } from "../services/authService";
import { useDispatch } from "react-redux";
import { setUser } from "../features/auth/authSlice";
import { signupSchema } from "../validations/singupSchema";

const Login = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [errorMail, setErrorMail] = useState("");
    const [password, setPassword] = useState("");
    const [errorPassword, setErrorPassword] = useState("")
    const [confirmPassword, setconfirmPassword] = useState("");
    const [errorConfirmPassword, setErrorConfirmPassword] = useState("");
    const [triggerSignup, result] = useSignUpMutation();
    const dispatch = useDispatch();

    console.log(result);

    const onSubmit = () => {
        try {
            signupSchema.validateSync({email, password, confirmPassword})
            triggerSignup({
                email,
                password
            })
        } catch (err) {
            console.log("Catch error");
            //Dentro del error tenemos el path: donde se produjo el error
            //error.message: el mensaje de error
            console.log(err.path);
            switch (err.path) {
                case 'email':
                    setErrorMail(err.message)
                    break;
                case 'password':
                    setErrorPassword(err.message)
                    break
                case 'confirmPassword':
                    setErrorConfirmPassword(err.message)
                    break
                default:
                    break;
            }
            console.log(err.message)

        }
    };

    useEffect(()=> {
        if (result.data) {
            dispatch(setUser(result))
        }
    }, [result])

    return (
        <View style={styles.main}>
            <View style={styles.container}>
                <Text style={styles.title}>Signup</Text>
                <InputForm label={"email"} onChange={setEmail} error={errorMail} />
                <InputForm
                    label={"password"}
                    onChange={setPassword}
                    error={errorPassword}
                    isSecure={true}
                />
                <InputForm
                    label={"confirm password"}
                    onChange={setconfirmPassword}
                    error={errorConfirmPassword}
                    isSecure={true}
                />
                <SubmitButton onPress={onSubmit} title="Send" />
                <Text style={styles.sub}>Already have an account?</Text>
                <Pressable onPress={() => navigation.navigate("Login")}>
                    <Text style={styles.subLink}>Login</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default Login;

const styles = StyleSheet.create({
    main: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    container: {
        width: "90%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.green1,
        gap: 15,
        paddingVertical: 20,
        borderRadius: 10,
    },
    title: {
        fontSize: 22,
        fontFamily: "Lobster",
    },
    sub: {
        fontSize: 14,
        fontFamily: "Josefin",
        color: "black",
    },
    subLink: {
        fontSize: 14,
        fontFamily: "Josefin",
        color: "blue",
    },
});
