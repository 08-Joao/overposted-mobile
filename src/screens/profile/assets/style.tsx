import { StyleSheet } from 'react-native';

export const createStyles = (activeColors: {
  text: string;
  background: string;
  backgroundAccent: string;
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
    settingsItem: { 
      width: '100%',
      backgroundColor: activeColors.background,
      flexDirection: 'row',
      height: 50,
      paddingLeft: 20,
      alignItems: 'center',
    },
    generalText: {
      color: activeColors.text,
    },
  });
