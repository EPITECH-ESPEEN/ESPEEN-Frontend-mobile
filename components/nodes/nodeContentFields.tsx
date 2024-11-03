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
import { INode } from "../../types/Node";
import { IInput } from "../../types/Selecter";
import { useTranslation } from "react-i18next";
import { View, StyleSheet, Text } from "react-native";
import { textsStyle } from "../../styles/textsStyle";
import TextInput from "../inputs/textInput";
import TimeInput from "../inputs/timeInput";


/* ----- PROPS ----- */
interface NodeContentFieldsProps {
    node: INode;
    fields: IInput[];
}


/* ----- COMPONENT ----- */
const NodeContentFields: React.FC<NodeContentFieldsProps> = ({ node, fields}) => {
    const [values, setValues] = useState<string[]>([]);
    const { t } = useTranslation();

    useEffect(() => {
        if (node.data.fields) {
            setValues(node.data.fields);
            return;
        }
        if (fields) {
            const newValues = new Array(fields.length).fill("");
            setValues(newValues);
            node.data.fields = newValues;
        } else
            setValues([]);
    }, [node, fields]);

    const handleFieldValueChange = (index: number, value: string) => {
        const newValues = [...values];
        newValues[index] = value;
        setValues(newValues);
        node.data.fields = newValues;
    }

    return (
        <>
            <View style={styles.space} />
            <Text style={textsStyle.title}>{t("dico.fields")}</Text>
            {fields && fields.map((field, index) => {
                if ([`text`, `password`, `email`, `number`, `phone`, `textarea`].includes(field.type))
                    return <View key={index} style={styles.container}>
                        <TextInput
                            label={t(`area.fields.${field.label}`)}
                            value={values[index]}
                            onChangeText={(text) => handleFieldValueChange(index, text)}
                            color="light"
                            borderColor="dark"
                        />
                    </View>
                if (field.type === "time")
                    return <View key={index} style={styles.container}>
                        <TimeInput
                            label={t(`area.fields.${field.label}`)}
                            value={values[index]}
                            onChange={(text) => handleFieldValueChange(index, text)}
                            color="light"
                            borderColor="dark"
                        />
                    </View>
            })}
        </>
    );
}

/* ----- STYLES ----- */
const styles = StyleSheet.create({
    space: {
        height: 20,
    },
    container: {
        width: '100%',
    }
});


export default NodeContentFields;
