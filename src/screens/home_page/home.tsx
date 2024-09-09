import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../assets/themes';
import CustomButton from '../../shared/customButton';
import Hotbar from '../../components/hotbar/Hotbar';


function Home() {
    const [activeColors, setActiveColors] = useState(colors.light);

    const changeTheme = () => {
        setActiveColors((prevColors) => 
            prevColors === colors.light ? colors.dark : colors.light
        );
    };

    return (
        <View style={styles(activeColors).Background}>
            <ScrollView>
            <CustomButton buttonText="Clique Aqui" customStyle={styles(activeColors).switchThemeButton} onPressAction={changeTheme} />
            <Text style={[styles(activeColors).generalText]}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae et rerum ut quos dicta, pariatur, laborum tempora voluptatibus suscipit tenetur totam voluptas aperiam alias nisi perferendis adipisci magnam ea laboriosam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae et rerum ut quos dicta, pariatur, laborum tempora voluptatibus suscipit tenetur totam voluptas aperiam alias nisi perferendis adipisci magnam ea laboriosam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae et rerum ut quos dicta, pariatur, laborum tempora voluptatibus suscipit tenetur totam voluptas aperiam alias nisi perferendis adipisci magnam ea laboriosam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae et rerum ut quos dicta, pariatur, laborum tempora voluptatibus suscipit tenetur totam voluptas aperiam alias nisi perferendis adipisci magnam ea laboriosam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae et rerum ut quos dicta, pariatur, laborum tempora voluptatibus suscipit tenetur totam voluptas aperiam alias nisi perferendis adipisci magnam ea laboriosam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae et rerum ut quos dicta, pariatur, laborum tempora voluptatibus suscipit tenetur totam voluptas aperiam alias nisi perferendis adipisci magnam ea laboriosam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae et rerum ut quos dicta, pariatur, laborum tempora voluptatibus suscipit tenetur totam voluptas aperiam alias nisi perferendis adipisci magnam ea laboriosam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae et rerum ut quos dicta, pariatur, laborum tempora voluptatibus suscipit tenetur totam voluptas aperiam alias nisi perferendis adipisci magnam ea laboriosam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae et rerum ut quos dicta, pariatur, laborum tempora voluptatibus suscipit tenetur totam voluptas aperiam alias nisi perferendis adipisci magnam ea laboriosam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae et rerum ut quos dicta, pariatur, laborum tempora voluptatibus suscipit tenetur totam voluptas aperiam alias nisi perferendis adipisci magnam ea laboriosam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae et rerum ut quos dicta, pariatur, laborum tempora voluptatibus suscipit tenetur totam voluptas aperiam alias nisi perferendis adipisci magnam ea laboriosam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae et rerum ut quos dicta, pariatur, laborum tempora voluptatibus suscipit tenetur totam voluptas aperiam alias nisi perferendis adipisci magnam ea laboriosam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae et rerum ut quos dicta, pariatur, laborum tempora voluptatibus suscipit tenetur totam voluptas aperiam alias nisi perferendis adipisci magnam ea laboriosam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae et rerum ut quos dicta, pariatur, laborum tempora voluptatibus suscipit tenetur totam voluptas aperiam alias nisi perferendis adipisci magnam ea laboriosam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae et rerum ut quos dicta, pariatur, laborum tempora voluptatibus suscipit tenetur totam voluptas aperiam alias nisi perferendis adipisci magnam ea laboriosam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae et rerum ut quos dicta, pariatur, laborum tempora voluptatibus suscipit tenetur totam voluptas aperiam alias nisi perferendis adipisci magnam ea laboriosam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae et rerum ut quos dicta, pariatur, laborum tempora voluptatibus suscipit tenetur totam voluptas aperiam alias nisi perferendis adipisci magnam ea laboriosam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae et rerum ut quos dicta, pariatur, laborum tempora voluptatibus suscipit tenetur totam voluptas aperiam alias nisi perferendis adipisci magnam ea laboriosam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae et rerum ut quos dicta, pariatur, laborum tempora voluptatibus suscipit tenetur totam voluptas aperiam alias nisi perferendis adipisci magnam ea laboriosam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae et rerum ut quos dicta, pariatur, laborum tempora voluptatibus suscipit tenetur totam voluptas aperiam alias nisi perferendis adipisci magnam ea laboriosamLorem ipsum dolor sit amet consectetur adipisicing elit. Quae et rerum ut quos dicta, pariatur, laborum tempora voluptatibus suscipit tenetur totam voluptas aperiam alias nisi perferendis adipisci magnam ea laboriosam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae et rerum ut quos dicta, pariatur, laborum tempora voluptatibus suscipit tenetur totam voluptas aperiam alias nisi perferendis adipisci magnam ea laboriosam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae et rerum ut quos dicta, pariatur, laborum tempora voluptatibus suscipit tenetur totam voluptas aperiam alias nisi perferendis adipisci magnam ea laboriosam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae et rerum ut quos dicta, pariatur, laborum tempora voluptatibus suscipit tenetur totam voluptas aperiam alias nisi perferendis adipisci magnam ea laboriosam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae et rerum ut quos dicta, pariatur, laborum tempora voluptatibus suscipit tenetur totam voluptas aperiam alias nisi perferendis adipisci magnam ea laboriosam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae et rerum ut quos dicta, pariatur, laborum tempora voluptatibus suscipit tenetur totam voluptas aperiam alias nisi perferendis adipisci magnam ea laboriosam..</Text>
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
