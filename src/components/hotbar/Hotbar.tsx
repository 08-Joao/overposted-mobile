import React, { useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import CustomButton from '../../shared/customButton';

import SbHome from '../../assets/solarBrokenIcons/SbHome';
import SbSearch from '../../assets/solarBrokenIcons/SbSearch';
import SbCreatePost from '../../assets/solarBrokenIcons/SbCreatePost';
import SbAlignLeft from '../../assets/solarBrokenIcons/SbAlignLeft';
import SbUser from '../../assets/solarBrokenIcons/SbUser';

import SbdHome from '../../assets/solarBoldIcons/SbdHome';
import SbdSearch from '../../assets/solarBoldIcons/SbdSearch';
import SbdAlignLeft from '../../assets/solarBoldIcons/SbdAlignLeft';
import SbdUser from '../../assets/solarBoldIcons/SbdUser';

interface NavbarProps {
  activeColors: {
    text: string;
    background: string;
    backgroundAccent: string;
    primary: string;
    secondary: string;
    accent: string;
    disabledIcon: string;
  };
}

// Função que retorna os ícones com base no estado (enabled ou não)
const icons = (enabled: boolean) => [
  { Component: enabled ? SbdHome : SbHome, page: 'Home', size: 30 },
  { Component: enabled ? SbdSearch : SbSearch, page: 'Search', size: 30 },
  { Component: SbCreatePost, size: 35 },  
  { Component: enabled ? SbdAlignLeft : SbAlignLeft, page: 'Forum', size: 30 },
  { Component: enabled ? SbdUser : SbUser, page: 'Profile', size: 30 },
];

const Hotbar = ({ activeColors }: NavbarProps) => {
  const navigation = useNavigation();
  const route = useRoute();  // Obtenha a rota atual

  // Memoize styles to prevent unnecessary recalculations
  const styles = useMemo(() => createStyles(activeColors), [activeColors]);

  const handleButtonPress = (page?: string) => {
    if (page) {
      navigation.navigate(page);
    } else {
      console.log('Nenhuma página definida para navegar.');
    }
  };

  const renderIconButtons = () =>
    icons(false).map(({ Component, size, page }, index) => {
      const isActive = page === route.name; 
      const ActiveComponent = icons(isActive)[index].Component; 

      return (
        <CustomButton 
          key={index}
          svgComponent={
            <ActiveComponent
              width={size}
              height={size}
              fill={isActive ? styles.ActiveIcon.color : 'none'}
              stroke={isActive ? styles.ActiveIcon.color : styles.DisabledIcon.color}
              style={isActive ? styles.ActiveIcon : styles.DisabledIcon}
            />
          }
          customStyle={[
            styles.IconContainer, 
            Component === SbCreatePost ? styles.CreatePost : null
          ]}
          onPressAction={() => handleButtonPress(page)}
        />
      );
    });

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
  backgroundAccent: string;
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
      borderTopWidth: 0.5,
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
    CreatePost: { 
      borderRightColor: activeColors.backgroundAccent,
      borderRightWidth: 3,
      borderLeftColor: activeColors.backgroundAccent,
      borderLeftWidth: 3
    },
    ActiveIcon: {
      color: activeColors.accent,
    },
    DisabledIcon: {
      color: activeColors.disabledIcon,
    },
  });

export default Hotbar;
