import { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native';
import { auth } from '../../config/firebase'
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from '@react-navigation/native';
import { useUser } from '../../context/User';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { IStackRoutes } from '../../interface/IRoutes';

export default function LoginPage() {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [load, setLoad] = useState<boolean>(false)
    const navigation = useNavigation<IStackRoutes>()
    const [isNavigationReady, setNavigationReady] = useState(false);
    const { setUser } = useUser();

    useEffect(() => {
        const timeout = setTimeout(() => {
            setNavigationReady(true);
        }, 1000);
        return () => clearTimeout(timeout);
    }, []);

    async function login() {
        try {
            setLoad(true)
            const { user } = await signInWithEmailAndPassword(auth, email, password)
            setUser(user)
            isNavigationReady && navigation.navigate('Home')
        } catch (err: any) {
            console.log(err)

        } finally {
            setLoad(false)
        }
    }



    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: "#F2F2F2"
        }}>
            <Image
                source={require('../../assets/logo.png')}
            />
            <View style={{
                marginBottom: 20,
                marginLeft: '10%',
                marginRight: '10%',
                marginTop: "10%",
                width: '90%',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Input placeholder='E-mail' onChangeInput={setEmail} value={email} />

                <Input placeholder='Senha' onChangeInput={setPassword} value={password} password />

                <Button
                    accessibilityLabel='Logar'
                    accessibilityHint='aperte o botao para logar'
                    text="Entrar"
                    loading={load}
                    submit={login}

                    style={{
                        width: "50%"
                    }}

                />
            </View>



        </View>
    );
}