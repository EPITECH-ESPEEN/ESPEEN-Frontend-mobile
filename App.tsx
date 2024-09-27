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
import * as Font from 'expo-font';
import { getScreensConfigs } from './router/routerConfig';
import { colors } from './styles/colors';
import { isAuthenticated } from './services/authService';
import LoadingPage from './components/loading/LoadingPage';
import EspeenIcon from './components/icons/espeenIcon';


/* ----- LOAD FONTS ----- */
const loadFonts = async () => {
    await Font.loadAsync({
        'montserrat-alternates-regular': require('./assets/fonts/MontserratAlternates-Regular.ttf'),
        'montserrat-alternates-semibold': require('./assets/fonts/MontserratAlternates-SemiBold.ttf'),
        'montserrat-alternates-bold': require('./assets/fonts/MontserratAlternates-Bold.ttf'),
        'montserrat-alternates-black': require('./assets/fonts/MontserratAlternates-Black.ttf'),
    });
};


/* ----- COMPONENT ----- */
function App() {
    const TabNav = createBottomTabNavigator();
    const tabConfig = getScreensConfigs();
    const [loading, setLoading] = React.useState(false);
    const [isFontLoaded, setIsFontLoaded] = React.useState(false);

    const accessibleTabs = tabConfig.filter(screen => screen.accessible);
    const unaccessibleTabs = tabConfig.filter(screen => !screen.accessible);

    const handleTabPress = async (e: EventArg<"tabPress", true, undefined>, navigation: { navigate: (arg0: string) => void; }, logged: boolean) => {
        e.preventDefault();
        const timeout = setTimeout(() => {
            setLoading(true);
        }, 200);
        const auth = await isAuthenticated();
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
        setLoading(false);
    };

    React.useEffect(() => {
        const loadResources = async () => {
            await loadFonts();
            setIsFontLoaded(true);
        };

        loadResources();
    }, []);

    if (!isFontLoaded) {
        return <LoadingPage />;
    }

    return (
        <NavigationContainer>
            <TabNav.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarActiveTintColor: colors.light,
                    tabBarInactiveTintColor: colors.gray,
                    tabBarLabelStyle: {
                        fontSize: 16,
                        paddingBottom: 5,
                        fontFamily: 'montserrat-alternates-semibold',
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
                                icon ? React.createElement(icon, { size: 24, stroke: focused ? colors.light : colors.gray }) : <EspeenIcon size={24} stroke={focused ? colors.light : colors.gray} />,
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
