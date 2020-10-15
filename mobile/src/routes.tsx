import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import OrphanagesMap from './pages/OrphanagesMap';
import OrphanageDatails from './pages/OrphanageDatails';

export default function Routes() {
  return(
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false}}>
        <Screen name="OrphanagesMap" component={OrphanagesMap}/>
        <Screen name="OrphanageDatails" component={OrphanageDatails}/>
      </Navigator>
    </NavigationContainer>
  );
}