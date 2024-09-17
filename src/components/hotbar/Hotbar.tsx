import React, {useMemo, useRef, useState} from 'react';
import {StyleSheet, View, Text, Dimensions} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import CustomButton from '../../shared/customButton';
import {useTheme} from '../../assets/ThemeContext';
import {createStyles} from './assets/style'; // Importação do estilo

import SbHome from '../../assets/solarBrokenIcons/SbHome';
import SbSearch from '../../assets/solarBrokenIcons/SbSearch';
import SbCreatePost from '../../assets/solarBrokenIcons/SbCreatePost';
import SbAlignLeft from '../../assets/solarBrokenIcons/SbAlignLeft';
import SbUser from '../../assets/solarBrokenIcons/SbUser';

import SbdHome from '../../assets/solarBoldIcons/SbdHome';
import SbdSearch from '../../assets/solarBoldIcons/SbdSearch';
import SbdAlignLeft from '../../assets/solarBoldIcons/SbdAlignLeft';
import SbdUser from '../../assets/solarBoldIcons/SbdUser';

// Função que retorna os ícones com base no estado (enabled ou não)
const icons = (enabled: boolean) => [
  {
    Component: enabled ? SbdHome : SbHome,
    page: 'Home',
    size: 30,
    defaultStroke: true,
  },
  {
    Component: enabled ? SbdSearch : SbSearch,
    page: 'Search',
    size: 30,
    defaultStroke: false,
  },
  {Component: SbCreatePost, size: 35, page: 'CreatePost', defaultStroke: false},
  {
    Component: enabled ? SbdAlignLeft : SbAlignLeft,
    page: 'Forum',
    size: 30,
    defaultStroke: false,
  },
  {
    Component: enabled ? SbdUser : SbUser,
    page: 'Profile',
    size: 30,
    defaultStroke: false,
  },
];

const Hotbar = ({handleOpenPost}: {handleOpenPost?: () => void}) => {
  const {activeColors} = useTheme();
  const navigation = useNavigation();
  const route = useRoute();
  const styles = useMemo(() => createStyles(activeColors), [activeColors]);

  const handleButtonPress = (page?: string) => {
    if (page) {
      if (page === 'CreatePost') {
        route.name === 'Home' && handleOpenPost ? handleOpenPost() :  navigation.navigate('Home');
      } else {
        navigation.navigate(page);
      }
    } else {
      console.log('Nenhuma página definida para navegar.');
    }
  };

  const renderIconButtons = () =>
    icons(false).map(({Component, size, page, defaultStroke}, index) => {
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
              stroke={
                isActive
                  ? defaultStroke
                    ? activeColors.background
                    : styles.ActiveIcon.color
                  : styles.DisabledIcon.color
              }
              style={isActive ? styles.ActiveIcon : styles.DisabledIcon}
            />
          }
          customStyle={[
            styles.IconContainer,
            Component === SbCreatePost ? styles.CreatePost : null,
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

export default Hotbar;
