/*
    Author:
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤
    ┏━U━━━U━━━━━━━━━━━━━┓
    ┃ Have a good day !             ┃
    ┗━━━━━━━━━━━━━━━━━━━┛
*/

/* ----- IMPORTS ----- */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { EventArg, NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { getScreensConfigs } from './router/routerConfig';
import { colors } from './assets/colors';
import { isAuthenticated } from './services/authService';
import LoadingPage from './components/loading/LoadingPage';

/* ----- COMPONENT ----- */
function App() {
    const TabNav = createBottomTabNavigator();
    const tabConfig = getScreensConfigs();
    const [loading, setLoading] = React.useState(false);
    const [loadingTimeout, setLoadingTimeout] = React.useState<NodeJS.Timeout | null>(null);

    const accessibleTabs = tabConfig.filter(screen => screen.accessible);
    const unaccessibleTabs = tabConfig.filter(screen => !screen.accessible);

    const handleTabPress = async (e: EventArg<"tabPress", true, undefined>, navigation: { navigate: (arg0: string) => void; }, logged: boolean) => {
        e.preventDefault();
        
        // Start the timeout for loading indicator
        const timeout = setTimeout(() => {
            setLoading(true);
        }, 500); // 0.5 seconds delay

        const auth = await isAuthenticated();
        
        // Clear the timeout if it hasn't triggered yet
        clearTimeout(timeout);
        
        if (logged && !auth) {
            navigation.navigate('Login');
        } else {
            const tabName = e.target?.toString().split('-')[0];
            if (tabName)
                navigation.navigate(tabName);
            else
                navigation.navigate('Espeen');
        }

        // Set loading to false after the request completes
        setLoading(false);
    };

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
                {accessibleTabs.map(({ name, content, icon, logged }) => (
                    <TabNav.Screen
                        key={name}
                        name={name}
                        component={content}
                        options={{
                            tabBarIcon: ({ focused }) =>
                                icon ? React.createElement(icon, { size: 24, stroke: focused ? colors.light : colors.gray }) : "?",
                        }}
                        listeners={({ navigation }) => ({
                            tabPress: (e) => handleTabPress(e, navigation, logged),
                        })}
                    />
                ))}
                {unaccessibleTabs.map(({ name, content }) => (
                    <TabNav.Screen
                        key={name}
                        name={name}
                        component={content}
                        options={{
                            tabBarButton: () => null,
                            tabBarStyle: { display: 'none' },
                        }}
                    />
                ))}
            </TabNav.Navigator>
            {loading && <LoadingPage />}
        </NavigationContainer>
    );
}

export default App;
