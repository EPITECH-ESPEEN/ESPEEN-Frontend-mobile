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
import { StyleSheet, View } from "react-native";
import Swiper from "../components/swiper/swiper";
import { initialNodes, setInitialNodes } from "../stores/Nodes";
import NodePage from "../components/nodes/nodePage";
import { Plus } from 'lucide-react-native';
import { colors } from "../styles/colors";
import IconButton from "../components/inputs/buttonIcon";
import { getUser } from "../stores/User";
import LoadingPage from "../components/loading/LoadingPage";


/* ----- COMPONENT ----- */
const AddNodePage: React.FC = () => {
    function addPage() {
        const tmp = initialNodes;
        const newPage = {
            id: initialNodes.length,
            source: {
                data: {service: null, option: null},
                type: "action"
            },
            targets: [
                {
                    data: {service: null, option: null},
                    type: "reaction"
                }
            ]
        };
        tmp.push(newPage);
        setInitialNodes(tmp);
    }

    return (
        <View style={styles.button}>
            <IconButton icon={Plus} onPress={addPage} size={32} color="light"/>
        </View>
    );
}

const AreaScreen: React.FC = () => {
    const [childrens, setChildrens] = useState<React.ReactNode[]>([]);
    const updateChildrens = () => {
        const tmp = [];
        for (let i = 0; i < initialNodes.length; i++)
            tmp.push(<NodePage key={i} graph={initialNodes[i]} />);
        tmp.push(<AddNodePage />);
        setChildrens(tmp);
    }

    const handleDelete = (id: number) => {
        if (id < 0) return;
        const tmp = initialNodes.filter((_, index) => index !== id);
        setInitialNodes(tmp);
    }

    useEffect(() => {
        setInterval(() => {
            if (childrens.length <= 1) {
                getUser();
                updateChildrens();
                return;
            }
            if (childrens.length - 1 != initialNodes.length) {
                updateChildrens();
                return;
            }
        }, 1000);
    }, [initialNodes]);

    return (
        <Swiper childrens={childrens} deleteChild={handleDelete} />
    );
};

/* ----- STYLES ----- */
const styles = StyleSheet.create({
    button: {
        padding: 10,
        borderRadius: 100,
        backgroundColor: colors.green,
    }
});

export default AreaScreen;
