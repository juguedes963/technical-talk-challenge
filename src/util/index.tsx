import { database } from '../config/firebase';
import { ref, get } from "firebase/database";

async function fetchRemoteConfig() {
    try {
        const remoteConfigRef = ref(database, 'remoteConfig');
        const snapshot = await get(remoteConfigRef);

        if (snapshot.exists()) {
            const config = snapshot.val();
            console.log("Configuração remota:", config);
            return config;
        } else {
            console.log("Nenhuma configuração encontrada.");
        }
    } catch (error) {
        console.error("Erro ao buscar configuração remota:", error);
    }
}

