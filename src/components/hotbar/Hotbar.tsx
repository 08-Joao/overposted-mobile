import React, { useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import FeHome from '../../assets/featherIcons/FeHome';
import FeSearch from '../../assets/featherIcons/FeSearch';
import FePlusCircle from '../../assets/featherIcons/FePlusCircle';
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
  };
}

const icons = [
  { Component: FeHome, page: 'Home', size: 30 },
  { Component: FeSearch, page: 'Search', size: 30 },
  { Component: FePlusCircle, size: 40 },  // Sem 'page' definido
  { Component: FeChat, page: 'Chats', size: 30 },
  { Component: FeUser, page: 'Profile', size: 30 },
];

const Hotbar = ({ activeColors }: NavbarProps) => {
  const navigation = useNavigation();

  const handleButtonPress = (page?: string) => {
    if (page) {
      navigation.navigate(page);
    } else {
      console.log('Nenhuma página definida para navegar.');
    }
  };

  const styles = useMemo(() => createStyles(activeColors), [activeColors]);

  const renderIconButtons = () =>
    icons.map(({ Component, size, page }, index) => (
      <CustomButton
        key={index}
        svgComponent={
          <Component
            width={size}
            height={size}
            stroke={styles.Icon.color}
            style={styles.Icon}
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
      borderTopWidth: 1,
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
    Icon: {
      color: activeColors.text,
    },
  });

export default Hotbar;
