import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { View, StyleSheet, ActivityIndicator, Text } from 'react-native';
import ThreeDObjectView from '../../components/ThreeDObjectView';
import { addCube } from '../../util/3d/cube';
import { addCone } from '../../util/3d/cone';
import { addDodecahedron } from '../../util/3d/dodecahedron';
import { useUser } from '../../context/User';
import { get, ref } from 'firebase/database';
import { database } from '../../config/firebase';
import { useFocusEffect } from '@react-navigation/native';

interface ShapeSettings {
    color: string;
    rotation: number;
}

interface Shapes {
    cube: ShapeSettings;
    cone: ShapeSettings;
    dodecaedro: ShapeSettings;
}

const TreePage: React.FC = () => {
    const [shapes, setShapes] = useState<Shapes | null>(null);
    const [load, setLoad] = useState<boolean>(false)
    const { user } = useUser();

    useFocusEffect(
        useCallback(() => {
            if (user && user.uid) {
                fetchSettings(user.uid);
            }
        }, [user])
    );

    const fetchSettings = async (uid: string) => {
        try {
            setLoad(true)
            const settingsRef = ref(database, `users/${uid}/settings`);
            const snapshot = await get(settingsRef);

            if (snapshot.exists()) {
                const data = snapshot.val() as Shapes;
                setShapes(data);
            }
            setLoad(false)
        } catch (error) {
            console.error("Erro ao carregar configurações:", error);
        }
    };

    const renderedShapes = useMemo(() => {
        if (!shapes) return (
            <Text style={styles.label}>Não tem configuração de objetos no momento</Text>
        );

        return (
            <>
                {shapes.cube && (
                    <ThreeDObjectView
                        addObjectFunction={addCube}
                        color={parseInt(shapes.cube.color.replace('#', ''), 16)}
                        rotationDirection={shapes.cube.rotation}
                        rotationSpeed={0.01}
                        movement={{ x: 0, y: 0, z: 0 }}
                    />
                )}

                {shapes.cone && (
                    <ThreeDObjectView
                        addObjectFunction={addCone}
                        color={parseInt(shapes.cone.color.replace('#', ''), 16)}
                        rotationDirection={shapes.cone.rotation}
                        rotationSpeed={0.01}
                        movement={{ x: 0, y: 0, z: 0 }}

                    />
                )}

                {shapes.dodecaedro && (
                    <ThreeDObjectView
                        addObjectFunction={addDodecahedron}
                        color={parseInt(shapes.dodecaedro.color.replace('#', ''), 16)}
                        rotationDirection={shapes.dodecaedro.rotation}
                        rotationSpeed={0.01}
                        movement={{ x: 0, y: 0, z: 0 }}
                    />
                )}

            </>
        );
    }, [shapes]);

    return <View style={styles.container}>{load ? <ActivityIndicator color={'black'} size={'large'} /> : renderedShapes}</View>;
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    label: {
        fontSize: 16,
        color: '#8ab47e',
        marginBottom: 5,
    },
});

export default TreePage;
