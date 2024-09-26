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
import LibrariesScreen from "../screens/librariesScreen";
import AreaScreen from "../screens/areaScreen";
import ProfileScreen from "../screens/profileScreen";

export type ScreenConfig = {
    name: string;
    content: React.FC;
    icon: React.FC;
    subScreen?: string;
}

export const ScreensConfigs: ScreenConfig[] = [
    { name: 'Espeen', content: EspeenScreen, icon: EspeenIcon },
    { name: 'Libraries', content: LibrariesScreen, icon: Library },
    { name: 'AREA', content: AreaScreen, icon: Waypoints },
    { name : 'Profile', content: ProfileScreen, icon: UserRound }
]
