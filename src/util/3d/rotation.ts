import { Object3D } from 'three';

export const rotateObject = (object: Object3D, direction: number, rotationSpeed: number) => {
    switch (direction) {
        case 1: 
            object.rotation.x -= rotationSpeed;
            break;
        case 2: 
            object.rotation.y += rotationSpeed;
            break;
        case 3: 
            object.rotation.x += rotationSpeed;
            break;
        case 4:
            object.rotation.y -= rotationSpeed;
            break;
        case 5:
            object.rotation.x -= rotationSpeed;
            object.rotation.y += rotationSpeed;
            break;
        case 6: 
            object.rotation.x += rotationSpeed;
            object.rotation.y += rotationSpeed;
            break;
        case 7:
            object.rotation.x -= rotationSpeed;
            object.rotation.y -= rotationSpeed;
            break;
        case 8: 
            object.rotation.x += rotationSpeed;
            object.rotation.y -= rotationSpeed;
            break;
        default:
            break;
    }
};
