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
        padding: 10,
        borderBottomColor: activeColors.backgroundAccent,
        borderBottomWidth: 1,
    }
});
