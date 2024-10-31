import { StackNavigationProp } from "@react-navigation/stack";

type IRoutes = {
    Login: undefined,
    Home: undefined,
    Configuration: undefined,
    Tree: undefined,
    Logout: undefined
}

export type IStackRoutes = StackNavigationProp<IRoutes>