import React from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, ViewStyle, StyleProp } from 'react-native';
import { colors } from '../assets/themes';

interface CustomButtonProps {
  buttonText?: string;
  customStyle?: StyleProp<ViewStyle>;
  onPressAction?: () => void;
  svgComponent?: JSX.Element;
}

// Corrigindo o componente para receber props
function CustomButton({ buttonText, customStyle, onPressAction, svgComponent }: CustomButtonProps): JSX.Element {
  return (
    <TouchableOpacity style={customStyle} onPress={onPressAction}>
      <View>
        {svgComponent ? (
          svgComponent 
        ) : (
          <Text>{buttonText}</Text>
        )}
      </View>
    </TouchableOpacity>
  );
}

export default CustomButton;
