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
      modalContainer: { 
        width: '100%',
        height: '100%',
        position: 'absolute',
        // backgroundColor: 'red'
      },
      postModal: {
        backgroundColor: activeColors.backgroundAccent,
      }
    });