import { THREE } from 'expo-three';
import { rotateObject } from './rotation';

export const addCone = (scene: THREE.Scene, color: number) => {

    const geometry = new THREE.ConeGeometry(0.8, 1.5, 18);
    const material = new THREE.MeshPhongMaterial({ color });
    const cone = new THREE.Mesh(geometry, material);
    cone.position.set(0, 0, 0);
    scene.add(cone);

    const lineGeometry = new THREE.CylinderGeometry(0.02, 0.02, 1.5, 8);
    const lineMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
    const line = new THREE.Mesh(lineGeometry, lineMaterial);
    line.position.set(0.4, -0.25, 0);
    line.rotation.z = Math.PI / 2;
    cone.add(line);

    const rotate = (direction: number, rotationSpeed: number) => {
        rotateObject(cone, direction, rotationSpeed);
    };
    
    const move = (moveX: number, moveY: number, moveZ: number) => {
        cone.position.x += moveX;
        cone.position.y += moveY;
        cone.position.z += moveZ;
    };

    return { rotate, move };
};
