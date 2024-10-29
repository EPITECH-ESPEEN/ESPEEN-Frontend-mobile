/*
    Author:
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤
    ┏━U━━━U━━━━━━━━━━━━━┓
    ┃ Have a good day !        ┃
    ┗━━━━━━━━━━━━━━━━━━━┛
*/


/* ----- IMPORTS ----- */
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { IGraphNode, INode } from "../../types/Node";
import Node from "./node";
import IconButton from "../inputs/buttonIcon";
import { Plus } from 'lucide-react-native';
import { colors } from "../../styles/colors";


/* ----- PROPS ----- */
interface NodePageProps {
    graph: IGraphNode;
}


/* ----- COMPONENT ----- */
const NodePage: React.FC<NodePageProps> = ({graph}) => {
    const [childrens, setChildrens] = useState<INode[]>(graph.targets);

    function deleteNode(id: number) {
        if (id <= 0) return;
        const tmp = graph.targets.filter((_, index) => index !== id);
        graph.targets = tmp;
        setChildrens(tmp);
    }

    function addNode() {
        const tmp = graph.targets;
        tmp.push({data: {service: null, option: null}, type: "reaction"});
        graph.targets = tmp;
        setChildrens(tmp);
    }

    return (
        <>
            <Node node={graph.source} deleteNode={deleteNode} canBeDeleted={false} />
            {
                childrens.map((target, index) => (
                    <Node key={index} id={index} node={target} canBeDeleted={index !== 0} deleteNode={deleteNode} />
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
