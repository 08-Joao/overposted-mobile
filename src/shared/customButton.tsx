import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ViewStyle, StyleProp } from 'react-native';

interface CustomButtonProps {
  buttonText?: React.ReactNode;  
  customStyle?: StyleProp<ViewStyle>;
  onPressAction?: () => void;
  svgComponent?: JSX.Element;
}

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
