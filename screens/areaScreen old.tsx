/*
    Author:
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤
    ┏━U━━━U━━━━━━━━━━━━━┓
    ┃ Have a good day !             ┃
    ┗━━━━━━━━━━━━━━━━━━━┛
*/

/* ----- IMPORTS ----- */
import React, { useEffect, useState } from "react";
import { StyleSheet, ScrollView, Text, View } from "react-native";
import { colors, colorsStyle } from "../styles/colors";
import { textsStyle } from "../styles/textsStyle";
import Selecter from "../components/inputs/selecter";
import { Divider } from "react-native-paper";
import { ISelecterItem } from "../types/Selecter";
import { IServiceSelecterItem } from "../types/Services";
import { getAreaServicesActions, getAreaServicesReactions } from "../services/services";
import LoadingPage from "../components/loading/LoadingPage";
import Button from "../components/inputs/button";
import { fetchPost } from "../services/fetch";


/* ----- COMPONENT ----- */
const AreaScreenOld: React.FC = () => {
    const [servicesAction, setServicesAction] = useState<IServiceSelecterItem[] | null>(null);
    const [selectedActionService, setSelectedActionService] = useState<ISelecterItem | null>(null);
    const [selectedaction, setSelectedAction] = useState<ISelecterItem | null>(null);
    const [actionDataOptions, setActionDataOptions] = useState<ISelecterItem[] | null>(null);

    const [servicesReaction, setServicesReaction] = useState<IServiceSelecterItem[] | null>(null);
    const [selectedReactionService, setSelectedReactionService] = useState<ISelecterItem | null>(null);
    const [selectedReaction, setSelectedReaction] = useState<ISelecterItem | null>(null);
    const [reactionDataOptions, setReactionDataOptions] = useState<ISelecterItem[] | null>(null);

    const handleSelectedActionServiceChange = (item: ISelecterItem) => {
        setSelectedActionService(item);
        setSelectedAction(null);
        setActionDataOptions(servicesAction!.find((service) => service.item.value === item.value)!.actions);
    }

    const handleReselectedActionServiceChange = (item: ISelecterItem) => {
        setSelectedReactionService(item);
        setSelectedReaction(null);
        setReactionDataOptions(servicesReaction!.find((service) => service.item.value === item.value)!.reactions);
    }

    const handleSave = () => {
        const response = fetchPost("area", {})
        console.log(response);
    }

    useEffect(() => {
        if (servicesAction && servicesReaction) return;
        const fetchData = async () => {
            const tmp = await getAreaServicesActions();
            setServicesAction(tmp);
            const tmp2 = await getAreaServicesReactions();
            setServicesReaction(tmp2);
            console.log("data fetched");
        }
        fetchData();
    });

    if (!servicesAction || !servicesReaction) {
        return (
            <View style={styles.scrollContainer}>
                <LoadingPage />
            </View>
        );
    }

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.container}>
                <Text style={[textsStyle.title, colorsStyle.light]}>Action</Text>
                <Selecter
                    options={servicesAction.map((service) => service.item)}
                    selectedValue={selectedActionService}
                    onItemChange={handleSelectedActionServiceChange}
                    placeholder="Select a service"
                />
                <Selecter
                    options={actionDataOptions || []}
                    selectedValue={selectedaction}
                    onItemChange={setSelectedAction}
                    placeholder="Select an action"
                />
            </View>
            <Divider style={{ backgroundColor: colors.gray, width: '100%', marginVertical: 20, height: 2 }} />
            <View style={styles.container}>
                <Text style={[textsStyle.title, colorsStyle.light]}>Reaction</Text>
                <Selecter
                    options={servicesReaction.map((service) => service.item)}
                    selectedValue={selectedReactionService}
                    onItemChange={handleReselectedActionServiceChange}
                    placeholder="Select a service"
                />
                <Selecter
                    options={reactionDataOptions || []}
                    selectedValue={selectedReaction}
                    onItemChange={setSelectedReaction}
                    placeholder="Select an reaction"
                />
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    label="Save"
                    onPress={() => handleSave()}
                />
            </View>
        </ScrollView>
    );
};


/* ----- STYLES ----- */
const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.dark,
        gap: 80,
    },
    container: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
    }
});


export default AreaScreenOld;

