import {Dimensions, StyleSheet} from 'react-native';
import {Colors} from '../../colors';

export const customHeaderStyles = StyleSheet.create({

    container:
    {
        position: 'absolute',
        top: 0,
        left: 0,
        paddingHorizontal: 24,
        width: '100%',
        flexDirection: 'row',
        alignSelf: 'center',
        backgroundColor: Colors.primaryColor,
        height: 50
    },
    label:
    {
        color: Colors.white,
        fontSize: 20,
        flex: 1,
        height: '100%',
        textAlignVertical: 'center',
        textAlign: 'center'
    },
    backContainer:
    {
        alignSelf: 'center'
    },
    deleteContainer:
    {
        alignSelf: 'center'
    }
});
