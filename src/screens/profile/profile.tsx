import React from 'react';
import { StyleSheet, View, Text, ScrollView, Image } from 'react-native';
import CustomButton from '../../shared/customButton';
import Hotbar from '../../components/hotbar/Hotbar';
import { useTheme } from '../../assets/ThemeContext';

function Profile({ navigation }: any) {
  const { activeColors, toggleTheme } = useTheme(); 

  return (
    <View style={styles(activeColors).Background}>
      <View style={styles(activeColors).profileContainer}>
        <Image source={require('./assets/defaultBannerImage.png')} style={styles(activeColors).bannerImage} />
      </View>
      <ScrollView style={styles(activeColors).profileScrollable}>
        {/* Conteúdo do ScrollView */}
      </ScrollView>
      <Hotbar activeColors={activeColors} />
    </View>
  );
}

const styles = (activeColors: { text: string, background: string, primary: string, secondary: string, accent: string }) => StyleSheet.create({
  Background: {
    width: '100%',
    height: '100%',
    backgroundColor: activeColors.background, 
  },
  profileContainer: {
    // estilos adicionais
  },
  profileScrollable: {
    // estilos adicionais
  },
  generalText: {
    color: activeColors.text,
  },
  bannerImage: {
    width: '100%', 
    height: 120,   
    resizeMode: 'cover',  // Ou 'contain', conforme necessário
  },
});

export default Profile;
