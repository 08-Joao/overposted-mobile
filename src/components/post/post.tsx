import React, {useMemo, useState, useEffect} from 'react';
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


function Post(postInformation: PostProps): JSX.Element {
  const {activeColors, toggleTheme} = useTheme();

  const getUserInformation = () => {
    return {
      userName: 'UserName',
      userImage: 'UserImage',
      userIdentification: '@User',
    }
  }

  // Use state to manage the like status
  const [userLiked, setUserLiked] = useState(postInformation.userLiked);

  useEffect(() => {
    setUserLiked(postInformation.userLiked);
  }, [postInformation.userLiked]);

  const handleLike = () => { 
    setUserLiked((prevLiked) => !prevLiked); // Toggle like state
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
      <Text style={styles.postText}>
        {postInformation.postDescription}
      </Text>
      <View style={styles.postButtons}>
        <CustomButton 
            onPressAction={handleLike} // Attach the like handler
            svgComponent={
              userLiked ? (
                <SbdHeart 
                  height={23}
                  width={23}
                  fill={activeColors.accent}
                  stroke={activeColors.accent}
                />
              ) : (
                <SbHeart 
                  height={23}
                  width={23}
                  fill={activeColors.text}
                  stroke={activeColors.text}
                />
              )
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
              height={23}
              width={23}
              stroke={activeColors.text}
              />
            }            
          />
      </View>
    </View>
  );
}

export default Post;
