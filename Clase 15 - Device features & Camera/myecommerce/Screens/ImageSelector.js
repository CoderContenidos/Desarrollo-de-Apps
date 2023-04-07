import React, { useState } from "react";
import { Image, View, StyleSheet, Text } from "react-native";
import * as ImagePicker from "expo-image-picker";
import AddButton from "../Components/AddButton";
import { useDispatch, useSelector } from "react-redux";
import { setCameraImage } from "../features/auth/authSlice";
import { colors } from "../Global/colors";
import { usePostProfileImageMutation } from "../services/shopService";

const ImageSelector = ({navigation}) => {
    const [image, setImage] = useState(null);
    const {localId} = useSelector(state => state.authReducer.value)
    const [triggerSaveProfileImage, result] = usePostProfileImageMutation()
    const dispatch = useDispatch()

    console.log(localId);

    const verifyCameraPermissions = async () => {
        const {granted} = await ImagePicker.requestCameraPermissionsAsync()
        if (!granted) {
          return false
        }
        return true
      }

    const pickImage = async () => {
        const isCameraOk = await verifyCameraPermissions()
        if (isCameraOk) {
          // No permissions request is necessary for launching the image library
          let result = await ImagePicker.launchCameraAsync({
              mediaTypes: ImagePicker.MediaTypeOptions.All,
              allowsEditing: true,
              aspect: [9, 16],
              base64: true,
              quality: 1,
          });
  
          console.log(result.assets);

          if (!result.canceled) {
              setImage(result.assets[0].uri);
          }
        }
    };

    const confirmImage = () => {
        dispatch(setCameraImage(image))
        triggerSaveProfileImage({image, localId})
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            {
                image ?
                <>
                    <Image source={{ uri: image }} style={styles.image} />
                    <AddButton title="Take another photo" onPress={pickImage} />
                    <AddButton title="Confirm photo" onPress={confirmImage}/>
                </>
                :
                <>
                    <View style = {styles.noPhotoContainer}>
                        <Text>No photo to show...</Text>
                    </View>
                    <AddButton title="Take a photo" onPress={pickImage} />
                </>
            }
        </View>
    );
};

export default ImageSelector;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 20,
    },
    image: {
        width: 200,
        height: 200,
    },
    noPhotoContainer: {
        width: 200,
        height: 200,
        borderWidth: 2,
        borderColor: colors.green3,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
