import React from 'react'
import { StyleSheet, ViewStyle, TextInput } from 'react-native'

interface ITextInputProps {
    onChangeInput: (value: string) => void
    value: string
    password?: boolean
    style?: ViewStyle
    placeholder: string
}

export const Input: React.FC<ITextInputProps> = ({ onChangeInput, value, style, placeholder, password }) => {
    return (
        <TextInput style={{ ...styles.input, ...style }}
            onChangeText={value => onChangeInput(value)}
            placeholder={placeholder}
            value={value}
            secureTextEntry={password}
        />
    )
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1.2,
        borderColor: '#99BF73',
        borderRadius: 10,
        width: '80%',
        marginBottom: 20,
        paddingHorizontal: 10,
        paddingVertical: 8,
        color: "#838383"
    }
});
