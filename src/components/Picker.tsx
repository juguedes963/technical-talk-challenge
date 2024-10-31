import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

interface IPickerCustom {
    data: {
        label: string;
        value: string;
    }[];
    selectedValue: string | number;
    onValueChange: (value: string) => void;
    accessibilityLabel: string;
    accessibilityHint?: string;
}

const PickerCustom: React.FC<IPickerCustom> = ({ data, selectedValue, onValueChange, accessibilityLabel, accessibilityHint }) => {
    return (
        <View style={styles.pickerContainer}>
            <View style={styles.pickerWrapper}>
                <Picker
                    selectedValue={selectedValue}
                    onValueChange={(value) => onValueChange(value as string)}
                    style={styles.picker}
                    accessibilityLabel={accessibilityLabel}
                    accessibilityHint={accessibilityHint}
                >
                    {data.map((info) => (
                        <Picker.Item key={info.value} label={info.label} value={info.value} />
                    ))}
                </Picker>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    pickerContainer: {
        width: '100%',
        marginBottom: 10,
    },

    pickerWrapper: {
        backgroundColor: '#f4f4f4',
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 3,
    },
    picker: {
        width: '100%',
        paddingHorizontal: 10,
        color: '#6b6b6b', 
    },
});

export default PickerCustom;
