import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../assets/themes';
import CustomButton from '../../shared/customButton';
import Hotbar from '../../components/hotbar/Hotbar';
import { globalStyles } from '../../assets/globalStyles';
import { useTheme } from '../../assets/ThemeContext';


function Home({navigation}:any) {
    const { activeColors, toggleTheme } = useTheme(); // Consumo do contexto

    return (
        <View style={globalStyles(activeColors).Background}>
            <ScrollView>
                
            </ScrollView>
            <Hotbar />
        </View>
    );
}

const styles = (activeColors: {
    text: string;
    background: string;
    backgroundAccent: string;
    primary: string;
    secondary: string;
    accent: string;
    disabledIcon: string;
  }) =>
    StyleSheet.create({
        switchThemeButton: {
            width: 50, 
            backgroundColor: activeColors.primary,
            borderRadius: 10,
        },
        generalText: {
            color: activeColors.text,
        }
    });

export default Home;
