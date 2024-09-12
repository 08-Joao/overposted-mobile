import React from 'react'
import { StyleSheet, View, Text, ScrollView} from 'react-native'
import CustomButton from '../../shared/customButton';
import Hotbar from '../../components/hotbar/Hotbar';
import { useTheme } from '../../assets/ThemeContext';
import { globalStyles } from '../../assets/globalStyles';


function Search({navigation}:any) {
  const { activeColors, toggleTheme } = useTheme(); 

  return (
    <View style={globalStyles(activeColors).Background}>
        <ScrollView>
            <Text style={[styles(activeColors).generalText]}>
              Tela de Search
            </Text>
        </ScrollView>
      <Hotbar />
    </View>
  )
}

const styles = (activeColors: { text: string, background: string, primary: string, secondary: string, accent: string }) => StyleSheet.create({
  switchThemeButton: {
    width: 50, 
    backgroundColor: activeColors.primary,
    borderRadius: 10,
  },
  generalText: {
    color: activeColors.text,
  }
})

export default Search