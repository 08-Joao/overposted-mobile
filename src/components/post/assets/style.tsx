import {StyleSheet} from 'react-native';

export const createStyles = (activeColors: {
  text: string;
  background: string;
  backgroundAccent: string;
  primary: string;
  secondary: string;
  accent: string;
  disabledIcon: string;
}) => StyleSheet.create({
    Backgroud: {
        backgroundColor: activeColors.background,
        minHeight: 150,
        padding: 16,
        paddingTop: 24  ,
        borderBottomColor: activeColors.backgroundAccent,
        borderBottomWidth: 1,
        justifyContent: 'space-between', 
    },
    userInformation: {
        flexDirection: 'row',
    },
    userInfoText: { 
      fontSize: 15,
      fontWeight: 'bold',
      marginLeft: 10
    },
    userIdText: {
      fontSize: 13,
      opacity: 0.6,
      marginLeft: 12,
    },
    postButtons: {
      flexDirection: 'row',
      alignItems: 'flex-end',
      justifyContent: 'space-evenly',
    },
    postText: {
      color: activeColors.text,
      paddingBottom: 8,
      paddingTop: 8,
    },
    generalText: {
      color: activeColors.text,
    }
});
