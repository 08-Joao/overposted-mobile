import React, { useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import FeHome from '../../assets/featherIcons/FeHome';
import FeSearch from '../../assets/featherIcons/FeSearch';
import FeCreatePost from '../../assets/featherIcons/FeCreatePost';
import FeChat from '../../assets/featherIcons/FeChat';
import FeUser from '../../assets/featherIcons/FeUser';
import CustomButton from '../../shared/customButton';

interface NavbarProps {
  activeColors: {
    text: string;
    background: string;
    primary: string;
    secondary: string;
    accent: string;
    disabledIcon: string;
  };
}

const icons = [
  { Component: FeHome, page: 'Home', size: 30, solid: true },
  { Component: FeSearch, page: 'Search', size: 30, solid: false },
  { Component: FeCreatePost, size: 35, solid: false},  
  { Component: FeChat, page: 'Chats', size: 30, solid: true },
  { Component: FeUser, page: 'Profile', size: 30, solid: true },
];

const Hotbar = ({ activeColors }: NavbarProps) => {
  const navigation = useNavigation();
  const route = useRoute();  // Obtenha a rota atual

  const handleButtonPress = (page?: string) => {
    if (page) {
      navigation.navigate(page);
    } else {
      console.log('Nenhuma página definida para navegar.');
    }
  };

  const styles = useMemo(() => createStyles(activeColors), [activeColors]);

  const renderIconButtons = () =>
    icons.map(({ Component, size, page, solid }, index) => (
      <CustomButton
        key={index}
        svgComponent={
          <Component
            width={size}
            height={size}
            stroke={page === route.name ? styles.ActiveIcon.color : styles.DisabledIcon.color}
            style={styles.ActiveIcon}
            fill={page === route.name && solid === true ? styles.ActiveIcon.color : 'none'}  // Comparação corrigida
          />
        }
        customStyle={styles.IconContainer}
        onPressAction={() => handleButtonPress(page)}
      />
    ));

  return (
    <View style={styles.Hotbar}>
      <View style={styles.backgroundView}></View>
      {renderIconButtons()}
    </View>
  );
};

const createStyles = (activeColors: {
  text: string;
  background: string;
  primary: string;
  secondary: string;
  accent: string;
  disabledIcon: string;
}) =>
  StyleSheet.create({
    Hotbar: {
      position: 'absolute',
      width: '100%',
      height: 65,
      gap: 10,
      justifyContent: 'center',
      alignItems: 'center',
      bottom: 0,
      flexDirection: 'row',
    },
    backgroundView: {
      width: '100%',
      height: '100%',
      position: 'absolute',
      opacity: 0.94,
      backgroundColor: activeColors.background,
      zIndex: 0,
      borderTopWidth: .5,
      borderBlockColor: activeColors.text,
    },
    IconContainer: {
      flex: 1,
      height: '90%',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 20,
      zIndex: 15,
    },
    ActiveIcon: {
      color: activeColors.text,
    },
    DisabledIcon: {
      color: activeColors.disabledIcon,
    },
  });

export default Hotbar;
