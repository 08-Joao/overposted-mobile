import React, {useEffect, useMemo, useRef, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  Modal,
  Button,
} from 'react-native';
import CustomButton from '../../shared/customButton';
import Hotbar from '../../components/hotbar/Hotbar';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useTheme} from '../../assets/ThemeContext';
import {globalStyles} from '../../assets/globalStyles';
import {FormatNumbers} from '../../shared/formatNumbers';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SbPlusUser from '../../assets/solarBrokenIcons/SbPlusUser';
import SbHamburguer from '../../assets/solarBrokenIcons/SbHamburguer';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';

import SbdChat from '../../assets/solarBoldIcons/SbdChat';

function ModalScreen({navigation}: any) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 30}}>This is a modal!</Text>
      <Button onPress={() => navigation.goBack()} title="Dismiss" />
    </View>
  );
}

function Profile() {
  const navigation = useNavigation();

  const {activeColors, toggleTheme} = useTheme();
  const styles = useMemo(() => createStyles(activeColors), [activeColors]);
  const [userName, setUserName] = useState('UserName');
  const [userIdentification, setUserIdentification] = useState('@User');

  const settingsBttmSheetRef = useRef(null);
  const snapPoints = useMemo(() => ['50%', '50%'], []);

  const [followersNumber, setFollowersNumber] = useState(
    FormatNumbers(65165100),
  );
  const [followingNumber, setFollowingNumber] = useState(FormatNumbers(213));


  const [userDescription, setuserDescription] = useState('');

  const teste = () => {
    console.log('teste');
  };

  const handleFollowRequest = () => {
    console.log('Follow Request');
  };



  const handleConfig = (status: boolean) => {
    console.log('Configuration');
    
  };

  const handleOpenSettings = () => {
    settingsBttmSheetRef.current?.expand()
  }

  const handleCloseSettings = () => {
    settingsBttmSheetRef.current?.close();
  }



  const handleConversation = () => {
    console.log('Conversation');
  };

  const RootStack = createNativeStackNavigator();

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
            <Text style={styles.profileName}>{userName}</Text>
            <Text style={[styles.profileName, styles.profileIdentification]}>
              {userIdentification}
            </Text>
          </View>
        </View>
        <View style={styles.followersContainer}>
          <CustomButton
            customStyle={styles.followerCount}
            buttonText={
              <Text style={styles.followTextDisabled}>
                <Text style={styles.generalText}>{followersNumber} </Text>
                followers
              </Text>
            }
            onPressAction={teste}
          />
          <CustomButton
            customStyle={styles.followerCount}
            buttonText={
              <Text style={styles.followTextDisabled}>
                <Text style={styles.generalText}>{followingNumber} </Text>
                following
              </Text>
            }
            onPressAction={teste}
          />
          <CustomButton
            svgComponent={
              <SbPlusUser
                width={20}
                height={20}
                stroke={styles.profileCustomButton.color}
              />
            }
            customStyle={[styles.profileCustomButton, styles.startFollow]}
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
            onPressAction={handleOpenSettings}
          />
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={[styles.Description, styles.generalText]}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita
            saepe quam officia quas animi veritatis natus praesentium
            accusantium, deserunt dolores a placeat, autem corrupti quidem eum
            facilis in fugiat tempore. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. adipisicing elit. adipisicing elit.
          </Text>
          <View style={styles.chatButton}>
            <CustomButton
              svgComponent={
                <SbdChat
                  width={30}
                  height={30}
                  fill={styles.generalText.color}
                  stroke={globalStyles(activeColors).Background.backgroundColor}
                />
              }
              customStyle={[styles.profileCustomButton]}
              onPressAction={handleConversation}
            />
          </View>
        </View>
      </View>

      <ScrollView style={styles.profileScrollable}></ScrollView>
      <BottomSheet
        ref={settingsBttmSheetRef}
        snapPoints={snapPoints} 
        index={0}
        backgroundStyle={globalStyles(activeColors).BackgroundAccent} 
        enablePanDownToClose={true}
        animateOnMount={true}
        >
        <View style={styles.settingsContainer}> {/* Construa as settings dentro dessa View */}
          
        </View>
      </BottomSheet>

      <Hotbar />
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
      marginLeft: 5,
    },
    profilePictureContainer: {
      width: 100,
      height: 100,
      borderRadius: 75,
      backgroundColor: activeColors.background,
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 2,
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
      marginLeft: 15,
      marginTop: 0,
      fontSize: 15.5,
      opacity: 0.5,
    },
    followersContainer: {
      width: '78%',
      marginLeft: 'auto',
      flexDirection: 'row',
      marginTop: 25,
      zIndex: 5,
      alignItems: 'center',
      justifyContent: 'center',
      gap: 1,
    },
    followerCount: {
      flex: 2,
    },
    followerButton: {
      flex: 1,
    },
    settingsButton: {
      flex: 1,
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
      marginRight: 5,
    },
    startFollow: {
      backgroundColor: activeColors.primary,
      borderRadius: 50,
    },
    descriptionContainer: {
      flexDirection: 'row',
    },
    Description: {
      height: 100,
      paddingLeft: 10,
      flex: 3,
      marginTop: 10,
      fontSize: 12,
    },
    chatButton: {
      flex: 1,
      paddingBottom: 10,
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
    },
    settingsModal: {
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    settingsContainer:  {

    },
    generalText: {
      color: activeColors.text,
    },
  });

export default Profile;