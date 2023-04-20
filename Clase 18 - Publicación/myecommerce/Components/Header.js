import { View, Text, StyleSheet, Pressable } from "react-native";
import { colors } from "../Global/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/auth/authSlice";
import { deleteSession } from "../db";

const Header = ({ title = "Hola!" }) => {
    const { email, localId } = useSelector((state) => state.authReducer.value);
    const dispatch = useDispatch();

    const onLogout = async () => {
      dispatch(logout())
      const deletedSession = await deleteSession({localId})
      console.log(deletedSession);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{title}</Text>
            {email && (
                <Pressable style={styles.logoutIcon} onPress={onLogout}>
                    <MaterialIcons name="logout" size={30} color="black" />
                </Pressable>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.green2,
        height: 80,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
    },
    text: {
        // fontFamily: 'Josefin',
        fontFamily: "Lobster",
        // fontFamily: 'PlayFair',
        fontSize: 30,
    },
    logoutIcon: {
        position: "absolute",
        right: 10,
    },
});

export default Header;
