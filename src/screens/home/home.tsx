import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../assets/themes';
import CustomButton from '../../shared/customButton';
import Hotbar from '../../components/hotbar/Hotbar';

import { useTheme } from '../../assets/ThemeContext';


function Home({navigation}:any) {
    const { activeColors, toggleTheme } = useTheme(); // Consumo do contexto

    return (
        <View style={styles(activeColors).Background}>
            <ScrollView>
                <CustomButton buttonText="Clique Aqui" customStyle={styles(activeColors).switchThemeButton} onPressAction={toggleTheme} />   
            </ScrollView>
            <Hotbar activeColors={activeColors} />
        </View>
    );
}

const styles = (activeColors: { text: string, background: string, primary: string, secondary: string, accent: string }) =>
    StyleSheet.create({
        Background: {
            width: '100%',
            height: '100%',
            backgroundColor: activeColors.background, 
        },
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
