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
import { ISelecterItem, IServiceOptionItem, IServiceSelecterItem } from "../../types/Selecter";
import Selecter from "../inputs/selecter";
import { colors } from "../../styles/colors";
import { textsStyle } from "../../styles/textsStyle";
import { useTranslation } from "react-i18next";
import IconButton from "../inputs/buttonIcon";
import { X } from "lucide-react-native";
import NodeContentOption from "./nodeContentOption";


/* ----- PROPS ----- */
interface NodeProps {
    node: INode;
    services: IServiceSelecterItem[];
    deleteNode: (id: number) => void;
    canBeDeleted?: boolean;
    id?: number;
}


/* ----- COMPONENT ----- */
const NodeContent: React.FC<NodeProps> = ({id = -1, node, services, canBeDeleted = false, deleteNode}) => {
    const [selectedService, setSelectedService] = useState<ISelecterItem | null>(null);
    const [options, setOptions] = useState<IServiceOptionItem[] | null>(null);
    const { t } = useTranslation();

    const handleSelectedServiceChange = (item: ISelecterItem | null) => {
        if (!item) {
            setSelectedService(null);
            setOptions(null);
            node.data.service = null;
            node.data.option = null;
            node.data.fields = [];
            return;
        }
        setSelectedService(item);
        node.data.service = item.label;
        setOptions(services.find((service) => service.service.value === item.value)?.options || null);
        node.data.option = null;
        node.data.fields = [];
    }

    useEffect(() => {
        if (node.data.service && services) {
            const service = services.find((s) => s.service.label === node.data.service);
            if (service) {
                setSelectedService(service.service);
                setOptions(service.options)
            }
        }
    }, [node, services]);

    return (
        <View style={styles.container}>
            { canBeDeleted &&
                <View style={styles.button}>
                    <IconButton icon={X} size={24} color="dark" onPress={() => deleteNode(id)} />
                </View>
            }
            <Text style={textsStyle.title}>{t(`dico.${node.type}`)}</Text>
            <Selecter
                options={services.map((service) => service.service)}
                selectedValue={selectedService}
                onItemChange={handleSelectedServiceChange}
                placeholder={t('area.select_service')}
                color="dark"
            />
            { selectedService && options && <NodeContentOption node={node} options={options}/> }
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
        width: '100%',
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



export default NodeContent;
