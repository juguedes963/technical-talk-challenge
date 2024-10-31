import { useEffect, useRef } from 'react';
import { Renderer, THREE } from 'expo-three';

export const use3DScene = (
    gl: WebGLRenderingContext | null,
    addObjectFunction: (scene: THREE.Scene, color: number) => { rotate: (direction: number, speed: number) => void; move: (x: number, y: number, z: number) => void },
    color: number,
    rotationDirection: number,
    rotationSpeed: number,
    movement: { x: number; y: number; z: number }
) => {
    const requestId = useRef<number | null>(null);

    useEffect(() => {
        if (!gl) return;

        const renderer = new Renderer({ gl });
        
        renderer.setSize(gl.drawingBufferWidth, gl.drawingBufferHeight);

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, gl.drawingBufferWidth / gl.drawingBufferHeight, 0.1, 1000);
        camera.position.z = 2.8;

        const shadowPlaneGeometry = new THREE.PlaneGeometry(3, 3);

        const shadowPlaneMaterial = new THREE.ShadowMaterial({ opacity: 0.5 });
        const shadowPlane = new THREE.Mesh(shadowPlaneGeometry, shadowPlaneMaterial);
        shadowPlane.rotation.x = -Math.PI / 2;
        shadowPlane.position.y = 0;
        shadowPlane.receiveShadow = true;

        scene.add(shadowPlane);
    
        const light = new THREE.DirectionalLight(0xffffff, 1);
        light.position.set(5, 5, 5).normalize();
        light.castShadow = true;
        scene.add(light);
        
        light.shadow.mapSize.width = 1024;
        light.shadow.mapSize.height = 1024;
        light.shadow.camera.near = 0.5;
        light.shadow.camera.far = 20;

        const { rotate, move } = addObjectFunction(scene, color);

        const animate = () => {
            rotate(rotationDirection, rotationSpeed);
            move(movement.x, movement.y, movement.z);
            renderer.render(scene, camera);
            gl.endFrameEXP();

            requestId.current = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            if (requestId.current) {
                cancelAnimationFrame(requestId.current);
            }
            renderer.dispose();
            scene.clear();
        };
    }, [gl, addObjectFunction, color, rotationDirection, rotationSpeed, movement]);
};
