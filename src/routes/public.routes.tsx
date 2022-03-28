import React, {ReactElement} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {TaskDetail} from '../features/task-detail/task-detail';
import {Home} from '../features/home/home';
import {ScreenNames} from '../shared/screen-names';

const AuthStack = createStackNavigator();

export const PublicRoutes = (): ReactElement => (

    <AuthStack.Navigator
        initialRouteName={ScreenNames.HOME}
        screenOptions=
        {{
            headerShown: false,
        }}
    >

        <AuthStack.Screen
            name={ScreenNames.HOME}
            component={Home}
            options=
            {{
                gestureEnabled: true
            }}
        />

        <AuthStack.Screen
            name={ScreenNames.TASK_DETAIL}
            component={TaskDetail}
            options=
            {{
                gestureEnabled: true
            }}
        />

    </AuthStack.Navigator>
);