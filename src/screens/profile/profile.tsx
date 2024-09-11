import React, { useMemo, useState } from 'react';
import { StyleSheet, View, Text, ScrollView, Image } from 'react-native';
import CustomButton from '../../shared/customButton';
import Hotbar from '../../components/hotbar/Hotbar';
import { useTheme } from '../../assets/ThemeContext';
import { globalStyles } from '../../assets/globalStyles';
import { FormatNumbers } from '../../shared/formatNumbers';

import SbPlusUser from '../../assets/solarBrokenIcons/SbPlusUser';
import SbHamburguer from '../../assets/solarBrokenIcons/SbHamburguer';

function Profile({ navigation }: any) {
  const { activeColors, toggleTheme } = useTheme();
  const styles = useMemo(() => createStyles(activeColors), [activeColors]);
  const [followersNumber, setFollowersNumber] = useState(FormatNumbers(651651)); 
  const [followingNumber, setFollowingNumber] = useState(FormatNumbers(213));

  

  const teste = () => {
    console.log('teste');
  }

  const handleFollowRequest = () => {
    console.log("Follow Request")
  }

  const handleConfig = () => {
    console.log("Configuration")
  }

  return (
    <View style={globalStyles(activeColors).Background}>
      <Image
        source={require('./assets/defaultBannerImage.png')}
        style={styles.bannerImage}
      />
      <View style={styles.profileInfoContainer}>
        <View style={styles.profilePicNameContainer}>
          <View style={styles.profilePictureContainer}>
            <Image 
              source={require('./assets/defaultProfilePicture.png')}
              style={styles.profilePicture}
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.profileName}>
              UserName
            </Text>
            <Text style={[styles.profileName, styles.profileIdentification]}>
              @User
            </Text>
          </View>
        </View>
        <View style={styles.followersContainer}>
          <CustomButton customStyle={styles.followerCount} buttonText={<Text style={styles.followTextDisabled}><Text style={styles.generalText}>{followersNumber} </Text>followers</Text>} onPressAction={teste}/>
          <CustomButton customStyle={styles.followerCount} buttonText={<Text style={styles.followTextDisabled}><Text style={styles.generalText}>{followingNumber} </Text>following</Text>} onPressAction={teste}/>
          <CustomButton 
          svgComponent={
            <SbPlusUser
              width={20}
              height={20}              
              stroke={styles.profileCustomButton.color}
            />
          }
          customStyle={[styles.profileCustomButton,styles.startFollow]}
          onPressAction={handleFollowRequest}
        />
          <CustomButton 
          svgComponent={
            <SbHamburguer
              width={30}
              height={30}              
              stroke={styles.generalText.color}
            />
          }
          customStyle={[styles.profileCustomButton]}
          onPressAction={handleConfig}
        />
          
        </View>
      </View>

      <ScrollView style={styles.profileScrollable}>
        {/* Conteúdo do ScrollView */}
      </ScrollView>
      <Hotbar activeColors={activeColors} />
    </View>
  );
}

const createStyles = (activeColors: {
  text: string;
  background: string;
  primary: string;
  secondary: string;
  accent: string;
  disabledIcon: string;
}) =>
  StyleSheet.create({
    bannerImage: {
      width: '100%',
      height: 120,
      resizeMode: 'cover', 
    },
    profileInfoContainer: {
      borderBottomColor: activeColors.text,
      borderBottomWidth: 0.75,
    },
    profilePicNameContainer: { 
      position: 'absolute',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      transform: [{translateY: -50}],
      width: '100%',
      zIndex: 3,
      marginLeft: 5
    },
    profilePictureContainer: {
      width: 100,
      height: 100,
      borderRadius: 75,
      backgroundColor: activeColors.background,
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 2
    },
    profilePicture: { 
      height: '90%',
      width: '90%',
      borderRadius: 75,
    },
    profileScrollable: {
      // estilos adicionais
    },
    textContainer: {
      backgroundColor: activeColors.background,
      borderTopRightRadius: 15,
      paddingLeft: 10,
      paddingRight: 10,
      transform: [{translateX: -20}],
    },
    
    profileName: {
      color: activeColors.text,
      fontSize: 17.5,
      fontFamily: 'PoppinsRegular',
      marginLeft: 10,
      fontWeight: 'bold',
    },
    profileIdentification: {
      marginTop: 0,
      fontSize: 15.5,
      opacity: 0.5,
    },
    followersContainer: { 
      width: '78%',
      marginLeft: 'auto',
      flexDirection: 'row',
      marginTop: 25,
      zIndex:5,
      alignItems: 'center',
      justifyContent: 'center',
      gap: 1
    },
    followerCount: { 
      flex: 2
    },
    followerButton: { 
      flex: 1
    },
    settingsButton: { 
      flex: 1
    },
    followTextDisabled: {
      color: activeColors.disabledIcon,
      fontWeight: '500',
    },
    profileCustomButton: {
      alignItems: 'center',
      justifyContent: 'center',
      width: 40,
      height: 40,
      color: '#ffffff',
      marginLeft: 5,
      marginRight: 5
    },
    startFollow: {
      backgroundColor: activeColors.primary,
      borderRadius: 50,
    },
    generalText: {
      color: activeColors.text,
    },
  });





export default Profile;
