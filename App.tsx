/*
    Author:
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤  <  Have a good day !
    --U-----U------------------------
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
import i18n, { setDefaultLanguage } from './i18n/i18n';
import { useTranslation } from 'react-i18next';
import { setDefaultColorBlind } from './services/colorBlind';
import { getUser } from './stores/User';

/* ----- LOAD FONTS ----- */
const loadFonts = async () => {
    await Font.loadAsync({
        'montserrat-alternates-black': require('./assets/fonts/MontserratAlternates-Black.ttf'),
        'montserrat-alternates-bold': require('./assets/fonts/MontserratAlternates-Bold.ttf'),
        'montserrat-alternates-regular': require('./assets/fonts/MontserratAlternates-Regular.ttf'),
        'montserrat-alternates-semibold': require('./assets/fonts/MontserratAlternates-SemiBold.ttf'),
    });
};


/* ----- COMPONENT ----- */
function App() {
    const TabNav = createBottomTabNavigator();
    const tabConfig = getScreensConfigs();
    const [loading, setLoading] = React.useState(false);
    const [isRessourcesLoaded, setIsRessourcesLoaded] = React.useState(false);
    const { t } = useTranslation();
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
            navigation.navigate('login');
        } else {
            const tabName = e.target?.toString().split('-')[0];
            if (tabName)
                navigation.navigate(tabName);
            else
                navigation.navigate('espeen');
        }
        setLoading(false);
    };

    React.useEffect(() => {
        const loadResources = async () => {
            await setDefaultLanguage();
            await setDefaultColorBlind();
            await loadFonts();
            await getUser();
            setIsRessourcesLoaded(true);
        };

        loadResources();
    }, []);

    if (!isRessourcesLoaded || !i18n.isInitialized) {
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
                {accessibleTabs.map(({ name, content, icon, logged }, index) => (
                    <TabNav.Screen
                        key={index}
                        name={name === 'Espeen' ? 'Espeen' : name === 'AREA' ? 'AREA' : t(`dico.${name}`)}
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
                {unaccessibleTabs.map(({ name, content }, index) => (
                    <TabNav.Screen
                        key={index}
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
