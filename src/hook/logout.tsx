import { useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { Text, TouchableOpacity } from 'react-native';
import { useUser } from '../context/User';
import Ionicons from '@expo/vector-icons/Ionicons';
import { IStackRoutes } from '../types';


export default function UseLogout({ ...props }) {
    const { setUser } = useUser()
    const navigation = useNavigation<IStackRoutes>()

    return (
        <TouchableOpacity
            {...props}
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#8AB47E',
                borderTopRightRadius: 15,
                paddingHorizontal: 10,
            }}
            onPress={() => {
                setUser(undefined);
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'Login' }],
                });
            }}
        >
            <Ionicons name="log-out" size={24} color="white" />
            <Text style={{ fontSize: 12, color: 'white' }}>Logout</Text>
        </TouchableOpacity>
    )
}