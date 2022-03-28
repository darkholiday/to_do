import React, {useState, useRef, useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {homeStyles} from './home.style';
import {FlatList, View, Text} from 'react-native';
import {CustomHeader} from '../../shared/custom-components/header/custom-header';
import {TaskItem} from './task-item/task-item';
import {FAB} from 'react-native-paper';
import {Colors} from '../../shared/colors';
import {useNavigation} from '@react-navigation/native';
import {ScreenNames} from '../../shared/screen-names';
import {NoDataPlaceholder} from '../../shared/custom-components/no-data-placeholder/no-data-placeholder';
import IcnNoTasks from '../../shared/assets/icn-no-tasks/icn-no-tasks.png'
import Drawer from 'react-native-drawer'
import {CustomDrawer} from '../../shared/custom-components/drawer/custom-drawer';
import {getAllTasks, Task} from '../../shared/database';
import {useIsFocused} from "@react-navigation/native";

export const Home = () =>
{
	const [isDrawerOpen, setDrawerOpen] = useState(false);
	let drawerRef = useRef<Drawer>();
	const [tasks, setTasks] = useState([]);
    const isFocused = useIsFocused();


    useEffect(() =>
    {
        setTasks(getAllTasks() ?? [])
    }, [isFocused]);

	const toggleDrawer = () =>
	{
		isDrawerOpen ? drawerRef.close() : drawerRef.open()
		setDrawerOpen(!isDrawerOpen);
	}

    const {t} = useTranslation();
    const navigation = useNavigation();


    const renderItem = ({item}) => <TaskItem data={item}/>

    return (
		<>
		    <Drawer
				ref={(ref) => drawerRef = ref}
				type="displace"
				content={<CustomDrawer />}
				acceptDoubleTap
				onOpen={() => setDrawerOpen(true)}
				onClose={() => setDrawerOpen(false)}
				captureGestures={false}
				panThreshold={0.08}
				openDrawerOffset={(viewport) => {return 50}}
				panOpenMask={0.2}
				negotiatePanW
        	>

				<View style={homeStyles.mainContainer}>
				<CustomHeader label={t('HOME.TITLE')} onDrawerClick={toggleDrawer}/>

				{tasks.length > 0 ? (
					<FlatList
						style={homeStyles.flatList}
						data={tasks}
						keyExtractor={(item, index) => `${item.id}-${index}`}
						renderItem={renderItem}
					/>
					) : (
						<NoDataPlaceholder text={t('HOME.NO_DATA_TITLE')} subText={t('HOME.NO_DATA_SUB')} image={IcnNoTasks} />
					)
					}

					<FAB
						style={homeStyles.fab}
						icon="plus"
						onPress={() => navigation.navigate(ScreenNames.TASK_DETAIL)}
						color={Colors.white}
					/>
				</View>

			</Drawer>
		</>
  );
};
