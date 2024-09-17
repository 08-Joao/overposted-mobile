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
    titleArea: { 
        flexDirection: 'row',
        width: '100%',
        padding: 16,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    titleText: {
        color: activeColors.text,
        fontSize: 16,
        fontWeight: 'bold',
    },

});
