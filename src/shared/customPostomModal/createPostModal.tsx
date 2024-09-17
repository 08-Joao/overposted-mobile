import React, {useMemo} from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import {View, TextInput, Text} from 'react-native';
import {globalStyles} from '../../assets/globalStyles';
import {useTheme} from '../../assets/ThemeContext';
import {createStyles} from './assets/style';
import CustomButton from '../../shared/customButton';

interface postProps {
  ref: React.MutableRefObject<BottomSheet | null>;
  title: string;
  snapPoints: string[];
  handleClosePost: () => void;
}

const CreatePostModal = React.forwardRef<BottomSheet, postProps>(
  ({title, snapPoints, handleClosePost}, ref) => {
    const {activeColors} = useTheme();
    const styles = useMemo(() => createStyles(activeColors), [activeColors]);

    return (
      <BottomSheet
        ref={ref}
        snapPoints={snapPoints}
        index={-1}
        backgroundStyle={globalStyles(activeColors).BackgroundAccent}
        enablePanDownToClose={true}
        animateOnMount={true}
        onClose={handleClosePost}>
        <View>
          <View style={styles.titleArea}>            
            <Text style={styles.titleText}>{title}</Text>
            <CustomButton
              buttonText={<Text style={styles.titleText}>Close</Text>}
              onPressAction={handleClosePost}
            />
          </View>
          <TextInput />
        </View>
      </BottomSheet>
    );
  },
);

CreatePostModal.displayName = 'CreatePostModal'; // Important for forwardRef

export default CreatePostModal;
