import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Module, CulturalTip } from '../../types/moduleTypes';

const HomePage: React.FC = () => {
  const navigation = useNavigation(); // Use the useNavigation hook

  const modules: Module[] = [
    { name: 'Basic Essentials / moolbhut vishayak', icon: require('./assets/icons/essentials.png'), page: 'BasicEssentials' },
    { name: 'Transportation / parivahan', icon: require('./assets/icons/transport.png'), page: 'Transportation' },
    { name: 'Accommodation / ashray', icon: require('./assets/icons/accommodation.png'), page: 'Accommodation' },
    { name: 'Food & Dining / khaadya v pinyaache', icon: require('./assets/icons/food.png'), page: 'FoodDining' },
    { name: 'Shopping / kharidaari', icon: require('./assets/shopping.png'), page: 'Shopping' },
    { name: 'Sightseeing / darshan', icon: require('./assets/sightseeing.png'), page: 'Sightseeing' },
    { name: 'Health & Emergencies / aarogya aani aapatki', icon: require('./assets/icons/health.png'), page: 'HealthEmergencies' },
    { name: 'Socializing & Networking / saamaajik aani netvaarking', icon: require('./assets/icons/socializing.png'), page: 'SocializingNetworking' },
    { name: 'Work-Related Travel / kaam sambandhi pravas', icon: require('./assets/icons/work-related.png'), page: 'WorkRelatedTravel' },
    { name: 'Tech Support / teknikal samaarthan', icon: require('./assets/icons/technical-support.png'), page: 'TechSupport' },
  ];

  const culturalTips: CulturalTip[] = [
    { name: 'Dress Modestly at Religious and Cultural Sites / dharmik aani sanskrutik sthanant dhyanat aste', image: require('./assets/images/temple.png'), page: 'DressModestly' },
    { name: 'Respect Historical Monuments / itihasic smarakancha pratishtay', image: require('./assets/images/monuments.png'), page: 'RespectMonuments' },
    { name: 'Local Etiquette in Rural Areas / gaonancha prakarant sanskrutik', image: require('./assets/images/rural.jpg'), page: 'LocalEtiquette' },
    { name: 'Be Mindful of Fort Etiquette / kil燕aant manat aste', image: require('./assets/images/fort.jpg'), page: 'FortEtiquette' },
    { name: 'Street Food Precautions / rastaant khaadyancha upay', image: require('./assets/images/street.jpg'), page: 'StreetFoodPrecautions' },
    { name: 'Festivals and Crowd Awareness / utsav aani bhiit', image: require('./assets/images/festival.png'), page: 'FestivalsCrowdAwareness' },
    { name: 'Footwear Rules in Homes and Temples / gharancha mandoancha niyam', image: require('./assets/images/footwear.png'), page: 'FootwearRules' },
    { name: 'Be Prepared for Weather Variations / vaataavranant tyaay', image: require('./assets/images/weather.jpg'), page: 'WeatherVariations' },
    { name: 'Respect Local Wildlife and Nature / prakruti aani praani', image: require('./assets/images/wildlife.png'), page: 'RespectWildlifeNature' },
    { name: 'Enjoy the Culture but Avoid Stereotypes / sanskrutik manat aste', image: require('./assets/images/culture.jpg'), page: 'AvoidStereotypes' },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Modules Section */}
      <Text style={styles.sectionTitle}>Explore Modules / Vishayik Moolbhut</Text>
      <View style={styles.modulesContainer}>
        {modules.map((module) => (
          <TouchableOpacity
            key={index}
            style={styles.moduleButton}
            onPress={() => navigation.navigate(module.page)}
          >
            <Image source={module.icon} style={styles.moduleIcon} />
            <Text style={styles.moduleText}>{module.name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Cultural Tips Section */}
      <Text style={styles.sectionTitle}>Cultural Tips / Sanskrutik Upay</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tipsContainer}>
        {culturalTips.map((tip, index) => (
          <TouchableOpacity
            key={index}
            style={styles.tipCard}
            onPress={() => navigation.navigate(tip.page)}
          >
            <Image source={tip.image} style={styles.tipImage} />
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
    resizeMode: 'contain',
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
    width: '48%',
    marginHorizontal: 2, // Use points instead of percentage
    backgroundColor: '#fff',
    borderRadius: 15,
    overflow: 'hidden',
    elevation: 3,
    marginBottom: 15,
  },
  tipImage: {
    width: '100%',
    height: 120,
    resizeMode: 'cover',
  },
  tipText: {
    fontSize: 14,
    padding: 8,
    textAlign: 'center',
    color: '#333',
  },
});

export default HomePage;