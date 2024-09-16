import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ViewStyle, StyleProp, Image } from 'react-native';

interface CustomButtonProps {
  buttonText?: React.ReactNode;  
  customStyle?: StyleProp<ViewStyle>;
  directionIconText?: string;
  image: any;  // Alterado para aceitar tanto string (URL) quanto require
  onPressAction?: () => void;
  svgComponent?: JSX.Element;
  Width?: number;
  Height?: number;
}

function CustomButton({ buttonText, customStyle, directionIconText, image, onPressAction, svgComponent, Width, Height }: CustomButtonProps): JSX.Element {
  return (
    <TouchableOpacity style={customStyle} onPress={onPressAction}>
      <View>

        {image ? (
          <Image style={{ width: Width, height: Height }}  source={typeof image === 'string' ? {uri: image} : image} />
        ) : svgComponent && buttonText == null ? (
          svgComponent
        ) : svgComponent ? (
          <View style={[directionIconText == 'row' ? {flexDirection: 'row'} : {flexDirection: 'column'}, {alignItems: 'center', justifyContent: 'center', gap: 10}]}>
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
