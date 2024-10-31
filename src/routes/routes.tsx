import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginPage from '../pages/Login';
import ConfigurationPage from '../pages/Configuration';
import TreePage from '../pages/Tree';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Text, TouchableOpacity } from 'react-native';
import { useUser } from '../context/User';
import UseLogout from '../hook/logout';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const EmptyScreen = () => {
    return null;
};

function Internal() {
    return (
        <Tab.Navigator
            initialRouteName="Configuration"
            screenOptions={{
                tabBarShowLabel: true,
                tabBarStyle: {
                    backgroundColor: '#8AB47E',
                    borderTopLeftRadius: 15,
                    borderTopRightRadius: 15,
                    height: 60,
                },
                tabBarLabelStyle: {
                    fontSize: 12,
                    color: 'white',
                    paddingBottom: 5,
                },
                tabBarInactiveTintColor: 'white',
                tabBarActiveTintColor: '#2C6E49',
            }}
        >
            <Tab.Screen
                name="Tree"
                component={TreePage}
                options={{
                    headerShown: false,
                    title: 'Renderização',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="cube" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Configuration"
                component={ConfigurationPage}
                options={{
                    headerShown: false,
                    title: 'Configurações',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="settings" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Logout"
                component={EmptyScreen}
                options={({ navigation }) => ({
                    headerShown: false,
                    title: 'Logout',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="log-out" size={size} color={color} />
                    ),
                    tabBarButton: (props) => (
                        <UseLogout />
                    ),
                })}
            />

        </Tab.Navigator>
    );
}

function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen
                    name="Login"
                    component={LoginPage}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="Home"
                    component={Internal}
                    options={{
                        headerShown: false,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;
