import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import UseLogout from '../../src/hook/logout';
import { NavigationContainer } from '@react-navigation/native';
import { useUser } from '../../src/context/User';

jest.mock('@react-navigation/native', () => ({
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: jest.fn().mockImplementation(() => ({
        reset: jest.fn(),
    })),
}));

jest.mock('../../src/context/User', () => ({
    useUser: jest.fn(),
}));

jest.mock('@expo/vector-icons/Ionicons', () => 'Ionicons');

describe('UseLogout Component', () => {
    it('deve redefinir o usuário e navegar para a tela de Login ao fazer logout', async () => {
        const setUser = jest.fn();
        const reset = jest.fn();

        (useUser as jest.Mock).mockReturnValue({ setUser });
        (require('@react-navigation/native').useNavigation as jest.Mock).mockReturnValue({ reset });

        const { getByText } = render(
            <NavigationContainer>
                <UseLogout />
            </NavigationContainer>
        );

        const logoutButton = getByText('Logout');
        fireEvent.press(logoutButton);

        await waitFor(() => {
            expect(setUser).toHaveBeenCalledWith(null);
            expect(reset).toHaveBeenCalledWith({
                index: 0,
                routes: [{ name: 'Login' }],
            });
        });
    });
});
