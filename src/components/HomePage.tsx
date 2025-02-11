import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

type Module = {
    name: string;
    page: string;
};

type CulturalTip = {
    name: string;
    page: string;
};

const HomePage: React.FC = () => {
    const navigation = useNavigation();

    const modules: Module[] = [
        { name: 'Accommodation', page: 'AccommodationPage' },
        { name: 'Basic Essentials', page: 'BasicEssentialsPage' },
        { name: 'Transportation', page: 'TransportationPage' },
        { name: 'Food & Dining', page: 'FoodDiningPage' },
        { name: 'Health & Emergencies', page: 'HealthEmergenciesPage' },
        { name: 'Shopping', page: 'ShoppingPage' },
        { name: 'Sightseeing', page: 'SightseeingPage' },
        { name: 'Socializing & Networking', page: 'SocializingNetworkingPage' },
        { name: 'Work-Related Travel', page: 'WorkRelatedTravelPage' },
        { name: 'Tech Support', page: 'TechSupportPage' },
    ];

    const culturalTips: CulturalTip[] = [
        { name: 'Dress Modestly at Religious and Cultural Sites', page: 'DressModestly' },
        { name: 'Respect Historical Monuments', page: 'RespectMonuments' },
        { name: 'Local Etiquette in Rural Areas', page: 'LocalEtiquette' },
        { name: 'Be Mindful of Fort Etiquette', page: 'FortEtiquette' },
        { name: 'Street Food Precautions', page: 'StreetFoodPrecautions' },
        { name: 'Festivals and Crowd Awareness', page: 'FestivalsCrowdAwareness' },
        { name: 'Footwear Rules in Homes and Temples', page: 'FootwearRules' },
        { name: 'Be Prepared for Weather Variations', page: 'WeatherVariations' },
        { name: 'Respect Local Wildlife and Nature', page: 'RespectWildlifeNature' },
        { name: 'Enjoy the Culture but Avoid Stereotypes', page: 'AvoidStereotypes' },
    ];

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.sectionTitle}>Modules</Text>
            <View style={styles.modulesContainer}>
                {modules.map((module, idx) => (
                    <TouchableOpacity
                        key={idx}
                        style={styles.moduleButton}
                        onPress={() => navigation.navigate(module.page)}
                    >
                        <View style={styles.moduleIcon} />
                        <Text style={styles.moduleText}>{module.name}</Text>
                    </TouchableOpacity>
                ))}
            </View>
            <Text style={styles.sectionTitle}>Cultural Tips</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tipsContainer}>
                {culturalTips.map((tip, idx) => (
                    <TouchableOpacity
                        key={idx}
                        style={styles.tipCard}
                        onPress={() => navigation.navigate(tip.page)}
                    >
                        <View style={styles.tipImage} />
                        <Text style={styles.tipText}>{tip.name}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 15,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 15,
        color: '#333',
        textAlign: 'center',
    },
    modulesContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
    },
    moduleButton: {
        width: '48%',
        backgroundColor: '#f9f9f9',
        borderRadius: 15,
        padding: 20,
        alignItems: 'center',
        marginBottom: 20,
        elevation: 5,
    },
    moduleIcon: {
        width: 60,
        height: 60,
        marginBottom: 10,
        backgroundColor: '#ddd',
        borderRadius: 30,
    },
    moduleText: {
        fontSize: 16,
        textAlign: 'center',
        color: '#333',
        fontWeight: '600',
    },
    tipsContainer: {
        marginTop: 20,
    },
    tipCard: {
        width: 200,
        marginRight: 15,
        backgroundColor: '#fff',
        borderRadius: 15,
        overflow: 'hidden',
        elevation: 3,
        marginBottom: 15,
    },
    tipImage: {
        width: '100%',
        height: 120,
        backgroundColor: '#ddd',
    },
    tipText: {
        fontSize: 14,
        padding: 8,
        textAlign: 'center',
        color: '#333',
    },
});

export default HomePage;