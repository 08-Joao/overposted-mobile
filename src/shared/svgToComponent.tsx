import * as React from 'react';
import { Alert } from 'react-native';
import Svg, { G, Path } from 'react-native-svg';

interface SvgComponentProps {
  path: React.FC<any>;  // Use React.FC<any> para aceitar o componente SVG importado
  color?: string;       // Cor opcional para o SVG
  size?: number;        // Tamanho opcional para o SVG
}

const SvgComponent: React.FC<SvgComponentProps> = ({ path: PathComponent, color = '#FFFFFF', size = 20 }) => {
  if (!PathComponent || typeof PathComponent !== 'function') {  // Verifica se é uma função/componente
    console.error("SvgComponent: PathComponent is not a valid React component.");
    return null;
  }

  Alert(path)

  return (
    <Svg width={size} height={size} fill={color}>
      <G>
        <PathComponent />
      </G>
    </Svg>
  );
};

export default SvgComponent;
