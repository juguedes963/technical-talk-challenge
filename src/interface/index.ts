import { THREE } from 'expo-three';
import { User } from 'firebase/auth';

export interface ISpeedRotation {
    x: number;
    y: number;
}
export interface IMoveRotation {

    x: number;
    y: number;
    z: number

}

export interface UserProviderProps {
	children: JSX.Element;
};

export interface UserContextType {
    user: User | undefined;
    setUser: React.Dispatch<React.SetStateAction<User | undefined>>;
}


export interface ThreeDObjectViewProps {
    addObjectFunction: (scene: THREE.Scene, color: number) => {
        rotate: (direction: number, speed: number) => void;
        move: (x: number, y: number, z: number) => void;
    };
    color: number;
    rotationDirection: number;
    rotationSpeed: number;
    movement: IMoveRotation;
}


