import React from 'react';
import {Text, Image, View} from 'react-native';
import {noDataPlaceholderStyle} from './no-data-placeholder.style';

interface NoDataPlaceholderProps
{
    text: string;
    subText: string;
    image: string;
};

export const NoDataPlaceholder = ({text, subText, image}: NoDataPlaceholderProps) =>
(
    <View style={noDataPlaceholderStyle.container}>
        <Image style={{width: 150, height: 150}} source={image} />
        <Text style={noDataPlaceholderStyle.text}>{text}</Text>
        <Text style={noDataPlaceholderStyle.subText}>{subText}</Text>
    </View>
);