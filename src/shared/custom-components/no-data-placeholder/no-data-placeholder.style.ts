import {StyleSheet} from 'react-native';
import {Colors} from '../../colors';

export const noDataPlaceholderStyle = StyleSheet.create({

    container:
    {
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        marginTop: 200
    },
    text:
    {
        marginHorizontal: 10,
        marginTop: 30,
        fontSize: 24,
        textAlign: 'center',
        color: Colors.mainTextColor
    },
    subText:
    {
        marginHorizontal: 40,
        marginTop: 20,
        fontSize: 13,
        textAlign: 'center',
        color: Colors.secondaryTextColor
    }
});