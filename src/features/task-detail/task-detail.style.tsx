import {StyleSheet} from 'react-native';
import {Colors} from '../../shared/colors';

export const taskDetailStyles = StyleSheet.create({
    mainContainer:
    {
        flex: 1,
    },
    contentContainer:
    {
        marginTop: 60,
        flexDirection: 'column',
        paddingHorizontal: 30
    },
    inputHeader:
    {
        color: Colors.inputTitle,
        fontSize: 13,
        marginTop: 20
    },
    dateContainer:
    {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    input:
    {
        borderBottomWidth: 1,
        padding: 10,
    },
    dateTouchable:
    {
        borderBottomWidth: 1,
        flex: 2,
        marginEnd: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10
    },
    hourTouchable:
    {
        borderBottomWidth: 1,
        flex: 1,
        marginEnd: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10
    },
    dateText:
    {
        fontSize: 16,
        color: Colors.mainTextColor
    },
    checkboxContainer:
    {
        flexDirection: 'row',
        marginTop: 20,
        alignItems: 'center'
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