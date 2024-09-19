import React, { useMemo, useState } from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import { View, TextInput, Text } from 'react-native';
import { globalStyles } from '../../assets/globalStyles';
import { useTheme } from '../../assets/ThemeContext';
import { createStyles } from './assets/style';
import CustomButton from '../../shared/customButton';
import SbCamera from '../../assets/solarBrokenIcons/SbCamera';
import SbGallery from '../../assets/solarBrokenIcons/SbGallery';

interface postProps {
  ref: React.MutableRefObject<BottomSheet | null>;
  title: string;
  snapPoints: string[];
  handleClosePost: () => void;
}

const CreatePostModal = React.forwardRef<BottomSheet, postProps>(
  ({ title, snapPoints, handleClosePost }, ref) => {
    const { activeColors } = useTheme();
    const styles = useMemo(() => createStyles(activeColors), [activeColors]);
    const [postDescription, onPostDescriptionChange] = useState('');

    return (
      <BottomSheet
        ref={ref}
        snapPoints={snapPoints}
        index={-1}
        backgroundStyle={globalStyles(activeColors).BackgroundAccent}
        enablePanDownToClose={true}
        animateOnMount={true}
        onClose={handleClosePost}
        handleIndicatorStyle={styles.handleStyle}
        keyboardBehavior="interactive"  // Isso faz com que o teclado não empurre a hotbar
        keyboardBlurBehavior="restore"  // Isso garante que o modal restaure seu estado quando o teclado fechar
      >
        <View style={styles.Container}>
          <View style={styles.titleArea}>
            <CustomButton
              buttonText={<Text style={styles.titleText}>Overpost</Text>}
              onPressAction={handleClosePost}
            />
          </View>
          <TextInput
            placeholder="What I am thinking now..."
            style={styles.textInput}
            value={postDescription}
            onChangeText={onPostDescriptionChange}
            placeholderTextColor={activeColors.disabledIcon}
            multiline={true}
            maxLength={352}
          />
          <View style={styles.IconsContainer}>
            <CustomButton
              svgComponent={
                <SbCamera width={24} height={24} stroke={activeColors.text} />
              }
            />
            <CustomButton
              svgComponent={
                <SbGallery width={22} height={22} stroke={activeColors.text} />
              }
            />
          </View>
        </View>
      </BottomSheet>
    );
  }
);

CreatePostModal.displayName = 'CreatePostModal'; // Important for forwardRef

export default CreatePostModal;
