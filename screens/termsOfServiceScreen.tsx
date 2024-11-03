/*
    Author:
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤  <  Have a good day !
    --U-----U------------------------
*/

/* ----- IMPORTS ----- */
import React from "react";
import { StyleSheet, ScrollView, Text, View } from "react-native";
import { colors, colorsStyle } from "../styles/colors";
import { textsStyle } from "../styles/textsStyle";
import { useTranslation } from "react-i18next";


/* ----- COMPONENT ----- */
const TermsOfServiceScreen: React.FC = () => {
    const { t } = useTranslation();

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.textContainer}>
                <Text style={[textsStyle.text, colorsStyle.light, styles.text, styles.italic]}>Last Updated: October 31, 2024</Text>
                <Text style={[textsStyle.huge, colorsStyle.light, styles.text]}>Terms of Service for Espeen</Text>
                <Text style={[textsStyle.text, colorsStyle.light, styles.text]}>Welcome to Espeen! Please read these Terms of Service ("Terms") carefully as they govern your access to and use of Espeen's platform and services ("Services"). By accessing or using our Service, you agree to be bound by these Terms. If you do not agree with any part of these Terms, please do not use the Service.</Text>
            </View>

            <View style={styles.textContainer}>
                <Text style={[textsStyle.title, colorsStyle.light, styles.text]}>1. Service Overview</Text>
                <Text style={[textsStyle.text, colorsStyle.light, styles.text]}>Espeen is a versatile project focused on enabling users to automate tasks using action-reaction workflows, known as "Areas." Users define specific "Actions," which trigger "Reactions," enabling streamlined workflows across various scenarios, including real-time notifications and other automated processes.</Text>
            </View>

            <View style={styles.textContainer}>
                <Text style={[textsStyle.title, colorsStyle.light, styles.text]}>2. Use of the Service</Text>
                <Text style={[textsStyle.text, colorsStyle.light, styles.text]}>Account Registration: To use Espeen, you may be required to register for an account. By registering, you agree to provide accurate and complete information and to keep your account details up to date.</Text>
                <Text style={[textsStyle.text, colorsStyle.light, styles.text]}>Eligibility: You must be at least 18 years old or the age of majority in your jurisdiction to use Espeen's Service. By agreeing to these Terms, you represent and warrant that you meet these requirements.</Text>
                <Text style={[textsStyle.text, colorsStyle.light, styles.text]}>User Responsibilities: You are responsible for maintaining the security of your account credentials. Espeen cannot and will not be liable for any loss or damage arising from unauthorized use of your account.</Text>
                <Text style={[textsStyle.text, colorsStyle.light, styles.text]}>Prohibited Conduct: You agree not to misuse Espeen's Service, including but not limited to:</Text>
                <Text style={[textsStyle.text, colorsStyle.light, styles.text]}>Attempting to interfere with or disrupt the platform.</Text>
                <Text style={[textsStyle.text, colorsStyle.light, styles.text]}>Using the Service to infringe on the rights of others.</Text>
                <Text style={[textsStyle.text, colorsStyle.light, styles.text]}>Conducting any activities that are unlawful or violate third-party rights.</Text>
            </View>

            <View style={styles.textContainer}>
                <Text style={[textsStyle.title, colorsStyle.light, styles.text]}>3. Features of Espeen</Text>
                <Text style={[textsStyle.text, colorsStyle.light, styles.text]}>Action-Driven Workflows: Define "Actions" that trigger automatic "Reactions," allowing for flexible and customizable automation.</Text>
                <Text style={[textsStyle.text, colorsStyle.light, styles.text]}>Modular and Extensible Design: The Service is designed to allow new types of Actions and Reactions to be added, ensuring a customizable experience tailored to Texterse user needs.</Text>
                <Text style={[textsStyle.text, colorsStyle.light, styles.text]}>User-Friendly Interface: Espeen offers an intuitive interface to simplify setting up and managing Areas.</Text>
            </View>

            <View style={styles.textContainer}>
                <Text style={[textsStyle.title, colorsStyle.light, styles.text]}>4. User Content and Privacy</Text>
                <Text style={[textsStyle.text, colorsStyle.light, styles.text]}>User Data and Privacy: By using Espeen, you agree to our collection and use of your data as described in our Privacy Policy. Espeen is committed to protecting user data and adheres to industry standards for security and data protection.</Text>
                <Text style={[textsStyle.text, colorsStyle.light, styles.text]}>Content Ownership and License: While you retain ownership of any content you submit to Espeen, you grant Espeen a non-exclusive, worldwide, royalty-free license to use, store, and display your content solely for the purpose of operating the Service.</Text>
            </View>

            <View style={styles.textContainer}>
                <Text style={[textsStyle.title, colorsStyle.light, styles.text]}>5. Modifications to the Service and Terms</Text>
                <Text style={[textsStyle.text, colorsStyle.light, styles.text]}>Espeen reserves the right to modify, suspend, or discontinue the Service, or any portion of it, with or without notice. We may also revise these Terms at any time. Changes will be effective when posted on our platform. Continued use of the Service after changes constitute acceptance of the modified Terms.</Text>
            </View>

            <View style={styles.textContainer}>
                <Text style={[textsStyle.title, colorsStyle.light, styles.text]}>6. Disclaimer of Warranties</Text>
                <Text style={[textsStyle.text, colorsStyle.light, styles.text]}>Espeen is provided "as is" and "as available" without warranties of any kind, either express or implied. We do not guarantee that the Service will be uninterrupted, secure, or error-free, nor do we guarantee any results from the use of the Service.</Text>
            </View>

            <View style={styles.textContainer}>
                <Text style={[textsStyle.title, colorsStyle.light, styles.text]}>7. Limitation of Liability</Text>
                <Text style={[textsStyle.text, colorsStyle.light, styles.text]}>To the fullest extent permitted by law, Espeen and its affiliates, directors, employees, and agents will not be liable for any indirect, incidental, punitive, or consequential damages arising from your use or inability to use the Service.</Text>
            </View>

            <View style={styles.textContainer}>
                <Text style={[textsStyle.title, colorsStyle.light, styles.text]}>8. Indemnification</Text>
                <Text style={[textsStyle.text, colorsStyle.light, styles.text]}>You agree to indemnify, defend, and hold harmless Espeen from and against any claims, liabilities, damages, losses, or expenses arising out of your violation of these Terms or misuse of the Service.</Text>
            </View>

            <View style={styles.textContainer}>
                <Text style={[textsStyle.title, colorsStyle.light, styles.text]}>9. Governing Law and Jurisdiction</Text>
                <Text style={[textsStyle.text, colorsStyle.light, styles.text]}>These Terms will be governed by and construed in accordance with the laws of the jurisdiction in which Espeen is registered. Any disputes arising out of or related to these Terms will be resolved exclusively in the courts of that jurisdiction.</Text>
            </View>

            <View style={styles.textContainer}>
                <Text style={[textsStyle.title, colorsStyle.light, styles.text]}>10. Contact Us</Text>
                <Text style={[textsStyle.text, colorsStyle.light, styles.text]}>For questions or concerns regarding these Terms, please contact us at support@espeen.com.</Text>
            </View>

            <View style={styles.textContainer}>
                <Text style={[textsStyle.text, colorsStyle.light, styles.text]}>By using Espeen, you acknowledge that you have read, understood, and agree to these Terms of Service.</Text>
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
        paddingTop: 50,
        paddingBottom: 50,
    },
    textContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        width: '100%',
        padding: 50,
        gap: 20,
    },
    text: {
        textAlign: 'center',
    },
    italic: {
        fontStyle: 'italic',
    }
});


export default TermsOfServiceScreen;

