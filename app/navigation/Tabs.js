import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from "../components/Home";
import FindScreen from "../components/Find";
import PostScreen from "../components/Post";
import SettingScreen from "../components/Settings";
import ChatScreen from "../components/Chat";

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name='Home' component={HomeScreen} />
            <Tab.Screen name='Find' component={FindScreen} />
            <Tab.Screen name='Post' component={PostScreen} />
            <Tab.Screen name='Settings' component={SettingScreen} />
            <Tab.Screen name='Chat' component={ChatScreen} />
        </Tab.Navigator>
    )
}

export default Tabs;
