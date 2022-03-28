import {StyleSheet} from 'react-native';
import {Colors} from '../../shared/colors';

export const homeStyles = StyleSheet.create({
    mainContainer:
    {
        flex: 1,
        backgroundColor: Colors.white
    },
    flatList:
    {
        flex: 1,
        marginTop: 60
    },
    fab:
    {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
        backgroundColor: Colors.secondaryColor
    }
});