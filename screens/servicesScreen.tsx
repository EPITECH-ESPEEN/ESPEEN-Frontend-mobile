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
import { StyleSheet, ScrollView, View } from "react-native";
import { colors } from "../styles/colors";
import ServiceCard from "../components/card/ServiceCard";
import TextInput from "../components/inputs/textInput";
import { IService } from "../types/Services";
import { getServices } from "../stores/Services";
import LoadingPage from "../components/loading/LoadingPage";


/* ----- COMPONENT ----- */
const ServicesScreen: React.FC = () => {
    const [search, setSearch] = useState<string>("");
    const [services, setServices] = useState<IService[]>([]);
    const [filteredServices, setFilteredServices] = useState<IService[]>([]);

    function updateSearch(search: string) {
        setSearch(search);
        setFilteredServices(services.filter(({ name }) => name.toLowerCase().includes(search.toLowerCase())));
    }

    useEffect(() => {
        const fetchData = async () => {
            const services = await getServices();
            const tmp: IService[] = [];
            services.forEach((service) => {
                tmp.push(service);
            });
            setServices(tmp);
            setFilteredServices(tmp);
        }
        fetchData();
    }, []);

    if (services.length === 0) {
        return (
            <View style={styles.scrollContainer}>
                <LoadingPage />
            </View>
        );
    }

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.searchContainer}>
                <TextInput label="Search" value={search} onChangeText={updateSearch} color="dark" />
            </View>
            <View style={styles.libraryContainer}>
                {filteredServices.map((service: IService) => (
                    <ServiceCard service={service} key={service.service_id} />
                ))}
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
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: colors.dark,
        paddingTop: 100,
        paddingBottom: 40,
        gap: 40,
    },
    libraryContainer: {
        width: '100%',
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
    },
    searchContainer: {
        width: '80%',
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
    },
});


export default ServicesScreen;

