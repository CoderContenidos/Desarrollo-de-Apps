import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        value: {
            email: null,
            token: null,
            profileImage: null,
            imageCamera: null,
            localId: null,
            location: {
                address: null,
                latitude: null,
                longitude: null,
            }
        },
    },
    reducers: {
        setUser: (state, action) => {
            state.value = {
                ...state.value,
                email: action.payload.email,
                token: action.payload.idToken,
                localId: action.payload.localId,
            };
        },
        setProfilePicture: (state, action) => {
            state.value = {
                ...state.value,
                profileImage: action.payload
            }
        },
        clearUser: (state) => (state.value = {email: null, token: null, imageCamera: null, localId: null, profileImage: null}),
        setCameraImage: (state, action) => {
            state.value = {
                ...state.value,
                imageCamera: action.payload
            }
        },
        setUserLocation: (state,action) => {
            console.log(action.payload);
            state.value = {
                ...state.value,
                location: {
                    latitude: action.payload.latitude,
                    longitude: action.payload.longitude,
                    address: action.payload.address,
                }
            }
        },
        logout: (state) => {
            state.value = {
                email: null,
                token: null,
                profileImage: null,
                imageCamera: null,
                localId: null,
                location: {
                    address: null,
                    latitude: null,
                    longitude: null,
                }
            }
        }
    },
});

export const { setUser, clearUser, setCameraImage, setProfilePicture, setUserLocation, logout} = authSlice.actions;

export default authSlice.reducer;