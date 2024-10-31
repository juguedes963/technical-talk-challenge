import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import LoginPage from '../../src/pages/Login';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { NavigationContainer } from '@react-navigation/native';
import { UserProvider } from '../../src/context/User';

jest.mock('firebase/auth', () => ({
    getAuth: jest.fn(() => ({
        currentUser: { uid: 'PVPZSHrSMcZKzZctqVgISk4KDZk1' },
    })),
    signInWithEmailAndPassword: jest.fn(),
}));

describe('LoginPage', () => {
    it('deve fazer login corretamente', async () => {
        (signInWithEmailAndPassword as jest.Mock).mockResolvedValueOnce({
            user: { uid: 'PVPZSHrSMcZKzZctqVgISk4KDZk1' },
        });

        const { getByPlaceholderText, getByText } = render(
            <NavigationContainer>
                <UserProvider>
                    <LoginPage />
                </UserProvider>
            </NavigationContainer>
        );

        const emailInput = getByPlaceholderText('E-mail');
        const passwordInput = getByPlaceholderText('Senha');
        const loginButton = getByText('Entrar');

        fireEvent.changeText(emailInput, 'teste1@gmail.com');
        fireEvent.changeText(passwordInput, 'cavalo01');
        fireEvent.press(loginButton);

        await waitFor(() => {
            expect(signInWithEmailAndPassword).toHaveBeenCalledWith(
                expect.any(Object),
                'teste1@gmail.com',
                'cavalo01'
            );
        });
    });


});
describe('LoginFailed', () => {
    it('deve fazer login incorretamente', async () => {
        (signInWithEmailAndPassword as jest.Mock).mockResolvedValueOnce({
            user: { uid: 'PVPZSHrSMcZKzZctqVgISk4KDZk1' },
        });

        const { getByPlaceholderText, getByText } = render(
            <NavigationContainer>
                <UserProvider>
                    <LoginPage />
                </UserProvider>
            </NavigationContainer>
        );

        const emailInput = getByPlaceholderText('E-mail');
        const passwordInput = getByPlaceholderText('Senha');
        const loginButton = getByText('Entrar');

        fireEvent.changeText(emailInput, 'teste13@gmail.com');
        fireEvent.changeText(passwordInput, 'cavalo0132');
        fireEvent.press(loginButton);

        await waitFor(() => {
            expect(signInWithEmailAndPassword).toHaveBeenCalledWith(
                expect.any(Object),
                'teste13@gmail.com',
                'cavalo0132'
            );
        });
    });
})