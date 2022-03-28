import React from 'react';
import {Text, Image, View, ImageBackground} from 'react-native';
import {customDrawerStyle} from './custom-drawer.style';
import IcnDrawerHeader from '../../../shared/assets/icn-drawer-header/icn-drawer-header.jpg';
import IcnProfileImage from '../../../shared/assets/icn-user-profile/icn-user-profile.png';
import {useTranslation} from 'react-i18next';

export const CustomDrawer = () =>
{
    const {t} = useTranslation();

    return(
        <View style={customDrawerStyle.container}>
            <ImageBackground style={customDrawerStyle.headerContainer} source={IcnDrawerHeader}>
                <Image style={customDrawerStyle.profileImage} source={IcnProfileImage} />
                <Text style={customDrawerStyle.emailText}>{t('DRAWER.EMAIL')}</Text>
            </ImageBackground>

            <View>

                <Text style={customDrawerStyle.selectedText}>{t('DRAWER.TODO')}</Text>
                <View style={customDrawerStyle.separator} />
                <Text style={customDrawerStyle.notSelectedText}>{t('DRAWER.SETTINGS')} </Text>
                <Text style={customDrawerStyle.notSelectedText}>{t('DRAWER.LOGOUT')} </Text>

            </View>
        </View>
    );
}