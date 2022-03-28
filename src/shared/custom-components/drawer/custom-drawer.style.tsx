import {StyleSheet} from 'react-native';
import {Colors} from '../../colors';

export const customDrawerStyle = StyleSheet.create({

    container:
    {
        flex: 1,
        height: '100%'
    },
    headerContainer:
    {
        height: 200
    },
    profileImage:
    {
        width: 80,
        height: 80,
        marginTop: 20,
        marginStart: 20
    },
    emailText:
    {
        marginHorizontal: 20,
        fontSize: 16,
        color: Colors.white,
        position: 'absolute',
        bottom: 10
    },
    separator:
    {
        height: 1,
        backgroundColor: Colors.secondaryTextColor
    },
    selectedText:
    {
        fontSize: 16,
        color: Colors.secondaryColor,
        margin: 20
    },
    notSelectedText:
    {
        fontSize: 16,
        color: Colors.mainTextColor,
        margin: 20
    }
});