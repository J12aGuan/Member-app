import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import PasswordResetScreen from '../screens/PasswordResetScreen';
import AccountSettingScreen from '../screens/AccountSettingScreen';
import EditProfileScreen from '../screens/EditProfileScreen';
import AdminCodeScreen from '../screens/AdminCodeScreen';

const Stack = createNativeStackNavigator();

const AccountNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: true,
      headerTransparent: true,
      headerTintColor: 'white',
      headerTitleAlign: 'center',
    }}
  >
    <Stack.Screen name="Account" component={AccountSettingScreen} />
    <Stack.Screen name="Password Reset" component={PasswordResetScreen} />
    <Stack.Screen name="Edit Profile" component={EditProfileScreen} />
    <Stack.Screen name="Become an Admin" component={AdminCodeScreen} />
  </Stack.Navigator>
);

export default AccountNavigator;
