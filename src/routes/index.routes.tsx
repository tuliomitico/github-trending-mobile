import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigation from './main.routes';

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );
};

export default Routes;
