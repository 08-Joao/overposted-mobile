import React, {useMemo} from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    Image,
    Modal,
    Button,
  } from 'react-native';
import {createStyles} from './assets/style'; // Importação do estilo
import CustomButton from '../../shared/customButton';
import {globalStyles} from '../../assets/globalStyles';
import {useTheme} from '../../assets/ThemeContext';


interface PostProps { 
    postOwnership: string; // User Id
    postId: string; // Post Id
    postDescription?: string; // Text on Post
    postImage?: string[]; // At maximum of 5 images on Post
}

function post(): JSX.Element {
  const {activeColors, toggleTheme} = useTheme();

  const styles = useMemo(() => createStyles(activeColors), [activeColors]);
  return (
    <View style={styles.Backgroud}>
        <Text>
            <CustomButton 
                Width={60}
                Height={60}
                image={require('./assets/defaultProfilePicture.png')}
                customStyle={{borderRadius: 50}}
            />
        </Text>
    </View>
  );
}

export default post;
