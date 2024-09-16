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
import { PostProps  } from '../../shared/postProps';

import SbHeart from '../../assets/solarBrokenIcons/SbHeart';
import SbChat from '../../assets/solarBrokenIcons/SbChat';
import SbOverpost from '../../assets/solarBrokenIcons/SbOverpost';
import SbShare from '../../assets/solarBrokenIcons/SbShare';

import SbdHeart from '../../assets/solarBoldIcons/SbdHeart';


function post(postInformation: PostProps): JSX.Element {
  const {activeColors, toggleTheme} = useTheme();

  const getUserInformation = () => {
    // We Need To Get The User Name by passing postInformation.postOwnership that is a User Id
    return {
      userName: 'UserName',
      userImage: 'UserImage',
      userIdentification: '@User',
    }
  }

  const styles = useMemo(() => createStyles(activeColors), [activeColors]);
  return (
    <View style={styles.Backgroud}>
      <View style={styles.userInformation}>
        <CustomButton 
            imageStyle={{width: 50, height: 50,borderRadius: 50,}}
            image={require('./assets/defaultProfilePicture.png')}
            customStyle={{borderRadius: 50, borderColor: activeColors.accent, borderBottomWidth: 2,borderRightWidth: 1.5,borderLeftWidth: 1.5}}
        />
        <View>
          <Text style={[styles.generalText,styles.userInfoText]}>
            {getUserInformation().userName}
          </Text>
          <Text style={[styles.generalText,styles.userIdText]}>
            {getUserInformation().userIdentification}
          </Text>        
        </View>
        
      </View>
      <Text style={styles.generalText}>
        {postInformation.postDescription}
      </Text>
      <View style={styles.postButtons}>
        <CustomButton 
            svgComponent={
              postInformation.userLiked ?
               <SbdHeart 
              height={24}
              width={24}
              fill={activeColors.accent}
              stroke={activeColors.accent}
              /> 
              : 
              <SbHeart 
              height={23}
              width={23}
              fill={activeColors.text}
              stroke={activeColors.text}
              />
            }
            
          />
          <CustomButton 
            svgComponent={
              <SbChat 
              height={23}
              width={23}
              fill={activeColors.text}
              stroke={activeColors.text}
              />
            }            
          />
          <CustomButton 
            svgComponent={
              <SbOverpost 
              height={23}
              width={23}
              fill={activeColors.text}
              stroke={activeColors.text}
              />
            }            
          />
          <CustomButton 
            svgComponent={
              <SbShare 
              height={22}
              width={22}
              // fill={activeColors.text}
              stroke={activeColors.text}
              />
            }            
          />
      </View>
    </View>
  );
}

export default post;
