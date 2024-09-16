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
import {createStyles} from './assets/style'; // Importação do estilo
import CustomButton from '../../shared/customButton';
import Hotbar from '../../components/hotbar/Hotbar';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useTheme} from '../../assets/ThemeContext';
import {globalStyles} from '../../assets/globalStyles';
import {FormatNumbers} from '../../shared/formatNumbers';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import {colors} from '../../assets/themes';


import SbPlusUser from '../../assets/solarBrokenIcons/SbPlusUser';
import SbHamburguer from '../../assets/solarBrokenIcons/SbHamburguer';
import SbSun from '../../assets/solarBrokenIcons/SbSun';
import SbMoonStars from '../../assets/solarBrokenIcons/SbMoonStars';

import SbdChat from '../../assets/solarBoldIcons/SbdChat';

type Settings = { 
  theme: string;
}



function Profile() {
  const navigation = useNavigation();
  const {activeColors, toggleTheme} = useTheme();

  const styles = useMemo(() => createStyles(activeColors), [activeColors]);
  const settingsBttmSheetRef = useRef(null);
  const snapPoints = useMemo(() => ['50%', '50%'], []);

  const [userName, setUserName] = useState('UserName');
  const [userIdentification, setUserIdentification] = useState('@User');
  const [followersNumber, setFollowersNumber] = useState(
    FormatNumbers(65165100),
  );
  const [followingNumber, setFollowingNumber] = useState(FormatNumbers(213));
  const [userDescription, setuserDescription] = useState('');
  const [theme, setTheme] = useState('light');
  const [settings, setSettings] = useState<Settings>();

// FUNCTIONS



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
    settingsBttmSheetRef.current?.expand();
  };

  const handleCloseSettings = () => {
    settingsBttmSheetRef.current?.close();
  };

  const handleConversation = () => {
    console.log('Conversation');
  };
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
            adipisicing elit. adipisicing elit. adipisicing elit. 😀
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
        index={-1}
        backgroundStyle={globalStyles(activeColors).BackgroundAccent}
        enablePanDownToClose={true}
        animateOnMount={true}>
        <View style={styles.settingsContainer}>
          <CustomButton
            svgComponent={
              activeColors === colors.light ? (
                <SbMoonStars
                  width={30}
                  height={30}
                  FillColor={styles.generalText.color}
                />
              ) : (
                <SbSun
                  width={30}
                  height={30}
                  stroke={styles.generalText.color}
                />
              )
            }
            customStyle={[styles.settingsItem]}
            onPressAction={toggleTheme}
            buttonText={
              activeColors === colors.light ? (
                <Text style={styles.generalText}>
                  <Text style={styles.followTextDisabled}>Switch to </Text>
                  Dark Theme
                </Text>
              ) : (
                <Text style={styles.generalText}>
                  <Text style={styles.followTextDisabled}>Switch to </Text>
                  Light Theme
                </Text>
              )
            }
            directionIconText="row"
          />
        </View>
      </BottomSheet>

      <Hotbar />
    </View>
  );
}

export default Profile;
