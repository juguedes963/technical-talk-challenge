import React, { useState } from 'react';
import { GLView } from 'expo-gl';
import { StyleSheet } from 'react-native';
import { use3DScene } from '../hook/render3d';
import { ThreeDObjectViewProps } from '../interface';

const ThreeDObjectView: React.FC<ThreeDObjectViewProps> = ({ addObjectFunction, color, rotationDirection, rotationSpeed, movement }) => {
    const [gl, setGL] = useState<WebGLRenderingContext | null>(null);

    use3DScene(gl, addObjectFunction, color,  rotationDirection, rotationSpeed, movement);

    return (
        <GLView
            style={styles.glView}
            onContextCreate={(context) => setGL(context)}
        />
    );
};

const styles = StyleSheet.create({
    glView: {
        width: '100%',
        height: '30%',
    },
});

export default ThreeDObjectView;
