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
import { Plus } from 'lucide-react-native';
import { useTranslation } from "react-i18next";
import { initialNodes, setInitialNodes } from "../../stores/Nodes";
import IconButton from "../inputs/buttonIcon";
import NodePage from "../nodes/nodePage";
import { graphToTable } from "../../services/nodes";
import { getUser, setUser } from "../../stores/User";
import { fetchPost } from "../../services/fetch";
import ErrorPage from "../error/ErrorPage";
import LoadingPage from "../loading/LoadingPage";
import Swiper from "../swiper/swiper";
import { colors } from "../../styles/colors";


/* ----- COMPONENT ----- */
const AddNodePage: React.FC = () => {
    function addPage() {
        const tmp = initialNodes;
        const newPage = {
            id: initialNodes.length,
            source: {
                data: {service: null, option: null, fields: []},
                type: "action"
            },
            targets: [
                {
                    data: {service: null, option: null, fields: []},
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

const AreaPageContent: React.FC = () => {
    const [childrens, setChildrens] = useState<React.ReactNode[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const { t } = useTranslation();

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

    const handleSave = async () => {
        const graph = initialNodes;
        const table = graphToTable(graph);
        if (typeof table === "boolean") {
            setError(t("error.fill_all_actions_reactions"));
            return;
        }
        setLoading(true);
        const user = await getUser();
        if (!user) {
            setLoading(false);
            setError(t("error.user_not_found"));
            return;
        }
        user.actionReaction = table;
        const response = await fetchPost("user", user);
        if (!response.ok) {
            setLoading(false);
            setError(t("error.save_failed"));
            return;
        }
        setUser({ ...user });
        setLoading(false);
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
        <>
            { loading || error ?
                error ?
                    <ErrorPage error={error} onConfirm={() => setError(null)} />
                    :
                    <LoadingPage />
                :
                <Swiper childrens={childrens} deleteChild={handleDelete} saveChilds={handleSave} />
            }
        </>
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

export default AreaPageContent;
