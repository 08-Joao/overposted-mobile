import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ViewStyle, StyleProp, Image, ImageStyle } from 'react-native';

interface CustomButtonProps {
  buttonText?: React.ReactNode;  
  customStyle?: StyleProp<ViewStyle>;
  directionIconText?: string;
  image?: any;  // Alterado para aceitar tanto string (URL) quanto require
  onPressAction?: () => void;
  svgComponent?: JSX.Element;
  imageStyle?: ImageStyle;
}

function CustomButton({ buttonText, customStyle, directionIconText, image, onPressAction, svgComponent, imageStyle }: CustomButtonProps): JSX.Element {
  return (
    <TouchableOpacity style={customStyle} onPress={onPressAction}>
      <View>

        {image ? (
          <Image style={imageStyle ? imageStyle : null}  source={typeof image === 'string' ? {uri: image} : image} />
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
