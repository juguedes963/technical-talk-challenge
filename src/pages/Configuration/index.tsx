import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { database } from '../../config/firebase';
import { ref, set, get } from "firebase/database";
import PickerCustom from '../../components/Picker';
import { shapes, directions } from '../../constants';
import ColorPicker from 'react-native-wheel-color-picker';
import { useUser } from '../../context/User';
import { Button } from '../../components/Button';
import Toast from 'react-native-toast-message'

export default function SettingsPage() {
    const [shape, setShape] = useState<string>('cone');
    const [color, setColor] = useState('');
    const [rotation, setRotation] = useState<number>();
    const [load, setLoad] = useState<boolean>(false)
    const { user } = useUser()

    useEffect(() => {
        const loadUserAndSettings = async () => {
            if (user && user.uid) {
                await fetchSettings(user.uid);
            }
        };
        loadUserAndSettings();
    }, []);

    useEffect(() => {
        if (user && user.uid) {
            fetchSettings(user.uid);
        }
    }, [shape]);

    const fetchSettings = async (uid: string) => {
        try {
            const settingsRef = ref(database, `users/${uid}/settings/${shape}`);
            const snapshot = await get(settingsRef);

            if (snapshot.exists()) {
                const data = snapshot.val();
                setShape(data.shape);
                setColor(data.color);
                setRotation(data.rotation);

            }
        } catch (error) {
            console.error("Erro ao carregar configurações:", error);
        }
    };

    const saveSettings = async () => {
        try {
            if (user && user.uid) {
                setLoad(true)
                const uid = user.uid;
                const settingsRef = ref(database, `users/${uid}/settings/${shape}`);

                await set(settingsRef, { shape, color, rotation: rotation });
                Toast.show({
                    type: 'success',
                    text1: 'Salvo com sucesso',
                    position: 'bottom',
                    topOffset: 60,
                    visibilityTime: 3000,
                    autoHide: true,
                });
                setLoad(false)
            }
        } catch (error) {
            console.error("Erro ao salvar ou atualizar configurações:", error);
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <Toast />
            <View style={styles.section}>

                <Text accessibilityLabel="Escolha a forma do objeto" style={styles.label}>Forma:</Text>
                <PickerCustom
                    data={shapes}
                    selectedValue={shape}
                    onValueChange={(value) => setShape(value)}
                    accessibilityLabel="Selecionar Forma"
                    accessibilityHint="Selecione o formato do objeto para renderização"
                />
            </View>
            <View style={styles.section}>
                <Text accessibilityLabel="Escolha a cor do objeto" style={styles.label}>Cor:</Text>
                <View style={styles.colorPickerSection}>

                    <ColorPicker
                        color={color}
                        onColorChange={(selectedColor) => setColor(selectedColor)}
                        thumbSize={30}
                        sliderSize={20}
                        noSnap={true}
                        row={false}
                        style={styles.colorPicker}
                        accessibilityLabel="Selecionar Cor"
                        accessibilityHint="Escolha a cor desejada para o objeto 3D"
                    />
                </View>
            </View>

            <View style={styles.section}>
                <Text accessibilityLabel="Escolha a direção da rotação do objeto" style={styles.label}>Rotação:</Text>
                <PickerCustom
                    data={directions}
                    selectedValue={rotation}
                    onValueChange={(value) => setRotation(value)}
                    accessibilityLabel="Selecionar Direção de Rotação"
                    accessibilityHint="Selecione a direção de rotação para o objeto 3D"
                />
            </View>
            <Button
                accessibilityLabel='Salvar Configurações'
                accessibilityHint='Salva as configurações selecionadas para o objeto 3D'
                text="Salvar"
                loading={load}
                submit={saveSettings}
                style={{
                    width: "100%"
                }}
            />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        alignItems: 'center',
        padding: 20,
        marginTop: 15
    },
    label: {
        fontSize: 16,
        color: '#8ab47e',
        marginBottom: 5,
    },
    section: {
        width: "100%",
        marginBottom: 20,
    },
    colorPickerSection: {
        width: "100%",
        marginBottom: 20,
        padding: 15,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        alignItems: "center",
        backgroundColor: '#f4f4f4',
    },
    colorPicker: {
        width: "80%",
        height: 300,

    },
    saveButton: {
        backgroundColor: "#4CAF50",
        paddingVertical: 15,
        paddingHorizontal: 30,
        width: "100%",
        alignItems: "center",
        borderRadius: 5,
        marginTop: 10,
    },
    saveButtonText: {
        color: "#FFF",
        fontWeight: "bold",
    },
});
