import React from 'react'
import { StyleSheet, View, Text, ScrollView } from 'react-native'
import CustomButton from '../../shared/customButton';
import Hotbar from '../../components/hotbar/Hotbar';
import { useTheme } from '../../assets/ThemeContext';


function Profile({navigation}:any) {
  const { activeColors, toggleTheme } = useTheme(); // Consumo do contexto

  return (
    <View style={styles(activeColors).Background}>
    <ScrollView>
        <CustomButton buttonText="Clique Aqui" customStyle={styles(activeColors).switchThemeButton} onPressAction={toggleTheme} />   
    </ScrollView>
    <Hotbar activeColors={activeColors} />
</View>
  )
}

const styles = (activeColors: { text: string, background: string, primary: string, secondary: string, accent: string }) => StyleSheet.create({
  Background: {
    width: '100%',
    height: '100%',
    backgroundColor: activeColors.background, 
  },
  switchThemeButton: {
  width: 50, 
  backgroundColor: activeColors.primary,
  borderRadius: 10,
  }
})

export default Profile