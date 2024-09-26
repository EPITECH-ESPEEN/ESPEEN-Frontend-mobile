/*
    Author:
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤
    ┏━U━━━U━━━━━━━━━━━━━┓
    ┃ Have a good day !             ┃
    ┗━━━━━━━━━━━━━━━━━━━┛
*/

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { ScreensConfigs } from './router/routerConfig';
import { View } from 'react-native';
import { colors } from './assets/colors';

function App() {
    const TabNav = createBottomTabNavigator();
    const tabConfig = ScreensConfigs;

    return (
        <NavigationContainer>
            <TabNav.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarActiveTintColor: colors.light,
                    tabBarInactiveTintColor: colors.gray,
                    tabBarLabelStyle: {
                        fontSize: 14,
                        paddingBottom: 5,
                        fontWeight: 'bold',
                    },
                    tabBarStyle: {
                        height: 60,
                        backgroundColor: colors.green,
                    }
                }}
                initialRouteName='Espeen'
            >
                {tabConfig.map(({ name, content, icon }) => (
                    <TabNav.Screen key={name} name={name} component={content}
                        options={{
                            tabBarIcon: ({ focused }) =>
                                React.createElement(icon, { size: 24, stroke: focused ? colors.light : colors.gray }),
                        }}
                    />
                ))}
            </TabNav.Navigator>
        </NavigationContainer>
    );
}

export default App;
