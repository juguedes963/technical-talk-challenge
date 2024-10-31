import { THREE } from 'expo-three';
import { rotateObject } from './rotation';

export const addCube = (scene: THREE.Scene, color: number) => {
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshPhongMaterial({ color });
    const cube = new THREE.Mesh(geometry, material);
    cube.position.x = 0
    cube.castShadow = true;
    scene.add(cube);

    const rotate = (direction: number, rotationSpeed: number) => {
        rotateObject(cube, direction, rotationSpeed);
    };

    const move = (moveX: number, moveY: number, moveZ: number) => {
        cube.position.x += moveX;
        cube.position.y += moveY;
        cube.position.z += moveZ;
    };
    return { rotate, move };
};