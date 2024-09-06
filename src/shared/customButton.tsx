import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

// Definindo a interface para as propriedades do componente
interface CustomButtonProps {
  buttonText: string;
}

// Corrigindo o componente para receber props
function CustomButton({ buttonText }: CustomButtonProps) {
  return (
    <TouchableOpacity>
      <View>
        <Text>{buttonText}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default CustomButton;
