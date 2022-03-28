import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {PublicRoutes} from './src/routes/public.routes';

const App = () =>
{



    return (

        <NavigationContainer>

		<PublicRoutes />

      </NavigationContainer>


    )
}

export default App;