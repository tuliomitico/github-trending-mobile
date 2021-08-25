import React from 'react';
import {
  createMaterialTopTabNavigator,
  MaterialTopTabScreenProps,
} from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Trending from '@pages/Trending';
import Favorites from '@pages/Favorites';
import TrendingDetail from '@pages/TrendingDetail';
import { RoutesContants } from './constants.routes';

export type RootTabParamList = {
  [RoutesContants.Trending]: undefined;
  [RoutesContants.Favorites]: undefined;
  [RoutesContants.TrendingDetail]: undefined;
};

export type MainScreenProps = MaterialTopTabScreenProps<RootTabParamList>;

const Stack = createStackNavigator();

const Tab = createMaterialTopTabNavigator<RootTabParamList>();

const TabNavigation: React.FC = () => {
  return (
    <>
      <Tab.Navigator initialRouteName={RoutesContants.Trending}>
        <Tab.Screen
          name={RoutesContants.Trending}
          component={Trending}
          options={{ title: 'Trending' }}
        />
        <Tab.Screen
          name={RoutesContants.Favorites}
          component={Favorites}
          options={{ title: 'Favoritos' }}
        />
      </Tab.Navigator>
    </>
  );
};

export default function MainNavigation(): JSX.Element {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name="Menu"
          component={TabNavigation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={RoutesContants.TrendingDetail}
          component={TrendingDetail}
          options={{
            title: 'Detalhe',
          }}
        />
      </Stack.Navigator>
    </>
  );
}
