/*
    Author:
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤
    ┏━U━━━U━━━━━━━━━━━━━┓
    ┃ Have a good day !             ┃
    ┗━━━━━━━━━━━━━━━━━━━┛
*/

import { Library, UserRound, Waypoints } from "lucide-react-native";
import EspeenIcon from "../components/icons/espeenIcon";
import EspeenScreen from "../screens/espeenScreen";
import ServicesScreen from "../screens/servicesScreen";
import AreaScreen from "../screens/areaScreen";
import ProfileScreen from "../screens/profileScreen";
import LoginScreen from "../screens/loginScreen";

export type ScreenConfig = {
    name: string;
    content: React.FC;
    icon?: React.FC;
    logged: boolean;
    accessible: boolean;
    subScreen?: string;
}

const ScreensConfigs: ScreenConfig[] = [
    { name: 'Espeen', content: EspeenScreen, icon: EspeenIcon, logged: false, accessible: true },
    { name: 'services', content: ServicesScreen, icon: Library, logged: true, accessible: true },
    { name: 'AREA', content: AreaScreen, icon: Waypoints, logged: true, accessible: true },
    { name : 'profile', content: ProfileScreen, icon: UserRound, logged: true, accessible: true },
    { name : 'login', content: LoginScreen, logged: false, accessible: false },
]

export function getScreensConfigs(): ScreenConfig[] {
    return ScreensConfigs;
}

export function getScreenConfig(name: string): ScreenConfig | undefined {
    return ScreensConfigs.find(screen => screen.name === name);
}
