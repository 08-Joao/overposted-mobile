import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ViewStyle, StyleProp } from 'react-native';

interface CustomButtonProps {
  buttonText?: React.ReactNode;  
  customStyle?: StyleProp<ViewStyle>;
  directionIconText?: string;
  onPressAction?: () => void;
  svgComponent?: JSX.Element;
}

function CustomButton({ buttonText, customStyle, directionIconText, onPressAction, svgComponent }: CustomButtonProps): JSX.Element {
  return (
    <TouchableOpacity style={customStyle} onPress={onPressAction}>
      <View>
        {svgComponent && buttonText == null ? (
          svgComponent
        ) : svgComponent ? (
          <View style={[directionIconText == 'row' ? {flexDirection: 'row'} :  {flexDirection: 'column'},{alignItems: 'center', justifyContent: 'center', gap: 10}]}>
            {svgComponent}
            <Text>{buttonText}</Text> 
          </View>
        ) : (
          <Text>{buttonText}</Text> 
        )}
      </View>
    </TouchableOpacity>
  );
}

export default CustomButton;
