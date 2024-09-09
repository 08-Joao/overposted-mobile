import React from 'react';
import { StyleSheet, View, Image, Button, Alert } from 'react-native';
import { SvgXml } from 'react-native-svg';
import FeHome from '../../assets/featherIcons/FeHome'
import FeSearch from '../../assets/featherIcons/FeSearch'
import FePlusCircle from '../../assets/featherIcons/FePlusCircle'
import FeChat from '../../assets/featherIcons/FeChat'
import FeUser from '../../assets/featherIcons/FeUser'



import CustomButton from '../../shared/customButton';


const bgImage = require('./assets/redBg.png');

interface NavbarProps {
  activeColors: {
    text: string;
    background: string;
    primary: string;
    secondary: string;
    accent: string;
  };
}

function Hotbar({ activeColors }: NavbarProps) {
  const teste = () => {
    console.log('askdnm')
  }


  return (
    <View style={styles(activeColors).Hotbar}>
      <Image source={bgImage} blurRadius={60} style={styles(activeColors).backgroundImage} />
      <CustomButton svgComponent={<FeHome width={30} height={30} stroke={styles(activeColors).Icon.color} style={styles(activeColors).Icon}/>} customStyle={styles(activeColors).IconContainer} onPressAction={teste} />
      <CustomButton svgComponent={<FeSearch width={30} height={30} stroke={styles(activeColors).Icon.color} style={styles(activeColors).Icon}/>} customStyle={styles(activeColors).IconContainer} onPressAction={teste} />
      <CustomButton svgComponent={<FePlusCircle width={40} height={40} stroke={styles(activeColors).Icon.color} style={styles(activeColors).Icon}/>} customStyle={styles(activeColors).IconContainer} onPressAction={teste} />
      <CustomButton svgComponent={<FeChat width={30} height={30} stroke={styles(activeColors).Icon.color} style={styles(activeColors).Icon}/>} customStyle={styles(activeColors).IconContainer} onPressAction={teste} />
      <CustomButton svgComponent={<FeUser width={30} height={30} stroke={styles(activeColors).Icon.color} style={styles(activeColors).Icon}/>} customStyle={styles(activeColors).IconContainer} onPressAction={teste} />
      
      

    </View>
  );
}

const styles = (activeColors: { text: string, background: string, primary: string, secondary: string, accent: string }) =>
  StyleSheet.create({
  Hotbar: { 
    position: 'absolute',
    width: '100%',
    height: 65,
    // height: '100%',
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 0,
    flexDirection: 'row',
  },
  backgroundImage: {
    position: 'absolute',
    opacity: 1,
    height: '100%',
    width: '150%',
    zIndex: 0,
  },
  IconContainer: { 
    flex: 1,
    backgroundColor: activeColors.primary,
    height: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    zIndex: 15,
  },
  IconContainer2: { 
    flex: 2,
    backgroundColor: activeColors.primary,
    height: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    zIndex: 15,
  },
  Icon: {
    color: 'white',
  },
});

export default Hotbar;
