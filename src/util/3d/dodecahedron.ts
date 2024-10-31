import { THREE } from 'expo-three';
import { rotateObject } from './rotation';

export const addDodecahedron = (scene: THREE.Scene, color: number) => {
    const geometry = new THREE.DodecahedronGeometry(1);
    const material = new THREE.MeshPhongMaterial({ color });
    const dodecahedron = new THREE.Mesh(geometry, material);
    dodecahedron.position.x = 0;
    scene.add(dodecahedron);

    const rotate = (direction: number, rotationSpeed: number) => {
        rotateObject(dodecahedron, direction, rotationSpeed);
    };

    const move = (moveX: number, moveY: number, moveZ: number) => {
        dodecahedron.position.x += moveX;
        dodecahedron.position.y += moveY;
        dodecahedron.position.z += moveZ;
    };
    return {
        move,
        rotate
    }
};
