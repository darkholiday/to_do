import {useNavigation} from '@react-navigation/native';
import React, {FC, useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {taskItemStyles} from './task-item.style';
import {Checkbox} from 'react-native-paper';
import {Colors} from '../../../shared/colors';
import {ScreenNames} from '../../../shared/screen-names';
import {UIListDateFormat} from '../../../shared/utils';
import {format} from "date-fns";
import {getTaskByID, Task, updateIsDone} from '../../../shared/database';


interface TaskItemProps
{
    data?: Task;
}

export const TaskItem: FC<TaskItemProps> = ({data}) =>
{
    const navigation = useNavigation();
    const [localData, setLocalData]=useState(data);


    const updateTaskStatus = () =>
    {
        updateIsDone(localData.id);
        setLocalData(getTaskByID(localData.id)[0]);
    };

    const openTaskDetail = () =>
    {
        navigation.navigate(ScreenNames.TASK_DETAIL, {itemId: localData.id});
    };

    return (
        <>
            <View style={taskItemStyles.container}>

                <Checkbox.Android
                    status={localData.isDone  ? 'checked' : 'unchecked'}
                    onPress={updateTaskStatus}
                    color={Colors.secondaryColor}
                />

                <TouchableOpacity style={taskItemStyles.textContainer} onPress={openTaskDetail}>
                    <Text style={taskItemStyles.mainText}>{localData.title}</Text>
                    <Text style={taskItemStyles.secondaryText}>{localData.description}</Text>
                    {<Text style={taskItemStyles.secondaryText}>{format(new Date(localData.date), UIListDateFormat)}</Text>}
                </TouchableOpacity>

            </View>
        </>
    );
};
