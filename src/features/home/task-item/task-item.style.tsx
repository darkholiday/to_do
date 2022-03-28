import {StyleSheet} from 'react-native';
import {Colors} from '../../../shared/colors';

export const taskItemStyles = StyleSheet.create({

    container:
    {
        flexDirection: 'row',
        padding: 20,
        alignItems: 'center'
    },
    textContainer:
    {
        flexDirection: 'column',
        paddingStart: 20,
        justifyContent: 'space-evenly'
    },
    mainText:
    {
        color: Colors.mainTextColor,
        fontSize: 18,
        marginVertical: 5
    },
    secondaryText:
    {
        color: Colors.secondaryTextColor,
        fontSize: 12,
        marginVertical: 2
    }
});
