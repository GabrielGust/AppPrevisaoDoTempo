import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from './pages/Home/home';
import Search from './pages/Search/search';

const Drawer = createDrawerNavigator();

function Routes(){
  return(
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} options={{ title: 'Meu clima' }} />
      <Drawer.Screen name="Search" component={Search} options={{ title: 'Procurar por cidade' }} />
    </Drawer.Navigator>
  )
}

export default Routes;