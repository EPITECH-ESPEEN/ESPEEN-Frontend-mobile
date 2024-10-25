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
import SelecterWithTraduction from "../inputs/selecterWithTrad";


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

    const handleChangeService = (service: ISelecterItem) => {
        setSelectedService(service);
        const tmp = services!.find((s) => s.item.value === service.value);
        setOptions(node.type === "action" ? tmp!.actions : tmp!.reactions);
        setSelectedOption(null);
    }

    useEffect(() => {
        if (services) return;
        const fetchData = async () => {
            let tmp: IServiceSelecterItem[] = [];
            if (node.type === "action")
                tmp = await getAreaServicesActions();
            else
                tmp = await getAreaServicesReactions();
            setServices(tmp);
            if (!node.data.option) return;
            const service = tmp.find((s) => s.item.label === node.data.service);
            if (!service) return;
            setSelectedService(service.item);
            setOptions(node.type === "action" ? service!.actions : service!.reactions);
            const option = service.actions.find((a) => a.label === node.data.option);
            if (!option) return;
            setSelectedOption(option);
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
                onItemChange={handleChangeService}
                placeholder={t('area.select_service')}
                color="dark"
            />
            {
                selectedService && options &&
                <SelecterWithTraduction
                    options={options}
                    selectedValue={selectedOption}
                    onItemChange={setSelectedOption}
                    placeholder={t('select_reaction')}
                    color="dark"
                    baseTraduction="area."
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
