import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Icon } from 'react-native-elements';

import Home from "../screens/Home";
import Search from '../screens/Search';
import Historial from '../screens/Historial';

const Tab = createBottomTabNavigator();

const Tabs = () => {

    const screensOptions = (route, color) => {
        let iconName;
        switch (route.name) {
            case "Home":
                iconName = "home";
                break;

            case "Search":
                iconName = "magnify";
                break;

            case "Historial":
                iconName = "format-list-bulleted";
                break;
        }

        return <Icon type='material-community' name={iconName} size={28} color={color} />
    }

    return (
        <Tab.Navigator 
            initialRouteName="Home" 
            screenOptions={({ route }) => ({
                tabBarActiveTintColor: "#4aad52",
                tabBarInactiveTintColor: "#949396",
                tabBarIcon: ({ color }) => screensOptions(route, color),
            })}
        >
            <Tab.Screen options={{ headerShown: false, title:'Inicio' }} name='Home' component={Home} />
            <Tab.Screen options={{ headerShown: false, title:'Buscar' }} name='Search' component={Search} />
            <Tab.Screen options={{ headerShown: false, title:'Historial' }} name='Historial' component={Historial} />
        </Tab.Navigator>
    )
}

export default Tabs;
