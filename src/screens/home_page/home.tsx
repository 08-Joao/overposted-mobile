import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { colors } from '../../assets/themes';
import CustomButton from '../../shared/customButton';

function Home() {
    const [activeColors, setActiveColors] = useState(colors.light);
    return (
        <View style={styles(activeColors).Background}>
            <CustomButton buttonText="Clique Aqui" />
        </View>
    );
}
const styles = (activeColors: { background: string }) =>
    StyleSheet.create({
        Background: {
            width: '100%',
            height: '100%',
            backgroundColor: activeColors.background, 
        },
        switchThemeButton: {
            width: 20, 
            borderRadius: 10,
        }
    });

export default Home;
