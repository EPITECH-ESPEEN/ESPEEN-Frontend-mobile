/*
    Author:
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤
    ┏━U━━━U━━━━━━━━━━━━━┓
    ┃ Have a good day !        ┃
    ┗━━━━━━━━━━━━━━━━━━━┛
*/


/* ----- IMPORTS ----- */
import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { INode } from "../../types/Node";
import { IServiceSelecterItem } from "../../types/Services";
import { ISelecterItem } from "../../types/Selecter";
import { getAreaServicesActions, getAreaServicesReactions } from "../../services/services";
import Selecter from "../inputs/selecter";
import LoadingPage from "../loading/LoadingPage";
import { colors } from "../../styles/colors";
import { textsStyle } from "../../styles/textsStyle";
import { useTranslation } from "react-i18next";
import IconButton from "../inputs/buttonIcon";
import { X } from "lucide-react-native";


/* ----- PROPS ----- */
interface NodeProps {
    node: INode;
    deleteNode: (id: number) => void;
    canBeDeleted?: boolean;
    id?: number;
}


/* ----- COMPONENT ----- */
const Node: React.FC<NodeProps> = ({id = -1, node, canBeDeleted = false, deleteNode}) => {
    const { t } = useTranslation();

    const [services, setServices] = useState<IServiceSelecterItem[] | null>(null);
    const [selectedService, setSelectedService] = useState<ISelecterItem | null>(null);
    const [options, setOptions] = useState<ISelecterItem[] | null>(null);
    const [selectedOption, setSelectedOption] = useState<ISelecterItem | null>(null);

    useEffect(() => {
        if (services) return;
        const fetchData = async () => {
            let tmp: IServiceSelecterItem[] = [];
            if (node.type === "action")
                tmp = await getAreaServicesActions();
            else
                tmp = await getAreaServicesReactions();
            setServices(tmp);
        }
        fetchData();
    });

    if (!services) return (<LoadingPage />);

    return (
        <View style={styles.container}>
            { canBeDeleted &&
                <View style={styles.button}>
                    <IconButton icon={X} size={24} color="dark" onPress={() => deleteNode(id)} />
                </View>
            }
            <Text style={textsStyle.title}>{t(`dico.${node.type}`)}</Text>
            <Selecter
                options={services.map((service) => service.item)}
                selectedValue={selectedService}
                onItemChange={setSelectedService}
                placeholder="Select a service"
                color="dark"
            />
            {
                selectedService &&
                <Selecter
                    options={services.find((service) => service.item.value === selectedService.value)!.actions}
                    selectedValue={selectedOption}
                    onItemChange={setSelectedOption}
                    placeholder="Select an action"
                    color="dark"
                />
            }
        </View>
    );
}


/* ----- STYLES ----- */
const styles = StyleSheet.create({
    container: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
        backgroundColor: colors.light,
        borderColor: colors.green,
        borderWidth: 4,
        borderRadius: 10,
        padding: 20,
    },
    button: {
        position: 'absolute',
        top: 0,
        right: 0,
    }
});



export default Node;
