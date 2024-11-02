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
import { IGraphNode, INode } from "../../types/Node";
import NodeContent from "./nodeContent";
import IconButton from "../inputs/buttonIcon";
import { Plus } from 'lucide-react-native';
import { colors } from "../../styles/colors";
import { IServiceSelecter } from "../../types/Selecter";
import { getAreaServices } from "../../services/services";
import LoadingPage from "../loading/LoadingPage";


/* ----- PROPS ----- */
interface NodePageProps {
    graph: IGraphNode;
}


/* ----- COMPONENT ----- */
const NodePage: React.FC<NodePageProps> = ({graph}) => {
    const [childrens, setChildrens] = useState<INode[]>(graph.targets);
    const [services, setServices] = useState<IServiceSelecter | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const tmp = await getAreaServices();
            setServices(tmp);
        }
        fetchData();
    }, []);

    if (!services) return <LoadingPage />;

    function deleteNode(id: number) {
        if (id <= 0) return;
        const tmp = graph.targets.filter((_, index) => index !== id);
        graph.targets = tmp;
        setChildrens(tmp);
    }

    function addNode() {
        const tmp = graph.targets;
        tmp.push({data: {service: null, option: null, fields: []}, type: "reaction"});
        graph.targets = tmp;
        setChildrens(tmp);
    }

    return (
        <>
            <NodeContent node={graph.source} services={services.actions} deleteNode={() => {}} canBeDeleted={false} />
            {
                childrens.map((target, index) => (
                    <NodeContent key={index} id={index} node={target} services={services.reactions} deleteNode={deleteNode} canBeDeleted={index !== 0} />
                ))
            }
            <View style={styles.button}>
                <IconButton icon={Plus} onPress={addNode} size={32} color="light"/>
            </View>
        </>
    );
}


/* ----- STYLES ----- */
const styles = StyleSheet.create({
    button: {
        padding: 10,
        borderRadius: 100,
        backgroundColor: colors.green,
    }
});

export default NodePage;
