import {useNavigation} from '@react-navigation/native';
//import IcnHamburger from '@shared/assets/icons/icn_hamburger.svg';
import React, {FC} from 'react';
import {Text, TouchableOpacity, View, Image} from 'react-native';
import {customHeaderStyles} from './custom-header.style';
import IcnDelete from '../../assets/icn-delete/icn-delete.png'
import IcnBack from '../../assets/icn-back-black/icn-back-black.png'
import IcnDrawer from '../../assets/icn-drawer/icn-drawer.png'



interface CustomHeaderProps
{
    label?: string;
    onDrawerClick?: any;
    onDeleteClick?: any;
    showBack?: boolean;
    showDelete?: boolean;
}

export const CustomHeader: FC<CustomHeaderProps> = ({
    label,
    onDrawerClick,
    onDeleteClick,
    showBack,
    showDelete
}) =>
{
    const navigation = useNavigation();

    return (
        <>
            <View style={customHeaderStyles.container}>

                <TouchableOpacity style={customHeaderStyles.backContainer} onPress={showBack ? navigation.goBack : onDrawerClick}>
                    {showBack ? <Image source={IcnBack} /> : <Image source={IcnDrawer} />}
                </TouchableOpacity>

                <Text style={customHeaderStyles.label}>{label}</Text>

                {
                    showDelete && <TouchableOpacity style={customHeaderStyles.deleteContainer} onPress={onDeleteClick}>
                        <Image source={IcnDelete} />
                    </TouchableOpacity>
                }

            </View>
        </>
    );
};
