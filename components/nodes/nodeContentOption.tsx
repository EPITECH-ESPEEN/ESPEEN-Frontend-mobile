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
import { IInput, ISelecterItem, IServiceOptionItem } from "../../types/Selecter";
import { useTranslation } from "react-i18next";
import SelecterWithTraduction from "../inputs/selecterWithTrad";
import NodeContentFields from "./nodeContentFields";


/* ----- PROPS ----- */
interface NodeContentOptionProps {
    node: INode;
    options: IServiceOptionItem[];
}


/* ----- COMPONENT ----- */
const NodeContentOption: React.FC<NodeContentOptionProps> = ({ node, options }) => {
    const [selectedOption, setSelectedOption] = useState<ISelecterItem | null>(null);
    const [fields, setFields] = useState<IInput[] | null>(null);
    const { t } = useTranslation();

    useEffect(() => {
        if (node.data.option) {
            const option = options.find((option) => option.option.label === node.data.option);
            if (option) {
                setSelectedOption(option.option);
                setFields(option.fields);
            }
        } else {
            setSelectedOption(null);
            setFields(null);
        }
    }, [node, options]);

    const handleSelectedOptionChange = (item: ISelecterItem | null) => {
        if (!item) {
            setSelectedOption(null);
            setFields(null);
            node.data.option = null;
            node.data.fields = [];
            return;
        }
        setSelectedOption(item);
        node.data.option = item.label;
        setFields(options.find((option) => option.option.value === item.value)?.fields || null);
        node.data.fields = [];
    }

    return (
        <>
            <SelecterWithTraduction
                options={options.map((option) => option.option)}
                selectedValue={selectedOption}
                onItemChange={handleSelectedOptionChange}
                placeholder={t(`select_${node.type}`)}
                color="dark"
                baseTraduction="area."
            />
            {selectedOption && fields && fields.length > 0 && <NodeContentFields node={node} fields={fields} />}
        </>
    );
}



export default NodeContentOption;
