import { StyleSheet } from 'react-native';

export const globalStyles = (activeColors: {
  text: string;
  background: string;
  backgroundAccent: string;
  primary: string;
  secondary: string;
  accent: string;
  disabledIcon: string;
}) =>
  StyleSheet.create({
    Background: {
      width: '100%',
      height: '100%',
      backgroundColor: activeColors.background, 
    }
  });