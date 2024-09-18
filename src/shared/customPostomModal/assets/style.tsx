import {StyleSheet} from 'react-native';

export const createStyles = (activeColors: {
  text: string;
  background: string;
  backgroundAccent: string;
  primary: string;
  secondary: string;
  accent: string;
  disabledIcon: string;
}) => StyleSheet.create({
    Container: { 
        height: '100%',
        padding: 16,
        gap: 16,
    },
    titleArea: { 
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    handleStyle: {
        backgroundColor: activeColors.text,
    },
    titleText: {
        color: activeColors.text,
        fontSize: 16,
        fontWeight: 'bold',
    },
    textInput: { 
        color: activeColors.text,
        fontSize: 13,
        fontWeight: '500',
        // backgroundColor: activeColors.background,
        textAlignVertical: 'top', // Alinhar o texto no topo do TextInput
    },
    IconsContainer: { 
        flexDirection: 'row',
        gap: 16,
        justifyContent: 'flex-end',
        alignItems: 'center'
    }
});
