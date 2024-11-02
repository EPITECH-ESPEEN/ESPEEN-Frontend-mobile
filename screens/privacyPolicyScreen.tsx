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
const PrivacyPolicyScreen: React.FC = () => {
    const { t } = useTranslation();

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.textContainer}>
                <Text style={[textsStyle.text, colorsStyle.light, styles.text, styles.italic]}>Last Updated: October 31, 2024</Text>
                <Text style={[textsStyle.huge, colorsStyle.light, styles.text]}>Privacy Policy</Text>
                <Text style={[textsStyle.title, colorsStyle.light, styles.text]}>Welcome to ESPEEN, your privacy is important to us.</Text>
                <Text style={[textsStyle.text, colorsStyle.light, styles.text]}>This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website. Please read this policy carefully to understand our views and practices regarding your personal data and how we will treat it. By accessing or using our website, you agree to the terms of this Privacy Policy.</Text>
            </View>

            <View style={styles.textContainer}>
                <Text style={[textsStyle.title, colorsStyle.light, styles.text]}>1. Information We Collect</Text>
                <Text style={[textsStyle.text, colorsStyle.light, styles.text]}>Personal Information: When you create an account, contact us, or subscribe to our services, we may collect information such as your name, email address, and other information necessary to fulfill our services.</Text>
                <Text style={[textsStyle.text, colorsStyle.light, styles.text]}>Automatically Collected Information: We may automatically collect information about your device, browsing actions, and usage patterns. This includes your IP address, browser type, access times, and pages visited.</Text>
                <Text style={[textsStyle.text, colorsStyle.light, styles.text]}>Cookies: Our website uses cookies to collect data about your browsing behavior. Cookies are small data files stored on your device and help us provide a more personalized experience.</Text>
            </View>

            <View style={styles.textContainer}>
                <Text style={[textsStyle.title, colorsStyle.light, styles.text]}>2. How We Use Your Information</Text>
                <Text style={[textsStyle.text, colorsStyle.light, styles.text]}>To operate, maintain, and improve our website.</Text>
                <Text style={[textsStyle.text, colorsStyle.light, styles.text]}>To process transactions and manage your account.</Text>
                <Text style={[textsStyle.text, colorsStyle.light, styles.text]}>To personalize user experience and deliver content and products you are most interested in.</Text>
                <Text style={[textsStyle.text, colorsStyle.light, styles.text]}>To communicate with you, including providing updates and promotional offers.</Text>
                <Text style={[textsStyle.text, colorsStyle.light, styles.text]}>To analyze trends and gather statistical information about user engagement.</Text>
            </View>

            <View style={styles.textContainer}>
                <Text style={[textsStyle.title, colorsStyle.light, styles.text]}>3. Disclosure of Your Information</Text>
                <Text style={[textsStyle.text, colorsStyle.light, styles.text]}>With Service Providers: We may share your data with third-party vendors who perform services on our behalf, such as payment processing, data analysis, email delivery, and customer service.</Text>
                <Text style={[textsStyle.text, colorsStyle.light, styles.text]}>For Legal Purposes: We may disclose your information if required to do so by law, in response to valid requests by public authorities, or to protect the rights, property, or safety of our users or others.</Text>
            </View>

            <View style={styles.textContainer}>
                <Text style={[textsStyle.title, colorsStyle.light, styles.text]}>4. Security of your Information</Text>
                <Text style={[textsStyle.text, colorsStyle.light, styles.text]}>We use administrative, technical, and physical safeguards to help protect your personal information. However, no security system is impenetrable. We cannot guarantee the security of our databases or the information you send us over the Internet. Any transmission of personal information is at your own risk.</Text>
            </View>

            <View style={styles.textContainer}>
                <Text style={[textsStyle.title, colorsStyle.light, styles.text]}>5. Your Rights and Choices</Text>
                <Text style={[textsStyle.text, colorsStyle.light, styles.text]}>Depending on your location, you may have certain rights regarding your personal information:</Text>
                <Text style={[textsStyle.text, colorsStyle.light, styles.text]}>Access: You may have the right to access the personal information we hold about you.</Text>
                <Text style={[textsStyle.text, colorsStyle.light, styles.text]}>Correction: You may request that we correct or update any incorrect information.</Text>
                <Text style={[textsStyle.text, colorsStyle.light, styles.text]}>Deletion: You may request the deletion of your personal information, subject to certain exceptions.</Text>
                <Text style={[textsStyle.text, colorsStyle.light, styles.text]}>To exercise these rights, please contact us using the contact details below.</Text>
            </View>

            <View style={styles.textContainer}>
                <Text style={[textsStyle.title, colorsStyle.light, styles.text]}>6. Data Retention</Text>
                <Text style={[textsStyle.text, colorsStyle.light, styles.text]}>We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.</Text>
            </View>

            <View style={styles.textContainer}>
                <Text style={[textsStyle.title, colorsStyle.light, styles.text]}>7. Third-Party Links</Text>
                <Text style={[textsStyle.text, colorsStyle.light, styles.text]}>Our website contains links to third-party websites. This Privacy Policy does not apply to these external sites, and we are not responsible for the practices of these sites. We encourage you to review the privacy policies of any third-party sites you visit.</Text>
            </View>

            <View style={styles.textContainer}>
                <Text style={[textsStyle.title, colorsStyle.light, styles.text]}>8. Children's Privacy</Text>
                <Text style={[textsStyle.text, colorsStyle.light, styles.text]}>Our website is not intended for children under the age of 13. We do not knowingly collect or solicit personal information from children under 13. If we learn that we have collected information from a child under 13, we will delete that information as quickly as possible.</Text>
            </View>

            <View style={styles.textContainer}>
                <Text style={[textsStyle.title, colorsStyle.light, styles.text]}>9. Changes to This Privacy Policy</Text>
                <Text style={[textsStyle.text, colorsStyle.light, styles.text]}>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the “Last Updated” date above. We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information.</Text>
            </View>

            <View style={styles.textContainer}>
                <Text style={[textsStyle.title, colorsStyle.light, styles.text]}>10. Contact Us</Text>
                <Text style={[textsStyle.text, colorsStyle.light, styles.text]}>If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:</Text>
                <Text style={[textsStyle.text, colorsStyle.light, styles.text]}>Espeen</Text>
                <Text style={[textsStyle.text, colorsStyle.light, styles.text]}>Immeuble les cimes, 131 Bd René Cassin, 06200 Nice</Text>
                <Text style={[textsStyle.text, colorsStyle.light, styles.text]}>Email: support@espeen.com</Text>
                <Text style={[textsStyle.text, colorsStyle.light, styles.text]}>Phone: 0422133266</Text>
                <Text style={[textsStyle.text, colorsStyle.light, styles.text]}>This Privacy Policy was created to help you understand how we handle your personal information. Thank you for trusting us with your data.</Text>
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


export default PrivacyPolicyScreen;

