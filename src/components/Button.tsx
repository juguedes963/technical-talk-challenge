import React from 'react'
import { StyleSheet, Text, TouchableOpacity, ActivityIndicator, ViewStyle, TextStyle } from 'react-native'

interface IButtonProps {
    submit: () => void
    text: string
    accessibilityLabel: string
    accessibilityHint: string
    loading?: boolean
    style?: ViewStyle
    textStyle?: TextStyle
}

export const Button: React.FC<IButtonProps> = ({ submit, text, accessibilityLabel, accessibilityHint, loading, style, textStyle }) => {
    return (
        <TouchableOpacity
            onPress={submit}
            style={{ ...styles.saveButton, ...style }}
            accessibilityRole='button'
            accessibilityLabel={accessibilityLabel}
            accessibilityHint={accessibilityHint}

        >

            <Text style={{ ...styles.saveButtonText, ...textStyle }}>
                {loading ? <ActivityIndicator /> : text}

            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    saveButton: {
        backgroundColor: "#99BF73",
        paddingVertical: 15,
        paddingHorizontal: 30,
        width: "100%",
        alignItems: "center",
        borderRadius: 12,
        marginTop: 10,
    },
    saveButtonText: {
        color: "#FFF",
        fontSize: 15,
        fontWeight: "bold",
    },
});
