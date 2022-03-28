import React, {useEffect, useState} from 'react';

import {useTranslation} from 'react-i18next';
import {taskDetailStyles} from './task-detail.style';
import {Text, TextInput, View, TouchableOpacity, Alert} from 'react-native';
import {CustomHeader} from '../../shared/custom-components/header/custom-header';
import {NavigationRouteContext, useRoute} from '@react-navigation/native';
import {Checkbox} from 'react-native-paper';
import {Colors} from '../../shared/colors';
import {FAB} from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import {format} from "date-fns";
import {UIDateFormat, UIHourFormat} from '../../shared/utils';
import {addNewTask, deleteTask, getTaskByID, Task, updateTask} from '../../shared/database';
import {useNavigation} from '@react-navigation/native';


export const TaskDetail = () =>
{
    const route = useRoute();
    const {t} = useTranslation();
    const navigation = useNavigation();

    const {itemId} = route.params ?? {undefined};
    const [localData, setLocalData] = useState<Task>();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState(new Date());
    const [hour, setHour] = useState(new Date());
    const [isDone, setIsDone] = useState();
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [showHourPicker, setShowHourPicker] = useState(false);

    const openDatePicker = () =>
    {
        setShowDatePicker(true);
    };

    const setPickerDate = (selectedDate) =>
    {
        setDate(new Date(selectedDate));
        setShowDatePicker(false);
    };

    const openTimePicker = () =>
    {
        setShowHourPicker(true);
    };

    const setPickerHour = (selectedHour) =>
    {
        setHour(new Date(selectedHour));
        setShowHourPicker(false);
    };

    const addTask = () =>
    {
        const taskData : Task =
        {
            title: title,
            description: description,
            date: date.toLocaleDateString(),
            hour: hour.toLocaleDateString(),
            isDone: false
        }
        addNewTask(taskData).then(() =>
        {
            navigation.goBack();

        }).catch(() =>
        {
            console.log("Error Adding Task")
        });
    };

    const updateExistingTask = () =>
    {
        const taskData : Task =
        {
            id: itemId,
            title: title,
            description: description,
            date: date.toLocaleDateString(),
            hour: hour.toLocaleDateString(),
            isDone: isDone
        }
        updateTask(taskData).then(() =>
        {
            navigation.goBack();

        }).catch(() =>
        {
            console.log("Error updating Task")
        });
    };

    const deleteExistingTask = () =>
    {
        deleteTask(itemId).then(() =>
        {
            navigation.goBack();
        }).catch(() =>
        {
            console.log("Error deleting Task")
        });
    }

    const showAlert = () =>
    {
        Alert.alert(
           t('TASK_DETAIL.DELETE_DIALOG_TITLE'),
           t('TASK_DETAIL.DELETE_DIALOG_DESCRIPTION'),
            [
                {
                    text: t('TASK_DETAIL.YES'),
                    onPress: () => deleteExistingTask(),
                    style: "default",
                },
                {
                    text: t('TASK_DETAIL.NO'),
                    style: "cancel",
                }
            ],
            {
                cancelable: false,
            }
        );
    };

    useEffect(() =>
    {
        if(itemId != undefined)
        {
            setLocalData(getTaskByID(itemId)[0]);
        }
    }, []);

    useEffect(() =>
    {
        if(localData)
        {
            setTitle(localData?.title);
            setDescription(localData?.description);
            setDate(new Date(localData?.date));
            setHour(new Date(localData?.hour));
            setIsDone(localData?.isDone);
        }
    }, [localData]);

    return (
        <>
            <View style={taskDetailStyles.mainContainer}>

                <CustomHeader label={itemId != undefined ? t('TASK_DETAIL.EDIT_TITLE') : t('TASK_DETAIL.ADD_TITLE')} showDelete={itemId != undefined} showBack onDeleteClick={showAlert} />

                <View style={taskDetailStyles.contentContainer}>
                    <Text style={taskDetailStyles.inputHeader}>{t('TASK_DETAIL.TITLE')}</Text>
                    <TextInput
                        style={[taskDetailStyles.input, {fontSize: 30}]}
                        onChangeText={setTitle}
                        value={title}
                        multiline
                    />

                    <Text style={taskDetailStyles.inputHeader}>{t('TASK_DETAIL.DESCRIPTION')}</Text>
                    <TextInput
                        style={[taskDetailStyles.input, {fontSize: 16}]}
                        onChangeText={setDescription}
                        value={description}
                        multiline
                        numberOfLines={2}
                     />

                    <Text style={taskDetailStyles.inputHeader}>{t('TASK_DETAIL.DATE_HOUR')}</Text>
                    <View style={taskDetailStyles.dateContainer}>

                        <TouchableOpacity onPress={openDatePicker} style={taskDetailStyles.dateTouchable} >
                                <Text style={taskDetailStyles.dateText}>{format(date, UIDateFormat)}</Text>
                                <Text>&#9660;</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={openTimePicker} style={taskDetailStyles.hourTouchable}>
                            <Text style={taskDetailStyles.dateText}>{format(hour, UIHourFormat)}</Text>
                            <Text>&#9660;</Text>
                        </TouchableOpacity>

                    </View>

                    {itemId != undefined && <View style={taskDetailStyles.checkboxContainer}>

                        <Checkbox.Android
                            status={isDone ? 'checked' : 'unchecked'}
                            onPress={() => setIsDone(!isDone)}
                            color={Colors.secondaryColor}
                        />

                        <Text style={taskDetailStyles.dateText}>{t('TASK_DETAIL.FINISHED')}</Text>
                    </View>}
                </View>

                <FAB
					style={taskDetailStyles.fab}
					icon="check"
					onPress={() => itemId != undefined ? updateExistingTask() : addTask()}
                    color={Colors.white}
				/>

                {showDatePicker &&
                    <DateTimePicker
                        minimumDate={new Date()}
                        value={date}
                        mode={'date'}
                        is24Hour
                        display={'calendar'}
                        onChange={(event, date) => setPickerDate(date)}
                    />
                }


                {showHourPicker &&
                    <DateTimePicker
                        minimumDate={new Date()}
                        value={hour}
                        mode={'time'}
                        is24Hour={false}
                        display={'clock'}
                        onChange={(event, date) => setPickerHour(date)}
                    />
                }
            </View>
        </>
  );
};